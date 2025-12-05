export interface JobPosting {
  id: string;
  title: string;
  company: string;
  location: string;
  country: string;
  publishedAt: string;
  url: string;
  descriptionSnippet: string;
  source: string;
  visaType: string;
}

export interface SearchFilters {
  query: string;
  countries: string[];
}

