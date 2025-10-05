import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { NoteEditor } from "@/components/note-editor";
import { DatabaseView } from "@/components/database-view";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Database, PanelLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { SidebarContent } from "@/components/sidebar-content";

export default function Home() {
  return (
    <div className="flex h-screen bg-background text-foreground font-body">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header>
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="ghost" className="md:hidden">
                  <PanelLeft className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-72">
                <SidebarContent />
              </SheetContent>
            </Sheet>
        </Header>
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Tabs defaultValue="editor" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="editor">
                <FileText className="w-4 h-4 mr-2" />
                Editor
              </TabsTrigger>
              <TabsTrigger value="database">
                <Database className="w-4 h-4 mr-2" />
                Database
              </TabsTrigger>
            </TabsList>
            <TabsContent value="editor">
              <NoteEditor />
            </TabsContent>
            <TabsContent value="database">
              <DatabaseView />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
