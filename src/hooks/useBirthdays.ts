import { useState, useCallback, useMemo } from 'react';

import { FETCH_BIRTHDAYS_BY_DATE_URL } from '../utils/consts';
import { getTodaysDate, groupBy, http } from '../utils/helpers';
import { BirthdayResponse, BirthsProps } from '../utils/types';

export function useBirthdays(): {
  birthdays: Record<string, BirthsProps[]>;
  fetchBirthdays: () => Promise<void>;
  isFetching: boolean;
  error: unknown;
} {
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
        FETCH_BIRTHDAYS_BY_DATE_URL(getTodaysDate())
      );

      setBirthdays(data?.parsedBody?.births || []);

      setIsFetching(false);
    } catch (response) {
      setError(response);
    }
  }, [isFetching]);

  // Group the birthdays by year
  const groupedBirthdays = useMemo(
    () => groupBy(birthdays) as Record<string, BirthsProps[]>,
    [birthdays]
  );

  return { birthdays: groupedBirthdays, fetchBirthdays, isFetching, error };
}
