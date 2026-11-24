#!/usr/bin/env node

/** @typedef {(id: string, label: string) => string} DemoBuilder */

const UI_COMPONENT_IDS = [
  "accordion",
  "alert",
  "alert-dialog",
  "aspect-ratio",
  "attachment",
  "avatar",
  "badge",
  "breadcrumb",
  "bubble",
  "button",
  "button-group",
  "calendar",
  "card",
  "carousel",
  "chart",
  "checkbox",
  "code-block",
  "collapsible",
  "combobox",
  "command",
  "context-menu",
  "dialog",
  "direction",
  "drawer",
  "dropdown-menu",
  "empty",
  "field",
  "form",
  "hover-card",
  "input",
  "input-group",
  "input-otp",
  "item",
  "kbd",
  "label",
  "marker",
  "menubar",
  "message",
  "message-scroller",
  "native-select",
  "navigation-menu",
  "pagination",
  "popover",
  "progress",
  "questionnaire",
  "radio-group",
  "resizable",
  "scroll-area",
  "select",
  "separator",
  "sheet",
  "sidebar",
  "skeleton",
  "slider",
  "spinner",
  "stepper",
  "switch",
  "table",
  "tabs",
  "textarea",
  "toast",
  "toggle",
  "toggle-group",
  "tooltip",
  "trace",
];

/**
 * @param {object} opts
 * @param {string} opts.id
 * @param {string} opts.label
 * @param {string} opts.imports
 * @param {string} opts.body
 * @param {string} [opts.preamble]
 * @param {string} [opts.extraImports]
 */
function makeDemo({ id, label, imports, body, preamble = "", extraImports = "" }) {
  const safeLabel = label.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  return `"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
${extraImports}import { ${imports} } from "@/components/ui/${id}";

${preamble}export default function Demo() {
  return (
    <UiDemoShell title="${safeLabel}" importPath="@/components/ui/${id}">
${body}
    </UiDemoShell>
  );
}
`;
}

/** @type {Record<string, DemoBuilder>} */
const DEMOS = {
  accordion: (id, label) =>
    makeDemo({
      id,
      label,
      imports:
        "Accordion, AccordionItem, AccordionTrigger, AccordionContent",
      body: `      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="one">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Yes. It uses semantic disclosure patterns.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="two">
          <AccordionTrigger>Is it styled with tokens?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Colors map to your theme variables.
          </AccordionContent>
        </AccordionItem>
      </Accordion>`,
    }),

  alert: (id, label) =>
    makeDemo({
      id,
      label,
      imports: "Alert, AlertTitle, AlertDescription, AlertAction",
      body: `      <div className="flex w-full flex-col gap-3">
        <Alert>
          <AlertTitle>Heads up</AlertTitle>
          <AlertDescription className="text-muted-foreground">
            You can add components to your app using the CLI.
          </AlertDescription>
          <AlertAction>
            <button
              type="button"
              className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              Learn more
            </button>
          </AlertAction>
        </Alert>
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Your session has expired.</AlertDescription>
        </Alert>
      </div>`,
    }),

  "alert-dialog": (id, label) =>
    makeDemo({
      id,
      label,
      imports:
        "AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction, AlertDialogCancel",
      body: `      <AlertDialog>
        <AlertDialogTrigger
          className="inline-flex h-8 items-center rounded-lg border border-border bg-background px-2.5 text-sm font-medium hover:bg-muted"
          type="button"
        >
          Delete account
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription className="text-muted-foreground">
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>`,
    }),

  "aspect-ratio": (id, label) =>
    makeDemo({
      id,
      label,
      imports: "AspectRatio",
      body: `      <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-xl bg-muted">
        <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
          16:9 media frame
        </div>
      </AspectRatio>`,
    }),

  attachment: (id, label) =>
    makeDemo({
      id,
      label,
      imports:
        "Attachment, AttachmentMedia, AttachmentContent, AttachmentTitle, AttachmentDescription",
      body: `      <Attachment className="max-w-sm">
        <AttachmentMedia />
        <AttachmentContent>
          <AttachmentTitle>Design spec.pdf</AttachmentTitle>
          <AttachmentDescription className="text-muted-foreground">
            2.4 MB · Uploaded just now
          </AttachmentDescription>
        </AttachmentContent>
      </Attachment>`,
    }),

  avatar: (id, label) =>
    makeDemo({
      id,
      label,
      imports: "Avatar, AvatarImage, AvatarFallback",
      body: `      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="User" />
          <AvatarFallback className="bg-muted text-foreground">SC</AvatarFallback>
        </Avatar>
        <Avatar className="size-10">
          <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
        </Avatar>
      </div>`,
    }),

  badge: (id, label) =>
    makeDemo({
      id,
      label,
      imports: "Badge",
      body: `      <div className="flex flex-wrap gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="ghost">Ghost</Badge>
        <Badge variant="link">Link</Badge>
      </div>`,
    }),

  breadcrumb: (id, label) =>
    makeDemo({
      id,
      label,
      imports:
        "Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator",
      body: `      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>`,
    }),

  bubble: (id, label) =>
    makeDemo({
      id,
      label,
      imports: "BubbleGroup, Bubble, BubbleContent",
      body: `      <BubbleGroup className="max-w-md">
        <Bubble variant="secondary">
          <BubbleContent>How can I help you today?</BubbleContent>
        </Bubble>
        <Bubble variant="default" align="end">
          <BubbleContent>Show me the dashboard.</BubbleContent>
        </Bubble>
      </BubbleGroup>`,
    }),

  button: (id, label) =>
    makeDemo({
      id,
      label,
      imports: "Button",
      body: `      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button size="xs">XS</Button>
          <Button size="sm">SM</Button>
          <Button size="default">Default</Button>
          <Button size="lg">LG</Button>
          <Button size="icon" aria-label="Icon">
            +
          </Button>
        </div>
        <Button disabled>Disabled</Button>
      </div>`,
    }),

  "button-group": (id, label) =>
    makeDemo({
      id,
      label,
      imports: "ButtonGroup, ButtonGroupSeparator, ButtonGroupText",
      body: `      <ButtonGroup aria-label="Actions">
        <button
          type="button"
          className="inline-flex h-8 items-center rounded-lg bg-primary px-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/80"
        >
          Save
        </button>
        <ButtonGroupSeparator />
        <button
          type="button"
          className="inline-flex h-8 items-center rounded-lg border border-border bg-background px-2.5 text-sm hover:bg-muted"
        >
          Cancel
        </button>
        <ButtonGroupText className="text-muted-foreground">Draft</ButtonGroupText>
      </ButtonGroup>`,
    }),

  calendar: (id, label) =>
    makeDemo({
      id,
      label,
      imports: "Calendar",
      extraImports: 'import * as React from "react";\n',
      preamble: `const [date, setDate] = React.useState<Date | undefined>(new Date());

`,
      body: `      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-xl border border-border bg-background"
      />`,
    }),

  card: (id, label) =>
    makeDemo({
      id,
      label,
      imports:
        "Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter",
      body: `      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Project overview</CardTitle>
          <CardDescription className="text-muted-foreground">
            Deployments and activity for this workspace.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          12 open tasks · 3 reviewers assigned
        </CardContent>
        <CardFooter>
          <button
            type="button"
            className="inline-flex h-8 items-center rounded-lg bg-primary px-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/80"
          >
            View details
          </button>
        </CardFooter>
      </Card>`,
    }),

  carousel: (id, label) =>
    makeDemo({
      id,
      label,
      imports:
        "Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext",
      body: `      <Carousel className="mx-auto w-full max-w-xs">
        <CarouselContent>
          {["Design", "Build", "Ship"].map((step) => (
            <CarouselItem key={step}>
              <div className="flex aspect-square items-center justify-center rounded-xl border border-border bg-muted text-sm font-medium">
                {step}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>`,
    }),

  chart: (id, label) =>
    makeDemo({
      id,
      label,
      imports: "ChartContainer, ChartTooltip, ChartTooltipContent",
      extraImports: 'import { Bar, BarChart, XAxis } from "recharts";\n',
      preamble: `const chartData = [
  { month: "Jan", visitors: 186 },
  { month: "Feb", visitors: 305 },
  { month: "Mar", visitors: 237 },
  { month: "Apr", visitors: 412 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "var(--chart-1)",
  },
};

`,
      body: `      <ChartContainer config={chartConfig} className="h-[220px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <XAxis dataKey="month" tickLine={false} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="visitors" fill="var(--color-visitors)" radius={4} />
        </BarChart>
      </ChartContainer>`,
    }),

  checkbox: (id, label) =>
    makeDemo({
      id,
      label,
      imports: "Checkbox",
      body: `      <div className="flex flex-col gap-3">
        <label className="flex items-center gap-2 text-sm">
          <Checkbox defaultChecked id="terms" />
          Accept terms and conditions
        </label>
        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          <Checkbox disabled id="disabled" />
          Disabled option
        </label>
      </div>`,
    }),

  "code-block": (id, label) =>
    makeDemo({
      id,
      label,
      imports:
        "CodeBlock, CodeBlockHeader, CodeBlockTitle, CodeBlockCopyButton",
      preamble: `const code = \`export function greet(name: string) {
  return "Hello, " + name;
}\`;

`,
      body: `      <CodeBlock code={code} language="typescript" showLineNumbers className="w-full">
        <CodeBlockHeader>
          <CodeBlockTitle>greet.ts</CodeBlockTitle>
          <CodeBlockCopyButton className="ml-auto" />
        </CodeBlockHeader>
      </CodeBlock>`,
    }),

  collapsible: (id, label) =>
    makeDemo({
      id,
      label,
      imports: "Collapsible, CollapsibleTrigger, CollapsibleContent",
      extraImports: 'import * as React from "react";\n',
      preamble: `const [open, setOpen] = React.useState(false);

`,
      body: `      <Collapsible open={open} onOpenChange={setOpen} className="w-full space-y-2">
        <CollapsibleTrigger
          type="button"
          className="inline-flex h-8 w-full items-center justify-between rounded-lg border border-border bg-background px-2.5 text-sm hover:bg-muted"
        >
          Toggle details
        </CollapsibleTrigger>
        <CollapsibleContent className="rounded-lg border border-border bg-muted/30 p-3 text-sm text-muted-foreground">
          Hidden content revealed when expanded.
        </CollapsibleContent>
      </Collapsible>`,
    }),

  combobox: (id, label) =>
    makeDemo({
      id,
      label,
      imports:
        "Combobox, ComboboxInput, ComboboxContent, ComboboxList, ComboboxItem, ComboboxEmpty",
      preamble: `const fruits = ["Apple", "Banana", "Cherry", "Date"] as const;

`,
      body: `      <Combobox defaultValue="Apple">
        <ComboboxInput placeholder="Pick a fruit" className="w-full max-w-xs" />
        <ComboboxContent>
          <ComboboxEmpty>No results</ComboboxEmpty>
          <ComboboxList>
            {fruits.map((fruit) => (
              <ComboboxItem key={fruit} value={fruit}>
                {fruit}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>`,
    }),

  command: (id, label) =>
    makeDemo({
      id,
      label,
      imports:
        "Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem",
      body: `      <Command className="rounded-xl border border-border shadow-sm">
        <CommandInput placeholder="Search actions..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search</CommandItem>
            <CommandItem>Settings</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>`,
    }),

  "context-menu": (id, label) =>
    makeDemo({
      id,
      label,
      imports:
        "ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuSeparator",
      body: `      <ContextMenu>
        <ContextMenuTrigger className="flex h-32 w-full max-w-sm items-center justify-center rounded-xl border border-dashed border-border bg-muted/40 text-sm text-muted-foreground">
          Right-click here
        </ContextMenuTrigger>
        <ContextMenuContent className="w-48">
          <ContextMenuItem>Back</ContextMenuItem>
          <ContextMenuItem>Forward</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Reload</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>`,
    }),

  dialog: (id, label) =>
    makeDemo({
      id,
      label,
      imports:
        "Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter",
      body: `      <Dialog>
        <DialogTrigger
          type="button"
          className="inline-flex h-8 items-center rounded-lg bg-primary px-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/80"
        >
          Open dialog
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Make changes and save when you are done.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <button
              type="button"
              className="inline-flex h-8 items-center rounded-lg border border-border bg-background px-2.5 text-sm hover:bg-muted"
            >
              Cancel
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>`,
    }),

  direction: (id, label) =>
    makeDemo({
      id,
      label,
      imports: "DirectionProvider",
      body: `      <DirectionProvider direction="rtl">
        <p className="rounded-lg border border-border bg-muted/40 p-3 text-sm text-muted-foreground">
          Content inside a right-to-left direction context.
        </p>
      </DirectionProvider>`,
    }),

  drawer: (id, label) =>
    makeDemo({
      id,
      label,
      imports:
        "Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter",
      body: `      <Drawer>
        <DrawerTrigger
          type="button"
          className="inline-flex h-8 items-center rounded-lg border border-border bg-background px-2.5 text-sm hover:bg-muted"
        >
          Open drawer
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Move goal</DrawerTitle>
            <DrawerDescription className="text-muted-foreground">
              Drag the slider to set a daily target.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <button
              type="button"
              className="inline-flex h-9 w-full items-center justify-center rounded-lg bg-primary text-sm font-medium text-primary-foreground"
            >
              Submit
            </button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>`,
    }),

  "dropdown-menu": (id, label) =>
    makeDemo({
      id,
      label,
      imports:
        "DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator",
      body: `      <DropdownMenu>
        <DropdownMenuTrigger
          type="button"
          className="inline-flex h-8 items-center rounded-lg border border-border bg-background px-2.5 text-sm hover:bg-muted"
        >
          Open menu
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-44">
          <DropdownMenuLabel>My account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Sign out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>`,
    }),

  empty: (id, label) =>
    makeDemo({
      id,
      label,
      imports: "Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyMedia",
      body: `      <Empty className="border border-border">
        <EmptyHeader>
          <EmptyMedia variant="icon">📭</EmptyMedia>
          <EmptyTitle>No messages yet</EmptyTitle>
          <EmptyDescription className="text-muted-foreground">
            Start a conversation to see messages here.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>`,
    }),

  field: (id, label) =>
    makeDemo({
      id,
      label,
      imports: "Field, FieldLabel, FieldDescription, FieldGroup",
      body: `      <FieldGroup className="max-w-sm">
        <Field>
          <FieldLabel htmlFor="username">Username</FieldLabel>
          <input
            id="username"
            className="flex h-8 w-full rounded-lg border border-input bg-background px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            placeholder="shadcn"
          />
          <FieldDescription className="text-muted-foreground">
            Your public display name.
          </FieldDescription>
        </Field>
      </FieldGroup>`,
    }),

  form: (id, label) =>
    makeDemo({
      id,
      label,
      imports:
        "Form, FormField, FormItem, FormLabel, FormControl, FormMessage",
      extraImports:
        'import * as React from "react";\nimport { useForm } from "react-hook-form";\n',
      preamble: `type FormValues = { email: string };

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

`,
      body: `      <FormDemo />`,
    }),

  "hover-card": (id, label) =>
    makeDemo({
      id,
      label,
      imports: "HoverCard, HoverCardTrigger, HoverCardContent",
      body: `      <HoverCard>
        <HoverCardTrigger
          className="text-sm font-medium text-primary underline-offset-4 hover:underline"
          href="#"
        >
          @nextjs
        </HoverCardTrigger>
        <HoverCardContent className="w-64 text-sm">
          <p className="font-medium">Next.js</p>
          <p className="text-muted-foreground">
            The React framework for production.
          </p>
        </HoverCardContent>
      </HoverCard>`,
    }),

  input: (id, label) =>
    makeDemo({
      id,
      label,
      imports: "Input",
      body: `      <div className="flex max-w-sm flex-col gap-3">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" disabled />
        <Input aria-invalid placeholder="Invalid state" defaultValue="bad@" />
      </div>`,
    }),

  "input-group": (id, label) =>
    makeDemo({
      id,
      label,
      imports: "InputGroup, InputGroupAddon, InputGroupInput, InputGroupText",
      body: `      <InputGroup className="max-w-sm">
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="yoursite.com" />
      </InputGroup>`,
    }),

  "input-otp": (id, label) =>
    makeDemo({
      id,
      label,
      imports: "InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator",
      body: `      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>`,
    }),

  item: (id, label) =>
    makeDemo({
      id,
      label,
      imports: "Item, ItemMedia, ItemContent, ItemTitle, ItemDescription",
      body: `      <Item className="max-w-sm">
        <ItemMedia className="flex size-10 items-center justify-center rounded-lg bg-muted text-sm font-medium">
          A
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Analytics report</ItemTitle>
          <ItemDescription className="text-muted-foreground">
            Updated 2 hours ago
          </ItemDescription>
        </ItemContent>
      </Item>`,
    }),

  kbd: (id, label) =>
    makeDemo({
      id,
      label,
      imports: "Kbd, KbdGroup",
      body: `      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>`,
    }),

  label: (id, label) =>
    makeDemo({
      id,
      label,
      imports: "Label",
      body: `      <div className="flex max-w-sm flex-col gap-2">
        <Label htmlFor="demo-input">Email address</Label>
        <input
          id="demo-input"
          className="flex h-8 w-full rounded-lg border border-input bg-background px-2.5 text-sm"
          placeholder="you@example.com"
        />
      </div>`,
    }),

  marker: (id, label) =>
    makeDemo({
      id,
      label,
      imports: "Marker, MarkerIcon, MarkerContent",
      body: `      <div className="flex w-full flex-col gap-3">
        <Marker>
          <MarkerIcon>★</MarkerIcon>
          <MarkerContent>Today</MarkerContent>
        </Marker>
        <Marker variant="separator">
          <MarkerContent>Section</MarkerContent>
        </Marker>
      </div>`,
    }),

  menubar: (id, label) =>
    makeDemo({
      id,
      label,
      imports:
        "Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem",
      body: `      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New tab</MenubarItem>
            <MenubarItem>New window</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Undo</MenubarItem>
            <MenubarItem>Redo</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>`,
    }),

  message: (id, label) =>
    makeDemo({
      id,
      label,
      imports: "MessageGroup, Message, MessageContent, MessageHeader",
      body: `      <MessageGroup className="max-w-md">
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
      </MessageGroup>`,
    }),

  "message-scroller": (id, label) =>
    makeDemo({
      id,
      label,
      imports:
        "MessageScrollerProvider, MessageScroller, MessageScrollerViewport, MessageScrollerContent, MessageScrollerItem, MessageScrollerButton",
      body: `      <MessageScrollerProvider>
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
      </MessageScrollerProvider>`,
    }),

  "native-select": (id, label) =>
    makeDemo({
      id,
      label,
      imports: "NativeSelect, NativeSelectOption, NativeSelectOptGroup",
      body: `      <NativeSelect className="max-w-xs">
        <NativeSelectOptGroup label="Fruits">
          <NativeSelectOption value="apple">Apple</NativeSelectOption>
          <NativeSelectOption value="banana">Banana</NativeSelectOption>
        </NativeSelectOptGroup>
        <NativeSelectOptGroup label="Vegetables">
          <NativeSelectOption value="carrot">Carrot</NativeSelectOption>
        </NativeSelectOptGroup>
      </NativeSelect>`,
    }),

  "navigation-menu": (id, label) =>
    makeDemo({
      id,
      label,
      imports:
        "NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink",
      body: `      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-64 gap-2 p-2 text-sm">
                <li>
                  <NavigationMenuLink href="#" className="block rounded-md p-2 hover:bg-muted">
                    Introduction
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href="#" className="block rounded-md p-2 hover:bg-muted">
                    Installation
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>`,
    }),

  pagination: (id, label) =>
    makeDemo({
      id,
      label,
      imports:
        "Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious",
      body: `      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>`,
    }),

  popover: (id, label) =>
    makeDemo({
      id,
      label,
      imports: "Popover, PopoverTrigger, PopoverContent",
      body: `      <Popover>
        <PopoverTrigger
          type="button"
          className="inline-flex h-8 items-center rounded-lg border border-border bg-background px-2.5 text-sm hover:bg-muted"
        >
          Open popover
        </PopoverTrigger>
        <PopoverContent className="w-64 text-sm">
          <p className="font-medium">Dimensions</p>
          <p className="text-muted-foreground">Set the width and height.</p>
        </PopoverContent>
      </Popover>`,
    }),

  progress: (id, label) =>
    makeDemo({
      id,
      label,
      imports: "Progress, ProgressLabel, ProgressValue",
      body: `      <Progress value={62} className="max-w-sm">
        <ProgressLabel>Uploading</ProgressLabel>
        <ProgressValue />
      </Progress>`,
    }),

  questionnaire: (id, label) =>
    makeDemo({
      id,
      label,
      imports:
        "Questionnaire, QuestionnaireItem, QuestionnaireTitle, QuestionnaireChoices, QuestionnaireChoice, QuestionnaireActions, QuestionnaireNext",
      body: `      <Questionnaire className="max-w-md">
        <QuestionnaireItem value="favorite">
          <QuestionnaireTitle>Pick your favorite</QuestionnaireTitle>
          <QuestionnaireChoices type="radio" defaultValue="design">
            <QuestionnaireChoice value="design">Design</QuestionnaireChoice>
            <QuestionnaireChoice value="engineering">Engineering</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireActions>
            <QuestionnaireNext />
          </QuestionnaireActions>
        </QuestionnaireItem>
      </Questionnaire>`,
    }),

  "radio-group": (id, label) =>
    makeDemo({
      id,
      label,
      imports: "RadioGroup, RadioGroupItem",
      body: `      <RadioGroup defaultValue="comfortable" className="max-w-sm">
        <label className="flex items-center gap-2 text-sm">
          <RadioGroupItem value="default" id="rg-default" />
          Default
        </label>
        <label className="flex items-center gap-2 text-sm">
          <RadioGroupItem value="comfortable" id="rg-comfortable" />
          Comfortable
        </label>
        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          <RadioGroupItem value="compact" id="rg-compact" disabled />
          Compact (disabled)
        </label>
      </RadioGroup>`,
    }),

  resizable: (id, label) =>
    makeDemo({
      id,
      label,
      imports: "ResizablePanelGroup, ResizablePanel, ResizableHandle",
      body: `      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-32 max-w-lg rounded-xl border border-border"
      >
        <ResizablePanel defaultSize={50} className="flex items-center justify-center bg-muted/40 p-4 text-sm">
          Panel A
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50} className="flex items-center justify-center p-4 text-sm text-muted-foreground">
          Panel B
        </ResizablePanel>
      </ResizablePanelGroup>`,
    }),

  "scroll-area": (id, label) =>
    makeDemo({
      id,
      label,
      imports: "ScrollArea",
      body: `      <ScrollArea className="h-32 w-full max-w-sm rounded-xl border border-border p-3">
        <div className="space-y-2 pr-3 text-sm text-muted-foreground">
          {Array.from({ length: 12 }, (_, i) => (
            <p key={i}>Scrollable line {i + 1}</p>
          ))}
        </div>
      </ScrollArea>`,
    }),

  select: (id, label) =>
    makeDemo({
      id,
      label,
      imports:
        "Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup, SelectLabel",
      body: `      <Select defaultValue="apple">
        <SelectTrigger className="w-full max-w-xs">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>`,
    }),

  separator: (id, label) =>
    makeDemo({
      id,
      label,
      imports: "Separator",
      body: `      <div className="flex h-20 w-full max-w-sm items-center gap-4">
        <span className="text-sm">Left</span>
        <Separator orientation="vertical" className="h-8" />
        <span className="text-sm text-muted-foreground">Right</span>
      </div>`,
    }),

  sheet: (id, label) =>
    makeDemo({
      id,
      label,
      imports:
        "Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription",
      body: `      <Sheet>
        <SheetTrigger
          type="button"
          className="inline-flex h-8 items-center rounded-lg border border-border bg-background px-2.5 text-sm hover:bg-muted"
        >
          Open sheet
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription className="text-muted-foreground">
              Make changes to your profile here.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>`,
    }),

  sidebar: (id, label) =>
    makeDemo({
      id,
      label,
      imports:
        "SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset",
      body: `      <SidebarProvider>
        <div className="flex min-h-48 w-full overflow-hidden rounded-xl border border-border">
          <Sidebar>
            <SidebarHeader className="px-2 py-3 text-sm font-medium">
              Workspace
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive>Home</SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>Inbox</SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>
          <SidebarInset className="flex flex-1 items-center justify-center p-4 text-sm text-muted-foreground">
            Main content
          </SidebarInset>
        </div>
      </SidebarProvider>`,
    }),

  skeleton: (id, label) =>
    makeDemo({
      id,
      label,
      imports: "Skeleton",
      body: `      <div className="flex w-full max-w-sm items-center gap-3">
        <Skeleton className="size-10 rounded-full" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-3 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>`,
    }),

  slider: (id, label) =>
    makeDemo({
      id,
      label,
      imports: "Slider",
      extraImports: 'import * as React from "react";\n',
      preamble: `const [value, setValue] = React.useState([42]);

`,
      body: `      <Slider
        value={value}
        onValueChange={setValue}
        max={100}
        step={1}
        className="max-w-sm"
      />`,
    }),

  spinner: (id, label) =>
    makeDemo({
      id,
      label,
      imports: "Spinner",
      body: `      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <Spinner />
        Loading
      </div>`,
    }),

  stepper: (id, label) =>
    makeDemo({
      id,
      label,
      imports:
        "Stepper, StepperItem, StepperTrigger, StepperIndicator, StepperTitle, StepperDescription, StepperNav",
      body: `      <Stepper defaultValue={2} className="max-w-md">
        <StepperNav>
          <StepperItem step={1}>
            <StepperTrigger>
              <StepperIndicator />
              <div className="flex flex-col items-start text-left">
                <StepperTitle>Account</StepperTitle>
                <StepperDescription className="text-muted-foreground">
                  Sign in
                </StepperDescription>
              </div>
            </StepperTrigger>
          </StepperItem>
          <StepperItem step={2}>
            <StepperTrigger>
              <StepperIndicator />
              <div className="flex flex-col items-start text-left">
                <StepperTitle>Details</StepperTitle>
                <StepperDescription className="text-muted-foreground">
                  Profile info
                </StepperDescription>
              </div>
            </StepperTrigger>
          </StepperItem>
        </StepperNav>
      </Stepper>`,
    }),

  switch: (id, label) =>
    makeDemo({
      id,
      label,
      imports: "Switch",
      body: `      <div className="flex items-center gap-2 text-sm">
        <Switch id="airplane" defaultChecked />
        <label htmlFor="airplane">Airplane mode</label>
      </div>`,
    }),

  table: (id, label) =>
    makeDemo({
      id,
      label,
      imports:
        "Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption",
      body: `      <Table>
        <TableCaption className="text-muted-foreground">
          Recent invoices
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>INV002</TableCell>
            <TableCell>Pending</TableCell>
            <TableCell className="text-right">$120.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>`,
    }),

  tabs: (id, label) =>
    makeDemo({
      id,
      label,
      imports: "Tabs, TabsList, TabsTrigger, TabsContent",
      body: `      <Tabs defaultValue="account" className="max-w-md">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="text-sm text-muted-foreground">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password" className="text-sm text-muted-foreground">
          Change your password here.
        </TabsContent>
      </Tabs>`,
    }),

  textarea: (id, label) =>
    makeDemo({
      id,
      label,
      imports: "Textarea",
      body: `      <Textarea
        className="max-w-sm"
        placeholder="Type your message here."
        rows={4}
      />`,
    }),

  toast: (id, label) =>
    makeDemo({
      id,
      label,
      imports: "Toaster, toast",
      body: `      <div className="space-y-3">
        <button
          type="button"
          className="inline-flex h-8 items-center rounded-lg bg-primary px-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/80"
          onClick={() =>
            toast.add({
              title: "Saved",
              description: "Your changes have been stored.",
            })
          }
        >
          Show toast
        </button>
        <Toaster />
      </div>`,
    }),

  toggle: (id, label) =>
    makeDemo({
      id,
      label,
      imports: "Toggle",
      body: `      <div className="flex flex-wrap gap-2">
        <Toggle aria-label="Toggle italic">Italic</Toggle>
        <Toggle variant="outline" aria-label="Toggle bold">
          Bold
        </Toggle>
        <Toggle size="sm" aria-label="Toggle underline">
          Underline
        </Toggle>
      </div>`,
    }),

  "toggle-group": (id, label) =>
    makeDemo({
      id,
      label,
      imports: "ToggleGroup, ToggleGroupItem",
      body: `      <ToggleGroup type="single" defaultValue="center" variant="outline">
        <ToggleGroupItem value="left" aria-label="Align left">
          Left
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          Center
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          Right
        </ToggleGroupItem>
      </ToggleGroup>`,
    }),

  tooltip: (id, label) =>
    makeDemo({
      id,
      label,
      imports: "Tooltip, TooltipTrigger, TooltipContent, TooltipProvider",
      body: `      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            type="button"
            className="inline-flex h-8 items-center rounded-lg border border-border bg-background px-2.5 text-sm hover:bg-muted"
          >
            Hover me
          </TooltipTrigger>
          <TooltipContent>Add to library</TooltipContent>
        </Tooltip>
      </TooltipProvider>`,
    }),

  trace: (id, label) =>
    makeDemo({
      id,
      label,
      imports:
        "Trace, TraceLine, TraceTitle, TraceDescription, TraceCollapsible, TraceCollapsibleTrigger, TraceCollapsibleContent",
      body: `      <Trace className="max-w-md">
        <TraceLine status="running">
          <TraceTitle>Fetching context</TraceTitle>
          <TraceDescription>240ms</TraceDescription>
        </TraceLine>
        <TraceCollapsible>
          <TraceCollapsibleTrigger>
            <TraceLine status="completed">
              <TraceTitle>Rendered response</TraceTitle>
            </TraceLine>
          </TraceCollapsibleTrigger>
          <TraceCollapsibleContent>
            Expanded trace details for the selected step.
          </TraceCollapsibleContent>
        </TraceCollapsible>
      </Trace>`,
    }),
};

/**
 * @param {string} id
 */
function pascalCaseFromId(id) {
  return id
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

/**
 * @param {string} id
 * @param {string} label
 */
function fallbackDemo(id, label) {
  const component = pascalCaseFromId(id);
  return makeDemo({
    id,
    label,
    imports: component,
    body: `      <${component} />`,
  });
}

/**
 * @param {string} id
 * @param {string} label
 * @returns {string}
 */
export function getUiDemoSource(id, label) {
  const builder = DEMOS[id];
  if (builder) {
    return builder(id, label);
  }
  return fallbackDemo(id, label);
}

export { UI_COMPONENT_IDS };