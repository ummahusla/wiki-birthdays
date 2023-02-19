import { expect, test } from 'vitest';

import { getTodaysDate, groupBirthdaysByYear } from './helpers';
import { BirthsProps } from './types';

test('should return the current date in the format "MM/DD"', () => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  expect(getTodaysDate()).toBe(`${month}/${day}`);
});

test('should return an object with the birthdays grouped by year', () => {
  const initial: BirthsProps[] = [
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
      description: 'Karen Silkwood, American technician and activist (d. 1974)',
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
  ];

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

  expect(groupBirthdaysByYear(initial)).toEqual(expected);
});
