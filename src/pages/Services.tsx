import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Camera, Sparkles, Mail } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Ouverture de commerce",
      description: "Pack complet pour le lancement de votre boutique",
      features: [
        "Interview approfondie",
        "Reportage photo (8-12 images)",
        "Article de 800-1200 mots",
        "Publication sur le blog",
        "Partage sur les réseaux sociaux"
      ],
      price: "À partir de 450€"
    },
    {
      icon: Camera,
      title: "Couverture d'événement",
      description: "Du teasing à la restitution complète",
      features: [
        "Annonce avant l'événement",
        "Couverture photo pendant",
        "Article récapitulatif après",
        "Sélection de 15-20 photos",
        "Stories et posts en direct"
      ],
      price: "À partir de 550€"
    },
    {
      icon: Sparkles,
      title: "Storytelling de marque",
      description: "Racontez l'histoire de votre atelier ou produit",
      features: [
        "Immersion d'une journée",
        "Narration sur-mesure",
        "Photos d'ambiance",
        "Interview des fondateurs",
        "Article long format"
      ],
      price: "Sur devis"
    },
    {
      icon: Mail,
      title: "Newsletter & E-mailing",
      description: "Conception et rédaction de vos campagnes",
      features: [
        "Stratégie éditoriale",
        "Rédaction des contenus",
        "Design responsive",
        "Intégration technique",
        "Analyse des performances"
      ],
      price: "À partir de 350€"
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
              Services & Partenariats
            </h1>
            <p className="text-xl text-muted-foreground">
              Des prestations sur-mesure pour valoriser votre commerce, événement ou marque 
              à travers des contenus éditoriaux de qualité
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="bg-card rounded-2xl border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-display">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-primary">{service.price}</span>
                  <Button variant="outline" className="rounded-full">
                    En savoir plus
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-accent/30 rounded-3xl p-12 text-center space-y-6">
            <h2 className="text-3xl font-display font-bold text-foreground">
              Un projet en tête ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discutons ensemble de vos besoins. Chaque prestation est personnalisable 
              selon vos objectifs et votre budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90">
                Demander un devis
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8">
                Télécharger le media kit
              </Button>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-20 space-y-8">
            <h2 className="text-3xl font-display font-bold text-foreground text-center">
              Ils m'ont fait confiance
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="bg-card rounded-2xl border-border">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground italic mb-4">
                      "Un travail remarquable qui a parfaitement capturé l'essence 
                      de notre espace. L'article a généré un bel afflux de visiteurs."
                    </p>
                    <p className="font-semibold text-foreground">— Nom, Fonction</p>
                    <p className="text-sm text-muted-foreground">Entreprise</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
