import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

interface MaintenanceBannerProps {
  className?: string;
}

const notifications = [
  {
    text: "Gepland onderhoud: Het raadplegen van aangiftes is tijdelijk niet mogelijk van vrijdag 18:00 tot zaterdag 06:00.",
  },
  {
    text: "Systeemonderhoud: Het platform zal niet beschikbaar zijn wegens updates van vrijdag 18:00 tot zaterdag 06:00.",
  },
  {
    text: "Beperkte functionaliteit: Het aanmaken van nieuwe activiteiten is onderbroken van vrijdag 18:00 tot zaterdag 06:00 wegens onderhoud.",
  },
];

const MaintenanceBanner = ({ className }: MaintenanceBannerProps) => {
  // Helper function to render the notifications block
  const renderNotifications = () => (
    <div className="flex items-center min-w-max">
      {notifications.map((notification, index) => (
        <div key={index} className="flex items-center">
          <div className="flex items-center gap-2 px-4">
            <AlertCircle className="h-4 w-4 shrink-0 text-red-300" />
            <span className="text-black text-sm flex items-center">
              {/* Conditionally add numbering if more than one notification */}
              {notifications.length > 1 && (
                <span className="font-semibold mr-1">{index + 1}.</span>
              )}
              {notification.text}
            </span>
          </div>
          {index < notifications.length - 1 && (
            <Separator orientation="vertical" className="h-6 bg-red-300/50" />
          )}
        </div>
      ))}
      <div className="w-24 flex-shrink-0"></div>
    </div>
  );

  return (
    <div
      className={cn(
        "h-10 overflow-hidden relative w-full bg-red-100/80 border-y-2 border-red-300 flex items-center",
        className
      )}
    >
      {/* The animate-banner div now contains TWO copies of the content */}
      <div className="animate-banner flex items-center whitespace-nowrap">
        {/* First copy */}
        {renderNotifications()}
        {/* Second copy (identical) */}
        {renderNotifications()}
      </div>
    </div>
  );
};

export default MaintenanceBanner;
