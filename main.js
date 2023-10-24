function fizzBuzz() {
  const n = parseInt(document.getElementById("number").value);
  let answer = "";

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      answer = "FizzBuzz";
    } else if (i % 3 === 0) {
      answer = "Fizz";
    } else if (i % 5 === 0) {
      answer = "Buzz";
    } else {
      answer = i.toString();
    }
  }

  document.getElementById("result").innerHTML = answer;
  console.log(answer);
}
