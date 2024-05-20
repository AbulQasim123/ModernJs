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

### 51. What is the output of below code

```javascript
const USER = { age: 30 };
USER.age = 25;
console.log(USER.age);
```

<ul>
	<li>1: 30</li>
	<li>2: 25</li>
	<li>3: Uncaught TypeError</li>
	<li>4: SyntaxError</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 2</b> <br><br>
  	Even though we used constant variables, the content of it is an object and the object's contents (e.g properties) can be altered. Hence, the change is going to be valid in this case.
</details>

### 52. What is the output of below code

```javascript
console.log("🙂" === "🙂");
```

<ul>
	<li>1: false</li>
	<li>2: true</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 2</b> <br><br>
  	Emojis are unicodes and the unicode for smile symbol is "U+1F642". The unicode comparision of same emojies is equivalent to string comparison. Hence, the output is always true.
</details>

### 53. What is the output of below code

```javascript
console.log(typeof typeof typeof true);
```

<ul>
	<li>1: string</li>
	<li>2: boolean</li>
	<li>3: NaN</li>
	<li>4: number</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 1</b> <br><br>
  	The typeof operator on any primitive returns a string value. So even if you apply the chain of typeof operators on the return value, it is always string.
</details>

### 54. What is the output of below code

```javascript
let zero = new Number(0);

if (zero) {
  console.log("If");
} else {
  console.log("Else");
}
```

<ul>
	<li>1: If</li>
	<li>2: Else</li>
	<li>3: NaN</li>
	<li>4: SyntaxError</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 1</b> <br><br>
	<ol>
    	<li>The type of operator on new Number always returns object. i.e, typeof new Number(0) --> object.</li>
    	<li>Objects are always truthy in if block</li>
    <ol>
	Hence the above code block always goes to if section.
</details>

### 55. What is the output of below code in non strict mode?

```javascript
let msg = "Good morning!!";

msg.name = "John";

console.log(msg.name);
```

<ul>
	<li>1: ""</li>
	<li>2: Error</li>
	<li>3: John</li>
	<li>4: Undefined</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 4</b> <br><br>
	It returns undefined for non-strict mode and returns Error for strict mode. In non-strict mode, the wrapper object is going to be created and get the mentioned property. But the object get disappeared after accessing the property in next line.
</details>

### 56. What is the output of below code?

```javascript
let count = 10;

(function innerFunc() {
  if (count === 10) {
    let count = 11;
    console.log(count);
  }
  console.log(count);
})();
```

<ul>
	<li>1: 11, 10</li>
	<li>2: 11, 11</li>
	<li>3: 10, 11</li>
	<li>4: 10, 10</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 1</b> <br><br>
	11 and 10 is logged to the console.

    The innerFunc is a closure which captures the count variable from the outerscope. i.e, 10. But the conditional has another local variable count which overwrites the ourter count variable. So the first console.log displays value 11. Whereas the second console.log logs 10 by capturing the count variable from outerscope.

</details>

### 57. What is the output of below code ?

<ul>
	<li>1: console.log(true && 'hi');</li>
	<li>2: console.log(true && 'hi' && 1);</li>
	<li>3: console.log(true && '' && 0);</li>
</ul>
<details>
<summary>Answer</summary><br>
<ol>
	<li>1: hi</li>
	<li>2: 1</li>
	<li>3: ''</li>
</ol>
<br><br>
	Reason : The operator returns the value of the first falsy operand encountered when evaluating from left to right, or the value of the last operand if they are all truthy.
</details>

### 58. What is the output of below code?

```javascript
let arr = [1, 2, 3];
let str = "1,2,3";

console.log(arr == str);
```

<ul>
	<li>1: false</li>
	<li>2: Error</li>
	<li>3: true</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 3</b> <br><br>
	Arrays have their own implementation of toString method that returns a comma-separated list of elements. So the above code snippet returns true. In order to avoid conversion of array type, we should use === for comparison.
</details>

### 59. What is the output of below code?

```javascript
getMessage();

var getMessage = () => {
  console.log("Good morning");
};
```

<ul>
	<li>1: Good morning</li>
	<li>2: getMessage is not a function</li>
	<li>3: getMessage is not defined</li>
	<li>4: Undefined</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 2</b> <br><br>
	Hoisting will move variables and functions to be the top of scope. Even though getMessage is an arrow function the above function will considered as a varible due to it's variable declaration or assignment. So the variables will have undefined value in memory phase and throws an error 'getMessage is not a function' at the code execution phase.
</details>

### 60. What is the output of below code?

```javascript
let quickPromise = Promise.resolve();

quickPromise.then(() => console.log("promise finished"));

console.log("program finished");
```

<ul>
	<li>1: program finished</li>
	<li>2: Cannot predict the order</li>
	<li>3: program finished, promise finished</li>
	<li>4: promise finished, program finished</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 2</b> <br><br>
	Even though a promise is resolved immediately, it won't be executed immediately because its .then/catch/finally handlers or callbacks(aka task) are pushed into the queue. Whenever the JavaScript engine becomes free from the current program, it pulls a task from the queue and executes it. This is the reason why last statement is printed first before the log of promise handler.
	<b>Note: We call the above queue as "MicroTask Queue"</b>
</details>

### 61. What is the output of below code?

```javascript
var of = ["of"];
for (var of of of) {
  console.log(of);
}
```

<ul>
	<li>1: of</li>
	<li>2: SyntaxError: Unexpected token of</li>
	<li>3: SyntaxError: Identifier 'of' has already been declared</li>
	<li>4: ReferenceError: of is not defined</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 1</b> <br><br>
	In JavaScript, of is not considered as a reserved keyword. So the variable declaration with of is accepted and prints the array value of using for..of loop.
</details>

### 62. What is the output of below code?

```javascript
const numbers = [11, 25, 31, 23, 33, 18, 200];
numbers.sort();
console.log(numbers);
```

<ul>
	<li>1: [11, 18, 23, 25, 31, 33, 200]</li>
	<li>2: [11, 18, 200, 23, 25, 31, 33]</li>
	<li>3: [11, 25, 31, 23, 33, 18, 200]</li>
	<li>4: Cannot sort numbers</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 2</b> <br><br>
	By default, the sort method sorts elements alphabetically. This is because elemented converted to strings and strings compared in UTF-16 code units order. Hence, you will see the above numbers not sorted as expected. In order to sort numerically just supply a comparator function which handles numeric sorts.
</details>

### 63. What is the output of below code?

```javascript
setTimeout(() => {
  console.log("1");
}, 0);
Promise.resolve("hello").then(() => console.log("2"));
console.log("3");
```

<ul>
	<li>1: 1, 2, 3</li>
	<li>2: 1, 3, 2</li>
	<li>3: 3, 1, 2</li>
	<li>4: 3, 2, 1</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 4</b> <br><br>
	When the JavaScript engine parses the above code, the first two statements are asynchronous which will be executed later and third statement is synchronous statement which will be moved to callstack, executed and prints the number 3 in the console. Next, Promise is native in ES6 and it will be moved to Job queue which has high priority than callback queue in the execution order. At last, since setTimeout is part of WebAPI the callback function moved to callback queue and executed. Hence, you will see number 2 printed first followed by 1.
</details>

### 64. What is the output of below code?

```javascript
console.log(name);
console.log(message());
var name = "John";
(function message() {
  console.log("Hello John: Welcome");
});
```

<ul>
	<li>1: John, Hello John: Welcome</li>
	<li>2: undefined, Hello John, Welcome</li>
	<li>3: Reference error: name is not defined, Reference error: message is not defined</li>
	<li>4: undefined, Reference error: message is not defined</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 4</b> <br><br>
	IIFE(Immediately Invoked Function Expression) is just like any other function expression which won't be hoisted. Hence, there will be a reference error for message call. The behavior would be the same with below function expression of message1,
</details>

### 65. What is the output of below code?

```javascript
message();

function message() {
  console.log("Hello");
}
function message() {
  console.log("Bye");
}
```

<ul>
	<li>1: Reference error: message is not defined</li>
	<li>2: Hello</li>
	<li>3: Bye</li>
	<li>4: Compile time error</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 3</b> <br><br>
	As part of hoisting, initially JavaScript Engine or compiler will store first function in heap memory but later rewrite or replaces with redefined function content.
</details>

### 66. What is the output of below code?

```javascript
var currentCity = "NewYork";

var changeCurrentCity = function () {
  console.log("Current City:", currentCity);
  var currentCity = "Singapore";
  console.log("Current City:", currentCity);
};

changeCurrentCity();
```

<ul>
	<li>1: NewYork, Singapore</li>
	<li>2: NewYork, NewYork</li>
	<li>3: undefined, Singapore</li>
	<li>4: Singapore, Singapore</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 3</b> <br><br>
	Due to hositing feature, the variables declared with var will have undefined value in the creation phase so the outer variable currentCity will get same undefined value. But after few lines of code JavaScript engine found a new function call(changeCurrentCity()) to update the current city with var re-declaration. Since each function call will create a new execution context, the same variable will have undefined value before the declaration and new value(Singapore) after the declarion. Hence, the value undefined print first followed by new value Singapore in the execution phase.
</details>

### 67. What is the output of below code in an order?

```javascript
function second() {
  var message;
  console.log(message);
}

function first() {
  var message = "first";
  second();
  console.log(message);
}

var message = "default";
first();
console.log(message);
```

<ul>
	<li>1: undefined, first, default</li>
	<li>2: default, default, default</li>
	<li>3: first, first, default</li>
	<li>4: undefined, undefined, undefined</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 1</b> <br><br>
	Each context(global or functional) has it's own variable environment and the callstack of variables in a LIFO order. So you can see the message variable value from second, first functions in an order followed by global context message variable value at the end.
</details>

### 68. What is the output of below code?

```javascript
var expressionOne = function functionOne() {
  console.log("functionOne");
};
functionOne();
```

<ul>
	<li>1: functionOne is not defined</li>
	<li>2: functionOne</li>
	<li>3: console.log("functionOne")</li>
	<li>4: undefined</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 1</b> <br><br>
	The function call functionOne is not going to be part of scope chain and it has it's own execution context with the enclosed variable environment. i.e, It won't be accessed from global context. Hence, there will be an error while invoking the function as functionOne is not defined.
</details>

### 69. What is the output of below code?

```javascript
const user = {
  name: "John",
  eat() {
    console.log(this);
    var eatFruit = function () {
      console.log(this);
    };
    eatFruit();
  },
};
user.eat();
```

<ul>
	<li>1: {name: "John", eat: f}, {name: "John", eat: f}</li>
	<li>2: Window {...}, Window {...}</li>
	<li>3: {name: "John", eat: f}, undefined</li>
	<li>4: {name: "John", eat: f}, Window {...}</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 4</b> <br><br>
	this keyword is dynamic scoped but not lexically scoped . In other words, it doesn't matter where this has been written but how it has been invoked really matter. In the above code snippet, the user object invokes eat function so this keyword refers to user object but eatFruit has been invoked by eat function and this will have default Window object.
</details>

### 70. What is the output of below code?

```javascript
let message = "Hello World!";
message[0] = "J";
console.log(message);

let name = "John";
name = name + " Smith";
console.log(name);
```

<ul>
	<li>1: Jello World!, John Smith</li>
	<li>2: Jello World!, John</li>
	<li>3: Hello World!, John Smith</li>
	<li>4: Hello World!, John</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 3</b> <br><br>
	In JavaScript, primitives are immutable i.e. there is no way to change a primitive value once it gets created. So when you try to update the string's first character, there is no change in the string value and prints the same initial value Hello World!. Whereas in the later example, the concatenated value is re-assigned to the same variable which will result into creation of new memory block with the reference pointing to John Smith value and the old memory block value(John) will be garbage collected.
</details>

### 71. What is the output of below code?

```javascript
let user1 = {
  name: "Jacob",
  age: 28,
};

let user2 = {
  name: "Jacob",
  age: 28,
};

console.log(user1 === user2);
```

<ul>
	<li>1: True</li>
	<li>2: False</li>
	<li>3: Compile time error</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 2</b> <br><br>
	In JavaScript, the variables such as objects, arrays and functions comes under pass by reference. When you try to compare two objects with same content, it is going to compare memory address or reference of those variables. These variables always create separate memory blocks hence the comparison is always going to return false value.
</details>

### 72. What is the output of below code?

```javascript
function greeting() {
  setTimeout(function () {
    console.log(message);
  }, 5000);
  const message = "Hello, Good morning";
}
greeting();
```

<ul>
	<li>1: Undefined</li>
	<li>2: Reference error:</li>
	<li>3: Hello, Good morning</li>
	<li>3: null</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 3</b> <br><br>
	The variable message is still treated as closure(since it has been used in inner function) eventhough it has been declared after setTimeout function. The function with in setTimeout function will be sent to WebAPI and the variable declaration executed with in 5 seconds with the assigned value. Hence, the text declared for the variable will be displayed.
</details>

### 73. What is the output of below code?

```javascript
const a = new Number(10);
const b = 10;
console.log(a === b);
```

<ul>
	<li>1: False</li>
	<li>2: True</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 1</b> <br><br>
	Eventhough both variables a and b refer a number value, the first declaration is based on constructor function and the type of the variable is going to be object type. Whereas the second declaration is primitive assignment with a number and the type is number type. Hence, the equality operator === will output false value.
</details>

### 74. What is the type of below function?

```javascript
function add(a, b) {
  console.log("The input arguments are: ", a, b);
  return a + b;
}
```

<ul>
	<li>1: Pure function</li>
	<li>2: Impure function</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 2</b> <br><br>
	Eventhough the above function returns the same result for the same arguments(input) that are passed in the function, the console.log() statement causes a function to have side effects because it affects the state of an external code. i.e, the console object's state and depends on it to perform the job. Hence, the above function considered as impure function.
</details>

### 75. What is the output of below code?

```javascript
const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 4000));
const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 4000));

Promise.all([promiseOne, promiseTwo]).then((data) => console.log(data));
```

<ul>
	<li>1: [{status: "fullfilled", value: undefined}, {status: "rejected", reason: undefined}]</li>
	<li>2: [{status: "fullfilled", value: undefined}, Uncaught(in promise)]</li>
	<li>3: Uncaught (in promise)</li>
	<li>4: [Uncaught(in promise), Uncaught(in promise)]</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 3</b> <br><br>
	The above promises settled at the same time but one of them resolved and other one rejected. When you use .all method on these promises, the result will be short circuted by throwing an error due to rejection in second promise. But If you use .allSettled method then result of both the promises will be returned irrespective of resolved or rejected promise status without throwing any error.
</details>

### 76. What is the output of below code?

```javascript
try {
  setTimeout(() => {
    console.log("try block");
    throw new Error(`An exception is thrown`);
  }, 1000);
} catch (err) {
  console.log("Error: ", err);
}
```

<ul>
	<li>1: try block, Error: An exception is thrown</li>
	<li>2: Error: An exception is thrown</li>
	<li>3: try block, Uncaught Error: Exception is thrown</li>
	<li>4: Uncaught Error: Exception is thrown</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 3</b> <br><br>
	If you put setTimeout and setInterval methods inside the try clause and an exception is thrown, the catch clause will not catch any of them. This is because the try...catch statement works synchronously, and the function in the above code is executed asynchronously after a certain period of time. Hence, you will see runtime exception without catching the error. To resolve this issue, you have to put the try...catch block inside the function as below,
</details>

### 77. What is the output of below code?

```javascript
let a = 10;
if (true) {
  let a = 20;
  console.log(a, "inside");
}
console.log(a, "outside");
```

<ul>
	<li>1: 20, "inside" and 20, "outside"</li>
	<li>2: 20, "inside" and 10, "outside"</li>
	<li>3: 10, "inside" and 10, "outside"</li>
	<li>4: 10, "inside" and 20, "outside"</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 2</b> <br><br>
	The variable "a" declared inside "if" has block scope and does not affect the value of the outer "a" variable.
</details>

### 78. What is the output of below code?

```javascript
let arr = [1, 2, 3, 4, 5, -6, 7];
arr.length = 0;
console.log(arr);
```

<ul>
	<li>1: 0</li>
	<li>2: Undefined</li>
	<li>3: null</li>
	<li>4: []</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 4</b> <br><br>
	The length of the array 'arr' has been set to 0, so the array becomes empty.
</details>

### 79. What is the output of below code?

```javascript
printHello();

printMessage();

function printHello() {
  console.log("Hello");

  function printMessage() {
    console.log("Good day");
  }
}
```

<ul>
	<li>1: Hello, Good day</li>
	<li>2: Reference Error: printHello is not defined, Reference Error: printMessage is not defined</li>
	<li>3: Reference Error: printHello is not defined, Good day</li>
	<li>4: Hello, Reference Error: printMessage is not defined</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 4</b> <br><br>
	The function printHello is hoisted to the top of the global scope and prints "Hello" to the console. Even printMessage function is hoisted, but it is lifted to the local scope(in "printHello") it was declared in. That is the reason you will endup with reference error for second function call.
</details>

### 80. What is the output of below code?

```javascript
console.log("Start code");

setTimeout(function () {
  console.log("Callback code");
}, 5000);

console.log("After callback");

let startTime = new Date().getTime();
let endTime = startTime;

while (endTime <= startTime + 10000) {
  endTime = new Date().getTime();
}

console.log("End code");
```

<ul>
	<li>1: > 10 sec</li>
	<li>2: Immediately</li>
	<li>3: < 10 sec</li>
	<li>4: <= 5sec</li>
</ul>
<details>
<summary>Answer</summary><br>
<b>Answer: 1</b> <br><br>
	Even though there is a timer of 5 seconds supplied to setTimeout callback, it won't get executed until the main thread is free and finished executing the remaining part of the code. In this example, the remaining code(while loop) takes 10seconds to finish it's execution. In the mean time, the callback will be stored in callback queue upon completion of its 5 seconds timer. After 10 seconds, the callback will be moved to callstack because the callstack is empty by poping out global execution context.
</details>

<h1>Good luck with your interview 😊</h1>