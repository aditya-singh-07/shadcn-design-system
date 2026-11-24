"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import {
  CodeBlock,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockTitle,
} from "@/components/ui/code-block";

const code = `export function greet(name: string) {
  return "Hello, " + name;
}`;

export default function Demo() {
  return (
    <UiDemoShell title="Code Block" importPath="@/components/ui/code-block">
      <CodeBlock code={code} language="typescript" showLineNumbers className="w-full">
        <CodeBlockHeader>
          <CodeBlockTitle>greet.ts</CodeBlockTitle>
          <CodeBlockCopyButton className="ml-auto" />
        </CodeBlockHeader>
      </CodeBlock>
    </UiDemoShell>
  );
}