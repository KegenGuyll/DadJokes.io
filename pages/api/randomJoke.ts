interface Payload {
  success: boolean;
  body: Joke[];
}

interface Joke {
  _id: string;
  setup: string;
  punchling: string;
  type: string;
}

interface HttpResponse<T> extends Response {
  parsedBody?: T;
}

export async function RandomJokes() {
  return await http<Payload>('https://ghostdemo.xyz/api/random/joke');
}

export async function http<T>(request: RequestInfo): Promise<HttpResponse<T>> {
  const response: HttpResponse<T> = await fetch(request);
  response.parsedBody = await response.json();
  return response;
}
