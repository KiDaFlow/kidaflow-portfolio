import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  phone?: string;
  projectType?: string;
  message: string;
  budget?: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Received form data:", formData);
    
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      throw new Error("RESEND_API_KEY is not configured");
    }
    
    console.log("RESEND_API_KEY is configured");

    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
      ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
      ${formData.projectType ? `<p><strong>Project Type:</strong> ${formData.projectType}</p>` : ''}
      ${formData.budget ? `<p><strong>Budget Range:</strong> ${formData.budget}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${formData.message.replace(/\n/g, '<br>')}</p>
    `;

    console.log("Sending email to Resend API...");
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "aspectrandy@gmail.com",
        to: ["kidaflowautomations@gmail.com"],
        subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
        html: emailHtml,
        reply_to: formData.email,
      }),
    });

    console.log("Resend API response status:", res.status);
    
    if (res.ok) {
      const data = await res.json();
      console.log("Email sent successfully:", data);
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    } else {
      const error = await res.text();
      console.error("Resend API error:", error);
      throw new Error(`Failed to send email: ${error}`);
    }
  } catch (error) {
    console.error("Error in send-contact-email function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});