import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface MaintenanceBannerProps {
  className?: string;
}

const MaintenanceBanner = ({ className }: MaintenanceBannerProps) => {
  const bannerText = "Belangrijk bericht voor alle gebruikers: MijnFAVV zal tijdelijk niet beschikbaar zijn voor geplande onderhoudswerken. Deze onderbreking is gepland van 25/12/2024 23:00 tot en met 26/12/2024 08:00. Tijdens deze periode zullen we belangrijke systeemupdates en verbeteringen doorvoeren om de kwaliteit en betrouwbaarheid van onze dienstverlening te waarborgen. We raden u aan om eventuele dringende zaken voor of na deze periode te plannen. Voor noodgevallen of dringende assistentie tijdens de onderhoudsperiode kunt u contact opnemen met onze 24/7 helpdesk. Wij danken u voor uw begrip en geduld.";
  
  return (
    <div className={cn(
      "h-12 overflow-hidden relative w-full bg-red-100/80 border-y-2 border-red-300",
      className
    )}>
      <div className="animate-banner flex items-center whitespace-nowrap">
        <div className="flex items-center gap-2 px-4 min-w-max">
          <AlertCircle className="h-4 w-4 shrink-0 text-red-300" />
          <span className="text-black text-sm">
            {bannerText}
          </span>
        </div>
        {/* Duplicate content for seamless loop */}
        <div className="flex items-center gap-2 px-4 min-w-max">
          <AlertCircle className="h-4 w-4 shrink-0 text-red-300" />
          <span className="text-black text-sm">
            {bannerText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceBanner;