import { Container } from 'reactstrap';

import Navigation from '../Navigation';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <div>
    <Navigation />

    <Container>{children}</Container>
  </div>
);

export default Layout;
