import { Button } from "@/components/ui/button";
import { ArrowRight, Wallet, Shield, Zap } from "lucide-react";
import { useEffect, useRef } from "react";

const Index = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      const scrollHeight = scrollElement.scrollHeight;
      const animationDuration = (scrollHeight / 50) * 1000; // Adjust speed as needed
      scrollElement.style.animationDuration = `${animationDuration}ms`;
    }
  }, []);

  const ContentSection = () => (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to RoPay
            </h1>
            <p className="text-xl mb-6">
              Simplify your payments with Romania's leading digital wallet
            </p>
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-100">
              Get Started
            </Button>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white/20 rounded-lg p-4 text-center">
              <p className="text-lg">Illustration or mockup goes here</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Ce este RoPay? Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8">
              <h2 className="text-3xl font-bold mb-4 text-white">Ce este RoPay?</h2>
              <p className="text-lg text-gray-300 mb-6">
                RoPay este portofelul digital lider în România, oferind o modalitate simplă, sigură și rapidă de a efectua plăți și de a gestiona finanțele tale zilnice.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Wallet className="h-6 w-6 text-blue-400 mr-2" />
                  <span className="text-gray-300">Plăți rapide și fără comisioane</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-6 w-6 text-blue-400 mr-2" />
                  <span className="text-gray-300">Securitate avansată a datelor</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-6 w-6 text-blue-400 mr-2" />
                  <span className="text-gray-300">Transferuri instant între utilizatori</span>
                </div>
              </div>
              <Button 
                className="bg-blue-500 text-white hover:bg-blue-600"
              >
                Află mai multe <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="md:w-1/2 bg-gray-700 flex items-center justify-center p-8">
              <div className="text-center">
                <p className="text-lg text-gray-300">RoPay Illustration</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Features</h2>
          {/* Add feature content here */}
        </div>
      </section>
    </div>
  );

  return (
    <div className="overflow-hidden">
      <div ref={scrollRef} className="continuous-scroll">
        <ContentSection />
        <ContentSection />
      </div>
    </div>
  );
};

export default Index;