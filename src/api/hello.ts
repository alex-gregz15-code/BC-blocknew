// BLOCKNEW/src/api/hello.ts
//
// GET http://localhost:8000/api/hello
// Quick connectivity check — useful during development.

import { api } from './Client';

export interface HelloResponse {
  message: string;
}

export const helloApi = {
  /** GET /api/hello — ping the backend */
  ping: () => api.get<HelloResponse>('/api/hello'),
};
