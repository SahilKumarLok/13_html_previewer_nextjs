"use client";

import React, { useState, ChangeEvent } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { predefinedHtml } from "./predefinedHtml";

// Function Component: HTMLPreviewer
export default function HTMLPreviewComponent() {
  const [htmlCode, setHtmlCode] = useState<string>(""); // HTML code input state
  const [previewHtml, setPreviewHtml] = useState<string>(""); // Preview state

  // Handler for generating the HTML preview
  const handlePreview = () => setPreviewHtml(htmlCode);

  // Handler for pasting predefined HTML code
  const handlePasteHtml = () => setHtmlCode(predefinedHtml);

  // Handler for updating HTML code input
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setHtmlCode(e.target.value);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground">
      {/* Centered container for the HTML previewer */}
      <div className="w-full max-w-2xl p-6 rounded-lg shadow-lg bg-card">
        <h1 className="text-2xl font-bold mb-4 text-center">HTML Previewer</h1>
        <p className="text-muted-foreground mb-4 text-center">
          Enter your HTML code and see the preview.
        </p>

        <div className="grid gap-4">
          {/* Textarea for HTML input */}
          <Textarea
            value={htmlCode}
            onChange={handleChange}
            placeholder="Enter your HTML code here..."
            className="p-4 rounded-lg border border-input bg-background text-blue-500"
            rows={8}
          />

          {/* Buttons for generating preview and pasting predefined HTML */}
          <div className="flex justify-center gap-2">
            <Button onClick={handlePreview}>Generate Preview</Button>
            <Button onClick={handlePasteHtml}>Paste HTML</Button>
          </div>

          {/* Div to display the HTML preview */}
          <div className="p-4 rounded-lg border border-input bg-background text-black">
            <div dangerouslySetInnerHTML={{ __html: previewHtml }} />
          </div>
        </div>
      </div>
    </div>
  );
}
