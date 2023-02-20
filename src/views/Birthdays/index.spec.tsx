import { expect, test, vi, describe, beforeEach, afterEach } from 'vitest';
import { render, fireEvent } from '@testing-library/react';

import List from './index';
import { useBirthdays } from '../../hooks/useBirthdays';
import { BirthsProps } from '../../utils/types';

vi.mock('../../hooks/useBirthdays');

const birthdayStub: BirthsProps = {
  year: 'year',
  description: 'desc',
  wikipedia: [
    {
      title: 'title',
      wikipedia: 'wiki',
    },
  ],
};

describe('Birthdays list view ', () => {
  const fetchBirthdays = vi.fn();
  const useBirthDaysMock = vi.mocked(useBirthdays);

  beforeEach(() => {
    useBirthDaysMock.mockReturnValue({
      birthdays: {
        test: [birthdayStub],
      },
      fetchBirthdays,
      error: undefined,
      isFetching: false,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('display birthdays list view correctly', async () => {
    const { queryByTestId } = render(<List />);

    expect(queryByTestId('spinner')).toBeFalsy();
    expect(queryByTestId('fetch-button')).toBeFalsy();
    expect(queryByTestId('birthdays-list')).toBeTruthy();
  });

  test('shows spinner', async () => {
    useBirthDaysMock.mockReturnValue({
      fetchBirthdays,
      error: undefined,
      birthdays: {},
      isFetching: true,
    });

    const { queryByTestId } = render(<List />);

    const spinner = queryByTestId('spinner');
    expect(spinner).toBeTruthy();
  });

  test('fetches birthdays on click', async () => {
    useBirthDaysMock.mockReturnValue({
      fetchBirthdays,
      error: undefined,
      birthdays: {},
      isFetching: false,
    });

    const { getByTestId } = render(<List />);

    const button = getByTestId('fetch-button');

    fireEvent.click(button);

    expect(fetchBirthdays).toBeCalled();
  });

  test('shows error modal on error', async () => {
    useBirthDaysMock.mockReturnValue({
      fetchBirthdays,
      error: 'error',
      birthdays: {},
      isFetching: false,
    });

    const { getByTestId } = render(<List />);

    const errorModal = getByTestId('error-modal');

    expect(errorModal).toBeTruthy();
  });
});
