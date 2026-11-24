"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import * as React from "react";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";

type FormValues = { email: string };

function FormDemo() {
  const form = useForm<FormValues>({
    defaultValues: { email: "" },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(() => undefined)}
        className="max-w-sm space-y-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <input
                  className="flex h-8 w-full rounded-lg border border-input bg-background px-2.5 text-sm"
                  placeholder="you@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button
          type="submit"
          className="inline-flex h-8 items-center rounded-lg bg-primary px-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/80"
        >
          Submit
        </button>
      </form>
    </Form>
  );
}

export default function Demo() {
  return (
    <UiDemoShell title="Form" importPath="@/components/ui/form">
      <FormDemo />
    </UiDemoShell>
  );
}
