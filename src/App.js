
import './App.css';

function App() {

  function Row(button1, button2, button3, button4, button5, button6) {
    this.button1 = <button>{button1}</button>;
    this.button2 = <button>{button2}</button>;
    this.button3 = <button>{button3}</button>;
    this.button4 = <button>{button4}</button>;
    this.button5 = <button>{button5}</button>;
    this.button6 = <button>{button6}</button>;
  };

  const row1 = new Row ("RAD | Deg", "x!", "(", ")", "%", "CE");
  const row2 = new Row ("lnv", "sin", "7", "8", "9", "/");
  const row3 = new Row ("ln", "cos", "4", "5", "6", "x");
  const row4 = new Row ("e", "tan", "1", "2", "3", "-");
  const row5 = new Row ("Ans", "EXP", "0", ".", "=", "+");
  
    return (
      <div className="App">
        <div className="App-Calculator">
          <div></div>
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
