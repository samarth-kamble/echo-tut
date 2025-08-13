'use client'
import { Button } from "@workspace/ui/components/button"

import { useMutation, useQuery } from "convex/react"
import { api } from "@workspace/backend/_generated/api"


export default function Page() {
  const users = useQuery(api.user.getMany)
  const addUser = useMutation(api.user.add)


  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello app/widget</h1>
        <Button size="sm" onClick={() => addUser()}>Add</Button>
        <div>
          {JSON.stringify(users, null, 2)}
        </div>
      </div>
    </div>
  )
}
