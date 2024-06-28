import axios from 'axios';

const accessKey = '-uXzliBzIogoqpuSHMdyPNxEMBdCU-RPnBNhpop5aZo';
axios.defaults.baseURL = 'https://api.unsplash.com';

interface Image {
  id: string;
  urls: {
    small: string; //карточка
    regular: string; //модалка
  };
  likes: number; //модалка
  user: {
    name: string;
  };
}

interface FetchImagesResponse {
  results: Image[]; //масив карток
  totalPages: number;
}

export const fetchImagesWithParams = async (
  keyword: string,
  currentPage: number
): Promise<FetchImagesResponse> => {
  const params = {
    client_id: accessKey,
    query: keyword,
    page: currentPage,
    per_page: 12,
  };

  const response = await axios.get('/search/photos', { params });
  return {
    results: response.data.results,
    totalPages: response.data.total_pages,
  };
};

//=============Оригінал=====================================
// export const fetchImagesWithParams = async (keyword, currentPage) => {
//   const params = {
//     client_id: accessKey,
//     query: keyword,
//     page: currentPage,
//     per_page: 12,
//   };

//   const response = await axios.get('/search/photos', { params });
//   return {
//     results: response.data.results,
//     totalPages: response.data.total_pages,
//   };
// };
