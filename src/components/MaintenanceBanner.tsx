import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface MaintenanceBannerProps {
  className?: string;
}

const MaintenanceBanner = ({ className }: MaintenanceBannerProps) => {
  const bannerText = "Belangrijk bericht voor alle gebruikers: MijnFAVV zal tijdelijk niet beschikbaar zijn voor geplande onderhoudswerken. Deze onderbreking is gepland van 25/12/2024 23:00 tot en met 26/12/2024 08:00. Tijdens deze periode zullen we belangrijke systeemupdates en verbeteringen doorvoeren om de kwaliteit en betrouwbaarheid van onze dienstverlening te waarborgen. We raden u aan om eventuele dringende zaken voor of na deze periode te plannen. Voor noodgevallen of dringende assistentie tijdens de onderhoudsperiode kunt u contact opnemen met onze 24/7 helpdesk. Wij danken u voor uw begrip en geduld.";
  
  const bannerStyles = [
    {
      container: "bg-red-100/80 border-y-2 border-red-300",
      icon: "text-red-300"
    },
    {
      container: "bg-amber-100/80 border-y-2 border-amber-300",
      icon: "text-amber-300"
    },
    {
      container: "bg-sky-100/80 border-y-2 border-sky-300",
      icon: "text-sky-300"
    }
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
              style.container,
              "flex items-center gap-2 px-4 py-2 min-w-full h-full",
              index > 0 && "ml-[100%]"
            )}
          >
            <AlertCircle className={cn("h-4 w-4 shrink-0", style.icon)} />
            <span className="text-black text-sm">
              {bannerText}
            </span>
          </div>
        ))}
        {/* Duplicate first banner to create seamless loop */}
        <div className={cn(
          bannerStyles[0].container,
          "flex items-center gap-2 px-4 py-2 min-w-full h-full ml-[100%]"
        )}>
          <AlertCircle className={cn("h-4 w-4 shrink-0", bannerStyles[0].icon)} />
          <span className="text-black text-sm">
            {bannerText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceBanner;