import { expect, test } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';

import List from './index';

test('display birthdays list view correctly', async () => {
  render(<List />);

  expect(
    screen.getByText('List of births that occured on this date in the past')
  ).toBeTruthy();

  const button = await screen.getByTestId('fetch-button');
  expect(button).toBeTruthy();
  expect(button.textContent).toBe("Show today's birthdays");

  fireEvent.click(button);

  const spinner = await screen.getByTestId('spinner');
  expect(spinner).toBeTruthy();

  const list = await screen.getByTestId('birthdays-list');
  expect(list).toBeTruthy();
});
