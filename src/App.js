import React, {Component} from 'react';
import ItemInput from './ItemInput/ItemInput';
import './App.css';
import ItemList from './ItemList/ItemList';

class App extends Component {
  state = {
    itemName: '',
    items: []
  };

  onAddClick = () => {        
    let listOfItems = [...this.state.items];
    listOfItems.push(this.state.itemName);
    this.setState({items: listOfItems});
  }

  onInputChange = (itemName) => {    
    this.setState({itemName: itemName});
  }

  render() {
    return (
      <div className="App">
        <ItemInput add={ this.onAddClick } change={ this.onInputChange }/>
        <div className='item-wrapper'>
        {
          this.state.items.map(item => {
            return <ItemList itemProp={ item }/>
          })
        }
        </div>
      </div>
    );
  }
}

export default App;
