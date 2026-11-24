"use client";

import { useState } from "react";
import { CheckIcon, ImagePlusIcon, XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useFileUpload, type FileMetadata } from "@/hooks/use-file-upload";

const initialCover: FileMetadata[] = [
  {
    id: "cover-1",
    name: "cover.jpg",
    size: 1240500,
    type: "image/jpeg",
    url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop"
  }
];

const initialAvatar: FileMetadata[] = [
  {
    id: "avatar-1",
    name: "avatar.png",
    size: 184320,
    type: "image/png",
    url: "https://i.pravatar.cc/150?img=1"
  }
];

const bioLimit = 180;

export default function Component() {
  const [bio, setBio] = useState(
    "Hey, I am a web developer who loves turning ideas into amazing websites!"
  );

  const [{ files: coverFiles }, coverActions] = useFileUpload({
    accept: "image/*",
    initialFiles: initialCover
  });

  const [{ files: avatarFiles }, avatarActions] = useFileUpload({
    accept: "image/*",
    initialFiles: initialAvatar
  });

  const coverUrl = coverFiles[0]?.preview || null;
  const avatarUrl = avatarFiles[0]?.preview || null;

  return (
    <Card className="w-full max-w-lg gap-0 py-0 shadow-none">
      <div
        className="bg-muted relative h-40 shrink-0"
        onDragEnter={coverActions.handleDragEnter}
        onDragLeave={coverActions.handleDragLeave}
        onDragOver={coverActions.handleDragOver}
        onDrop={coverActions.handleDrop}>
        {coverUrl && <img src={coverUrl} alt="Cover" className="size-full object-cover" />}

        <div className="absolute inset-0 flex items-center justify-center gap-3">
          <Button
            type="button"
            size="icon"
            className="size-10 rounded-full bg-black/60 text-white hover:bg-black/70"
            onClick={coverActions.openFileDialog}
            aria-label={coverUrl ? "Change cover image" : "Upload cover image"}>
            <ImagePlusIcon className="size-4" />
          </Button>
          {coverUrl && (
            <Button
              type="button"
              size="icon"
              className="size-10 rounded-full bg-black/60 text-white hover:bg-black/70"
              onClick={() => coverActions.removeFile(coverFiles[0]?.id)}
              aria-label="Remove cover image">
              <XIcon className="size-4" />
            </Button>
          )}
        </div>

        <input
          {...coverActions.getInputProps()}
          className="sr-only"
          aria-label="Upload cover image file"
        />
      </div>

      <div className="relative px-6 pt-6 pb-6">
        <div className="absolute -top-12 start-6">
          <div className="ring-background bg-muted relative size-24 overflow-hidden rounded-full ring-4">
            {avatarUrl && (
              <img src={avatarUrl} alt="Avatar" className="size-full object-cover" />
            )}
            <button
              type="button"
              onClick={avatarActions.openFileDialog}
              className="absolute inset-0 flex items-center justify-center bg-black/40 text-white transition-colors hover:bg-black/55"
              aria-label={avatarUrl ? "Change avatar" : "Upload avatar"}>
              <ImagePlusIcon className="size-5" />
            </button>
          </div>
          <input
            {...avatarActions.getInputProps()}
            className="sr-only"
            aria-label="Upload avatar file"
          />
        </div>

        <div className="space-y-4 pt-14">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="profile-first-name">First name</Label>
              <Input id="profile-first-name" defaultValue="Alex" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="profile-last-name">Last name</Label>
              <Input id="profile-last-name" defaultValue="Rivera" />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="profile-username">Username</Label>
            <InputGroup>
              <InputGroupInput id="profile-username" defaultValue="alex-rivera" />
              <InputGroupAddon align="inline-end">
                <CheckIcon className="size-4 text-green-600!" />
              </InputGroupAddon>
            </InputGroup>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="profile-website">Website</Label>
            <InputGroup>
              <InputGroupAddon align="inline-start" className="border-e pe-3">
                <InputGroupText>https://</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput id="profile-website" defaultValue="www.example.com" />
            </InputGroup>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="profile-bio">Biography</Label>
            <Textarea
              id="profile-bio"
              value={bio}
              maxLength={bioLimit}
              onChange={(event) => setBio(event.target.value)}
              className="min-h-24"
            />
            <p className="text-muted-foreground text-end text-sm">
              {bioLimit - bio.length} characters left
            </p>
          </div>

          <div className="flex justify-end">
            <Button type="button">Save Changes</Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
