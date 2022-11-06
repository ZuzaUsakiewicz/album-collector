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

  button {
    background: none;
    border: none;
    span {
      color: ${({ theme }) => theme.colors.textColor};
      font-size: ${({ theme }) => theme.typography.size.xxlFont};
    }
  }
`;

const HomeIcon = styled.span`
  font-size: ${({ theme }) => theme.typography.size.xxlFont};
`;

const CreateAlbum = styled(Link)`
  background: ${({ theme }) => theme.colors.accentColor};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  box-shadow: 0px 2px 2px 0px hsla(0, 0%, 0%, 0.14),
    0px 3px 1px -2px hsla(0, 0%, 0%, 0.12), 0px 1px 5px 0px hsla(0, 0%, 0%, 0.2);
`;

const App: React.FC = () => {
  return (
    <>
      <Navbar>
        <div>
          <Link to="/" aria-label="go to homepage">
            <HomeIcon className="material-symbols-outlined">home</HomeIcon>
          </Link>
          <button aria-label="settings">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
        <CreateAlbum to="create">new album</CreateAlbum>
      </Navbar>
      <Outlet />
    </>
  );
};

export default App;
