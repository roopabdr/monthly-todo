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

  onItemListClick = (element) => {
    console.log(element, 'clicked');
    if ( element.includes('trash') ) {
      let listOfItems = [...this.state.items];
      let index = element[element.length-1];
      listOfItems.splice(index, 1);
      this.setState({ items: listOfItems });
    }
  }

  render() {
    return (
      <div className="App">
        <ItemInput add={ this.onAddClick } change={ this.onInputChange }/>
        <div className='item-wrapper'>
        {
          this.state.items.map((item, index) => {
            return <ItemList itemProp={ item } key={ `item${index}` } id={ `item${index}` } itemlistClick={ this.onItemListClick }/>
          })
        }
        </div>
      </div>
    );
  }
}

export default App;
