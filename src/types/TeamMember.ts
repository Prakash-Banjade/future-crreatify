export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  type: 'leadership' | 'expert';
  email?: string;
  linkedin?: string;
  twitter?: string;
}