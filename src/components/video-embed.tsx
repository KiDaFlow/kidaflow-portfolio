import { useEffect, useRef, useState } from "react";
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
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // Listen for YouTube embed errors (codes 101/150)
  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      try {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        if (data?.event === 'onError' || data?.info === 101 || data?.info === 150) {
          setHasError(true);
        }
      } catch {
        // ignore
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  // Convert YouTube URLs to full watch format
  const getFullYouTubeUrl = (url: string) => {
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/)?.[1];
    if (videoId) {
      return `https://www.youtube.com/watch?v=${videoId}`;
    }
    return url;
  };

  // Get YouTube thumbnail
  const getYouTubeThumbnail = (url: string) => {
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/)?.[1];
    if (videoId) {
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    }
    return null;
  };

  // Convert video URLs to embeddable format
  const getEmbedUrl = (url: string, type: "loom" | "youtube") => {
    if (type === "youtube") {
      // Respect provided embed URLs exactly (preserve query params)
      if (/youtube\.com\/embed\//.test(url)) {
        const sep = url.includes("?") ? "&" : "?";
        const origin = typeof window !== "undefined" ? encodeURIComponent(window.location.origin) : "";
        return `${url}${sep}enablejsapi=1${origin ? `&origin=${origin}` : ""}`;
      }
      // Handle various YouTube URL formats
      const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/)?.[1];
      if (videoId) {
        const origin = typeof window !== "undefined" ? encodeURIComponent(window.location.origin) : "";
        return `https://www.youtube.com/embed/${videoId}?enablejsapi=1${origin ? `&origin=${origin}` : ""}`;
      }
      return null;
    } else if (type === "loom") {
      // Extract video ID from Loom URL
      const videoId = url.match(/loom\.com\/share\/([^\/?&\n\r]+)/)?.[1];
      if (videoId) {
        // Extract sid parameter if present, otherwise use empty string
        const sidMatch = url.match(/[?&]sid=([^&\n\r]+)/);
        const sid = sidMatch ? sidMatch[1] : '';
        return `https://www.loom.com/embed/${videoId}${sid ? `?sid=${sid}` : ''}`;
      }
      return null;
    }
    return null;
  };

  const embedUrl = getEmbedUrl(video.url, video.type);
  const thumbnail = video.type === "youtube" ? getYouTubeThumbnail(video.url) : null;

  if (!embedUrl || hasError) {
    return (
      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-border overflow-hidden relative group">
        {thumbnail ? (
          <>
            <img 
              src={thumbnail} 
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="bg-white/10 backdrop-blur-md rounded-full p-6 inline-block">
                  <Play className="h-16 w-16 text-white" />
                </div>
                <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                  <a 
                    href={getFullYouTubeUrl(video.fallbackUrl || video.url)} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    Watch on YouTube
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </>
        ) : (
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
        )}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="bg-muted rounded-lg overflow-hidden border border-border">
        {video.type === "loom" ? (
          // Use exact Loom embedding structure as specified
          <div style={{ position: 'relative', paddingBottom: '46.09625668449198%', height: 0 }}>
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
              frameBorder="0"
              allowFullScreen
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
          // Use exact YouTube embedding structure as specified
          <div className="aspect-video relative">
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="text-center space-y-2">
                  <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
                  <p className="text-sm text-muted-foreground">Loading video...</p>
                </div>
              </div>
            )}
            <iframe
              width="560"
              height="315"
              src={embedUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              ref={iframeRef}
              id="yt-embed-player"
              onLoad={() => {
                setIsLoaded(true);
                try {
                  const win = iframeRef.current?.contentWindow;
                  if (win) {
                    win.postMessage(JSON.stringify({ event: 'listening', id: 'yt-embed-player' }), '*');
                    win.postMessage(JSON.stringify({ event: 'command', func: 'addEventListener', args: ['onError'], id: 'yt-embed-player' }), '*');
                  }
                } catch {}
              }}
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
        )}
      </div>

      {/* Fallback link */}
      <div className="flex justify-center">
        <Button asChild variant="outline" size="sm">
          <a 
            href={video.type === "youtube" ? getFullYouTubeUrl(video.fallbackUrl || video.url) : (video.fallbackUrl || video.url)} 
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