import { Component } from 'react';
import { FeedbackOptions } from './FeedbackWidget/FeedbackOptions';
import { FeedbackStatistics } from './FeedbackWidget/FeedbackStatistics';
import { Section } from './FeedbackWidget/Section';
import { Notification } from './FeedbackWidget/Notification ';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  stateUpdate = key => {
    this.setState(prevState => {
      console.log('it is setstate', key);
      console.log(prevState[key]);
      return {
        ...prevState,
        [key]: prevState[key] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total
      ? (((this.state.good + this.state.neutral) / total) * 100).toFixed(0)
      : 0;
  };

  ratings = ['good', 'neutral', 'bad'];

  render() {
    const {
      ratings,
      state,
      countPositiveFeedbackPercentage,
      countTotalFeedback,
    } = this;
    const { good, neutral, bad } = this.state;
    console.log(ratings, state);
    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={Object.keys(state)}
            onLeaveFeedback={this.stateUpdate}
          />
        </Section>
        <Section title="Statistic">
          {good || neutral || bad ? (
            <FeedbackStatistics
              state={state}
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}
