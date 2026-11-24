"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { MessageGroup, Message, MessageContent, MessageHeader } from "@/components/ui/message";

export default function Demo() {
  return (
    <UiDemoShell title="Message" importPath="@/components/ui/message">
      <MessageGroup className="max-w-md">
        <Message>
          <MessageHeader className="text-muted-foreground">Assistant</MessageHeader>
          <MessageContent>
            <p className="rounded-xl bg-muted px-3 py-2 text-sm">Hello! How can I help?</p>
          </MessageContent>
        </Message>
        <Message align="end">
          <MessageContent>
            <p className="rounded-xl bg-primary px-3 py-2 text-sm text-primary-foreground">
              Summarize this thread.
            </p>
          </MessageContent>
        </Message>
      </MessageGroup>
    </UiDemoShell>
  );
}
