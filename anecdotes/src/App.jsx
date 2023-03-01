import { useState } from 'react';
import './App.css';

const Display = ({ arrays, selected }) => {
	return (
		<div>
			<h3>{arrays.anecdotes[selected]}</h3>
			<h4>Votes {arrays.scores[selected]}</h4>
		</div>
	);
};

const App = () => {
	const anecdotes = [
		'If it hurts, do it more often.',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
		'The only way to go fast, is to go well.',
	];

	const [scores, setScores] = useState(Array(anecdotes.length).fill(0));
	const [selected, setSelected] = useState(Math.trunc(Math.random() * 8));

	const randomizeSelected = () => {
		setSelected(Math.trunc(Math.random() * 8));
	};

	const voteSelected = () => {
		const copy = [...scores];
		copy[selected] += 1;
		setScores(copy);
	};

	const highest = scores.indexOf([...scores].sort()[7]);

	return (
		<div>
			<h1>Anecdote of the Day </h1>
			<Display arrays={{ anecdotes, scores }} selected={selected} />
			<button onClick={voteSelected}>Vote</button>
			<button onClick={randomizeSelected}>next anecdote</button>
			<h1>Most Voted Anecdote</h1>
			<Display arrays={{ anecdotes, scores }} selected={highest} />
		</div>
	);
};

export default App;
