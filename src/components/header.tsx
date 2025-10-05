import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Share2, MessageSquare, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

export function Header({children}: {children?: ReactNode}) {
  return (
    <header className="flex items-center h-16 px-4 md:px-6 border-b shrink-0">
      <div className="flex items-center gap-2">
        {children}
        <div className="flex items-center text-sm text-muted-foreground font-medium">
          <span className="font-headline">Workspace</span>
          <ChevronRight className="h-4 w-4" />
          <span>Project Phoenix</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Q3 Roadmap</span>
        </div>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <div className="flex -space-x-2">
          <Avatar className="h-8 w-8 border-2 border-background">
            <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <Avatar className="h-8 w-8 border-2 border-background">
            <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704e" />
            <AvatarFallback>B</AvatarFallback>
          </Avatar>
          <Avatar className="h-8 w-8 border-2 border-background">
            <AvatarFallback>+3</AvatarFallback>
          </Avatar>
        </div>
        <Button variant="ghost" size="sm">
          <MessageSquare className="mr-2 h-4 w-4" />
          Comments
        </Button>
        <Button size="sm">
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
      </div>
    </header>
  );
}
