interface Props {
  description: string;
  link: string;
}

const BirthdayItem = ({ description, link }: Props) => (
  <div>
    <a href={link} target="_blank" rel="noopener">
      {description}
    </a>
  </div>
);

export default BirthdayItem;
