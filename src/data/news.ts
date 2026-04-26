import forbesNewsImage from '../assets/news/forbesNews.jpg'

export type NewsItem = {
  id: number;
  titleKey: string;
  summaryKey: string;
  date: string;
  url: string;
  external: boolean;
  image:string;
}

export const newsItems:NewsItem[]= [
  {
    id: 1,
    titleKey: 'news.items.dressler.title',
    summaryKey: 'news.items.dressler.summary',
    date: '2024',
    url: 'https://forbes.ge/en/dressler-consulting-becomes-a-strategic-investor-in-telagri/',
    external: true,
    image:forbesNewsImage,
  }
]