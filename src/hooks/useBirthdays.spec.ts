import { test, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';

import { useBirthdays } from './useBirthdays';

test('should use birthdays hook correctly', async () => {
  const { result } = renderHook(() => useBirthdays());

  const { birthdays, fetchBirthdays, isFetching, error } = result.current;

  expect(birthdays).toStrictEqual({});
  expect(isFetching).toBe(false);
  expect(error).toBe(undefined);
  expect(typeof fetchBirthdays).toBe('function');

  await act(async () => {
    fetchBirthdays();
  });

  // TODO: Finish with this test suite
});
