export const BASE_API_URL = 'https://byabbe.se/on-this-day';

export const FETCH_BIRTHDAYS_BY_DATE_URL = (date: string) =>
  `${BASE_API_URL}/${date}/births.json`;
