
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

interface MaintenanceBannerProps {
  className?: string;
}

const notifications = [
  {
    text: "Belangrijk bericht voor alle gebruikers: MijnFAVV zal tijdelijk niet beschikbaar zijn voor geplande onderhoudswerken. Deze onderbreking is gepland van 25/12/2024 23:00 tot en met 26/12/2024 08:00.",
  },
  {
    text: "Tijdens deze periode zullen we belangrijke systeemupdates en verbeteringen doorvoeren om de kwaliteit en betrouwbaarheid van onze dienstverlening te waarborgen.",
  },
  {
    text: "We raden u aan om eventuele dringende zaken voor of na deze periode te plannen. Voor noodgevallen of dringende assistentie tijdens de onderhoudsperiode kunt u contact opnemen met onze 24/7 helpdesk.",
  },
];

const MaintenanceBanner = ({ className }: MaintenanceBannerProps) => {
  return (
    <div
      className={cn(
        "h-10 overflow-hidden relative w-full bg-red-100/80 border-y-2 border-red-300 flex items-center",
        className
      )}
    >
      <div className="animate-banner flex items-center whitespace-nowrap w-full">
        <div className="flex items-center min-w-max">
          {notifications.map((notification, index) => (
            <div key={index} className="flex items-center">
              <div className="flex items-center gap-2 px-4">
                <AlertCircle className="h-4 w-4 shrink-0 text-red-300" />
                <span className="text-black text-sm flex items-center">
                  {notification.text}
                </span>
              </div>
              {index < notifications.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="h-6 bg-red-300/50"
                />
              )}
            </div>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex items-center min-w-max">
          {notifications.map((notification, index) => (
            <div key={`duplicate-${index}`} className="flex items-center">
              <div className="flex items-center gap-2 px-4">
                <AlertCircle className="h-4 w-4 shrink-0 text-red-300" />
                <span className="text-black text-sm flex items-center">
                  {notification.text}
                </span>
              </div>
              {index < notifications.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="h-6 bg-red-300/50"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MaintenanceBanner;
