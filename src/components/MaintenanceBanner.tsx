import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface MaintenanceBannerProps {
  className?: string;
}

const MaintenanceBanner = ({ className }: MaintenanceBannerProps) => {
  const bannerText = "Opgelet, MijnFAVV zal voor onderhoudswerken van 25/12/2024 23:00 tot en met 26/12/2024 08:00 niet beschikbaar zijn. Gelieve ons te contacteren voor dringende hulp.";
  
  const bannerStyles = [
    "bg-red-100/80 border-y-1 border-red-300", // Red with darker red border
    "bg-amber-100/80 border-y-1 border-amber-300", // Amber with darker amber border
    "bg-sky-100/80 border-y-1 border-sky-300", // Sky blue with darker sky blue border
  ];

  return (
    <div className={cn(
      "overflow-hidden relative h-full",
      className
    )}>
      <div className="animate-banner flex whitespace-nowrap items-stretch h-full">
        {bannerStyles.map((style, index) => (
          <div 
            key={index}
            className={cn(
              style,
              "flex items-center gap-2 px-4 py-2 min-w-full h-full"
            )}
          >
            <AlertCircle className="h-4 w-4 text-red-600 shrink-0" />
            <span className="text-black text-sm">
              {bannerText}
            </span>
          </div>
        ))}
        {/* Duplicate first banner to create seamless loop */}
        <div className={cn(
          bannerStyles[0],
          "flex items-center gap-2 px-4 py-2 min-w-full h-full"
        )}>
          <AlertCircle className="h-4 w-4 text-red-600 shrink-0" />
          <span className="text-black text-sm">
            {bannerText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceBanner;