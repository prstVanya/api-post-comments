import { IPostItem } from 'types';
import { Api, ApiListResponse } from './Api';

class WebApi extends Api {
  constructor(baseUrl: string, options?: RequestInit) {
    super(baseUrl, options);
  }

  getCards():Promise<IPostItem[]> {
    return this.get('/posts')
      .then((data: ApiListResponse<IPostItem>) => {
        const all = data.items.slice(0, 5).map((c) => ({ ...c }));
        return all;
      });
  }

  getComments(id: string):Promise<IPostItem[]> {
    return this.get(`posts/${id}/comments`)
      .then((data: ApiListResponse<IPostItem>) => {
        return data.items.map((comment) => ({ ...comment }));
      });
  }

  putLike(id: string):Promise<IPostItem[]> {
    return this.put(`/posts${id}`, { });
  }

  deleteLike(id: string):Promise<IPostItem[]> {
    return this.delete(`/posts${id}`, { });
  }
}

export const apiPost = new WebApi('https://dummyjson.com');
