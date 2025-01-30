import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface MaintenanceBannerProps {
  className?: string;
}

const MaintenanceBanner = ({ className }: MaintenanceBannerProps) => {
  const bannerText = "Opgelet, MijnFAVV zal voor onderhoudswerken van 25/12/2024 23:00 tot en met 26/12/2024 08:00 niet beschikbaar zijn. Gelieve ons te contacteren voor dringende hulp.";
  
  return (
    <div className={cn(
      "bg-red-100/80 overflow-hidden py-2 relative",
      className
    )}>
      <div className="animate-banner flex whitespace-nowrap items-center gap-4">
        <div className="flex items-center gap-2 px-4">
          <AlertCircle className="h-4 w-4 text-red-600 shrink-0" />
          <span className="text-red-900 text-sm">
            {bannerText}
            <a href="#contact" className="text-red-700 hover:text-red-800 underline ml-1">
              contacteren
            </a>
          </span>
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex items-center gap-2 px-4">
          <AlertCircle className="h-4 w-4 text-red-600 shrink-0" />
          <span className="text-red-900 text-sm">
            {bannerText}
            <a href="#contact" className="text-red-700 hover:text-red-800 underline ml-1">
              contacteren
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceBanner;