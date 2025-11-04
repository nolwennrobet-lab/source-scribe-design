import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-semibold text-foreground">
              [Nom du site]
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Articles clairs, sourcés et élégants sur la beauté, les lieux et les événements.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Navigation</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/articles" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Articles
              </Link>
              <Link to="/thematiques" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Thématiques
              </Link>
              <Link to="/a-propos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                À propos
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Légal</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/mentions-legales" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Mentions légales
              </Link>
              <Link to="/confidentialite" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/rss" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Flux RSS
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Newsletter</h4>
            <p className="text-sm text-muted-foreground">
              Recevez les nouveaux articles chaque semaine
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Votre email"
                className="rounded-full"
              />
              <Button size="icon" className="rounded-full bg-primary hover:bg-primary/90">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 [Nom du site]. Tous droits réservés.
          </p>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent">
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
