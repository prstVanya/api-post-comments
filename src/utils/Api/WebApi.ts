import { ICommentsItem, IPostItem } from 'types';
import { Api } from './Api';

class WebApi extends Api {
  constructor(baseUrl: string, options?: RequestInit) {
    super(baseUrl, options);
  }

  getCards():Promise<IPostItem[]> {
    return this.get('/posts')
      .then((data: { posts: IPostItem[] }) => {
        const items = data?.posts ?? [];
        return items.slice(0, 5).map((c) => ({ ...c }));
      });
  }

  getPost(id: number):Promise<IPostItem> {
    return this.get(`/posts/${id}`)
      .then((data: IPostItem) => {
        return data;
      });
  }

  getComments(id: string):Promise<ICommentsItem[]> {
    return this.get(`/posts/${id}/comments`)
      .then((data: { comments: ICommentsItem[] }) => {
        const items = data?.comments ?? [];
        return items.map((c) => ({ ...c }));
      });
  }
}

export const apiPost = new WebApi('https://dummyjson.com');
