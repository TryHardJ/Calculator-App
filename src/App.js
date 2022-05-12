import { render } from '@testing-library/react';
import './App.css';

function App() {

  function Row(button1, button2, button3, button4, button5, button6) {
    this.button1 = button1;
    this.button2 = button2;
    this.button3 = button3;
    this.button4 = button4;
    this.button5 = button5;
    this.button6 = button6;

    this.row = (button1, button2, button3, button4, button5, button6) => {
      let row = "";
      for (let x in Row)
        row += "<button>"+ [x] +"</button>";
      return row;
    }
  };

  const row1 = new Row ("RAD | Deg", "x!", "(", ")", "%", "AC");
  const row2 = new Row ("lnv", "sin", "7", "8", "9", "%");
  const row3 = new Row ("ln", "cos", "4", "5", "6", "x");
  const row4 = new Row ("e", "tan", "1", "2", "3", "-");
  const row5 = new Row ("Ans", "EXP", "0", ".", "=", "+");


  render () {

    
    return (
      <div className="App">
        <div className="App-Calculator">
        
        
        </div>
      </div>
    );
  }
  
}

export default App;
