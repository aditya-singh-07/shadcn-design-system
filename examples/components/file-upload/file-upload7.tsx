"use client";

import { UploadIcon, XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useFileUpload, type FileMetadata } from "@/hooks/use-file-upload";

const initialFiles: FileMetadata[] = [
  {
    id: "photo-1",
    name: "desk-setup-01.jpeg",
    size: 482310,
    type: "image/jpeg",
    url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop"
  },
  {
    id: "photo-2",
    name: "desk-setup-02.jpeg",
    size: 512940,
    type: "image/jpeg",
    url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
  },
  {
    id: "photo-3",
    name: "desk-setup-03.jpeg",
    size: 476120,
    type: "image/jpeg",
    url: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop"
  },
  {
    id: "photo-4",
    name: "desk-setup-04.jpeg",
    size: 603480,
    type: "image/jpeg",
    url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop"
  }
];

export default function Component() {
  const maxFiles = 6;
  const maxSizeMB = 5;
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
    initialFiles,
    maxFiles,
    maxSize,
    multiple: true
  });

  return (
    <Card className="w-full max-w-lg shadow-none">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Add Review</CardTitle>
        <CardDescription>Share your reviews and feedback</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-2">
          <Label htmlFor="review-title">Review Title</Label>
          <Input id="review-title" placeholder="Review Title" />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="review-description">Review Description</Label>
          <Textarea
            id="review-description"
            placeholder="Type your feedback here"
            className="min-h-28"
          />
          <p className="text-muted-foreground text-sm">
            Problems with the product or delivery?
            <a href="#" className="text-foreground ms-1 underline">
              Send a report.
            </a>
          </p>
        </div>

        <div className="grid gap-2">
          <Label>Upload Photos</Label>
          <button
            type="button"
            onClick={openFileDialog}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            data-dragging={isDragging || undefined}
            className="border-input hover:bg-accent/40 data-[dragging=true]:bg-accent/40 focus-visible:border-ring focus-visible:ring-ring/50 flex min-h-44 w-full flex-col items-center justify-center gap-3 rounded-xl border border-dashed p-6 transition-colors outline-none focus-visible:ring-[3px]"
            aria-label="Upload photos">
            <UploadIcon className="size-7" />
            <p className="font-medium">Drag &amp; Drop or Choose file to upload</p>
            <p className="text-muted-foreground text-sm">
              Max {maxFiles} files &middot; Up to {maxSizeMB}MB
            </p>
          </button>
          <input {...getInputProps()} className="sr-only" aria-label="Upload photo files" />

          {errors.length > 0 && (
            <p className="text-destructive text-sm" role="alert">
              {errors[0]}
            </p>
          )}
        </div>

        {files.length > 0 && (
          <ul className="flex flex-wrap gap-3 p-1.5">
            {files.map((file) => (
              <li key={file.id} className="relative">
                <div className="bg-muted size-20 overflow-hidden rounded-lg">
                  <img
                    src={file.preview}
                    alt={file.file.name}
                    className="size-full object-cover"
                  />
                </div>
                <Button
                  type="button"
                  size="icon"
                  variant="secondary"
                  className="bg-background absolute -end-1.5 -top-1.5 size-6 rounded-full shadow-sm"
                  onClick={() => removeFile(file.id)}
                  aria-label={`Remove ${file.file.name}`}>
                  <XIcon className="size-3.5" />
                </Button>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap items-center gap-6">
          <p className="font-medium">Do you recommend this product?</p>
          <RadioGroup defaultValue="yes" className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="yes" id="recommend-yes" />
              <Label htmlFor="recommend-yes" className="font-normal">
                Yes
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="no" id="recommend-no" />
              <Label htmlFor="recommend-no" className="font-normal">
                No
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="flex items-center gap-3">
          <Checkbox id="review-terms" />
          <Label htmlFor="review-terms" className="text-muted-foreground font-normal">
            By publishing this review you agree with the
            <a href="#" className="text-foreground ms-1 underline">
              terms and conditions.
            </a>
          </Label>
        </div>

        <div className="flex justify-end gap-2">
          <Button type="button" variant="outline">
            Reset
          </Button>
          <Button type="button">Submit Review</Button>
        </div>
      </CardContent>
    </Card>
  );
}
