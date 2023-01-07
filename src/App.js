import './App.css';
import { useState } from 'react';


const Counter = ({number}) => {
	return <h1>{number}</h1>
};

const App = (props) => {
  const [counter, setCounter] = useState(0)

	const handleClick = () => {
		setCounter(counter + 1)
	}

	const handleClickReset = () => {
		setCounter(0)
	}

	const isEven = counter % 2 === 0

  return (
    <div>
			<p>El valor del contador es:</p>
      <Counter number={counter} />
			<p>{isEven ? 'Es par' : 'Es impar'}</p>
			<button onClick={handleClick}>
				Incrementar
			</button>
			<button onClick={handleClickReset}>
				Reset
			</button>
    </div>
  )
}

export default App;
