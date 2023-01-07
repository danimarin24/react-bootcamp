import './App.css';
import { useState } from 'react';


const App = (props) => {
  const [counter, setCounter] = useState(0)

	const handleClick = () => {
		setCounter(counter + 1)
	}

	const handleClickReset = () => {
		setCounter(0)
	}

  return (
    <div>
			<p>El valor del contador es:</p>
      <h1>{counter}</h1>
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
