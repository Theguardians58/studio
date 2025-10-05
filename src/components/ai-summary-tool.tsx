"use client";

import { useState } from 'react';
import { Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { summarizeNote, SummarizeNoteOutput } from '@/ai/flows/ai-summarize-note';
import { useToast } from "@/hooks/use-toast";

interface AiSummaryToolProps {
  noteContent: string;
}

export function AiSummaryTool({ noteContent }: AiSummaryToolProps) {
  const [summary, setSummary] = useState<SummarizeNoteOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSummarize = async () => {
    setIsLoading(true);
    setSummary(null);
    try {
      const result = await summarizeNote({ noteContent });
      setSummary(result);
    } catch (error) {
      console.error("Failed to summarize note:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate summary. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4 my-8">
      <Button onClick={handleSummarize} disabled={isLoading}>
        <Wand2 className="mr-2 h-4 w-4" />
        {isLoading ? 'Generating Summary...' : 'Summarize with AI'}
      </Button>

      {summary && (
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center text-lg font-headline">
              <Wand2 className="mr-2 h-5 w-5 text-primary" />
              AI Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/80">{summary.summary}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
