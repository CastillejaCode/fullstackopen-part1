const Header = (props) => {
	return <h1>{props.course.name}</h1>;
};

const Part = (props) => {
	return (
		<p>
			{props.info.name} {props.info.exercises}
		</p>
	);
};

const Content = (props) => {
	const parts = props.info.parts;
	return (
		<div>
			<Part info={parts[0]} />
			<Part info={parts[1]} />
			<Part info={parts[2]} />
		</div>
	);
};

const Total = (props) => {
	const parts = props.info.parts;
	return <p> Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>;
};

const App = () => {
	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10,
			},
			{
				name: 'Using props to pass data',
				exercises: 7,
			},
			{
				name: 'State of a component',
				exercises: 14,
			},
		],
	};

	return (
		<div>
			<Header course={course} />
			<Content info={course} />
			<Total info={course} />
		</div>
	);
};

export default App;
