import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { site } from "@/lib/siteContent";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-semibold text-foreground">
              {site.name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              À la Brestoise — Des articles à la brestoise : Événements, lieux et beauté
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
              <Link to={site.footer.legal.mentions} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Mentions légales
              </Link>
              <Link to={site.footer.legal.privacy} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Politique de confidentialité
              </Link>
              <Link to={site.footer.legal.terms} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Conditions d’utilisation
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
            © 2025 {site.name}. Tous droits réservés.
          </p>
          
          <div className="flex items-center gap-4">
            <a href={site.footer.social.linkedin} target="_blank" rel="noreferrer" className="rounded-full hover:bg-accent p-2 transition duration-200">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={site.footer.social.tiktok} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
