export interface NavigationConfig {
  sections: {
    title: string;
    items: {
      title: string;
      path: string;
    }[];
  }[];
} 