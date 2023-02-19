import { expect, test } from 'vitest';
import { render } from '@testing-library/react';

import BirthdayItem from './index';

test('display link to a birthday item correctly', async () => {
  const birthday = {
    title: 'Domenico Grimani',
    link: 'https://en.wikipedia.org/wiki/Domenico_Grimani',
  };

  const container = render(
    <BirthdayItem description={birthday.title} link={birthday.link} />
  );

  const birthdayLink = await container.getByTestId('birthday-item-link');

  expect(birthdayLink.textContent).toBe(birthday.title);
  expect(birthdayLink.getAttribute('href')).toBe(birthday.link);
  expect(birthdayLink.getAttribute('target')).toBe('_blank');
  expect(birthdayLink.getAttribute('rel')).toBe('noopener noreferrer');
});
