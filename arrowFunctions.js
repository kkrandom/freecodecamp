const myFirstArrow = () => 'Default return statement'
console.log('myFirstArrow: ' + myFirstArrow)
console.log('myFirstArrow(): ' + myFirstArrow())

const mySecondArrow = () => {
	return 'Another return statement'
}
console.log('mySecondArrow: ' + mySecondArrow)
console.log('mySecondArrow(): ' + mySecondArrow())

const doubler = (item) => item * 2
console.log(`Double ${doubler(8)}`)

// Rest Parameter - add any number of parameters
const sum = (...args) => {
	return args.reduce((a, b) => a + b, 0)
}
console.log(`sum(1, 2, 3): ${sum(1, 2, 3)}`)
console.log(`sum(1, 2, 3, 4): ${sum(1, 2, 3, 4)}`)

// Spread Operator
const arr = [6, 89, 3, 45]
const maximus = Math.max(...arr) // returns 89
console.log(`Max [6, 89, 3, 45]: ${maximus}`)
