import styled from "styled-components";

export const HeaderGroup = styled.header`
  background: #f9f9f9;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  /* height: 100%;
  width: 100%; */
  justify-content: space-between;
  margin: 1rem;
`;

export const StyledLogo = styled.div`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  width: 100%;
  img {
    width: 15%;
    height: 100%;
  }
  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const NavList = styled.ul`
  display: none;
  list-style: none;

  @media (min-width: 768px) {
    display: flex;
    width: 80%;
    justify-content: inherit;
  }
`;

export const SubNav = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const MobileMenu = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
