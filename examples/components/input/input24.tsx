"use client";

import { XIcon } from "lucide-react";
import { useId, useState, type KeyboardEvent } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const initialTags = ["Sport", "Coding", "Travel"];

export default function Component() {
  const id = useId();
  const [tags, setTags] = useState(initialTags);
  const [value, setValue] = useState("");

  const addTag = () => {
    const tag = value.trim();
    if (tag && !tags.includes(tag)) setTags([...tags, tag]);
    setValue("");
  };

  const removeTag = (tag: string) => setTags(tags.filter((t) => t !== tag));

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag();
    }
  };

  return (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor={id}>Input with tags</Label>
      <Input
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder="Add a tag"
      />
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="h-7 pe-0.5">
              {tag}
              <Button
                variant="ghost"
                size="icon-xs"
                className="text-muted-foreground hover:text-foreground"
                onClick={() => removeTag(tag)}
                aria-label={`Remove ${tag}`}
              >
                <XIcon />
              </Button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
