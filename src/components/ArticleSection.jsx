import { useEffect, useState } from "react";
import Articles from "./../data/articles.json";
import { Link } from 'react-router-dom';

function ArticleSection({ id }) {
  const [article, setArticle] = useState(null);

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
}

export default ArticleSection;
