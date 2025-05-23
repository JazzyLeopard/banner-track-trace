import MaintenanceBanner from "@/components/MaintenanceBanner";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MaintenanceBanner className="sticky top-0 z-50" />
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">myFAVV Operator</h1>
        </div>
      </div>
    </div>
  );
};

export default Index;