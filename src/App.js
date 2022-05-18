import './App.css';

function App() {

  function Row(button1, button2, button3, button4, button5, button6) {
    this.button1 = <button onClick={() => calculate(button1)}>{button1}</button>;
    this.button2 = <button onClick={() => calculate(button2)}>{button2}</button>;
    this.button3 = <button onClick={() => calculate(button3)}>{button3}</button>;
    this.button4 = <button onClick={() => calculate(button4)}>{button4}</button>;
    this.button5 = <button onClick={() => calculate(button5)}>{button5}</button>;
    this.button6 = <button onClick={() => calculate(button6)}>{button6}</button>;
  };

  const row1 = new Row ("abs", "pow", "(", ")", "%", "CE");
  const row2 = new Row ("sqrt", "sin", "7", "8", "9", "/");
  const row3 = new Row ("log", "cos", "4", "5", "6", "X");
  const row4 = new Row ("PI", "tan", "1", "2", "3", "-");
  const row5 = new Row ("Ans", "exp", "0", ".", "=", "+");

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
      case "X":
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
      if(char === "("){
        for (let x of calculator) {
          let start = 0, end = 0, returnArray = [];
          let text = calculator.join("").toString();
          start = text.search("(");
          end = text.search(")");
          start += 1;
          return returnArray = calculator.slice(start,end);
        }
      }
      
  }

  function pemdas(calculator){
    let p=[], e=[], m=[], d=[], a=[], s=[];
    p = findOperator(calculator,"(");
    
  }
  
  function calculate(info) {
    calculator.push(info);
    document.getElementById('App-Calculator').innerHTML = calculator.join("").toString();

    if(info === "="){
      calculator.pop();

      

      for (let x of calculator) {
        let counter = 0;
        if(x === "-" || x === "+" || x === "/" || x === "X" || x === "%" || x === "."){
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
          {row1.button1}{row1.button2}{row1.button3}{row1.button4}{row1.button5}{row1.button6}
          {row2.button1}{row2.button2}{row2.button3}{row2.button4}{row2.button5}{row2.button6}
          {row3.button1}{row3.button2}{row3.button3}{row3.button4}{row3.button5}{row3.button6}
          {row4.button1}{row4.button2}{row4.button3}{row4.button4}{row4.button5}{row4.button6}
          {row5.button1}{row5.button2}{row5.button3}{row5.button4}{row5.button5}{row5.button6}
        </div>
      </div>
    );
}
  
export default App;
