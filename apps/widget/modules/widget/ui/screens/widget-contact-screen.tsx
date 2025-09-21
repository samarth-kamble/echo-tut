import {
  ArrowLeftIcon,
  MicIcon,
  MicOffIcon,
  PhoneIcon,
  CopyIcon,
  CheckIcon,
} from "lucide-react";
import { Button } from "@workspace/ui/components/button";

import { WidgetHeader } from "../components/widget-header";
import { useAtomValue, useSetAtom } from "jotai";
import { screenAtom, widgetSettingsAtom } from "../../atoms/widget-atoms";
import { useState } from "react";

export const WidgetContactScreen = () => {
  const setScreen = useSetAtom(screenAtom);
  const widgetSettings = useAtomValue(widgetSettingsAtom);

  const phoneNumber = widgetSettings?.vapiSettings?.phoneNumber;

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!phoneNumber) {
      return;
    }

    try {
      await navigator.clipboard.writeText(phoneNumber);
      setCopied(true);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  const handleCall = () => {
    if (phoneNumber) {
      window.location.href = `tel:${phoneNumber}`;
    }
  };

  return (
    <>
      <WidgetHeader>
        <div className="flex items-center gap-x-2">
          <Button
            variant={"transparent"}
            size={"icon"}
            onClick={() => setScreen("selection")}
          >
            <ArrowLeftIcon />
          </Button>
          <p>Contact Us</p>
        </div>
      </WidgetHeader>

      <div className="flex h-full flex-col items-center justify-center px-4 py-6 sm:px-6">
        {/* Main contact card */}
        <div className="w-full max-w-sm space-y-6 rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 shadow-lg sm:p-8">
          {/* Phone icon with pulse animation */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-blue-100 animate-pulse"></div>
              <div className="relative flex items-center justify-center rounded-full border-2 border-blue-200 bg-white p-4 shadow-md">
                <PhoneIcon className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </div>

          {/* Status and availability */}
          <div className="space-y-2 text-center">
            <div className="flex items-center justify-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
              <p className="text-sm font-medium text-green-600">
                Available 24/7
              </p>
            </div>
            <p className="text-xs text-gray-500">
              We're here to help you anytime
            </p>
          </div>

          {/* Phone number display */}
          <div className="space-y-3 text-center">
            <p className="text-2xl font-bold text-gray-900 sm:text-3xl tracking-wide">
              {phoneNumber || "Loading..."}
            </p>

            {/* Action buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-2">
              <Button
                onClick={handleCall}
                className="flex-1 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 rounded-xl py-3 font-semibold shadow-md"
                disabled={!phoneNumber}
              >
                <PhoneIcon className="mr-2 h-4 w-4" />
                Call Now
              </Button>

              <Button
                onClick={handleCopy}
                variant="outline"
                className="flex-1 border-gray-300 hover:bg-gray-50 transition-colors duration-200 rounded-xl py-3 font-medium"
                disabled={!phoneNumber}
              >
                {copied ? (
                  <>
                    <CheckIcon className="mr-2 h-4 w-4 text-green-600" />
                    <span className="text-green-600">Copied!</span>
                  </>
                ) : (
                  <>
                    <CopyIcon className="mr-2 h-4 w-4" />
                    Copy Number
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-6 space-y-2 text-center">
          <p className="text-sm text-gray-600 max-w-xs">
            Get instant support by calling our dedicated helpline
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
            <span>🌍 Global Support</span>
            <span>⚡ Instant Response</span>
            <span>🔒 Secure Line</span>
          </div>
        </div>
      </div>
    </>
  );
};
