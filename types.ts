
export interface Anime {
  mal_id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
      large_image_url: string;
    };
  };
  type: string;
  score: number | null;
  synopsis: string | null;
}

export interface AnimeDetails extends Anime {
  episodes: number | null;
  status: string;
  aired: {
    string: string;
  };
  season: string | null;
  year: number | null;
  studios: { name: string }[];
  genres: { name: string }[];
  duration: string;
  rating: string;
  trailer: {
    embed_url: string | null;
  };
}

export interface PaginationInfo {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
}

export interface JikanPaginatedResponse {
  data: Anime[];
  pagination: PaginationInfo;
}

export interface StreamingService {
  name: string;
  url: string;
}
