import styled from 'styled-components';

export const Button = styled.button`
  box-shadow: 0px 10px 14px -7px #276873;
  background: linear-gradient(to bottom, #599bb3 5%, #408c99 100%);
  background-color: #088a0e;
  border-radius: 8px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 16px;
  font-weight: bold;
  padding: 6px 12px;
  margin: 4px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #3d768a;
  border: none;
  &:hover {
    background: linear-gradient(to bottom, #408c99 5%, #599bb3 100%);
    background-color: #408c99;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;
