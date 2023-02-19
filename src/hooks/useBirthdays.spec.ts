import { test, expect } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';

import { useBirthdays } from './useBirthdays';
import { BirthdayResponse, BirthsProps } from '../utils/types';

test('fetches birthdays correctly', async () => {
  const initial: BirthdayResponse = {
    births: [
      {
        year: '1461',
        description: 'Domenico Grimani, Italian cardinal (d. 1523)',
        wikipedia: [
          {
            title: 'Domenico Grimani',
            wikipedia: 'https://en.wikipedia.org/wiki/Domenico_Grimani',
          },
        ],
      },
      {
        year: '1946',
        description: 'Paul Dean, Canadian guitarist',
        wikipedia: [
          {
            title: 'Paul Dean (guitarist)',
            wikipedia: 'https://en.wikipedia.org/wiki/Paul_Dean_(guitarist)',
          },
        ],
      },
      {
        year: '1946',
        description:
          'Karen Silkwood, American technician and activist (d. 1974)',
        wikipedia: [
          {
            title: 'Karen Silkwood',

            wikipedia: 'https://wikipedia.org/wiki/Karen_Silkwood',
          },
        ],
      },
      {
        year: '1946',
        description: 'Peter Hudson, Australian footballer and coach',
        wikipedia: [
          {
            title: 'Peter Hudson',
            wikipedia: 'https://wikipedia.org/wiki/Peter_Hudson',
          },
        ],
      },
    ],
    date: 'February 19',
    wikipedia: 'https://wikipedia.org/wiki/February_19',
  };
  const expected: Record<string, BirthsProps[]> = {
    '1461': [
      {
        year: '1461',
        description: 'Domenico Grimani, Italian cardinal (d. 1523)',
        wikipedia: [
          {
            title: 'Domenico Grimani',
            wikipedia: 'https://en.wikipedia.org/wiki/Domenico_Grimani',
          },
        ],
      },
    ],
    '1946': [
      {
        year: '1946',
        description: 'Paul Dean, Canadian guitarist',
        wikipedia: [
          {
            title: 'Paul Dean (guitarist)',
            wikipedia: 'https://en.wikipedia.org/wiki/Paul_Dean_(guitarist)',
          },
        ],
      },
      {
        year: '1946',
        description:
          'Karen Silkwood, American technician and activist (d. 1974)',
        wikipedia: [
          {
            title: 'Karen Silkwood',
            wikipedia: 'https://wikipedia.org/wiki/Karen_Silkwood',
          },
        ],
      },
      {
        year: '1946',
        description: 'Peter Hudson, Australian footballer and coach',
        wikipedia: [
          {
            title: 'Peter Hudson',
            wikipedia: 'https://wikipedia.org/wiki/Peter_Hudson',
          },
        ],
      },
    ],
  };

  const { result } = renderHook(() => useBirthdays());

  fetchMock.mockResponse(JSON.stringify(initial));

  await waitFor(() => {
    // TODO: Fix this test
    expect(result.current.isFetching).toBe(true);
  });
});
