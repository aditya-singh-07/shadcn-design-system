"use client";

import { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import {
  BellOffIcon,
  CheckIcon,
  DribbbleIcon,
  ExternalLinkIcon,
  FlagIcon,
  LinkedinIcon,
  LinkIcon,
  MapPinIcon,
  MoreHorizontalIcon,
  PlusIcon,
  Share2Icon,
  StarIcon,
  TwitterIcon,
} from "lucide-react";

const users = [
  {
    id: 1,
    name: "Frankie Sullivan",
    avatar: "https://i.pravatar.cc/150?img=12",
    location: "Melbourne, Australia",
    verified: true,
    bio: "Frontend developer based in Melbourne. Open to new opportunities from January.",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    dribbble: "https://dribbble.com",
    portfolio: "https://example.com",
  },
  {
    id: 2,
    name: "Amélie Laurent",
    avatar: "https://i.pravatar.cc/150?img=47",
    location: "London, United Kingdom",
    verified: true,
    bio: "Product manager in London helping teams ship thoughtful products.",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    dribbble: "https://dribbble.com",
    portfolio: "https://example.com",
  },
  {
    id: 3,
    name: "Olive Nacelle",
    avatar: "https://i.pravatar.cc/150?img=33",
    location: "Paris, France",
    verified: false,
    bio: "Product Designer passionate about creating beautiful user experiences.",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    dribbble: "https://dribbble.com",
    portfolio: "https://example.com",
  },
  {
    id: 4,
    name: "Oliver Chamberlain",
    avatar: "https://i.pravatar.cc/150?img=25",
    location: "New York, USA",
    verified: true,
    bio: "Full-stack developer with 5+ years of experience in web development.",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    dribbble: "https://dribbble.com",
    portfolio: "https://example.com",
  },
  {
    id: 5,
    name: "Andi Lane",
    avatar: "https://i.pravatar.cc/150?img=19",
    location: "San Francisco, USA",
    verified: false,
    bio: "UI/UX Designer focused on creating intuitive and accessible designs.",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    dribbble: "https://dribbble.com",
    portfolio: "https://example.com",
  },
  {
    id: 6,
    name: "Drew Cano",
    avatar: "https://i.pravatar.cc/150?img=51",
    location: "Berlin, Germany",
    verified: true,
    bio: "Backend engineer specializing in scalable systems and APIs.",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    dribbble: "https://dribbble.com",
    portfolio: "https://example.com",
  },
  {
    id: 7,
    name: "Sophia Munn",
    avatar: "https://i.pravatar.cc/150?img=45",
    location: "Tokyo, Japan",
    verified: false,
    bio: "Creative director with expertise in branding and visual identity.",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    dribbble: "https://dribbble.com",
    portfolio: "https://example.com",
  },
];

export default function CommandComponent() {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const isFavorite = favorites.includes(selectedUser.id);

  const toggleFavorite = () => {
    setFavorites((prev) =>
      prev.includes(selectedUser.id)
        ? prev.filter((id) => id !== selectedUser.id)
        : [...prev, selectedUser.id]
    );
  };

  const socialLinks = [
    { href: selectedUser.twitter, icon: TwitterIcon, label: "Twitter" },
    { href: selectedUser.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
    { href: selectedUser.dribbble, icon: DribbbleIcon, label: "Dribbble" },
    { href: selectedUser.portfolio, icon: ExternalLinkIcon, label: "Website" },
  ];

  return (
    <Command className="bg-background h-[520px] w-full max-w-3xl border shadow-sm">
      <CommandInput placeholder="Search by name or location" />
      <div className="mt-1 flex min-h-0 flex-1 border-t">
        <CommandList className="max-h-none w-72 shrink-0 overflow-y-auto border-e">
          <CommandEmpty>No users found.</CommandEmpty>
          <CommandGroup>
            {users.map((user) => (
              <CommandItem
                key={user.id}
                value={`${user.name} ${user.location}`}
                onSelect={() => setSelectedUser(user)}
                data-checked={selectedUser.id === user.id}
                className={cn(
                  "cursor-pointer",
                  selectedUser.id === user.id && "bg-muted"
                )}
              >
                <Avatar size="lg">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1 space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="truncate text-sm font-medium">
                      {user.name}
                    </span>
                    {user.verified && (
                      <CheckIcon className="size-4 shrink-0 text-blue-500" />
                    )}
                  </div>
                  <div className="text-muted-foreground flex items-center gap-1 text-xs font-normal">
                    <MapPinIcon className="size-3" />
                    <span className="truncate">{user.location}</span>
                  </div>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mx-auto max-w-md">
            <div className="relative mb-4">
              <div className="relative mx-auto size-24">
                <Avatar className="size-24">
                  <AvatarImage
                    src={selectedUser.avatar}
                    alt={selectedUser.name}
                  />
                  <AvatarFallback>
                    {selectedUser.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                {selectedUser.verified && (
                  <div className="bg-background absolute right-0 bottom-0 rounded-full border-2 p-0.5">
                    <CheckIcon className="size-4 text-blue-500" />
                  </div>
                )}
              </div>
              <div className="absolute top-0 right-0 flex gap-2">
                <Button
                  aria-label="Add to favorites"
                  aria-pressed={isFavorite}
                  onClick={toggleFavorite}
                  size="icon-sm"
                  variant="ghost"
                >
                  <StarIcon
                    className={cn(
                      isFavorite && "fill-amber-400 text-amber-400"
                    )}
                  />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      aria-label="More options"
                      size="icon-sm"
                      variant="ghost"
                    >
                      <MoreHorizontalIcon />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-44">
                    <DropdownMenuItem>
                      <Share2Icon aria-hidden="true" />
                      <span>Share profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <LinkIcon aria-hidden="true" />
                      <span>Copy link</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <BellOffIcon aria-hidden="true" />
                      <span>Mute updates</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem variant="destructive">
                      <FlagIcon aria-hidden="true" />
                      <span>Report user</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="space-y-4 text-center">
              <div>
                <h2 className="text-2xl font-semibold">{selectedUser.name}</h2>
                <p className="text-muted-foreground mt-2 text-sm">
                  {selectedUser.bio}
                </p>
              </div>
              <div className="flex items-center justify-center gap-3">
                {socialLinks.map((social) => (
                  <Button
                    asChild
                    className="rounded-full"
                    key={social.label}
                    size="icon"
                    variant="ghost"
                  >
                    <a
                      aria-label={social.label}
                      href={social.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <social.icon className="size-5" />
                    </a>
                  </Button>
                ))}
              </div>
              <div className="flex gap-3">
                <Button asChild className="flex-1" variant="outline">
                  <a href={selectedUser.portfolio} rel="noreferrer" target="_blank">
                    View portfolio
                  </a>
                </Button>
                <Button className="flex-1">
                  <PlusIcon />
                  Follow
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Command>
  );
}
