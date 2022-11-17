// export{}
let age233dsdfzs: number = 23;
let userName: string = 'Max';
let isInstructor: boolean = true;

// Path: app.ts
let person: {
	name: string;
	age: number;
};

person = {
	name: 'Max',
	age: 30
};

let hobbies: string[];

hobbies = ['Sports', 'Cooking', "making money"];

console.log(hobbies);

let union: string | number;
union = 23;
union = "23";
console.log(union);

type car = {
	name: string,
	vin: number,
}

let parkingLot: car[];

function add(a: string, b: number): string {
	return a + b;
}

const printPage = (value: any): void => {
	console.log(value);
	window.print();
}
