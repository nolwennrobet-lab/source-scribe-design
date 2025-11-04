import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import beautyHero from "@/assets/beauty-hero.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";
import skincareDetail from "@/assets/skincare-detail.jpg";
import boutiqueExterior from "@/assets/boutique-exterior.jpg";

const Thematiques = () => {
  const themes = [
    {
      title: "Beauté & Cosmétique",
      description: "Tests produits, décryptage d'ingrédients et guides scientifiques pour faire les bons choix beauté",
      image: beautyHero,
      count: "24 articles",
      category: "Beauté"
    },
    {
      title: "Nouveaux commerces",
      description: "Découvrez les ouvertures de boutiques, concept-stores et enseignes qui font bouger la ville",
      image: boutiqueExterior,
      count: "12 articles",
      category: "Nouveaux commerces"
    },
    {
      title: "Expériences & Lieux",
      description: "Cafés, ateliers créatifs et espaces hybrides : des lieux à vivre et à découvrir",
      image: cafeInterior,
      count: "18 articles",
      category: "Expériences & Lieux"
    },
    {
      title: "Science & Décryptage",
      description: "Analyses approfondies d'ingrédients, études cliniques et vérités scientifiques",
      image: skincareDetail,
      count: "15 articles",
      category: "Science & Décryptage"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Thématiques
            </h1>
            <p className="text-xl text-muted-foreground">
              Explorez les contenus par univers. De la beauté scientifique aux nouveaux lieux 
              en passant par les événements locaux.
            </p>
          </div>

          {/* Themes Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {themes.map((theme, index) => (
              <Link 
                key={index}
                to={`/articles?category=${encodeURIComponent(theme.category)}`}
                className="group"
              >
                <article className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={theme.image}
                      alt={theme.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 space-y-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                        {theme.title}
                      </h2>
                      <span className="text-sm text-muted-foreground">{theme.count}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {theme.description}
                    </p>
                    <Button variant="ghost" className="group-hover:translate-x-2 transition-transform">
                      Voir tous les articles →
                    </Button>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Additional Categories */}
          <div className="mt-20 bg-accent/30 rounded-3xl p-12 text-center space-y-8">
            <h2 className="text-3xl font-display font-bold text-foreground">
              Autres catégories
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" className="rounded-full">
                Événements
              </Button>
              <Button variant="outline" className="rounded-full">
                Portraits & Interviews
              </Button>
              <Button variant="outline" className="rounded-full">
                Guides pratiques
              </Button>
              <Button variant="outline" className="rounded-full">
                Sélections shopping
              </Button>
            </div>
            <p className="text-muted-foreground">
              Explorez plus de contenus dans ces thématiques complémentaires
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Thematiques;
