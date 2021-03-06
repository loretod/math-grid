import React, { Component } from 'react';
import './css/App.css';
import _ from 'lodash';


const numCells = 48;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid />
      </div>
    );
  }
}



class Grid extends Component
{

  constructor(props)
  {
    super(props);
    let cells = _.map(new Array(numCells),(c,i)=>{ 
      return {
        id: i+1, 
        isActive: false,
        val: ""
      }});
    
  }

  render()
  {
    return (
      <table className="Grid">
        <tbody>
          <tr className="row">
            <Cell row="0" col="0" val="foo" />
            <Cell row="0" col="1"/>
            <Cell row="0" col="2"/>
          </tr>
        </tbody>
      </table>
    );
  }
}

// class Row extends Component
// {
//   constructor(props) 
//   {
//     super(props);
//     this.row = props.row;  
//     this.cols = props.cols;
//     this.cells = new Array(this.cols);
//   }
//   render()
//   {
//     return (
//       <tr className="Row">

//       </tr>
//     );
//   }
// }

class Cell extends Component 
{
  constructor(props) 
  {
    super(props);
    this.row = props.row;
    this.col = props.col;

    this.state = {
      val: props.val || "", 
      isActive: false,
      cssClass: "Cell"
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKey = this.handleKey.bind(this);
  }

  handleClick() 
  {
    console.log("clicked");
    //broadcast deactivate...
    this.setState(prevState => ({
      isActive: true,
      cssClass: "Cell Cell-active"
    }));
  }


  handleKey(e) 
  {
    console.log(e.charCode);
    console.log(String.fromCharCode(e.charCode));

  }


  render()
  {
    return (
      <td className={this.state.cssClass} 
        onClick={this.handleClick} onKeyPress={this.handleKey}>
        {this.state.val}
      </td>
    );
  }

}

export default App;
