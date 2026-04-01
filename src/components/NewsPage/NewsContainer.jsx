import { useState, useEffect } from 'react';
import NewsBlock from './NewsBlock';

const NewsContainer = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5b80b737c42a4b85ae864223e05eb67f');
        if (!response.ok) {
          throw new Error('Ошибка при загрузке новостей');
        }
        const data = await response.json();

        if (data.articles && Array.isArray(data.articles)) {
          setNews(data.articles);
        } else {
          throw new Error('Некорректный формат данных');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div className="loading">Загрузка новостей...</div>;
  }

  if (error) {
    return <div className="error">Ошибка: {error}</div>;
  }

  return (
    <div className="news-container">
      {news.map((newsItem, index) => (
        <NewsBlock
          key={newsItem.url || index}
          title={newsItem.title}
          data={new Date(newsItem.publishedAt).toLocaleDateString('ru-RU')}
          linkUrl={newsItem.url}
          picture={newsItem.urlToImage}
          discribe={newsItem.description}
        />
      ))}
    </div>
  );
};

export default NewsContainer;