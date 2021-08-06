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
  height: 100%;
  width: 100%;
  justify-content: space-between;
`;

export const NavList = styled.ul`
  display: flex;
`;

export const StyledLogo = styled.div`
  color: #fff;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  width: 50%;
  img {
    width: 10%;
    height: 100%;
  }
`;
