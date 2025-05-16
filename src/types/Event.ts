export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: 'workshop' | 'conference' | 'webinar';
  image: string;
  isVirtual: boolean;
  seats?: number;
  registerLink: string;
  moreInfoLink?: string;
}