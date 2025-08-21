"use client";

import { useQuery } from "convex/react";
import { ArrowLeftIcon } from "lucide-react";
import { useAtomValue, useSetAtom } from "jotai";

import { WidgetHeader } from "@/modules/widget/ui/components/widget-header";
import { Button } from "@workspace/ui/components/button";
import {
  contactSessionIdAtomFamily,
  conversationIdAtom,
  organizationIdAtom,
  screenAtom,
} from "../../atoms/widget-atoms";

import { api } from "@workspace/backend/_generated/api";

export const WidgetChatScreen = () => {
  const setScreen = useSetAtom(screenAtom);
  const setConversationId = useSetAtom(conversationIdAtom);

  const conversationId = useAtomValue(conversationIdAtom);
  const organizationId = useAtomValue(organizationIdAtom);
  const contactSessionId = useAtomValue(
    contactSessionIdAtomFamily(organizationId || "")
  );

  const conversation = useQuery(
    api.public.conversation.getOne,
    conversationId && contactSessionId
      ? {
          conversationId,
          contactSessionId,
        }
      : "skip"
  );

  const onBack = () => {
    setConversationId(null);
    setScreen("selection");
  };

  return (
    <>
      <WidgetHeader className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <Button size={"icon"} variant={"transparent"} onClick={onBack}>
            <ArrowLeftIcon />
          </Button>
          <p>Chat</p>
          <Button variant={"transparent"} size={"icon"}></Button>
        </div>
      </WidgetHeader>
      <div className="flex flex-1 flex-col gap-y-4 p-4 ">
        {JSON.stringify(conversation)}
      </div>
    </>
  );
};
