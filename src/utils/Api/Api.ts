export type ApiListResponse<Type> = {
  total: number,
  items: Type[]
};

export type ApiPostMethods = 'GET' | 'PUT' | 'DELETE';

export class Api {
  readonly baseUrl: string;

  protected options: RequestInit;

  constructor(baseUrl: string, options: RequestInit = {}) {
    this.baseUrl = baseUrl;
    this.options = {
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers as object ?? {}),
      },
    };
  }

  protected handleResponse(response: Response): Promise<object> {
    if (response.ok) return response.json();
    return response.json()
      .then((data) => Promise.reject(data.error ?? response.statusText));
  }

  get(uri: string) {
    return fetch(this.baseUrl + uri, {
      ...this.options,
      method: 'GET',
    }).then(this.handleResponse);
  }

  put(uri: string, data: object, method: ApiPostMethods = 'PUT') {
    return fetch(this.baseUrl + uri, {
      ...this.options,
      method,
      body: JSON.stringify(data),
    }).then(this.handleResponse);
  }

  delete(uri: string, data?: object, method: ApiPostMethods = 'DELETE') {
    return fetch(this.baseUrl + uri, {
      ...this.options,
      method,
      body: data ? JSON.stringify(data) : undefined,
    }).then(this.handleResponse);
  }
}
