import { useEffect, useState } from "react";
import Articles from "./../data/articles.json";
import { Link } from 'react-router-dom';

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
  };
}

interface ArticleProps {
  id: number; // Identifiant de l'article
}

const ArticleSection: React.FC<ArticleProps> = ({ id }) => {
  const [article, setArticle] = useState<ArticleData | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const articleData = Articles.articles[id - 1];
      setArticle(articleData);
    };
    fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h4 data-scroll data-scroll-speed="3" data-scroll-delay="0.05">{article.title}</h4>
      <div>
        <span data-scroll data-scroll-speed="1" data-scroll-delay="0.1">Domaine : {article.taxonomy.domain}</span>
        <span data-scroll data-scroll-speed="1" data-scroll-delay="0.1">Contenu : {article.taxonomy.content_type}</span>
        <div data-scroll data-scroll-speed="1" data-scroll-delay="0.1">
          {article.taxonomy.themes.map((theme, index) => (
            <span key={index} className="taxonomy">
              {theme}
            </span>
          ))}
        </div>
      </div>
      <a data-scroll data-scroll-speed="2" data-scroll-delay="0.1" href={article.taxonomy.source} target="_blank" rel="noopener noreferrer">
        Lien vers la source
      </a>
      <Link data-scroll data-scroll-speed="2" data-scroll-delay="0.1" to={`/article/${id}`} className="button">Plus d'informations</Link>
    </div>
  );
};

export default ArticleSection;
