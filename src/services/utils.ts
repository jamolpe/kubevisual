export const API_BASE = 'http://localhost:3001';

export interface ApiResponse<T> {
  body: T;
  code: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleRequest = (response: Response): ApiResponse<any> => {
  if (!response.ok) {
    throw new Error('request error happened');
  }
  return { body: response.json(), code: response.status };
};
