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
```html
<ol>
	<li>1: Undefined</li>
	<li>2: ReferenceError</li>
	<li>3: null</li>
	<li>4: {model: "Honda", color: "white", year: "2010", country: "UK"}</li>
</ol>

<b>Answers</b>
<details>
  <p>
    Answer: 4 <br />
    The function declarations are hoisted similar to any variables. So the
    placement for Vehicle function declaration doesn't make any difference.
  </p>
</details>
```

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
```html
<ol>
	<li>1: 1, undefined and undefined</li>
	<li>2: ReferenceError: X is not defined</li>
	<li>3: 1, undefined and number</li>
	<li>4: 1, number and number</li>
</ol>
```
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
```html
<ol>
	<li>1: A, B and C</li>
	<li>2: B, A and C</li>
	<li>3: A and C</li>
	<li>4: A, C and B</li>
</ol>
```
### 4. What is the output of below equality check

```javascript
console.log(0.1 + 0.2 === 0.3);
```
```html
<ol>
	<li>1: false</li>
	<li>2: true</li>
</ol>
```
