'use server';

/**
 * @fileOverview Provides AI-powered search suggestions based on user input.
 *
 * - getSearchSuggestions - A function that retrieves search suggestions.
 * - SearchSuggestionsInput - The input type for the getSearchSuggestions function.
 * - SearchSuggestionsOutput - The return type for the getSearchSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SearchSuggestionsInputSchema = z.object({
  query: z.string().describe('The user input query string.'),
});
export type SearchSuggestionsInput = z.infer<typeof SearchSuggestionsInputSchema>;

const SearchSuggestionsOutputSchema = z.object({
  suggestions: z.array(z.string()).describe('An array of search suggestions.'),
});
export type SearchSuggestionsOutput = z.infer<typeof SearchSuggestionsOutputSchema>;

export async function getSearchSuggestions(input: SearchSuggestionsInput): Promise<SearchSuggestionsOutput> {
  return searchSuggestionsFlow(input);
}

const searchSuggestionsPrompt = ai.definePrompt({
  name: 'searchSuggestionsPrompt',
  input: {schema: SearchSuggestionsInputSchema},
  output: {schema: SearchSuggestionsOutputSchema},
  prompt: `You are an AI assistant designed to provide search suggestions for a note-taking application.

  Based on the user's current query, suggest relevant search terms that might help them find what they're looking for.
  Return an array of strings.

  Query: {{{query}}}`,
});

const searchSuggestionsFlow = ai.defineFlow(
  {
    name: 'searchSuggestionsFlow',
    inputSchema: SearchSuggestionsInputSchema,
    outputSchema: SearchSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await searchSuggestionsPrompt(input);
    return output!;
  }
);
