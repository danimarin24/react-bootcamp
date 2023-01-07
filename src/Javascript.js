const Javascript = () => {
  
	// Variables
  /*
	const x = 1
	let y = 5

	console.log(x, y); // 1, 5
	y += 10
	console.log(x, y); // 1, 15
	y = 'sometext'
	console.log(x, y); // 1, sometext
	x = 4 // provoca un error
	*/

	// Arrays
	/*
		const t = [1, -1, 3]

	t.push(5)

	console.log(t.length); // 4
	console.log(t[1]); // -1

	t.forEach(value => {
		console.log(value); // 1, -1, 3, 5
	})

	const t2 = t.concat(10)

	console.log(t); // 1, -1, 3, 5
	console.log(t2); // 1, -1, 3, 5, 10

	const t3 = [1, 2, 3]
	const m1 = t3.map(value => value * 2)
	console.log(m1); // 2, 4, 6

	const m2 = t.map(value => '<li>' + value + '</li>')
	console.log(m2); // [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ]

	const t4 = [1, 2, 3, 4, 5]
	const [first, second, ...rest] = t4
	console.log(first, second); // 1, 2
	console.log(rest); // 3, 4, 5
	*/

	// Objetos
	const object1 = {
		name: 'Arto Hellas',
		age: 35,
		education: 'PhD',
	}
	
	const object2 = {
		name: 'Full Stack web application development',
		level: 'intermediate studies',
		size: 5,
	}
	
	const object3 = {
		name: {
			first: 'Dan',
			last: 'Abramov',
		},
		grades: [2, 3, 5, 3],
		department: 'Stanford University',
	}

	console.log(object1.name) // Arto Hellas
	const fieldName = 'age' 
	console.log(object1[fieldName]) // 35

	object1.address = 'Helsinki'
	object1['secret number'] = 12341
};

export default Javascript;
