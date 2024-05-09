# Coding Exercise

### 1. What is the output of below code

```javascript
var car = new Vehicle("Honda", "white", "2010", "UK");
console.log(car);
function Vehicle(model, color, year, country) {
  this.model = model;
  this.color = color;
  this.year = year;
  this.country = country;
}
```

<ul>
	<li>1: Undefined </li>
	<li>2: ReferenceError </li>
	<li>3: null </li>
	<li>4: {model: "Honda", color: "white", year: "2010", country: "UK"}</li>
</ul>

<details>
<summary>Answer</summary><br>
<b>Answer: 4</b> <br><br>
    The function declarations are hoisted similar to any variables. So the
    placement for Vehicle function declaration doesn't make any difference.
</details>

### 2. What is the output of below code

```javascript
function foo() {
  let x = (y = 0);
  x++;
  y++;
  return x;
}
console.log(foo(), typeof x, typeof y);
```

<ul>
	<li>1: 1, undefined and undefined</li>
	<li>2: ReferenceError: X is not defined</li>
	<li>3: 1, undefined and number</li>
	<li>4: 1, number and number</li>
</ul>

<details>
<summary>Answer</summary><br>
<b>Answer: 3</b> <br><br>
    Of course the return value of foo() is 1 due to the increment operator. But the statement let x = y = 0 declares a local variable x. Whereas y declared as a global variable accidentally. This statement is equivalent to,
</details>

### 3. What is the output of below code

```javascript
function main() {
  console.log("A");
  setTimeout(function print() {
    console.log("B");
  }, 0);
  console.log("C");
}
main();
```

<ul>
	<li>1: A, B and C</li>
	<li>2: B, A and C</li>
	<li>3: A and C</li>
	<li>4: A, C and B</li>
</ul>

<details>
<summary>Answer</summary><br>
<b>Answer: 4</b> <br><br>
    The statements order is based on the event loop mechanism. The order of statements follows the below order, <br>
	<ol>
		<li>1. At first, the main function is pushed to the stack.</li>
		<li>2. Then the browser pushes the first statement of the main function( i.e, A's console.log) to the stack, executing and popping out immediately.</li>
		<li>3. But setTimeout statement moved to Browser API to apply the delay for callback.</li>
		<li>4. In the meantime, C's console.log added to stack, executed and popped out.</li>
		<li>5. The callback of setTimeout moved from Browser API to message queue.</li>
		<li>6. The main function popped out from stack because there are no statements to execute</li>
		<li>7. The callback moved from message queue to the stack since the stack is empty.</li>
		<li>8. The console.log for B is added to the stack and display on the console.</li>
	</ol>
</details>

### 4. What is the output of below equality check

```javascript
console.log(0.1 + 0.2 === 0.3);
```

<ul>
	<li>1: false</li>
	<li>2: true</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 1</b> <br><br>
    This is due to the float point math problem. Since the floating point numbers are encoded in binary format, the addition operations on them lead to rounding errors. Hence, the comparison of floating points doesn't give expected results. You can find more details about the explanation here 0.30000000000000004.com/
</details>

### 5. What is the output of below code

```javascript
var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y);
```

<ul>
	<li>1: 1function</li>
	<li>2: 1object</li>
	<li>3: ReferenceError</li>
	<li>4: 1undefined</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 4</b> <br><br>
    The main points in the above code snippets are,
	<ol>
		<li>You can see function expression instead function declaration inside if statement. So it always returns true.</li>
		<li>Since it is not declared(or assigned) anywhere, f is undefined and typeof f is undefined too.</li>
	</ol>
</details>

### 6. What is the output of below code

```javascript
function foo() {
  return;
  {
    message: "Hello World";
  }
}
console.log(foo());
```

<ul>
	<li>1: Hello World</li>
	<li>2: Object {message: "Hello World"}</li>
	<li>3: Undefined</li>
	<li>4: SyntaxError</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 3</b> <br><br>
    This is a semicolon issue. Normally semicolons are optional in JavaScript. So if there are any statements(in this case, return) missing semicolon, it is automatically inserted immediately. Hence, the function returned as undefined.
</details>

### 7. What is the output of below code

```javascript
fvar myChars = ["a", "b", "c", "d"];
delete myChars[0];
console.log(myChars);
console.log(myChars[0]);
console.log(myChars.length);
```

<ul>
	<li>1: [empty, 'b', 'c', 'd'], empty, 3</li>
	<li>2: [null, 'b', 'c', 'd'], empty, 3</li>
	<li>3: [empty, 'b', 'c', 'd'], undefined, 4</li>
	<li>4: [null, 'b', 'c', 'd'], undefined, 4</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 3</b> <br><br>
    The delete operator will delete the object property but it will not reindex the array or change its length. So the number or elements or length of the array won't be changed. If you try to print myChars then you can observe that it doesn't set an undefined value, rather the property is removed from the array. The newer versions of Chrome use empty instead of undefined to make the difference a bit clearer.
</details>

### 8. What is the output of below code in latest Chrome

```javascript
var array1 = new Array(3);
console.log(array1);

var array2 = [];
array2[2] = 100;
console.log(array2);

var array3 = [, , ,];
console.log(array3);
```

<ul>
	<li>1: [undefined × 3], [undefined × 2, 100], [undefined × 3]</li>
	<li>2: [empty × 3], [empty × 2, 100], [empty × 3]</li>
	<li>3: [null × 3], [null × 2, 100], [null × 3]</li>
	<li>4: [], [100], []</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 2</b> <br><br>
    The latest chrome versions display sparse array(they are filled with holes) using this empty x n notation. Whereas the older versions have undefined x n notation. <br>
	<b>Note:</b> The latest version of FF displays n empty slots notation.
</details>

### 9. What is the output of below code

```javascript
const obj = {
  prop1: function () {
    return 0;
  },
  prop2() {
    return 1;
  },
  ["prop" + 3]() {
    return 2;
  },
};

console.log(obj.prop1());
console.log(obj.prop2());
console.log(obj.prop3());
```

<ul>
	<li>1: 0, 1, 2</li>
	<li>2: 0, { return 1 }, 2</li>
	<li>3: 0, { return 1 }, { return 2 }</li>
	<li>4: 0, 1, undefined</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 1</b> <br><br>
    ES6 provides method definitions and property shorthands for objects. So both prop2 and prop3 are treated as regular function values.
</details>

### 10. What is the output of below code

```javascript
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
```

<ul>
	<li>1: true, true</li>
	<li>2: true, false</li>
	<li>3: SyntaxError, SyntaxError,</li>
	<li>4: false, false</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 2</b> <br><br>
    The important point is that if the statement contains the same operators(e.g, < or >) then it can be evaluated from left to right. 
</details>

### 11. What is the output of below code in non-strict mode

```javascript
function printNumbers(first, second, first) {
  console.log(first, second, first);
}
printNumbers(1, 2, 3);
```

<ul>
	<li>1: 1, 2, 3</li>
	<li>2: 3, 2, 3</li>
	<li>3: SyntaxError: Duplicate parameter name not allowed in this context</li>
	<li>4: 1, 2, 1</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 2</b> <br><br>
    In non-strict mode, the regular JavaScript functions allow duplicate named parameters. The above code snippet has duplicate parameters on 1st and 3rd parameters. The value of the first parameter is mapped to the third argument which is passed to the function. Hence, the 3rd argument overrides the first parameter.<br>
    <b>Note:</b> In strict mode, duplicate parameters will throw a Syntax Error.

</details>

### 12. What is the output of below code

```javascript
const printNumbersArrow = (first, second, first) => {
  console.log(first, second, first);
};
printNumbersArrow(1, 2, 3);
```

<ul>
	<li>1: 1, 2, 3</li>
	<li>2: 3, 2, 3</li>
	<li>3: SyntaxError: Duplicate parameter name not allowed in this context</li>
	<li>4: 1, 2, 1</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 3</b> <br><br>
    Unlike regular functions, the arrow functions doesn't not allow duplicate parameters in either strict or non-strict mode. So you can see SyntaxError in the console.
</details>

### 13. What is the output of below code

```javascript
const arrowFunc = () => arguments.length;
console.log(arrowFunc(1, 2, 3));
```

<ul>
	<li>1: ReferenceError: arguments is not defined</li>
	<li>2: 3</li>
	<li>3: undefined</li>
	<li>4: null</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 1</b> <br><br>
    Arrow functions do not have an arguments, super, this, or new.target bindings. So any reference to arguments variable tries to resolve to a binding in a lexically enclosing environment. In this case, the arguments variable is not defined outside of the arrow function. Hence, you will receive a reference error.
</details>

### 14. What is the output of below code

```javascript
console.log(String.prototype.trimLeft.name === "trimLeft");
console.log(String.prototype.trimLeft.name === "trimStart");
```

<ul>
	<li>1: True, False</li>
	<li>2: False, True</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 2</b> <br><br>
    In order to be consistent with functions like String.prototype.padStart, the standard method name for trimming the whitespaces is considered as trimStart. Due to web web compatibility reasons, the old method name 'trimLeft' still acts as an alias for 'trimStart'. Hence, the prototype for 'trimLeft' is always 'trimStart'
</details>

### 15. What is the output of below code

```javascript
console.log(Math.max());
```

<ul>
	<li>1: undefined</li>
	<li>2: Infinity</li>
	<li>3: 0</li>
	<li>4: -Infinity</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 4</b> <br><br>
    Infinity is the initial comparant because almost every other value is bigger. So when no arguments are provided, -Infinity is going to be returned. <br>
	<b>Note:</b> Zero number of arguments is a valid case.
</details>

### 16. What is the output of below code

```javascript
console.log(10 == [10]);
console.log(10 == [[[[[[[10]]]]]]]);
```

<ul>
	<li>1: True, True</li>
	<li>2: True, False</li>
	<li>3: False, False</li>
	<li>4: False, False</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 1</b> <br><br>
    As per the comparison algorithm in the ECMAScript specification(ECMA-262), the above expression converted into JS
</details>

### 17. What is the output of below code

```javascript
console.log(10 + "10");
console.log(10 - "10");
```

<ul>
	<li>1: 20, 0</li>
	<li>2: 1010, 0</li>
	<li>3: 1010, 10-10</li>
	<li>4: NaN, NaN</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 2</b> <br><br>
    The concatenation operator(+) is applicable for both number and string types. So if any operand is string type then both operands concatenated as strings. Whereas subtract(-) operator tries to convert the operands as number type.
</details>

### 18. What is the output of below code

```javascript
console.log([0] == false);
if ([0]) {
  console.log("I'm True");
} else {
  console.log("I'm False");
}
```

<ul>
	<li>1: True, I'm True</li>
	<li>2: True, I'm False</li>
	<li>3: False, I'm True</li>
	<li>4: False, I'm False</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 1</b> <br><br>
    In comparison operators, the expression [0] converted to Number([0].valueOf().toString()) which is resolved to false. Whereas [0] just becomes a truthy value without any conversion because there is no comparison operator.
</details>

### 19. What is the output of below code

```javascript
console.log([1, 2] + [3, 4]);
```

<ul>
	<li>1: [1,2,3,4]</li>
	<li>2: [1,2][3,4]</li>
	<li>3: SyntaxError</li>
	<li>4: 1,23,4</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 4</b> <br><br>
    The + operator is not meant or defined for arrays. So it converts arrays into strings and concatenates them.
</details>

### 20. What is the output of below code

```javascript
const numbers = new Set([1, 1, 2, 3, 4]);
console.log(numbers);

const browser = new Set("Firefox");
console.log(browser);
```

<ul>
	<li>1: {1, 2, 3, 4}, {"F", "i", "r", "e", "f", "o", "x"}</li>
	<li>2: {1, 2, 3, 4}, {"F", "i", "r", "e", "o", "x"}</li>
	<li>3: [1, 2, 3, 4], ["F", "i", "r", "e", "o", "x"]</li>
	<li>4: {1, 1, 2, 3, 4}, {"F", "i", "r", "e", "f", "o", "x"}</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 1</b> <br><br>
    Since Set object is a collection of unique values, it won't allow duplicate values in the collection. At the same time, it is case sensitive data structure.
</details>

### 21. What is the output of below code

```javascript
console.log(NaN === NaN);
```

<ul>
	<li>1: True</li>
	<li>2: False</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 2</b> <br><br>
    JavaScript follows IEEE 754 spec standards. As per this spec, NaNs are never equal for floating-point numbers.
</details>

### 22. What is the output of below code

```javascript
let numbers = [1, 2, 3, 4, NaN];
console.log(numbers.indexOf(NaN));
```

<ul>
	<li>1: 4</li>
	<li>2: NaN</li>
	<li>3: SyntaxError</li>
	<li>4: -1</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 4</b> <br><br>
    The indexOf uses strict equality operator(===) internally and NaN === NaN evaluates to false. Since indexOf won't be able to find NaN inside an array, it returns -1 always. But you can use Array.prototype.findIndex method to find out the index of NaN in an array or You can use Array.prototype.includes to check if NaN is present in an array or not.
</details>

### 23. What is the output of below code

```javascript
let [a, ...b] = [1, 2, 3, 4, 5];
console.log(a, b);
```

<ul>
	<li>1: 1, [2, 3, 4, 5]</li>
	<li>2: 1, {2, 3, 4, 5}</li>
	<li>3: SyntaxError</li>
	<li>4: 1, [2, 3, 4]</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 3</b> <br><br>
    When using rest parameters, trailing commas are not allowed and will throw a SyntaxError. If you remove the trailing comma then it displays 1st answer
</details>

### 24. What is the output of below code

```javascript
async function func() {
  return 10;
}
console.log(func());
async function func() {
  return 10;
}
console.log(func());
```

<ul>
	<li>1: Promise {<fulfilled>: 10}</li>
	<li>2: 10</li>
	<li>3: SyntaxError</li>
	<li>4: Promise {<rejected>: 10}</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 1</b> <br><br>
    Async functions always return a promise. But even if the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise. 
</details>

### 25. What is the output of below code

```javascript
async function func() {
  await 10;
}
console.log(func());
```

<ul>
	<li>1: Promise {<fulfilled>: 10}</li>
	<li>2: 10</li>
	<li>3: SyntaxError</li>
	<li>4: Promise {<resolved>: undefined}</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 4</b> <br><br>
    The await expression returns value 10 with promise resolution and the code after each await expression can be treated as existing in a .then callback. In this case, there is no return expression at the end of the function. Hence, the default return value of undefined is returned as the resolution of the promise.
</details>

### 26. What is the output of below code

```javascript
function delay() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}

async function delayedLog(item) {
  await delay();
  console.log(item);
}

async function processArray(array) {
  array.forEach(item => {
    await delayedLog(item);
  })
}

processArray([1, 2, 3, 4]);
```

<ul>
	<li>1: SyntaxError</li>
	<li>2: 1, 2, 3, 4</li>
	<li>3: 4, 4, 4, 4</li>
	<li>4: 4, 3, 2, 1</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 1</b> <br><br>
    Even though “processArray” is an async function, the anonymous function that we use for forEach is synchronous. If you use await inside a synchronous function then it throws a syntax error.
</details>

### 27. What is the output of below code

```javascript
function delay() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

async function delayedLog(item) {
  await delay();
  console.log(item);
}

async function process(array) {
  array.forEach(async (item) => {
    await delayedLog(item);
  });
  console.log("Process completed!");
}
process([1, 2, 3, 5]);
```

<ul>
	<li>1: 1 2 3 5 and Process completed!</li>
	<li>2: 5 5 5 5 and Process completed!</li>
	<li>3: Process completed! and 5 5 5 5	</li>
	<li>4: Process completed! and 1 2 3 5</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 4</b> <br><br>
    The forEach method will not wait until all items are finished but it just runs the tasks and goes next. Hence, the last statement is displayed first followed by a sequence of promise resolutions.
</details>

### 28. What is the output of below code

```javascript
var set = new Set();
set.add("+0").add("-0").add(NaN).add(undefined).add(NaN);
console.log(set);
```

<ul>
	<li>1: Set(4) {"+0", "-0", NaN, undefined}</li>
	<li>2: Set(3) {"+0", NaN, undefined}</li>
	<li>3: Set(5) {"+0", "-0", NaN, undefined, NaN}</li>
	<li>4: Set(4) {"+0", NaN, undefined, NaN}</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 1</b> <br><br>
    Set has few exceptions from equality check,
	<ol>
		<li>All NaN values are equal</li>
		<li>Both +0 and -0 considered as different values</li>
	</ol>
</details>

### 29. What is the output of below code

```javascript
const sym1 = Symbol("one");
const sym2 = Symbol("one");

const sym3 = Symbol.for("two");
const sym4 = Symbol.for("two");

console.log(sym1 === sym2, sym3 === sym4);
```

<ul>
	<li>1: true, true</li>
	<li>2: true, false</li>
	<li>3: false, true</li>
	<li>4: false, false</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 3</b> <br><br>
    Symbol follows below conventions,
	<ol>
    	<li>Every symbol value returned from Symbol() is unique irrespective of the optional string.</li>
    	<li>Symbol.for() function creates a symbol in a global symbol registry list. But it doesn't necessarily create a new symbol on every call, it checks first if a symbol with the given key is already present in the registry and returns the symbol if it is found. Otherwise a new symbol created in the registry.</li>
    </ol><br>
    <b>Note:<b> The symbol description is just useful for debugging purposes.

</details>

### 30. What is the output of below code

```javascript
const sym1 = new Symbol("one");
console.log(sym1);
```

<ul>
	<li>1: SyntaxError</li>
	<li>2: one</li>
	<li>3: Symbol('one')</li>
	<li>4: Symbol</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 1</b> <br><br>
    Symbol is a just a standard function and not an object constructor(unlike other primitives new Boolean, new String and new Number). So if you try to call it with the new operator will result in a TypeError.
</details>

### 31. What is the output of below code

```javascript
let myNumber = 100;
let myString = "100";

if (!typeof myNumber === "string") {
  console.log("It is not a string!");
} else {
  console.log("It is a string!");
}

if (!typeof myString === "number") {
  console.log("It is not a number!");
} else {
  console.log("It is a number!");
}
```

<ul>
	<li>1: SyntaxError</li>
	<li>2: It is not a string!, It is not a number!</li>
	<li>3: It is not a string!, It is a number!</li>
	<li>4: It is a string!, It is a number!</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 4</b> <br><br>
    The return value of typeof myNumber or typeof myString is always a truthy value (either "number" or "string"). The ! operator operates on either typeof myNumber or typeof myString, converting them to boolean values. Since the value of both !typeof myNumber and !typeof myString is false, the if condition fails, and control goes to else block.
</details>

### 32. What is the output of below code

```javascript
console.log(
  JSON.stringify({ myArray: ["one", undefined, function () {}, Symbol("")] })
);
console.log(
  JSON.stringify({ [Symbol.for("one")]: "one" }, [Symbol.for("one")])
);
```

<ul>
	<li>1:  {"myArray":['one', undefined, {}, Symbol]}, {}</li>
	<li>2: {"myArray":['one', null,null,null]}, {}</li>
	<li>3: {"myArray":['one', null,null,null]}, "{ [Symbol.for('one')]: 'one' }, [Symbol.for('one')]"</li>
	<li>4: {"myArray":['one', undefined, function(){}, Symbol('')]}, {}</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 2</b> <br><br>
    The symbols has below constraints,
	<ol>
		<li>The undefined, Functions, and Symbols are not valid JSON values. So those values are either omitted (in an object) or changed to null (in an array). Hence, it returns null values for the value array.</li>
		<li>All Symbol-keyed properties will be completely ignored. Hence it returns an empty object({}).</li>
	</ol>
</details>

### 33. What is the output of below code

```javascript
class A {
  constructor() {
    console.log(new.target.name);
  }
}

class B extends A {
  constructor() {
    super();
  }
}

new A();
new B();
```

<ul>
	<li>1:  A, A</li>
	<li>2: A, B</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 2</b> <br><br>
    Using constructors, new.target refers to the constructor (points to the class definition of class which is initialized) that was directly invoked by new. This also applies to the case if the constructor is in a parent class and was delegated from a child constructor.
</details>

### 34. What is the output of below code

```javascript
const [x, ...y, z] = [1, 2, 3, 4];
console.log(x, y, z);
```

<ul>
	<li>1:  1, [2, 3], 4</li>
	<li>2: 1, [2, 3, 4], undefined</li>
	<li>3: 1, [2], 3</li>
	<li>4: SyntaxError</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 4</b> <br><br>
    It throws a syntax error because the rest element should not have a trailing comma. You should always consider using a rest operator as the last element.
</details>

### 35. What is the output of below code

```javascript
const { a: x = 10, b: y = 20 } = { a: 30 };
console.log(x);
console.log(y);
```

<ul>
	<li>1: 30, 20</li>
	<li>2: 10, 20</li>
	<li>3: 10, undefined</li>
	<li>4: 10, undefined</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 1</b> <br><br>
   The object property follows below rules,
	<ol>
		<li>The object properties can be retrieved and assigned to a variable with a different name</li>
		<li>The property assigned a default value when the retrieved value is undefined</li>
	</ol>
</details>

### 36. What is the output of below code

```javascript
function area({ length = 10, width = 20 }) {
  console.log(length * width);
}

area();
```

<ul>
	<li>1: 200</li>
	<li>2: Error</li>
	<li>3: undefined</li>
	<li>4: 0</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 2</b> <br><br>
   If you leave out the right-hand side assignment for the destructuring object, the function will look for at least one argument to be supplied when invoked. Otherwise you will receive an error Error: Cannot read property 'length' of undefined as mentioned above.
</details>

### 37. What is the output of below code

```javascript
const props = [
  { id: 1, name: "John" },
  { id: 2, name: "Jack" },
  { id: 3, name: "Tom" },
];

const [, , { name }] = props;
console.log(name);
```

<ul>
	<li>1: Tom</li>
	<li>2: Error</li>
	<li>3: undefined</li>
	<li>4: John</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 1</b> <br><br>
   It is possible to combine Array and Object destructuring. In this case, the third element in the array props accessed first followed by name property in the object.
</details>

### 38. What is the output of below code

```javascript
function checkType(num = 1) {
  console.log(typeof num);
}

checkType();
checkType(undefined);
checkType("");
checkType(null);
```

<ul>
	<li>1: number, undefined, string, object</li>
	<li>2: undefined, undefined, string, object</li>
	<li>3: number, number, string, object</li>
	<li>4: number, number, number, number</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 3</b> <br><br>
   If the function argument is set implicitly(not passing argument) or explicitly to undefined, the value of the argument is the default parameter. Whereas for other falsy values('' or null), the value of the argument is passed as a parameter.
    Hence, the result of function calls categorized as below,
	<ol>
    	<li>The first two function calls logs number type since the type of default value is number</li>
    	<li>The type of '' and null values are string and object type respectively.</li>
    <ol>
</details>

### 39. What is the output of below code

```javascript
function add(item, items = []) {
  items.push(item);
  return items;
}

console.log(add("Orange"));
console.log(add("Apple"));
```

<ul>
	<li>1: ['Orange'], ['Orange', 'Apple']</li>
	<li>2: ['Orange'], ['Apple']</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 2</b> <br><br>
   Since the default argument is evaluated at call time, a new object is created each time the function is called. So in this case, the new array is created and an element pushed to the default empty array.
</details>

### 40. What is the output of below code

```javascript
function greet(greeting, name, message = greeting + " " + name) {
  console.log([greeting, name, message]);
}

greet("Hello", "John");
greet("Hello", "John", "Good morning!");
```

<ul>
	<li>1: SyntaxError</li>
	<li>2: ['Hello', 'John', 'Hello John'], ['Hello', 'John', 'Good morning!']</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 2</b> <br><br>
   Since parameters defined earlier are available to later default parameters, this code snippet doesn't throw any error.
</details>

### 41. What is the output of below code

```javascript
function outer(f = inner()) {
  function inner() {
    return "Inner";
  }
}
outer();
```

<ul>
	<li>1: ReferenceError</li>
	<li>2: Inner</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 1</b> <br><br>
   The functions and variables declared in the function body cannot be referred from default value parameter initializers. If you still try to access, it throws a run-time ReferenceError(i.e, inner is not defined).
</details>

### 42. What is the output of below code

```javascript
function myFun(x, y, ...manyMoreArgs) {
  console.log(manyMoreArgs);
}

myFun(1, 2, 3, 4, 5);
myFun(1, 2);
```

<ul>
	<li>1: [3, 4, 5], undefined</li>
	<li>2: SyntaxError</li>
	<li>3: [3, 4, 5], []</li>
	<li>4: [3, 4, 5], [undefined]</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 3</b> <br><br>
   The rest parameter is used to hold the remaining parameters of a function and it becomes an empty array if the argument is not provided.
</details>

### 43. What is the output of below code

```javascript
const obj = { key: "value" };
const array = [...obj];
console.log(array);
```

<ul>
	<li>1: ['key', 'value']</li>
	<li>2: TypeError</li>
	<li>3: []</li>
	<li>4: ['key']</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 2</b> <br><br>
   Spread syntax can be applied only to iterable objects. By default, Objects are not iterable, but they become iterable when used in an Array, or with iterating functions such as map(), reduce(), and assign(). If you still try to do it, it still throws TypeError: obj is not iterable.
</details>

### 44. What is the output of below code

```javascript
function* myGenFunc() {
  yield 1;
  yield 2;
  yield 3;
}
var myGenObj = new myGenFunc();
console.log(myGenObj.next().value);
```

<ul>
	<li>1: 1</li>
	<li>2: undefined</li>
	<li>3: SyntaxError<li>
	<li>4: TypeError</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 4</b> <br><br>
   Generators are not constructible type. But if you still proceed to do, there will be an error saying "TypeError: myGenFunc is not a constructor"
</details>

### 45. What is the output of below code

```javascript
function* yieldAndReturn() {
  yield 1;
  return 2;
  yield 3;
}

var myGenObj = yieldAndReturn();
console.log(myGenObj.next());
console.log(myGenObj.next());
console.log(myGenObj.next());
```

<ul>
	<li>1: { value: 1, done: false }, { value: 2, done: true }, { value: undefined, done: true }</li>
	<li>2: { value: 1, done: false }, { value: 2, done: false }, { value: undefined, done: true }</li>
	<li>3: { value: 1, done: false }, { value: 2, done: true }, { value: 3, done: true }<li>
	<li>4: { value: 1, done: false }, { value: 2, done: false }, { value: 3, done: true }</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 1</b> <br><br>
   A return statement in a generator function will make the generator finish. If a value is returned, it will be set as the value property of the object and done property to true. When a generator is finished, subsequent next() calls return an object of this form: {value: undefined, done: true}.
</details>

### 46. What is the output of below code

```javascript
const myGenerator = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();
for (const value of myGenerator) {
  console.log(value);
  break;
}

for (const value of myGenerator) {
  console.log(value);
}
```

<ul>
	<li>1: 1,2,3 and 1,2,3</li>
	<li>2: 1,2,3 and 4,5,6</li>
	<li>3: 1 and 1<li>
	<li>4: 1</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 4</b> <br><br>
   The generator should not be re-used once the iterator is closed. i.e, Upon exiting a loop(on completion or using break & return), the generator is closed and trying to iterate over it again does not yield any more results. Hence, the second loop doesn't print any value.
</details>

### 47. What is the output of below code

```javascript
const num = 0o38;
console.log(num);
```

<ul>
	<li>1: SyntaxError</li>
	<li>2: 38</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 1</b> <br><br>
   If you use an invalid number(outside of 0-7 range) in the octal literal, JavaScript will throw a SyntaxError. In ES5, it treats the octal literal as a decimal number.
</details>

### 48. What is the output of below code

```javascript
const squareObj = new Square(10);
console.log(squareObj.area);

class Square {
  constructor(length) {
    this.length = length;
  }

  get area() {
    return this.length * this.length;
  }

  set area(value) {
    this.area = value;
  }
}
```

<ul>
	<li>1: 100</li>
	<li>2: ReferenceError</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 2</b> <br><br>
  	Unlike function declarations, class declarations are not hoisted. i.e, First You need to declare your class and then access it, otherwise it will throw a ReferenceError "Uncaught ReferenceError: Square is not defined".<br>
	<b>Note:</b> Class expressions also applies to the same hoisting restrictions of class declarations.
</details>

### 49. What is the output of below code

```javascript
function Person() {}

Person.prototype.walk = function () {
  return this;
};

Person.run = function () {
  return this;
};

let user = new Person();
let walk = user.walk;
console.log(walk());

let run = Person.run;
console.log(run());
```

<ul>
	<li>1: undefined, undefined</li>
	<li>2: Person, Person</li>
	<li>3: SyntaxError</li>
	<li>4: Window, Window</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 4</b> <br><br>
  	When a regular or prototype method is called without a value for this, the methods return an initial this value if the value is not undefined. Otherwise global window object will be returned. In our case, the initial this value is undefined so both methods return window objects.
</details>

### 50. What is the output of below code

```javascript
class Vehicle {
  constructor(name) {
    this.name = name;
  }

  start() {
    console.log(`${this.name} vehicle started`);
  }
}

class Car extends Vehicle {
  start() {
    console.log(`${this.name} car started`);
    super.start();
  }
}

const car = new Car("BMW");
console.log(car.start());
```

<ul>
	<li>1: SyntaxError</li>
	<li>2: BMW vehicle started, BMW car started</li>
	<li>3: BMW car started, BMW vehicle started</li>
	<li>4: BMW car started, BMW car started</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 3</b> <br><br>
  	The super keyword is used to call methods of a superclass. Unlike other languages the super invocation doesn't need to be a first statement. i.e, The statements will be executed in the same order of code.
</details>
