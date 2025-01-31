import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface MaintenanceBannerProps {
  className?: string;
}

const MaintenanceBanner = ({ className }: MaintenanceBannerProps) => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const bannerText = "Opgelet, MijnFAVV zal voor onderhoudswerken van 25/12/2024 23:00 tot en met 26/12/2024 08:00 niet beschikbaar zijn. Gelieve ons te contacteren voor dringende hulp.";
  
  const bannerStyles = [
    "bg-red-100/80", // Original red
    "bg-amber-100/80", // Soft yellow
    "bg-sky-100/80", // Soft blue
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % 3);
    }, 5000); // Change banner every 5 seconds

    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className={cn(
      bannerStyles[currentBanner],
      "overflow-hidden py-2 relative transition-colors duration-500",
      className
    )}>
      <div className="animate-banner flex whitespace-nowrap items-center gap-4">
        <div className="flex items-center gap-2 px-4">
          <AlertCircle className="h-4 w-4 text-red-600 shrink-0" />
          <span className="text-red-900 text-sm">
            {bannerText}
          </span>
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex items-center gap-2 px-4">
          <AlertCircle className="h-4 w-4 text-red-600 shrink-0" />
          <span className="text-red-900 text-sm">
            {bannerText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceBanner;