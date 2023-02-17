interface Props {
  description: string;
}

const BirthdayItem = ({ description }: Props) => (
  <div>
    <p>{description}</p>
  </div>
);

export default BirthdayItem;
