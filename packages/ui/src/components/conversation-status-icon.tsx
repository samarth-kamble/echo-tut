import { ArrowRightIcon, ArrowUpIcon, CheckIcon } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";

interface ConversationStatusIconProps {
  status: "unresolved" | "resolved" | "escalated";
}

export const ConversationStatusIcon = ({
  status,
}: ConversationStatusIconProps) => {
  const statusConfig = {
    resolved: {
      icon: CheckIcon,
      bgColor: "bg-[#3FB62F]",
    },
    unresolved: {
      icon: ArrowRightIcon,
      bgColor: "bg-destructive",
    },
    escalated: {
      icon: ArrowUpIcon,
      bgColor: "bg-yellow-500",
    },
  } as const;

  const config = statusConfig[status];
  const Icon = config.icon;
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full p-1.5",
        config.bgColor
      )}
    >
      <Icon className="size-3 stroke-3 text-white" />
    </div>
  );
};
