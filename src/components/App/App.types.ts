export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  likes: number;
  user: {
    name: string;
  };
}
