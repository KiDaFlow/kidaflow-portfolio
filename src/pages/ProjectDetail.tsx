import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { VideoEmbed } from "@/components/video-embed";
import { ProjectCard } from "@/components/project/project-card";
import { 
  ArrowLeft, 
  Calendar, 
  Share2, 
  CheckCircle, 
  Quote,
  ExternalLink,
  MessageSquare
} from "lucide-react";
import { projects } from "@/data/projects";
import { toast } from "@/hooks/use-toast";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  // Find related projects (same tags, excluding current)
  const relatedProjects = projects
    .filter(p => p.id !== project.id && p.tags.some(tag => project.tags.includes(tag)))
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: project.title,
        text: project.shortSummary,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Project link has been copied to your clipboard",
      });
    }
  };

  const toolColors: Record<string, string> = {
    "Make": "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300",
    "n8n": "bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-300",
    "Zapier": "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300",
    "OpenAI": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300",
    "GoHighLevel": "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300",
    "Retell": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-300",
    "Cal.com": "bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-300",
    "Buffer": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/20 dark:text-cyan-300",
    "Airtable": "bg-teal-100 text-teal-800 dark:bg-teal-900/20 dark:text-teal-300",
    "Slack": "bg-violet-100 text-violet-800 dark:bg-violet-900/20 dark:text-violet-300",
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link to="/projects">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground group">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="space-y-6 mb-12">
          <div className="flex items-start justify-between">
            <div className="flex-1 space-y-4">
              <div className="flex items-center space-x-2">
                {project.featured && (
                  <Badge className="bg-gradient-primary text-primary-foreground border-0">
                    Featured Project
                  </Badge>
                )}
                {project.date && (
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.date}
                  </div>
                )}
              </div>
              
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
                {project.title}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {project.shortSummary}
              </p>
            </div>

            <Button variant="outline" size="sm" onClick={handleShare} className="ml-4">
              <Share2 className="h-4 w-4" />
              <span className="sr-only">Share project</span>
            </Button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary"
                className="bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Video */}
        {project.video && (
          <div className="mb-12">
            <VideoEmbed video={project.video} title={project.title} />
          </div>
        )}

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Description */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">Project Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none text-foreground">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Outcomes */}
            {project.outcomes && project.outcomes.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-xl flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                    Key Outcomes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Testimonial */}
            {project.testimonial && (
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Quote className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div className="space-y-3">
                      <blockquote className="text-lg font-medium text-foreground italic">
                        "{project.testimonial.quote}"
                      </blockquote>
                      {(project.testimonial.author || project.testimonial.roleOrCompany) && (
                        <div className="text-sm text-muted-foreground">
                          {project.testimonial.author && (
                            <span className="font-medium">{project.testimonial.author}</span>
                          )}
                          {project.testimonial.roleOrCompany && (
                            <span>
                              {project.testimonial.author ? ', ' : ''}
                              {project.testimonial.roleOrCompany}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tools Used */}
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-lg">Tools Used</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Badge 
                      key={tool}
                      className={`border-0 ${toolColors[tool] || "bg-muted text-muted-foreground"}`}
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project Inquiry CTA */}
            <Card className="border-primary/20 bg-gradient-surface">
              <CardContent className="pt-6 text-center space-y-4">
                <MessageSquare className="h-8 w-8 text-primary mx-auto" />
                <div className="space-y-2">
                  <h3 className="font-heading font-semibold text-foreground">
                    Similar Project?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Let's discuss how we can build something similar for your business
                  </p>
                </div>
                <Link to="/contact">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Start Discussion
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Quick Links */}
            {project.video && (
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-lg">Quick Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <a 
                      href={project.video.fallbackUrl || project.video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View on {project.video.type === "youtube" ? "YouTube" : "Loom"}
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                Related Projects
              </h2>
              <p className="text-muted-foreground">
                Explore similar automation solutions we've built
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject) => (
                <ProjectCard 
                  key={relatedProject.id} 
                  project={relatedProject}
                />
              ))}
            </div>

            <div className="text-center">
              <Link to="/projects">
                <Button variant="outline">
                  View All Projects
                  <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;