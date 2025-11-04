import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-portrait.jpeg";

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
                Des articles clairs, sourcés et élégants
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Beauté, lieux & événements
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Explorez des contenus rigoureux sur la beauté, découvrez de nouveaux commerces 
              et vivez les événements locaux à travers des articles soigneusement rédigés.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
              >
                Lire les articles
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 border-2 hover:bg-rose hover:border-rose transition-colors"
              >
                Proposer un sujet
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
              <img
                src={heroImage}
                alt="Portrait professionnel"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative arch */}
            <div className="absolute -top-8 -right-8 w-32 h-32 border border-border rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
