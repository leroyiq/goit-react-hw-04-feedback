import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onClick }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <Button type="button" name={option} key={option} onClick={onClick}>
            {option}
          </Button>
        );
      })}
    </div>
  );
};
