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
  let total = 0, answer = 0, answer2 = 0; 
  let numberArray = [];
  let number ="", operator="";

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

  function findOperator(calculator, char) {
    let returnArray = [], loopArray = calculator;
    let start = 0, end = 0;
    for(let x = 0; x < loopArray.length; x++) {
      if(loopArray[x] === char){
        start = loopArray.indexOf(loopArray[x]);
        end = start + 2;
        if(end > loopArray.length){
          end = start + 1;
        }
        start -= 1;
        while(loopArray[end] === char){
          end += 2;
        }
        returnArray.push(loopArray.splice(start,end));
      }
    }
    returnArray.reverse();
    return returnArray;
  }
  
  function pemdas(calculator){
    let m=[], d=[], a=[], s=[];
    m = findOperator(calculator, "x");
    d = findOperator(calculator, "/");
    a = findOperator(calculator, "+");
    s = findOperator(calculator, "-");
    calculator = m.concat(d,a,s);
    return calculator;
  }
  
  function calculate(info) {
    calculator.push(info);
    document.getElementById('App-Calculator').innerHTML = calculator.join("").toString();

    if(info === "="){
      calculator.pop();

      calculator = pemdas(calculator);
      
      for (let x of calculator) {
        let counter = 0;
        if(x === "-" || x === "+" || x === "/" || x === "x" || x === "%" || x === "."){
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
      if(answer === 0)
        answer += Number(number);
      else if (answer !== 0){
        answer2 += Number(number);
        total = setOperator(operator, total, answer, answer2);
      } 
      document.getElementById('App-Calculator').innerHTML = total;
    }
  }

    return (
      <div className="App">
        <div id='App-Calculator'></div>
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
