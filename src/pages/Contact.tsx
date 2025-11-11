import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message envoyé avec succès !");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Contact professionnel
            </h1>
            <p className="text-lg text-muted-foreground">
              Un projet de collaboration ? Remplissez ce formulaire et je reviendrai vers vous rapidement.
            </p>
            <p className="text-sm">
              <a href={"mailto:nolwennalabrestoise@gmail.com"} className="underline">
                nolwennalabrestoise@gmail.com
              </a>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-card rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nom complet *</Label>
                <Input id="name" required className="rounded-lg" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" required className="rounded-lg" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="company">Société</Label>
                <Input id="company" className="rounded-lg" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">Ville</Label>
                <Input id="city" className="rounded-lg" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="project-type">Type de projet *</Label>
              <Select required>
                <SelectTrigger className="rounded-lg">
                  <SelectValue placeholder="Sélectionnez un type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="article-beaute">Article beauté</SelectItem>
                  <SelectItem value="ouverture">Ouverture de commerce</SelectItem>
                  <SelectItem value="evenement">Couverture d'événement</SelectItem>
                  <SelectItem value="interview">Interview / Portrait</SelectItem>
                  <SelectItem value="newsletter">Newsletter / E-mailing</SelectItem>
                  <SelectItem value="autre">Autre</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="budget">Budget indicatif</Label>
                <Input id="budget" placeholder="Ex: 500€" className="rounded-lg" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="deadline">Délai souhaité</Label>
                <Input id="deadline" placeholder="Ex: Dans 2 semaines" className="rounded-lg" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea 
                id="message" 
                required 
                rows={6}
                placeholder="Décrivez votre projet, vos besoins et vos attentes..."
                className="rounded-lg resize-none"
              />
            </div>

            <div className="flex items-start gap-3">
              <Checkbox id="consent" required className="mt-1" />
              <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                J'accepte que mes données soient collectées et traitées dans le cadre de ma demande. 
                Conformément au RGPD, vous pouvez exercer vos droits en me contactant.
              </Label>
            </div>

            <Button type="submit" size="lg" className="w-full rounded-full bg-primary hover:bg-primary/90">
              Envoyer ma demande
            </Button>
          </form>

          {/* Info */}
          <div className="mt-12 text-center space-y-4">
            <p className="text-muted-foreground">
              Délai de réponse : 48h ouvrées maximum
            </p>
            <p className="text-sm text-muted-foreground">
              Pour toute question urgente, vous pouvez également me contacter sur les réseaux sociaux.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
