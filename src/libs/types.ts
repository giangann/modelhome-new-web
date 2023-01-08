export type Project = {
  id: number;
  name: string;
  investor: string;
  location: string;
  square: number;
  year?: string | number;
  thumbnail: string;
  all_image?: string[];
};
