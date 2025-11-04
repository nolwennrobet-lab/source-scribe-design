import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

export type ArticleRenderable = {
  title: string;
  date: string; // ISO or YYYY-MM-DD
  cover?: string | null;
  body: string; // markdown
  category?: string | null;
  readingMinutes?: number;
};

type Props = {
  article: ArticleRenderable;
};

const ArticleContent: React.FC<Props> = ({ article }) => {
  const displayDate = article.date ? new Date(article.date).toLocaleDateString("fr-FR") : "";

  return (
    <article className="pb-20">
      <header className="pt-12 md:pt-20">
        <div className="container mx-auto px-4">
          {article.category && (
            <div className="mb-4">
              <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs">{article.category}</span>
            </div>
          )}
          {article.cover && (
            <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-muted mb-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={article.cover} alt={article.title} className="w-full h-full object-cover" />
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight mb-4">
            {article.title}
          </h1>
          <div className="text-muted-foreground">
            {displayDate}
            {article.readingMinutes && (
              <span className="ml-4 inline-flex items-center gap-1">
                {/* Simple clock glyph to avoid new imports here */}
                <span aria-hidden>🕒</span> {article.readingMinutes} min
              </span>
            )}
          </div>
        </div>
      </header>

      <section className="mt-10">
        <div className="container mx-auto px-4">
          <div className="prose prose-neutral dark:prose-invert max-w-none prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl">
            <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
              {article.body}
            </ReactMarkdown>
          </div>
        </div>
      </section>
    </article>
  );
};

export default ArticleContent;


