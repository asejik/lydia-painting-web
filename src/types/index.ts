export interface Project {
  id?: string;
  name: string;
  location: string;
  description: string;
  featuredImage: string;
  gallery: string[];
  createdAt?: any;
  // New Commercial Fields
  gc?: string;
  size?: string;
  contractValue?: string;
  scope?: string;
  completionDate?: string;
  challenges?: string;
  results?: string;
}