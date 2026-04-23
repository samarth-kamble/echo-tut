import { google } from "@ai-sdk/google";
import { Agent } from "@convex-dev/agent";

import { components } from "../../../_generated/api";
import { SUPPORT_AGENT_PROMPT } from "../constants";

export const supportAgent = new Agent(components.agent, {
  chat: google.chat("gemini-3-flash-preview"),
  instructions: SUPPORT_AGENT_PROMPT,
});
