import { Button } from "@/components/ui/button";
import { Share2, MessageSquare, ChevronRight, Star, MoreHorizontal } from "lucide-react";
import type { ReactNode } from "react";

export function Header({children}: {children?: ReactNode}) {
  return (
    <header className="flex items-center h-16 px-4 md:px-6 border-b shrink-0">
      <div className="flex items-center gap-2">
        {children}
        <div className="flex items-center text-sm font-medium">
          <span className="text-muted-foreground font-headline hover:text-foreground cursor-pointer">Workspace</span>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground hover:text-foreground cursor-pointer">Project Phoenix</span>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="text-foreground font-semibold">Q3 Roadmap</span>
        </div>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Star className="h-5 w-5" />
          <span className="sr-only">Favorite</span>
        </Button>
        <Button variant="ghost" size="icon">
          <Share2 className="h-5 w-5" />
          <span className="sr-only">Share</span>
        </Button>
        <Button variant="ghost" size="icon">
          <MessageSquare className="h-5 w-5" />
          <span className="sr-only">Comments</span>
        </Button>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-5 w-5" />
          <span className="sr-only">More options</span>
        </Button>
      </div>
    </header>
  );
}
