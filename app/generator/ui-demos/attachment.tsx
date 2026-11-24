"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { Attachment, AttachmentMedia, AttachmentContent, AttachmentTitle, AttachmentDescription } from "@/components/ui/attachment";

export default function Demo() {
  return (
    <UiDemoShell title="Attachment" importPath="@/components/ui/attachment">
      <Attachment className="max-w-sm">
        <AttachmentMedia />
        <AttachmentContent>
          <AttachmentTitle>Design spec.pdf</AttachmentTitle>
          <AttachmentDescription className="text-muted-foreground">
            2.4 MB · Uploaded just now
          </AttachmentDescription>
        </AttachmentContent>
      </Attachment>
    </UiDemoShell>
  );
}
