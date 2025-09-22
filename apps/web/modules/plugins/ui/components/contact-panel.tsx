"use client";

import Bowser from "bowser";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion";
import { getCountryFlagUrl, getCountryFromTimezone } from "@/lib/country-utils";
import { api } from "@workspace/backend/_generated/api";
import { Id } from "@workspace/backend/_generated/dataModel";
import { Button } from "@workspace/ui/components/button";
import { DicebearAvatar } from "@workspace/ui/components/dicebear-avatar";
import { useQuery } from "convex/react";
import {
  MailIcon,
  MonitorIcon,
  GlobeIcon,
  LinkIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useMemo } from "react";

type InfoItem = {
  label: string;
  value: string | React.ReactNode;
  className?: string;
};

type InfoSection = {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  items: InfoItem[];
};

export const ContactPanel = () => {
  const params = useParams();
  const conversationId = params.conversationId as Id<"conversations"> | null;

  const contactSession = useQuery(
    api.private.contactSessions.getOneByConversationId,
    conversationId
      ? {
          conversationId,
        }
      : "skip"
  );

  const parseUserAgent = (userAgent: string) => {
    if (!userAgent) {
      return { browser: "Unknown", os: "Unknown", device: "Unknown" };
    }

    const browser = Bowser.getParser(userAgent);
    const result = browser.getResult();

    return {
      browser: result.browser.name || "Unknown",
      browserVersion: result.browser.version || "",
      os: result.os.name || "Unknown",
      osVersion: result.os.version || "",
      device: result.platform.type || "desktop",
      deviceModel: result.platform.model || "",
      deviceVendor: result.platform.vendor || "",
    };
  };

  const userAgentInfo = useMemo(() => {
    return parseUserAgent(contactSession?.metadata?.userAgent || "");
  }, [contactSession?.metadata?.userAgent]);

  const countryInfo = useMemo(() => {
    return getCountryFromTimezone(contactSession?.metadata?.timezone);
  }, [contactSession?.metadata?.timezone]);

  const accordionSections = useMemo<InfoSection[]>(() => {
    if (!contactSession?.metadata) {
      return [];
    }

    return [
      {
        id: "device-info",
        icon: MonitorIcon,
        title: "Device Information",
        items: [
          {
            label: "Browser",
            value:
              userAgentInfo.browser +
              (userAgentInfo.browserVersion
                ? ` ${userAgentInfo.browserVersion}`
                : ""),
          },
          {
            label: "Operating System",
            value:
              userAgentInfo.os +
              (userAgentInfo.osVersion ? ` ${userAgentInfo.osVersion}` : ""),
          },
          {
            label: "Device",
            value:
              userAgentInfo.device +
              (userAgentInfo.deviceModel
                ? ` ${userAgentInfo.deviceModel}`
                : ""),
            className: "capitalize",
          },
          {
            label: "Platform",
            value: contactSession.metadata.platform || "Unknown",
          },
          {
            label: "Vendor",
            value: contactSession.metadata.vendor || "Unknown",
          },
          {
            label: "Screen",
            value: contactSession.metadata.screenResolution,
          },
          {
            label: "Viewport",
            value: contactSession.metadata.viewportSize,
          },
          {
            label: "Cookies",
            value: contactSession.metadata.cookieEnabled
              ? "Enabled"
              : "Disabled",
          },
        ],
      },
      {
        id: "location-info",
        icon: GlobeIcon,
        title: "Location and Language",
        items: [
          ...(countryInfo
            ? [
                {
                  label: "Country",
                  value: <span>{countryInfo.name}</span>,
                },
              ]
            : []),
          {
            label: "Language",
            value: contactSession.metadata.language,
          },
          {
            label: "Languages",
            value: contactSession.metadata.languages || "",
          },
          {
            label: "Timezone",
            value: contactSession.metadata.timezone,
          },
          {
            label: "UTC Offset",
            value: contactSession.metadata.timezoneOffset
              ? `${-contactSession.metadata.timezoneOffset / 60} hours`
              : "",
          },
        ],
      },
      {
        id: "page-info",
        icon: LinkIcon, // pick any suitable icon
        title: "Page Information",
        items: [
          {
            label: "Referrer",
            value: contactSession.metadata.referrer || "",
          },
          {
            label: "Current URL",
            value: contactSession.metadata.currentUrl || "",
          },
        ],
      },
      {
        id: "session-info",
        icon: UserIcon, // pick any suitable icon
        title: "Session Information",
        items: [
          {
            label: "Name",
            value: contactSession.name,
          },
          {
            label: "Email",
            value: contactSession.email,
          },
          {
            label: "Organization ID",
            value: contactSession.organizationId,
          },
          {
            label: "Session Expiry",
            value: new Date(contactSession.expiredAt).toLocaleString(),
          },
        ],
      },
    ];
  }, [contactSession, userAgentInfo, countryInfo]);

  if (contactSession === undefined || contactSession === null) {
    return null;
  }

  return (
    <div className="flex h-full w-full flex-col bg-background text-foreground">
      <div className="flex flex-col gap-y-4 p-4">
        <div className="flex items-center gap-x-2">
          <DicebearAvatar
            badgeImageUrl={
              countryInfo?.code
                ? getCountryFlagUrl(countryInfo.code)
                : undefined
            }
            seed={contactSession._id}
            size={50}
          />
          <div className="flex-1 overflow-hidden">
            <div className="flex items-center gap-x-2">
              <h4 className="line-clamp-1">{contactSession.name}</h4>
            </div>
            <p className="line-clamp-1 text-muted-foreground text-sm">
              {contactSession.email}
            </p>
          </div>
        </div>
        <Button asChild className="w-full" size={"lg"}>
          <Link href={`mailto:${contactSession.email}`}>
            <MailIcon />
            <span>Send Mail</span>
          </Link>
        </Button>
        <div>
          {contactSession.metadata && (
            <Accordion
              className="w-full rounded-none border-y"
              type="single"
              collapsible
            >
              {accordionSections.map((section) => (
                <AccordionItem
                  className="rounded-none outline-none has-focus-visible:z-10 has-focus-visible:border-ring has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50"
                  key={section.id}
                  value={section.id}
                >
                  <AccordionTrigger className="flex w-full flex-1 items-start justify-between gap-4 rounded-none bg-accent px-5 py-4 text-left font-medium text-sm outline-none transition-all hover:no-underline disabled:pointer-events-none disabled:opacity-50">
                    <div className="flex items-center gap-4">
                      <section.icon className="h-4 w-4 shrink-0" />
                      <span>{section.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 py-4">
                    <div className="space-y-2 text-sm">
                      {section.items.map((item) => (
                        <div
                          key={`${section.id}-${item.label}`}
                          className="flex justify-between"
                        >
                          <span className="text-muted-foreground">
                            {item.label}:
                          </span>
                          <span className="text-sm font-medium">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </div>
    </div>
  );
};
