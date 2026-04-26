import NewsHero from './hero';
import NewsArticles from './newsArticles';

const News = () => {
  return (
    <main className="pt-16">
      <NewsHero />
      <NewsArticles/>
    </main>
  );
};

export default News;