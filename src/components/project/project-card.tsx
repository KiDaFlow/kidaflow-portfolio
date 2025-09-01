import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

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

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Card className={cn(
      "group overflow-hidden border border-border hover:border-primary/20 transition-all duration-medium hover:shadow-medium hover:-translate-y-1",
      className
    )}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-2 flex-1">
            <div className="flex items-center space-x-2">
              {project.featured && (
                <Badge className="bg-gradient-primary text-primary-foreground border-0 text-xs">
                  Featured
                </Badge>
              )}
              {project.video && (
                <div className="flex items-center space-x-1 text-muted-foreground">
                  <Play className="h-3 w-3" />
                  <span className="text-xs font-medium">{project.video.type}</span>
                </div>
              )}
            </div>
            <h3 className="font-heading font-semibold text-lg leading-tight text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.shortSummary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="text-xs font-medium bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {tag}
            </Badge>
          ))}
          {project.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{project.tags.length - 3}
            </Badge>
          )}
        </div>

        {/* Tools */}
        <div className="flex flex-wrap gap-1">
          {project.tools.slice(0, 3).map((tool) => (
            <Badge 
              key={tool} 
              className={cn(
                "text-xs font-medium border-0",
                toolColors[tool] || "bg-muted text-muted-foreground"
              )}
            >
              {tool}
            </Badge>
          ))}
          {project.tools.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{project.tools.length - 3}
            </Badge>
          )}
        </div>

        {/* Outcomes Preview */}
        {project.outcomes && project.outcomes.length > 0 && (
          <div className="pt-2 border-t border-border/50">
            <p className="text-xs text-muted-foreground mb-1">Key outcome:</p>
            <p className="text-sm font-medium text-foreground">
              {project.outcomes[0]}
            </p>
          </div>
        )}

        {/* Action */}
        <div className="flex items-center justify-between pt-2">
          <Link to={`/projects/${project.id}`}>
            <Button 
              size="sm" 
              className="group/btn bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            >
              View Project
              <ExternalLink className="h-3 w-3 ml-2 group-hover/btn:translate-x-0.5 transition-transform" />
            </Button>
          </Link>
          
          {project.video && (
            <a 
              href={project.video.fallbackUrl || project.video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Play className="h-4 w-4" />
              <span className="sr-only">Watch video</span>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}