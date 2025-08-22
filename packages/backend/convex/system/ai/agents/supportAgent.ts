import { google } from "@ai-sdk/google";
import { Agent } from "@convex-dev/agent";
import { components } from "../../../_generated/api";

export const supportAgent = new Agent(components.agent, {
  chat: google.chat("gemini-2.5-flash-lite"),
  instructions: "You are a cutomer support agent",
});
