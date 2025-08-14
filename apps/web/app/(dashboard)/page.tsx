"use client";
import { Button } from "@workspace/ui/components/button";
import { api } from "@workspace/backend/_generated/api";
import { OrganizationSwitcher, SignInButton, UserButton } from "@clerk/nextjs";

import {
  useMutation,
  useQuery,
  Authenticated,
  Unauthenticated,
} from "convex/react";

export default function Page() {
  const users = useQuery(api.users.getMany);
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
            <div>{JSON.stringify(users, null, 2)}</div>
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
