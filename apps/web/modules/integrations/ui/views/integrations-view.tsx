"use client";

import { useOrganization } from "@clerk/nextjs";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { Separator } from "@workspace/ui/components/separator";
import { CopyIcon } from "lucide-react";
import { toast } from "sonner";
import { IntegrationId, INTEGRATIONS } from "../../constants";
import Image from "next/image";
import { IntegrationsDialog } from "../components/integration-dialog";
import { useState } from "react";
import { createScript } from "../../utils";

export const IntegrationsView = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedSnippet, setSelectedSnippet] = useState("");
  const { organization } = useOrganization();

  const handleIntegrationClick = (integrationId: IntegrationId) => {
    if (!organization) {
      toast.error("Organization not found");
      return;
    }

    const snippet = createScript(integrationId, organization.id);
    setSelectedSnippet(snippet);
    setDialogOpen(true);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(organization?.id || "");
      toast.success("Organization ID copied to clipboard");
    } catch (error) {
      toast.error("Failed to copy Organization ID");
    }
  };

  return (
    <>
      <IntegrationsDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        snippet={selectedSnippet}
      />
      <div className="flex min-h-screen flex-col bg-muted p-8">
        <div className="mx-auto w-full max-w-screen-md">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-4xl">Setup & Integrations</h1>
            <p className="text-muted-foreground">
              Choose the integration that&apos;s right for you.
            </p>
          </div>
          <div className="mt-8 space-y-6">
            <div className="flex items-center gap-4">
              <Label className="w-34" htmlFor="organization-id">
                Organization ID
              </Label>
              <Input
                disabled
                readOnly
                id="organization-id"
                value={organization?.id}
                className="flex-1 bg-background font-mono text-sm"
              />
              <Button className="gap-2" onClick={handleCopy} size={"sm"}>
                <CopyIcon className="size-4" /> Copy
              </Button>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="space-y-6">
            <div className="space-y-1">
              <Label>Integrations</Label>
              <p className="text-muted-foreground">
                Add the following code snippet to your application to enable to
                chatbox.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {INTEGRATIONS.map((integration) => (
                <button
                  key={integration.id}
                  onClick={() => handleIntegrationClick(integration.id)}
                  className="flex items-center gap-4 rounded-lg border bg-background p-4 hover:bg-accent"
                >
                  <Image
                    alt={integration.title}
                    height={32}
                    src={integration.icon}
                    width={32}
                  />
                  <p>{integration.title}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
