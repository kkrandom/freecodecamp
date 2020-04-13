'use strict' // Enable Strict Mode

var camper = 'James'
var camper = 'David'
console.log(camper)

// let camper = 'Hans'

var printNumTwo
for (var i = 0; i < 3; i++) {
	if (i === 2) {
		printNumTwo = function () {
			return i
		}
	}
}
console.log(printNumTwo())
