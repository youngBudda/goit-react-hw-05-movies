import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavbar = styled.nav`
  display: flex;
  gap: 12px;
  font-size: 26px;
`;

export const Link = styled(NavLink)`
  width: 90px;
  font-weight: bold;
  color: rgba(203, 224, 230, 0.8);
  text-decoration: none;

  &.active {
    color: #fff;
  }
`;
