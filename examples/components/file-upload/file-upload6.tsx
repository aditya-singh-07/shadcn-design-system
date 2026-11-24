"use client";

import { ImageIcon, Trash2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFileUpload } from "@/hooks/use-file-upload";

export default function Component() {
  const maxSizeMB = 1;
  const maxSize = maxSizeMB * 1024 * 1024;

  const [
    { files, isDragging, errors },
    {
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      removeFile,
      getInputProps
    }
  ] = useFileUpload({
    accept: "image/*",
    maxSize
  });

  const avatarUrl = files[0]?.preview || null;

  return (
    <Card className="w-full max-w-lg shadow-none">
      <CardHeader>
        <CardTitle className="text-xl">Profile</CardTitle>
        <CardDescription>Update your profile information and upload files.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={openFileDialog}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            data-dragging={isDragging || undefined}
            className="border-input hover:bg-accent/40 data-[dragging=true]:bg-accent/40 focus-visible:border-ring focus-visible:ring-ring/50 relative flex size-32 items-center justify-center overflow-hidden rounded-full border border-dashed transition-colors outline-none focus-visible:ring-[3px]"
            aria-label={avatarUrl ? "Change avatar" : "Upload avatar"}>
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt="Avatar preview"
                className="size-full object-cover"
              />
            ) : (
              <ImageIcon className="size-6" />
            )}
          </button>

          <input {...getInputProps()} className="sr-only" aria-label="Upload avatar file" />

          <p className="text-muted-foreground text-sm">Pick a photo up to {maxSizeMB}MB.</p>

          <div className="flex items-center gap-2">
            <Button type="button" variant="outline" onClick={openFileDialog}>
              Upload avatar
            </Button>
            {avatarUrl && (
              <Button
                type="button"
                size="icon"
                variant="ghost"
                className="text-destructive hover:text-destructive"
                onClick={() => removeFile(files[0]?.id)}
                aria-label="Remove avatar">
                <Trash2Icon />
              </Button>
            )}
          </div>

          {errors.length > 0 && (
            <p className="text-destructive text-sm" role="alert">
              {errors[0]}
            </p>
          )}
        </div>

        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="profile-name">Name</Label>
            <Input id="profile-name" placeholder="Name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="profile-email">Email</Label>
            <Input id="profile-email" type="email" placeholder="Email" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="profile-backup-email">Email</Label>
            <Input id="profile-backup-email" type="email" placeholder="Email" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button type="button" variant="outline">
          Cancel
        </Button>
        <Button type="button">Upload</Button>
      </CardFooter>
    </Card>
  );
}
