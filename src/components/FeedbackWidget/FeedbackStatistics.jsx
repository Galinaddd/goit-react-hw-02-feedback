export const FeedbackStatistics = ({
  state,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  const ratings = Object.keys(state);

  return (
    <>
      <p> Good: {good}</p>
      <p> Neutral: {neutral}</p>
      <p> Bad: {bad}</p>

      <p>Total: {total()} </p>
      <p>Positive feedback:{positivePercentage()}%</p>
    </>
  );
};
