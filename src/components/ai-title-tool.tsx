"use client";

import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generateNoteTitle } from '@/ai/flows/ai-generate-note-titles';
import { useToast } from "@/hooks/use-toast";

interface AiTitleToolProps {
  noteContent: string;
  onTitleGenerated: (title: string) => void;
}

export function AiTitleTool({ noteContent, onTitleGenerated }: AiTitleToolProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerateTitle = async () => {
    if (!noteContent.trim()) {
      toast({
        variant: "destructive",
        title: "Cannot generate title",
        description: "Note content is empty.",
      });
      return;
    }
    setIsLoading(true);
    try {
      const result = await generateNoteTitle({ noteContent });
      onTitleGenerated(result.title);
    } catch (error) {
      console.error("Failed to generate title:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate title. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button 
      onClick={handleGenerateTitle} 
      disabled={isLoading || !noteContent.trim()} 
      variant="ghost" 
      size="sm"
      className="shrink-0"
    >
      <Sparkles className="mr-2 h-4 w-4" />
      {isLoading ? 'Generating...' : 'Generate Title'}
    </Button>
  );
}
