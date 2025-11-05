import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkDirective from "remark-directive";
import rehypeRaw from "rehype-raw";

export type ArticleRenderable = {
  title: string;
  date: string; // ISO or YYYY-MM-DD
  cover?: string | null;
  body: string; // markdown
  category?: string | null;
  readingMinutes?: number;
  sources?: string[];
};

type Props =
  | { article: ArticleRenderable; body?: undefined; sources?: string[]; localMap?: Record<string, string> }
  | { article?: undefined; body: string; sources?: string[]; localMap?: Record<string, string> };

const ArticleContent: React.FC<Props> = (props) => {
  const article = props.article;
  const displayDate = article?.date ? new Date(article.date).toLocaleDateString("fr-FR") : "";
  const body = article ? article.body : props.body || "";
  const sources = (article?.sources || props.sources || []) as string[];
  const localMap = props.localMap;

  return (
    <article className="pb-20">
      {article && (
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
                  <span aria-hidden>🕒</span> {article.readingMinutes} min
                </span>
              )}
            </div>
          </div>
        </header>
      )}

      <section className="mt-10">
        <div className="container mx-auto px-4">
          <div className="prose prose-neutral dark:prose-invert max-w-none prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-img:rounded-xl prose-figure:my-6">
            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkBreaks, remarkDirective]}
              rehypePlugins={[rehypeRaw]}
              components={{
                img: (props) => {
                  const src = props.src || "";
                  const mapped = localMap && src in localMap ? localMap[src] : src;
                  // eslint-disable-next-line jsx-a11y/alt-text
                  return <img {...props} src={mapped} />;
                },
              }}
            >
              {body}
            </ReactMarkdown>

            {Array.isArray(sources) && sources.length > 0 && (
              <section className="mt-10">
                <h3>Sources</h3>
                <ol className="list-decimal pl-5 space-y-1">
                  {sources.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ol>
              </section>
            )}
          </div>
        </div>
      </section>
    </article>
  );
};

export default ArticleContent;


