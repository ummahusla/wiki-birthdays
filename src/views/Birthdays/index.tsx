import { Button, Spinner } from 'reactstrap';

import BirthdaysList from '../../components/BirthdaysList';
import ErrorModal from '../../components/ErrorModal';
import { useBirthdays } from '../../hooks/useBirthdays';

function List() {
  const { birthdays, fetchBirthdays, isFetching, error } = useBirthdays();

  return (
    <div>
      <div className="my-5">
        <h1>List of births that occured on this date in the past</h1>
      </div>

      {isFetching && (
        <Spinner data-testid="spinner" color="dark" className="m-5">
          Loading...
        </Spinner>
      )}

      {Object.keys(birthdays).length === 0 && !isFetching ? (
        <Button
          data-testid="fetch-button"
          color="primary"
          onClick={fetchBirthdays}
          disabled={isFetching}
        >
          Show today's birthdays
        </Button>
      ) : (
        <BirthdaysList birthdays={birthdays} />
      )}

      <ErrorModal
        isOpen={error ? true : false}
        title="Error while fetching birthdays"
        actionNm="Fetch birthdays"
        actionFn={fetchBirthdays}
        body={
          <>
            <p>Error details:</p>
            <pre>{JSON.stringify(error, 0, 2)}</pre>
            <p>
              You can retry to fetch birthdays by clicking the button below.
            </p>
          </>
        }
      />
    </div>
  );
}

export default List;
