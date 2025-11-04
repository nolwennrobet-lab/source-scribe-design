import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Camera, Sparkles, Mail } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

  const [testimonials, setTestimonials] = useState<{ message: string; nom: string; fonction_entreprise?: string }[]>([]);

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
                  <div className="mt-6">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="processus">
                        <AccordionTrigger>En savoir plus</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Premiers contacts → devis et rencontre → mail de récap → utilisation de story-telling → date à fixer
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-primary">{service.price}</span>
                  <Button variant="outline" className="rounded-full transition duration-200 hover:opacity-90">
                    Intéressé·e
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* CTA + Contact Form */}
          <div className="bg-accent/30 rounded-3xl p-8 md:p-12 space-y-6">
            <h2 className="text-3xl font-display font-bold text-foreground text-center">Un projet en tête ? Demander un devis :</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center">
              Discutons ensemble de vos besoins. Chaque prestation est personnalisable selon vos objectifs et votre budget.
            </p>
            <ContactForm />
          </div>

          {/* Testimonials */}
          <div className="mt-20 space-y-8">
            <h2 className="text-3xl font-display font-bold text-foreground text-center">
              Ils m'ont fait confiance
            </h2>
            {testimonials.length > 0 && (
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                  <Card key={i} className="bg-card rounded-2xl border-border">
                    <CardContent className="pt-6">
                      <p className="text-muted-foreground italic mb-4">“{t.message}”</p>
                      <p className="font-semibold text-foreground">— {t.nom}{t.fonction_entreprise ? `, ${t.fonction_entreprise}` : ""}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            <div className="max-w-2xl mx-auto">
              <TestimonialForm onAdd={(t) => setTestimonials((prev) => [t, ...prev])} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const emailValid = /\S+@\S+\.\S+/.test(email);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !emailValid || !message) {
      toast({ title: "Veuillez remplir les champs requis" });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, message }),
      });
      if (res.ok) {
        toast({ title: "Merci !" });
        setName("");
        setEmail("");
        setCompany("");
        setMessage("");
      } else {
        const j = await res.json().catch(() => ({}));
        toast({ title: j.error || "Erreur serveur" });
      }
    } catch (err) {
      toast({ title: "Erreur réseau" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4">
      <Input placeholder="Nom*" value={name} onChange={(e) => setName(e.target.value)} required className="rounded-full" />
      <Input type="email" placeholder="E-mail*" value={email} onChange={(e) => setEmail(e.target.value)} required className="rounded-full" />
      <Input placeholder="Société (optionnel)" value={company} onChange={(e) => setCompany(e.target.value)} className="rounded-full md:col-span-2" />
      <Textarea placeholder="Message*" value={message} onChange={(e) => setMessage(e.target.value)} required className="md:col-span-2" />
      <div className="md:col-span-2 flex justify-end">
        <Button type="submit" disabled={loading} className="rounded-full transition duration-200 hover:opacity-90">
          {loading ? "Envoi..." : "Envoyer"}
        </Button>
      </div>
    </form>
  );
}

function TestimonialForm({ onAdd }: { onAdd: (t: { message: string; nom: string; fonction_entreprise?: string }) => void }) {
  const [nom, setNom] = useState("");
  const [fonction, setFonction] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!nom || !message) {
      toast({ title: "Nom et texte requis" });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/testimonial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: nom, role: fonction, text: message }),
      });
      if (res.ok) {
        toast({ title: "Merci pour votre témoignage !" });
        onAdd({ message, nom, fonction_entreprise: fonction || undefined });
        setNom("");
        setFonction("");
        setMessage("");
      } else {
        const j = await res.json().catch(() => ({}));
        toast({ title: j.error || "Erreur serveur" });
      }
    } catch (err) {
      toast({ title: "Erreur réseau" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="bg-card border border-border rounded-2xl p-6 space-y-3">
      <h3 className="text-xl font-display font-semibold text-foreground">Proposer un témoignage</h3>
      <div className="grid md:grid-cols-2 gap-3">
        <Input placeholder="Nom*" value={nom} onChange={(e) => setNom(e.target.value)} required className="rounded-full" />
        <Input placeholder="Fonction (optionnel)" value={fonction} onChange={(e) => setFonction(e.target.value)} className="rounded-full" />
        <Textarea placeholder="Votre témoignage*" value={message} onChange={(e) => setMessage(e.target.value)} required className="md:col-span-2" />
      </div>
      <div className="flex justify-end">
        <Button type="submit" disabled={loading} className="rounded-full transition duration-200 hover:opacity-90">Envoyer</Button>
      </div>
    </form>
  );
}
