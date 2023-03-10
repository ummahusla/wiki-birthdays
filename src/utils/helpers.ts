import { BirthsProps, HttpResponse } from './types';

export const getTodaysDate = (): {
  m: number;
  d: number;
} => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return {
    m: month,
    d: day,
  };
};

export async function http<T>(request: RequestInfo): Promise<HttpResponse<T>> {
  const response: HttpResponse<T> = await fetch(request);

  try {
    response.parsedBody = await response.json();
  } catch (err) {
    throw new Error('Invalid JSON response');
  }

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response;
}

export const groupBirthdaysByYear = (array: BirthsProps[]) => {
  return array.reduce((acc, curr) => {
    const year = curr.year;

    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(curr);

    return acc;
  }, {} as Record<string, BirthsProps[]>);
};
