import { memo } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { BirthsProps } from '../../utils/types';
import BirthdayItem from '../BirthdayItem';

interface Props {
  birthdays: Record<string, BirthsProps[]>;
}

const BirthdaysList = ({ birthdays }: Props) => (
  <>
    {Object.keys(birthdays).map((year) => (
      <div key={uuidv4()} className="py-3">
        <h2>{year}</h2>

        {birthdays[year].map(({ description, wikipedia }) => (
          <BirthdayItem
            key={uuidv4()}
            description={description}
            link={wikipedia[0].wikipedia}
          />
        ))}
      </div>
    ))}
  </>
);

export default memo(BirthdaysList);
