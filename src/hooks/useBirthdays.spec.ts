import { test, describe, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';

import { useBirthdays } from './useBirthdays';
import { http } from '../utils/helpers';
import { FETCH_BIRTHDAYS_BY_DATE_URL } from '../utils/consts';

vi.mock('../utils/helpers', async () => {
  const helpers = await vi.importActual('../utils/helpers');

  // @ts-expect-error
  return { ...helpers, http: vi.fn() };
});

describe('useBirthdays hook', () => {
  const httpMock = vi.mocked(http);

  beforeEach(() => {
    // @ts-ignore
    httpMock.mockImplementation(async () => ({
      parsedBody: {
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
        ],
      },
    }));
  });

  test('fetches birthdays correctly', async () => {
    const hook = renderHook(() => useBirthdays());

    const expected = {
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
    };

    await act(async () => {
      await hook.result.current.fetchBirthdays();
    });

    expect(http).toBeCalledWith(FETCH_BIRTHDAYS_BY_DATE_URL('2/20'));

    expect(hook.result.current.birthdays).toEqual(expected);
  });
});
