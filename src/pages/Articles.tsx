import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CategoryFilter from "@/components/CategoryFilter";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import beautyHero from "@/assets/beauty-hero.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";
import skincareDetail from "@/assets/skincare-detail.jpg";
import boutiqueExterior from "@/assets/boutique-exterior.jpg";

const Articles = () => {
  const categories = [
    "Tous",
    "Beauté",
    "Nouveaux commerces",
    "Expériences & Lieux",
    "Événements",
    "Portraits",
    "Science & Décryptage"
  ];

  const [activeCategory, setActiveCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");

  const allArticles = [
    {
      title: "Acide hyaluronique : mythes vs données scientifiques",
      excerpt: "Décryptage scientifique de cet ingrédient star de la cosmétique. Entre promesses marketing et réalité clinique.",
      image: beautyHero,
      category: "Beauté",
      readTime: "8 min",
      slug: "acide-hyaluronique-mythes-vs-donnees"
    },
    {
      title: "5 ouvertures à ne pas manquer ce mois-ci",
      excerpt: "Découvrez les nouveaux commerces qui réinventent l'expérience shopping dans votre ville.",
      image: boutiqueExterior,
      category: "Nouveaux commerces",
      readTime: "6 min",
      slug: "5-ouvertures-ne-pas-manquer"
    },
    {
      title: "Une journée dans un café céramique : récit & conseils",
      excerpt: "Immersion dans un lieu hybride où se mêlent café de spécialité et atelier de céramique.",
      image: cafeInterior,
      category: "Expériences & Lieux",
      readTime: "10 min",
      slug: "journee-cafe-ceramique"
    },
    {
      title: "Niacinamide 10% : quand est-ce pertinent ?",
      excerpt: "Analyse approfondie de la niacinamide en concentration élevée avec études cliniques.",
      image: skincareDetail,
      category: "Science & Décryptage",
      readTime: "7 min",
      slug: "niacinamide-10-pertinence"
    },
    {
      title: "SPF 50 au quotidien : mode d'emploi complet",
      excerpt: "Tout ce qu'il faut savoir sur la protection solaire quotidienne.",
      image: beautyHero,
      category: "Beauté",
      readTime: "9 min",
      slug: "spf-50-quotidien-mode-emploi"
    },
    {
      title: "Inside [Nom du salon] : tendances 2025",
      excerpt: "Reportage exclusif depuis le plus grand salon professionnel de la beauté.",
      image: skincareDetail,
      category: "Événements",
      readTime: "12 min",
      slug: "inside-salon-tendances-2025"
    }
  ];

  const filteredArticles = allArticles
    .filter(article => activeCategory === "Tous" || article.category === activeCategory)
    .filter(article => 
      searchQuery === "" || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 space-y-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Tous les articles
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explorez l'ensemble des contenus par thématique ou recherchez un sujet précis
            </p>
          </div>

          {/* Search */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Rechercher un article..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 rounded-full h-12"
              />
            </div>
          </div>

          {/* Category Filter */}
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filteredArticles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                Aucun article ne correspond à votre recherche
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Articles;
