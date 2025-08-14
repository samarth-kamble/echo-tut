"use client";
import { Button } from "@workspace/ui/components/button";
import { api } from "@workspace/backend/_generated/api";
import { OrganizationSwitcher, SignInButton, UserButton } from "@clerk/nextjs";

import { useMutation, Authenticated, Unauthenticated } from "convex/react";

export default function Page() {
  const addUser = useMutation(api.users.add);

  return (
    <>
      <Authenticated>
        <div className="flex items-center justify-center min-h-svh">
          <div className="flex flex-col items-center justify-center gap-4">
            <UserButton />
            <OrganizationSwitcher hidePersonal />
            <h1 className="text-2xl font-bold">Hello app/web</h1>
            <Button size="sm" onClick={() => addUser()}>
              Add
            </Button>
          </div>
        </div>
      </Authenticated>
      <Unauthenticated>
        <p>Must be signed in</p>
        <SignInButton>Sign In</SignInButton>
      </Unauthenticated>
    </>
  );
}
