import { Div, Title } from './Section.styled';

export const Section = ({ children, title }) => {
  return (
    <Div>
      <Title>{title}</Title>
      <div>{children}</div>
    </Div>
  );
};
