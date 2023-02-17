import { memo } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { BirthsProps } from '../../utils/types';
import BirthdayItem from '../BirthdayItem';

interface Props {
  birthdays: Record<string, BirthsProps[]>;
}

const BirthdaysList = ({ birthdays }: Props) => {
  // Map over the object and return an array of birthdays group by year
  return (
    <>
      {Object.keys(birthdays).map((year) => (
        <div key={uuidv4()}>
          <h2>{year}</h2>

          {birthdays[year].map(({ description }) => (
            <BirthdayItem key={uuidv4()} description={description} />
          ))}
        </div>
      ))}
    </>
  );
};

export default memo(BirthdaysList);
