import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-portrait.jpeg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <article className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              À propos
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une double compétence : rédaction beauté et reportages locaux
            </p>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={heroImage}
                alt="Portrait"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  Bonjour, je suis [Votre prénom]
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Rédactrice spécialisée en contenus beauté et e-mailings, je partage sur ce blog 
                  mes analyses rigoureuses des produits cosmétiques, mes découvertes de nouveaux 
                  lieux et mes retours d'événements locaux.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-display font-semibold text-foreground">
                  Une approche exigeante
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Chaque article publié ici repose sur une recherche approfondie, des sources 
                  vérifiées et une écriture claire. Mon objectif : vous offrir des contenus 
                  informatifs qui vous aident vraiment dans vos choix.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-display font-semibold text-foreground">
                  Mes valeurs
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Rigueur scientifique dans l'analyse des ingrédients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Clarté et accessibilité de l'information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Approche terrain pour les reportages locaux</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Élégance dans la forme et le fond</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Expertise */}
          <div className="bg-card rounded-2xl p-8 md:p-12 space-y-8">
            <h2 className="text-3xl font-display font-semibold text-foreground text-center">
              Domaines d'expertise
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Beauté & Cosmétique</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Tests produits, décryptage d'ingrédients, analyses scientifiques, guides d'achat
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Commerces & Lieux</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ouvertures de boutiques, concept-stores, cafés et ateliers créatifs
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Événements</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Salons professionnels, lancements de marques, initiatives territoriales
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default About;
