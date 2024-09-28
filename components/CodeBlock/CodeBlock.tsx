"use client"

import { useState, useEffect } from 'react';

interface CodeBlockProps {
  filePath: string;
}

export default function CodeBlock({ filePath }: CodeBlockProps) {
  const [code, setCode] = useState("");

  useEffect(() => {
    async function fetchCode() {
      try {
        const response = await fetch(`/api/get-code?filePath=${filePath}`);
        const text = await response.text();
        setCode(text);
      } catch (error) {
        console.error("Failed to load code:", error);
      }
    }
    fetchCode();
  }, [filePath]);

  return (
    <pre>
       <code>{code || "Hardcoded code block content here"}</code>
    </pre>
  );
}

