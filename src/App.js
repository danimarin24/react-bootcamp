import './App.css';
import { useState } from 'react';


const App = (props) => {
  const [counter, setCounter] = useState(0)



  return (
    <div>
			<p>El valor del contador es:</p>
      <h1>{counter}</h1>
			<button onClick={() => {
				// setCounter(counter + 1)
				setCounter(prevCounter => {
					return prevCounter + 1
				})
			}}>
				Incrementar
				</button>
    </div>
  )
}

export default App;
