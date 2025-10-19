"use client";

import { useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";

export default function Page() {
  const data = useQuery(api.private.users.getAllUsers);

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello app/web</h1>
        {JSON.stringify(data, null, 2)}
      </div>
    </div>
  );
}
