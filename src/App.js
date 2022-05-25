import './App.css';

function App() {

  function Row(button1, button2, button3, button4) {
    this.button1 = <button onClick={() => calculate(button1)}>{button1}</button>;
    this.button2 = <button onClick={() => calculate(button2)}>{button2}</button>;
    this.button3 = <button onClick={() => calculate(button3)}>{button3}</button>;
    this.button4 = <button onClick={() => calculate(button4)}>{button4}</button>;
  };

  const row1 = new Row ("7", "8", "9", "/");
  const row2 = new Row ("4", "5", "6", "x");
  const row3 = new Row ("1", "2", "3", "-");
  const row4 = new Row ("0", ".", "=", "+");

  let calculator = [];
  let total = 0;
  let counter = 0;

  function setOperator(operator, total, answer, answer2){
    switch(operator){
      case "-":
        total = answer - answer2;
      break;
      case "+":
        total = answer + answer2;
      break;
      case "/":
        total = answer / answer2;
      break;
      case "x":
        total = answer * answer2;
      break;
      case "%":
        total = answer % answer2;
      break;
      default: 
    }
    return total;
  }

  function sumOf(array){
    let total = 0, answer = 0, answer2 = 0; 
    let numberArray = [];
    let number ="", operator="";

    for (let x of array) {
      let counter = 0;
      if(x === "-" || x === "+" || x === "/" || x === "x" || x === "%"){
        for(let x of numberArray){
          number += x;
        }
        if(answer === 0){
          answer += Number(number);
          operator = x;
        }               
        else if (answer !== 0){
          answer2 += Number(number);
          answer = setOperator(operator, total, answer, answer2);
          operator = x;
          answer2 = 0;
          total = 0;
        }
        number = "";
        counter += 1;
        numberArray = [];
      }
      if(counter === 0) 
        numberArray.push(x);
    }

    number += Number(numberArray.join("").toString());
    if(answer === 0){
      answer += Number(number);
      return answer
    }
    else if (answer !== 0){
      answer2 += Number(number);
      total = setOperator(operator, total, answer, answer2);
      return total;
    }
  }

  function pemdas(calculator) {
    let mdArray = [], asArray=[];
    for(let x of calculator){
      let start = 0, end = 0, arraySum = 0;
      if(x === "x" || x === "/"){
        start = calculator.indexOf(x);
        end = start + 1;

        while(calculator[start] !== "+" && calculator[start] !== "-"
        && typeof calculator[start] === typeof "string"){
          start -= 1;
        }

        while(calculator[end] !== "+" && calculator[end] !== "-"
        && typeof calculator[end] === typeof "string"){
          end += 1;
        }

        for(; start < end; start ++){
          if(typeof calculator[start] !== typeof undefined){
            mdArray.push(calculator[start]);
          delete calculator[start];
          }
        }

        arraySum = (sumOf(mdArray)).toString();
        asArray.push(arraySum);
      }
      else if (x === "+" || x === "-"){
        start = calculator.indexOf(x);
        end = start + 1;

        while(calculator[start] !== "x" && calculator[start] !== "/"
        && typeof calculator[start] === typeof "string"){
          start -= 1;
        }

        while(calculator[end] !== "x" && calculator[end] !== "/"
        && typeof calculator[end] === typeof "string"){
          end += 1;
        }

        while(calculator[end] !== "+" && calculator[end] !== "-"
        && typeof calculator[end] === typeof "string"){
          end -= 1;
        }
        end += 1;

        for(; start < end; start ++){
          if(typeof calculator[start] !== typeof undefined){
            asArray.push(calculator[start]);
          delete calculator[start];
          }
        }
      }
    }
    return asArray;
  }
  
  function calculate(info) {
    calculator.push(info);
    document.getElementById('Calculator-Text').innerHTML = calculator.join("").toString();

    if(info === "="){
      counter = 1;
      calculator.pop();
      calculator = pemdas(calculator);
      total = sumOf(calculator);
      document.getElementById('Calculator-Text').innerHTML = total;
      document.getElementById('Delete-Button').innerHTML = 'AC';
      calculator = [];
      calculator.push((total).toString());
    }
  }

  function clearCalculator() {
    if(counter !== 0){
      calculator = [];
      document.getElementById('Delete-Button').innerHTML = 'CE';
      document.getElementById('Calculator-Text').innerHTML = calculator.join("").toString();
      counter = 0;
    }
    else{
      calculator.pop();
      document.getElementById('Calculator-Text').innerHTML = calculator.join("").toString();
    }
  }

    return (
      <div className="App">
        <div id='App-Calculator'>
          <button id='Delete-Button' onClick={clearCalculator}>CE</button>
          <p id='Calculator-Text'></p>
        </div>
        <div className="App-Buttons">
          {row1.button1}{row1.button2}{row1.button3}{row1.button4}
          {row2.button1}{row2.button2}{row2.button3}{row2.button4}
          {row3.button1}{row3.button2}{row3.button3}{row3.button4}
          {row4.button1}{row4.button2}{row4.button3}{row4.button4}
        </div>
      </div>
    );
}
  
export default App;
