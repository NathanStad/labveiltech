import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Articles from "../data/articles.json";
import "./contact.css";

function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

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
              Thèmes:
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
