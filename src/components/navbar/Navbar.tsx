import styled from "styled-components";
import PokeLogo from "../../assets/PokeLogo.svg";

function Navbar() {
  return (
    <Nav>
      <Logo src={PokeLogo} />
    </Nav>
  );
}

export default Navbar;

const Nav = styled.nav``;

const Logo = styled.img`
  display: block;
  margin: 40px auto;
  width: 250px;
`;
