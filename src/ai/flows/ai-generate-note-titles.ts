'use server';

/**
 * @fileOverview A flow that generates a title for a note using AI.
 *
 * - generateNoteTitle - A function that generates the note title.
 * - GenerateNoteTitleInput - The input type for the generateNoteTitle function.
 * - GenerateNoteTitleOutput - The return type for the generateNoteTitle function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateNoteTitleInputSchema = z.object({
  noteContent: z.string().describe('The content of the note to generate a title for.'),
});

export type GenerateNoteTitleInput = z.infer<typeof GenerateNoteTitleInputSchema>;

const GenerateNoteTitleOutputSchema = z.object({
  title: z.string().describe('A suggested title for the note.'),
});

export type GenerateNoteTitleOutput = z.infer<typeof GenerateNoteTitleOutputSchema>;

export async function generateNoteTitle(input: GenerateNoteTitleInput): Promise<GenerateNoteTitleOutput> {
  return generateNoteTitleFlow(input);
}

const generateNoteTitlePrompt = ai.definePrompt({
  name: 'generateNoteTitlePrompt',
  input: {schema: GenerateNoteTitleInputSchema},
  output: {schema: GenerateNoteTitleOutputSchema},
  prompt: `Suggest a concise and descriptive title for the following note content:\n\n{{{noteContent}}}`,
});

const generateNoteTitleFlow = ai.defineFlow(
  {
    name: 'generateNoteTitleFlow',
    inputSchema: GenerateNoteTitleInputSchema,
    outputSchema: GenerateNoteTitleOutputSchema,
  },
  async input => {
    const {output} = await generateNoteTitlePrompt(input);
    return output!;
  }
);
