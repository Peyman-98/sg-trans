// eslint-disable-next-line @typescript-eslint/no-var-requires
const fetch = require('isomorphic-fetch');
import { Language } from './interfces/language';
import { Options } from './interfces/options';

export class SelectedTrans {
  private static _instance: SelectedTrans;
  private readonly baseUrl = 'https://trans.selectedstartups.com/api';

  constructor(private readonly options: Options) {}

  static init(options: Options) {
    return this._instance || (this._instance = new this(options));
  }

  async getLanguages(): Promise<Language[]> {
    const url = `${this.baseUrl}${this.options.key}`;
    const headers = {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NmE2MjAzYi04YjgxLTQxNTctOTVkMy01YTQ3ZDg1ZTdmNzciLCJqdGkiOiI0NjhkMjg4OTIwZTY3NWIxODgxZThiMTUxYmIyYjliMmI1YzA5MmNhMzBjZjU4MjUxYTQ1NDRkNjUyYzBlYWViOWQzNDU5NTk1YjVkM2M3YiIsImlhdCI6MTY1NjQwMjYwNS43MTk3MzgsIm5iZiI6MTY1NjQwMjYwNS43MTk3NDIsImV4cCI6MTY4NzkzODYwNS43MTM1NzIsInN1YiI6IjEiLCJzY29wZXMiOlsiYWRtaW4iXX0.IgdV8xG8C7Rh0xXZ6NZxtrs7FcH-yPRlFXiJ8VDyYUqKv4QyXkQW4Bvoo0dtC62phr18TrZ9l5WH_xxCX-lxZAH3PLvykxMOdQHNnpQl2hnhzKVmtp8HaMC1cRZJPBvlpg84f2eaExgQaBuXRXb_n3pfAu6XgMzrTtlk3qaLWTpSSwOWVkijd4yiiYv3NRBeRcDczyYDtcalT9V9M22Y2twPW-VtZS4lvoq4tZlIqGFruZ82YjuYnBZFIf-3OTdKpgdVwR8n3rZB0W_n8TZs7oHfQFCUSDAZXgLYIpXRUQvA2HrvIg2kR9XN1c_pz7OMJQ7SC74RS13_R4kWzmBQMrIFj6hh1JRgysAS0rktsO-ArJ-QgRzdHF43GRlasXuHVfOFWMdyIqowiOL6eH5QvI5ZlDBUYA92A5ALkCDw-62p_tgNCfqmNpJn2-HwouuPIh_18DxvB_WFG2nH5VgAG7-5689p1qWJYYOlPUcqkAqMWuXUsKWhT-aWgf6EbL4NvJSYOaKorFOv6P2h08gIwdQChgUxPYOurytaRItnQghtywtQF89d4qvv9CrAUTlse37JkQwJ7JdCdP8hKOpWuALhuf1UGCalpVeZJqk9YMtKosSGHnP-Zg7d_Knm1x-P5KPRZVermAJXXoUSzko63aVloVj-nnA1BNHDSnY6b6Q'
    };
    const response = await fetch(url, { headers });
    return response.json() as Promise<Language[]>;
  }

  async getTodo(): Promise<{ id: number }> {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return response.json() as Promise<{ id: number }>;
  }
}
