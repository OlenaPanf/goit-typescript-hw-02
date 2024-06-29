import axios from 'axios';
import { FetchImagesResponse } from './components/App/App.types';

const accessKey = '-uXzliBzIogoqpuSHMdyPNxEMBdCU-RPnBNhpop5aZo';
axios.defaults.baseURL = 'https://api.unsplash.com';

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
