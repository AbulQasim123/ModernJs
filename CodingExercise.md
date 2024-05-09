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

1: Undefined <br>
2: ReferenceError <br>
3: null <br>
4: {model: "Honda", color: "white", year: "2010", country: "UK"} <br>

<details>
<summary>Answer</summary>
Answer: 4 <br>
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

1: 1, undefined and undefined <br>
2: ReferenceError: X is not defined <br>
3: 1, undefined and number <br>
4: 1, number and number <br>

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

1: A, B and C  <br>
2: B, A and C  <br>
3: A and C  <br>
4: A, C and B  <br>

### 4. What is the output of below equality check

```javascript
console.log(0.1 + 0.2 === 0.3);
```

1: false  <br>
2: true  <br>
