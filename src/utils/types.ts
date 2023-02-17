export interface BirthdayResponse {
  births: BirthsProps[];
  date: string;
  wikipedia: string;
}

export interface BirthsProps {
  year: string;
  description: string;
  wikipedia: {
    title: string;
    wikipedia: string;
  }[];
}

export interface BirthdayProps {
  year: string;
  description: string;
}

export interface HttpResponse<T> extends Response {
  parsedBody?: T;
}
