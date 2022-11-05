import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { FlexRowSpaceBetween } from "./theme/styleHelpers";

const Navbar = styled.nav`
  ${FlexRowSpaceBetween};
  width: 100%;
  margin: 0 auto;
  padding: 1rem 3rem;
  max-width: 1400px;
  font-size: ${({ theme }) => theme.typography.size.mdFont};
`;
const CreateAlbum = styled(Link)`
  background: ${({ theme }) => theme.colors.accentColor};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  box-shadow: 0px 2px 2px 0px hsla(0, 0%, 0%, 0.14),
    0px 3px 1px -2px hsla(0, 0%, 0%, 0.12), 0px 1px 5px 0px hsla(0, 0%, 0%, 0.2);
`;

function App() {
  return (
    <>
      <Navbar>
        <Link to="/">home</Link>
        <CreateAlbum to="create">new album</CreateAlbum>
      </Navbar>
      <Outlet />
    </>
  );
}

export default App;
