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
<b>Answer: 4</b> <br>
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
<b>Answer: 3</b> <br>
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
<b>Answer: 4</b> <br>
    The statements order is based on the event loop mechanism. The order of statements follows the below order, <br>
	<ul>
		<li>1. At first, the main function is pushed to the stack.</li>
		<li>2. Then the browser pushes the first statement of the main function( i.e, A's console.log) to the stack, executing and popping out immediately.</li>
		<li>3. But setTimeout statement moved to Browser API to apply the delay for callback.</li>
		<li>4. In the meantime, C's console.log added to stack, executed and popped out.</li>
		<li>5. The callback of setTimeout moved from Browser API to message queue.</li>
		<li>6. The main function popped out from stack because there are no statements to execute</li>
		<li>7. The callback moved from message queue to the stack since the stack is empty.</li>
		<li>8. The console.log for B is added to the stack and display on the console.</li>
	</ul>
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
<b>Answer: 1</b> <br>
    This is due to the float point math problem. Since the floating point numbers are encoded in binary format, the addition operations on them lead to rounding errors. Hence, the comparison of floating points doesn't give expected results. You can find more details about the explanation here 0.30000000000000004.com/
</details>