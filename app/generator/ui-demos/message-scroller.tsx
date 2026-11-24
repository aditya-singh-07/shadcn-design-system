"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { MessageScrollerProvider, MessageScroller, MessageScrollerViewport, MessageScrollerContent, MessageScrollerItem, MessageScrollerButton } from "@/components/ui/message-scroller";

export default function Demo() {
  return (
    <UiDemoShell title="Message Scroller" importPath="@/components/ui/message-scroller">
      <MessageScrollerProvider>
        <MessageScroller className="h-48 rounded-xl border border-border">
          <MessageScrollerViewport>
            <MessageScrollerContent>
              {Array.from({ length: 12 }, (_, index) => (
                <MessageScrollerItem key={index}>
                  <p className="text-sm text-muted-foreground">
                    Message {index + 1}
                  </p>
                </MessageScrollerItem>
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
      </MessageScrollerProvider>
    </UiDemoShell>
  );
}
