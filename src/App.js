import React, {Component} from 'react';
import ItemList from './ItemList/ItemList';
import './App.css';

class App extends Component {
  state = {
    item: ''
  };

  onAddClick = () => {
    console.log(this.state.item);
  }

  onInputChange = (event) => {
    this.setState({ item: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <ItemList add={ this.onAddClick } change={ this.onInputChange }/>
      </div>
    );
  }
}

export default App;
