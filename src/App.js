import './App.css';

// Adding new components
const Title = ({course}) => <h1>{course}</h1>

const Paragraph = ({paragraph, exercise}) => <p>{paragraph} {exercise}</p>

const Total = ({ex1, ex2, ex3}) => <p>Number of exercises {ex1 + ex2 + ex3}</p>

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Title course={course} />
      <Paragraph paragraph={part1} exercise={exercises1} />
			<Paragraph paragraph={part2} exercise={exercises2} />
			<Paragraph paragraph={part3} exercise={exercises3} />

      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3} />
    </div>
  )
}

export default App;
