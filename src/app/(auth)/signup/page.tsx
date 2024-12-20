import { Metadata } from "next";
import React from "react";
import signUpImage from "@/assets/signup-image.jpg";
import Image from "next/image";
import Link from "next/link";
import SingUpForm from "./signUpForm";
export const metadata: Metadata = {
  title: "Sign Up",
};

export default function SignUpPage() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="overlfow-hidden flex h-full max-h-[40rem] max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <Image
          src={signUpImage}
          alt=""
          className="hidden w-1/2 object-cover md:block"
        />
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold">Sign up to bugbook</h1>
            <p className="text-muted-foreground">
              A place where even <span className="italic">you</span> can find a
              friend.
            </p>
          </div>
          <div className="space-y-5">
            <SingUpForm />
            <Link
              href={"/signin"}
              className="block text-center hover:underline"
            >
              Already have an account? Log in
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
