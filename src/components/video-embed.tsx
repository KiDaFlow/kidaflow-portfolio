import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";

interface VideoEmbedProps {
  video: {
    type: "loom" | "youtube";
    url: string;
    fallbackUrl?: string;
  };
  title: string;
}

export function VideoEmbed({ video, title }: VideoEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Convert video URLs to embeddable format
  const getEmbedUrl = (url: string, type: "loom" | "youtube") => {
    if (type === "youtube") {
      const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/)?.[1];
      return videoId ? `https://www.youtube.com/embed/${videoId}?si=ZtB1tFChTsqdXmoO` : null;
    } else if (type === "loom") {
      // Extract video ID from Loom URL, handling both with and without query parameters
      const videoId = url.match(/loom\.com\/share\/([^/?&\n\r]+)/)?.[1];
      if (videoId) {
        // Extract sid parameter if present for better embedding
        const sidMatch = url.match(/[?&]sid=([^&\n\r]+)/);
        const sid = sidMatch ? sidMatch[1] : '';
        return `https://www.loom.com/embed/${videoId}${sid ? `?sid=${sid}` : ''}`;
      }
      return null;
    }
    return null;
  };

  const embedUrl = getEmbedUrl(video.url, video.type);

  if (!embedUrl || hasError) {
    return (
      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-border">
        <div className="text-center space-y-4">
          <Play className="h-12 w-12 text-muted-foreground mx-auto" />
          <div className="space-y-2">
            <p className="text-muted-foreground">Video not available for embedding</p>
            <Button asChild variant="outline" size="sm">
              <a 
                href={video.fallbackUrl || video.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                Open in new tab
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="bg-muted rounded-lg overflow-hidden border border-border">
        {video.type === "loom" ? (
          // Use proper Loom embedding format
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="text-center space-y-2">
                  <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
                  <p className="text-sm text-muted-foreground">Loading video...</p>
                </div>
              </div>
            )}
            <iframe
              src={embedUrl}
              title={title}
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              onLoad={() => setIsLoaded(true)}
              onError={() => setHasError(true)}
              style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%',
                display: isLoaded ? 'block' : 'none'
              }}
            />
          </div>
        ) : (
          // YouTube embedding
          <div className="aspect-video">
            {!isLoaded && (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
                  <p className="text-sm text-muted-foreground">Loading video...</p>
                </div>
              </div>
            )}
            <iframe
              src={embedUrl}
              title={title}
              width="560"
              height="315"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
              onLoad={() => setIsLoaded(true)}
              onError={() => setHasError(true)}
              style={{ display: isLoaded ? 'block' : 'none' }}
            />
          </div>
        )}
      </div>

      {/* Fallback link */}
      <div className="flex justify-center">
        <Button asChild variant="outline" size="sm">
          <a 
            href={video.fallbackUrl || video.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            View on {video.type === "youtube" ? "YouTube" : "Loom"}
            <ExternalLink className="h-4 w-4 ml-2" />
          </a>
        </Button>
      </div>
    </div>
  );
}