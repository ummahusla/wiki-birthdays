import { Container, Navbar, NavbarBrand, NavbarText } from 'reactstrap';

const Navigation = () => (
  <Navbar dark color="dark">
    <Container>
      <NavbarBrand>Births on this day</NavbarBrand>
      <NavbarText>Source Code</NavbarText>
    </Container>
  </Navbar>
);

export default Navigation;
