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

  function findOperator(calculator) {
    let mdArray = [], asArray = [];
    let start = 0, end = 0;
    //for(let x = 0; x < loopArray.length; x++) {
    for(let x of calculator){
      if(x === "x" || x === "/"){
        start = calculator.indexOf(x);
        console.log(start)
        end = start + 2;
        
        while(calculator[end] === "x" || calculator[end] === "/"){
          end += 2;
        }
        
        start -= 2;
        while(calculator[start] === "x" || calculator[start] === "/"){
          start -=2;
        }
        
        console.log(start)
        mdArray = calculator.slice(start,end);
        console.log(mdArray)
      }
    }
    //returnArray = loopArray;
    console.log(mdArray)
    console.log(calculator)
    //returnArray.reverse();
    //console.log(returnArray)
    return mdArray;
  }
  
  function pemdas(calculator){
    let m=[];
    m = findOperator(calculator);
    
    console.log(m)
    console.log(calculator)
    
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
