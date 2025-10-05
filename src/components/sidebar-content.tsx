import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  ChevronsUpDown,
  FileText,
  Search,
  Plus,
  Settings,
  Star,
  Tag,
  History,
  Trash2,
  Book,
} from "lucide-react";

export function SidebarContent() {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <Avatar>
                    <AvatarImage src="https://i.pravatar.cc/150?u=omninote" alt="OmniNote" />
                    <AvatarFallback>O</AvatarFallback>
                </Avatar>
                <span className="font-semibold font-headline">OmniNote WS</span>
            </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronsUpDown className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="px-4 mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search..." className="pl-9" />
        </div>
      </div>

      <div className="flex-1 px-4 overflow-y-auto">
        <nav className="space-y-1">
          <Button variant="ghost" className="w-full justify-start">
            <Book className="mr-2 h-4 w-4" />
            Notes
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Tag className="mr-2 h-4 w-4" />
            Tags
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Star className="mr-2 h-4 w-4" />
            Favorites
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <History className="mr-2 h-4 w-4" />
            Recent
          </Button>
        </nav>
        <Separator className="my-4" />
        <div className="space-y-2">
            <h3 className="px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider font-headline">Recent Notes</h3>
            <Button variant="ghost" className="w-full justify-start text-muted-foreground font-normal h-8">
                <FileText className="mr-2 h-4 w-4" />
                Q3 Roadmap
            </Button>
            <Button variant="ghost" className="w-full justify-start text-muted-foreground font-normal h-8">
                <FileText className="mr-2 h-4 w-4" />
                Meeting Notes 2024-07-22
            </Button>
            <Button variant="ghost" className="w-full justify-start text-muted-foreground font-normal h-8">
                <FileText className="mr-2 h-4 w-4" />
                Initial Brainstorm
            </Button>
        </div>
      </div>
      
      <div className="p-4 mt-auto border-t">
         <Button className="w-full mb-4">
            <Plus className="mr-2 h-4 w-4" />
            New Note
          </Button>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">Alex Doe</span>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
