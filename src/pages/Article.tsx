import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Articles from "./../data/articles.json";
import "./contact.css"; // Déplacez les styles dans un fichier CSS pour un meilleur gestion

interface ArticleData {
  title: string;
  taxonomy: {
    domain: string;
    subdomain: string;
    themes: string[];
    audience: string[];
    content_type: string;
    professional_use: string;
    source: string;
  };
  content: {
    presentation: string;
    why_interesting: string;
    professional_use: string;
    system?: string;
  };
}

function Article() {
  const { id } = useParams<{ id: string }>(); // Récupère l'ID depuis l'URL
  const [article, setArticle] = useState<ArticleData | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      if (id) {
        const articleData = Articles.articles[parseInt(id, 10) - 1];
        setArticle(articleData);
      }
    };
    fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <section>
        <h1 data-scroll data-scroll-speed="2" data-scroll-delay="0.1">
          {article.title}
        </h1>
        <div>
          <p>
            <strong data-scroll data-scroll-speed="2" data-scroll-delay="0.1">
              Domaine:
            </strong>{" "}
            {article.taxonomy.domain}
          </p>
          <p>
            <strong data-scroll data-scroll-speed="2" data-scroll-delay="0.1">
              Sous-domaines:
            </strong>{" "}
            {article.taxonomy.subdomain}
          </p>
          <p>
            <strong data-scroll data-scroll-speed="2" data-scroll-delay="0.1">
              Themes:
            </strong>{" "}
            {article.taxonomy.themes.join(", ")}
          </p>
          <p>
            <strong data-scroll data-scroll-speed="2" data-scroll-delay="0.1">
              Audience:
            </strong>{" "}
            {article.taxonomy.audience.join(", ")}
          </p>
          <p>
            <strong data-scroll data-scroll-speed="2" data-scroll-delay="0.1">
              Style de contenu:
            </strong>{" "}
            {article.taxonomy.content_type}
          </p>
          <p>
            <strong data-scroll data-scroll-speed="2" data-scroll-delay="0.1">
              Utilisation professionnelle:
            </strong>{" "}
            {article.taxonomy.professional_use}
          </p>
          <a
            href={article.taxonomy.source}
            target="_blank"
            rel="noopener noreferrer"
            data-scroll data-scroll-speed="3" data-scroll-delay="0.1"
          >
            La source
          </a>
        </div>
      </section>
      <section className="info">
        <h2 data-scroll data-scroll-speed="4" data-scroll-delay="0.05">Article</h2>
        <p data-scroll data-scroll-speed="1" data-scroll-delay="0.05">{article.content.presentation}</p>
        <p data-scroll data-scroll-speed="3" data-scroll-delay="0.05">{article.content.why_interesting}</p>
        <p data-scroll data-scroll-speed="2" data-scroll-delay="0.05">{article.content.professional_use}</p>

        {article.content.system && <p data-scroll data-scroll-speed="4" data-scroll-delay="0.05">{article.content.system}</p>}
      </section>
    </div>
  );
}

export default Article;
