export type CaseStudy = {
  id: string;
  partner: string;
  platform: string;
  index: string;
  services: string[];
};

export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  location: string;
  primaryMetric: string;
  metrics: string[];
  gradient: string;
};

export type Service = {
  title: string;
  intro: string;
  items: string[];
};

export type Brand = {
  name: string;
  sector: string;
};
