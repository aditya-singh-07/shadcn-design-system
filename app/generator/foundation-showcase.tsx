"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { InfoIcon } from "lucide-react";

export function FoundationShowcase() {
  return (
    <div className="flex flex-col gap-8 p-6 md:p-10">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold tracking-tight">UI foundation</h2>
        <p className="text-muted-foreground text-sm">
          Core primitives — theme tokens apply across every example below.
        </p>
      </div>

      <section className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Typography</h3>
        <div className="space-y-2">
          <p className="font-sans text-sm">
            Body text uses <code className="text-xs">font-sans</code> — The quick
            brown fox jumps over the lazy dog.
          </p>
          <p className="font-heading text-2xl font-semibold tracking-tight">
            Heading uses font-heading
          </p>
          <p className="font-mono text-sm">
            Mono: const theme = &quot;generator&quot;;
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Buttons</h3>
        <div className="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Form controls</h3>
        <div className="grid max-w-lg gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Type your message" />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="terms" defaultChecked />
            <Label htmlFor="terms">Accept terms</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="notifications" defaultChecked />
            <Label htmlFor="notifications">Notifications</Label>
          </div>
          <RadioGroup defaultValue="a" className="flex gap-4">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="a" id="plan-a" />
              <Label htmlFor="plan-a">Plan A</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="b" id="plan-b" />
              <Label htmlFor="plan-b">Plan B</Label>
            </div>
          </RadioGroup>
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Badges & alerts</h3>
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
        <Alert>
          <InfoIcon />
          <AlertTitle>Heads up</AlertTitle>
          <AlertDescription>
            This alert uses your active theme tokens.
          </AlertDescription>
        </Alert>
      </section>

      <section className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Card & tabs</h3>
        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Card title</CardTitle>
              <CardDescription>Card description</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={62} className="mb-2" />
              <p className="text-sm text-muted-foreground">62% complete</p>
            </CardContent>
            <CardFooter>
              <Button size="sm">Continue</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tabs</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="account">
                <TabsList>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="pt-3 text-sm">
                  Manage account settings.
                </TabsContent>
                <TabsContent value="password" className="pt-3 text-sm">
                  Update your password.
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      <div className="grid grid-cols-5 gap-2">
        {(["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"] as const).map(
          (key) => (
            <div
              key={key}
              className="h-14 rounded-lg border"
              style={{ background: `var(--${key})` }}
              title={key}
            />
          ),
        )}
      </div>
    </div>
  );
}