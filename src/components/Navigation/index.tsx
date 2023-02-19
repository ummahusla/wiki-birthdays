import { Container, Navbar, NavbarBrand } from 'reactstrap';

const Navigation = () => (
  <Navbar dark color="dark">
    <Container>
      <NavbarBrand>Births on this day</NavbarBrand>
      <a href="https://github.com/ummahusla/wiki-birthdays">Source Code</a>
    </Container>
  </Navbar>
);

export default Navigation;
