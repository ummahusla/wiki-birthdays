interface Props {
  description: string;
  link: string;
}

const BirthdayItem = ({ description, link }: Props) => (
  <div>
    <a
      data-testid="birthday-item-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {description}
    </a>
  </div>
);

export default BirthdayItem;
