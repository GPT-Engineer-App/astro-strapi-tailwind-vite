import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to RoPay
            </h1>
            <p className="text-xl mb-6">
              Simplify your payments with Romania's leading digital wallet
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-100">
              Get Started
            </Button>
          </div>
          <div className="md:w-1/2">
            {/* Placeholder for illustration or mockup */}
            <div className="bg-white/20 rounded-lg p-4 text-center">
              <p className="text-lg">Illustration or mockup goes here</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Other sections will be added here */}
    </div>
  );
};

export default Index;