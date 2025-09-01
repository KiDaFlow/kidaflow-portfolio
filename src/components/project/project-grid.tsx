import { useState, useMemo } from "react";
import { ProjectCard } from "./project-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X } from "lucide-react";
import type { Project } from "@/data/projects";
import { allTags, allTools } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectGridProps {
  projects: Project[];
  showFilters?: boolean;
  title?: string;
  description?: string;
}

export function ProjectGrid({ 
  projects, 
  showFilters = true, 
  title = "All Projects",
  description = "Explore our comprehensive portfolio of AI automation solutions"
}: ProjectGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [showAllFilters, setShowAllFilters] = useState(false);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = !searchQuery || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortSummary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.longDescription.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(tag => project.tags.includes(tag));

      const matchesTools = selectedTools.length === 0 || 
        selectedTools.some(tool => project.tools.includes(tool));

      return matchesSearch && matchesTags && matchesTools;
    });
  }, [projects, searchQuery, selectedTags, selectedTools]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const toggleTool = (tool: string) => {
    setSelectedTools(prev => 
      prev.includes(tool) 
        ? prev.filter(t => t !== tool)
        : [...prev, tool]
    );
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
    setSelectedTools([]);
  };

  const hasActiveFilters = searchQuery || selectedTags.length > 0 || selectedTools.length > 0;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="font-heading text-4xl font-bold text-foreground">
          {title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="space-y-6">
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-surface border-border focus:border-primary"
            />
          </div>

          {/* Filter toggles */}
          <div className="flex items-center justify-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowAllFilters(!showAllFilters)}
              className={cn(
                "transition-colors",
                showAllFilters && "bg-primary/10 text-primary border-primary/20"
              )}
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>

            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4 mr-2" />
                Clear all
              </Button>
            )}
          </div>

          {/* Filter chips */}
          {showAllFilters && (
            <div className="space-y-4 animate-fade-in">
              {/* Tags */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-foreground">Categories</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {allTags.map((tag) => (
                    <Badge
                      key={tag}
                      variant={selectedTags.includes(tag) ? "default" : "outline"}
                      className={cn(
                        "cursor-pointer transition-all duration-fast hover:scale-105",
                        selectedTags.includes(tag) 
                          ? "bg-primary text-primary-foreground" 
                          : "hover:bg-primary/10 hover:text-primary hover:border-primary/20"
                      )}
                      onClick={() => toggleTag(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-foreground">Tools</h3>
                <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
                  {allTools.map((tool) => (
                    <Badge
                      key={tool}
                      variant={selectedTools.includes(tool) ? "default" : "outline"}
                      className={cn(
                        "cursor-pointer transition-all duration-fast hover:scale-105",
                        selectedTools.includes(tool) 
                          ? "bg-accent text-accent-foreground" 
                          : "hover:bg-accent/10 hover:text-accent hover:border-accent/20"
                      )}
                      onClick={() => toggleTool(tool)}
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Results */}
      <div className="space-y-6">
        {/* Results count */}
        <div className="text-center">
          <p className="text-muted-foreground">
            {filteredProjects.length === projects.length 
              ? `${projects.length} ${projects.length === 1 ? 'project' : 'projects'}`
              : `${filteredProjects.length} of ${projects.length} projects`
            }
          </p>
        </div>

        {/* Project grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 space-y-4">
            <div className="text-6xl">🔍</div>
            <h3 className="font-heading text-xl font-semibold text-foreground">No projects found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
            <Button variant="outline" onClick={clearAllFilters}>
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}