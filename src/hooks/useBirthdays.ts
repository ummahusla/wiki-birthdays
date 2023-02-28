import { DateTime } from 'luxon';
import { useState, useCallback, useMemo } from 'react';

import { FETCH_BIRTHDAYS_BY_DATE_URL } from '../utils/consts';
import { getTodaysDate, groupBirthdaysByYear, http } from '../utils/helpers';
import { BirthdayResponse, BirthsProps } from '../utils/types';

export function useBirthdays(): {
  birthdays: Record<string, BirthsProps[]>;
  fetchBirthdays: () => Promise<void>;
  isFetching: boolean;
  error: unknown;
  prevDay: () => void;
  nextDay: () => void;
} {
  const { m, d } = getTodaysDate();

  const DATE_FORMAT = (m: number, d: number): string => {
    return `${m}/${d}`;
  };

  const initialDate = DateTime.now().set({
    month: m,
    day: d,
  });
  const [date, setDate] = useState<DateTime>(initialDate);

  const handlePreviousDateChange = () => {
    setDate(date.minus({ days: 1 }));
    fetchBirthdays();
  };

  const handleNextDateChange = () => {
    setDate(date.plus({ days: 1 }));
    fetchBirthdays();
  };

  // Create a state variable to store the data from the API
  const [birthdays, setBirthdays] = useState<BirthsProps[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState<unknown>();

  // Fetch the data from the API
  const fetchBirthdays = useCallback(async () => {
    if (isFetching) return;
    setIsFetching(true);

    try {
      const data = await http<BirthdayResponse>(
        FETCH_BIRTHDAYS_BY_DATE_URL(DATE_FORMAT(date.month, date.day))
      );

      setBirthdays(data?.parsedBody?.births || []);

      setIsFetching(false);
    } catch (response) {
      if (response instanceof Error) {
        setError(response);
      }
    }
  }, [isFetching, date]);

  // Group the birthdays by year
  const groupedBirthdays: Record<string, BirthsProps[]> = useMemo(
    () => groupBirthdaysByYear(birthdays),
    [birthdays]
  );

  return {
    birthdays: groupedBirthdays,
    fetchBirthdays,
    isFetching,
    error,
    prevDay: handlePreviousDateChange,
    nextDay: handleNextDateChange,
  };
}
