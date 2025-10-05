import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutGrid, List, Calendar, GalleryHorizontal } from "lucide-react";

const tasks = [
  { id: 'TASK-8782', title: "Implement block-based editor", status: "In Progress", priority: "High", due: "2024-08-15" },
  { id: 'TASK-7878', title: "Design knowledge graph visualization", status: "Backlog", priority: "Medium", due: "2024-09-01" },
  { id: 'TASK-4567', title: "Setup real-time collaboration service", status: "Done", priority: "High", due: "2024-07-30" },
  { id: 'TASK-3456', title: "Develop AI content generation", status: "In Progress", priority: "Medium", due: "2024-08-20" },
  { id: 'TASK-9876', title: "Create mobile app mockups", status: "Todo", priority: "Low", due: "2024-09-10" },
];

const statusVariant = {
  "In Progress": "secondary",
  "Backlog": "outline",
  "Done": "default",
  "Todo": "destructive",
} as const;

export function DatabaseView() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="font-headline">Project Phoenix Tasks</CardTitle>
        <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-muted-foreground">
                <List className="h-5 w-5"/>
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground">
                <LayoutGrid className="h-5 w-5"/>
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground">
                <Calendar className="h-5 w-5"/>
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground">
                <GalleryHorizontal className="h-5 w-5"/>
            </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Task ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Due Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tasks.map((task) => (
                <TableRow key={task.id}>
                  <TableCell className="font-medium">{task.id}</TableCell>
                  <TableCell>{task.title}</TableCell>
                  <TableCell>
                    <Badge variant={statusVariant[task.status as keyof typeof statusVariant] || 'default'}>{task.status}</Badge>
                  </TableCell>
                  <TableCell>{task.priority}</TableCell>
                  <TableCell>{task.due}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
