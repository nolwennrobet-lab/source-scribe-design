import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  slug: string;
}

const ArticleCard = ({ title, excerpt, image, category, readTime, slug }: ArticleCardProps) => {
  return (
    <Link to={`/article/${slug}`} className="group">
      <article className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
        {/* Image */}
        <div className="aspect-[16/10] overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="rounded-full px-3 py-1">
              {category}
            </Badge>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{readTime}</span>
            </div>
          </div>

          <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>

          <p className="text-muted-foreground line-clamp-3 leading-relaxed">
            {excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;
