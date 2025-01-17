import { Button } from "@/components/ui/button";
import { ArrowRight, Wallet, Shield, Zap, CreditCard, Smartphone, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("features");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-teal-800 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Bine ați venit la RoPay
            </h1>
            <p className="text-xl mb-6">
              Simplificați-vă plățile cu portofelul digital lider din România
            </p>
            <Button size="lg" className="bg-white text-teal-800 hover:bg-teal-100">
              Începeți
            </Button>
          </div>
          <div className="md:w-1/2">
            {/* Placeholder for illustration or mockup */}
            <div className="bg-white/20 rounded-lg p-4 text-center">
              <p className="text-lg">Ilustrație sau machetă aici</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Ce este RoPay? Section */}
      <section className="py-16 px-4 bg-transparent">
        <div className="container mx-auto bg-transparent rounded-lg shadow-lg overflow-hidden backdrop-blur-sm">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Ce este RoPay?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                RoPay este portofelul digital lider în România, oferind o modalitate simplă, sigură și rapidă de a efectua plăți și de a gestiona finanțele tale zilnice.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Wallet className="h-6 w-6 text-primary mr-2" />
                  <span className="text-foreground">Plăți rapide și fără comisioane</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-6 w-6 text-primary mr-2" />
                  <span className="text-foreground">Securitate avansată a datelor</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-6 w-6 text-primary mr-2" />
                  <span className="text-foreground">Transferuri instant între utilizatori</span>
                </div>
              </div>
              <Button 
                onClick={scrollToNextSection}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Află mai multe <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="md:w-1/2 bg-muted/50 flex items-center justify-center p-8">
              {/* Placeholder for RoPay illustration */}
              <div className="text-center">
                <p className="text-lg text-muted-foreground">Ilustrație RoPay</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Cum funcționează? Section */}
      <section id="cum-functioneaza" className="py-16 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Cum funcționează?</h2>
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <CreditCard className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">1. Înregistrare și Conectare Card</h3>
                    <p className="text-muted-foreground">
                      Creați-vă contul RoPay și conectați-vă cardul bancar în siguranță pentru a începe să folosiți serviciul.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="md:w-1/2">
                {/* Placeholder for step 1 illustration */}
                <div className="bg-muted rounded-lg p-4 text-center">
                  <p className="text-lg text-muted-foreground">Ilustrație Înregistrare</p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 md:pl-8 mb-8 md:mb-0">
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <Smartphone className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">2. Efectuare Plăți</h3>
                    <p className="text-muted-foreground">
                      Folosiți aplicația RoPay pentru a scana coduri QR, a trimite bani prietenilor sau a plăti facturile cu ușurință.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="md:w-1/2">
                {/* Placeholder for step 2 illustration */}
                <div className="bg-muted rounded-lg p-4 text-center">
                  <p className="text-lg text-muted-foreground">Ilustrație Plăți</p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <CheckCircle className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">3. Gestionare și Monitorizare</h3>
                    <p className="text-muted-foreground">
                      Urmăriți-vă cheltuielile, setați bugete și primiți notificări instantanee pentru toate tranzacțiile.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="md:w-1/2">
                {/* Placeholder for step 3 illustration */}
                <div className="bg-muted rounded-lg p-4 text-center">
                  <p className="text-lg text-muted-foreground">Ilustrație Gestionare</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section (placeholder for smooth scroll) */}
      <section id="features" className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Caracteristici</h2>
          {/* Add feature content here */}
        </div>
      </section>
    </div>
  );
};

export default Index;