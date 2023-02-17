import BirthdaysList from '../../components/BirthdaysList';
import { useBirthdays } from '../../hooks/useBirthdays';

function List() {
  const { birthdays, fetchBirthdays, isFetching, error } = useBirthdays();

  return (
    <div>
      <h1>List of births that occured on this date in the past</h1>

      <>
        {isFetching && <h1>Loading...</h1>}

        {error && <h1>Error...</h1>}
      </>

      {birthdays && Object.keys(birthdays).length === 0 && (
        <button onClick={fetchBirthdays} disabled={isFetching}>
          Show birthdays
        </button>
      )}

      <BirthdaysList birthdays={birthdays} />
    </div>
  );
}

export default List;
