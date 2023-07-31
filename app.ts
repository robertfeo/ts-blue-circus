let variable = "hello world";
// variable = 1; // Error: Type '1' is not assignable to type 'string'.
let age = 18;

let ageWithType: number;
ageWithType = 18;

let testString: string;
testString = "hello world";

let testBoolean: boolean;
testBoolean = true;

let testStringOfNumbers: string | number;
testStringOfNumbers = "hello world";
testStringOfNumbers = 1;

// Array
let testArray: string[];
testArray = ["hello", "world"];
testArray.push("!");

let numberArray: number[];
numberArray = [1, 2, 3];
numberArray.push(4);

let mixedArray: (string | number)[];
mixedArray = ["hello", 1, "world", 2];

let testStringArray: string[] | number[];
testStringArray = ["hello", "world"];
testStringArray = [1, 2, 3];

let testStringOrNumbesArray: Array<string | number>;
testStringOrNumbesArray = ["hello", 1, "world", 2];


// Object
let user = {
    name: "John",
    age: 18,
    isMale: true
};

user.name = "Maya";
user.age = 19;
user.isMale = false;

//user.phone = "123456789"; // Error: Property 'phone' does not exist on type '{ name: string; age: number; isMale: boolean; }'.

let userObj: {
    name: string;
    age: number;
    isMale: boolean;
};

userObj = {
    name: "John",
    age: 18,
    isMale: true
};

// Object with optional property
let userObj2: {
    name: string;
    age: number;
    isMale: boolean;
    phone?: string;
};

userObj2 = {
    name: "John",
    age: 18,
    isMale: true
};

// Any type
let testAny: any;
testAny = "hello world";
testAny = 1;
testAny = true;
testAny = ["hello", 1, "world", 2];

let testAnyArray: any[];
testAnyArray = ["hello", 1, "world", 2, false];

// Function
let sayHi = () => {
    console.log("Hello world");
}

sayHi();




































































