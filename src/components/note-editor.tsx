"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { AiSummaryTool } from "./ai-summary-tool";
import { AiTitleTool } from "./ai-title-tool";
import { useState } from "react";

const noteContent = `
This document outlines the key initiatives for Project Phoenix in the third quarter. Our primary focus is on launching the beta version and gathering user feedback.

Core Features
- Block-Based Editor: A fluid, Notion-like writing experience.
- Bidirectional Linking: Creating a web of knowledge.
- Real-time Collaboration: Work together seamlessly.

Timeline
- July: Finalize editor UI and start internal alpha testing.
- August: Implement collaboration features and prepare for beta.
- September: Public beta launch and marketing push.
`;

const initialTitle = "Project Phoenix: Q3 Roadmap";

export function NoteEditor() {
  const [title, setTitle] = useState(initialTitle);
  const editorImage = PlaceHolderImages.find(p => p.id === 'editor-image-1');

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between gap-4 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">{title}</h1>
        <AiTitleTool noteContent={noteContent} onTitleGenerated={setTitle} />
      </div>
      <div className="prose prose-lg dark:prose-invert prose-headings:font-headline prose-a:text-primary">
        <p>This document outlines the key initiatives for Project Phoenix in the third quarter. Our primary focus is on launching the beta version and gathering user feedback to iterate quickly.</p>

        {editorImage && (
          <div className="my-8 rounded-lg overflow-hidden shadow-lg">
             <Image
                src={editorImage.imageUrl}
                alt={editorImage.description}
                width={800}
                height={400}
                className="w-full object-cover"
                data-ai-hint={editorImage.imageHint}
              />
          </div>
        )}

        <h2>Core Features</h2>
        <p>The main goals for Q3 revolve around delivering the core feature set. This includes:</p>
        <ul>
          <li>A fluid, Notion-like writing experience with our new block-based editor.</li>
          <li>Creating a web of knowledge with [[Bidirectional Linking]].</li>
          <li>Enabling users to work together seamlessly with our real-time collaboration engine.</li>
        </ul>

        <h2>Code Block Example</h2>
        <p>Here's a snippet of what a simple block might look like:</p>
        <pre>
          <code className="language-javascript">
            {`function Block({ content }) {
  return <div className="block">{content}</div>;
}`}
          </code>
        </pre>
        <p>We believe this modular approach will provide the flexibility our users need.</p>
        
        <AiSummaryTool noteContent={noteContent} />
      </div>
    </div>
  );
}
