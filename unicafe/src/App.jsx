import { useState } from 'react';

const Button = ({ text, handleClick }) => {
	return <button onClick={handleClick}>{text}</button>;
};

const StatisticsLine = ({ text, value }) => {
	if (text == 'Positive')
		return (
			<tr>
				<td> {text}</td>
				<td>{value} %</td>
			</tr>
		);
	return (
		<tr>
			<td> {text}</td>
			<td>{value}</td>
		</tr>
	);
};

const Statistics = (props) => {
	const { good, neutral, bad, total, average, percentage } = props.info;

	if (total === 0) return <div>No Feedback Given</div>;

	return (
		<div>
			<h1>Statistics</h1>
			<table>
				<tbody>
					<StatisticsLine value={good} text='good' />
					<StatisticsLine value={neutral} text='neutral' />
					<StatisticsLine value={bad} text='bad' />
					<StatisticsLine value={total} text='Total' />
					<StatisticsLine value={total !== 0 ? average.toFixed(2) : ''} text='Average' />
					<StatisticsLine value={total !== 0 ? (percentage * 100).toFixed(2) : ''} text='Positive' />
				</tbody>
			</table>
		</div>
	);
};

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const increaseGood = () => setGood(good + 1);
	const increaseNeutral = () => setNeutral(neutral + 1);
	const increaseBad = () => setBad(bad + 1);

	const total = good + neutral + bad;
	const average = (good - bad) / total;
	const percentage = good / total;

	return (
		<>
			<div>
				<h1>Give Feedback</h1>
				<Button handleClick={increaseGood} text='good' />
				<Button handleClick={increaseNeutral} text='neutral' />
				<Button handleClick={increaseBad} text='bad' />
			</div>
			<Statistics info={{ good, neutral, bad, total, average, percentage }} />
		</>
	);
};

export default App;
