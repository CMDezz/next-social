"use client";

import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function SearchField() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const q = (form.q as HTMLInputElement).value.trim();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
  }

  return (
    <form onSubmit={handleSubmit} method="GET" action="/search">
      <div className="relative">
        <Input name="q" placeholder="Search" className="pe-10" />
        <Button
          type="submit"
          className="absolute right-0 top-1/2 -translate-y-1/2 transform bg-muted hover:bg-muted-foreground/5"
          variant={"ghost"}
        >
          <SearchIcon className="size-5" />
        </Button>
      </div>
    </form>
  );
}
