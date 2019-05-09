import React, {Component} from 'react';
import ItemInput from './ItemInput/ItemInput';
import './App.css';
import ItemList from './ItemList/ItemList';

class App extends Component {
  state = {
    itemName: '',
    items: [],
  };

  onAddClick = () => {
    let listOfItems = [...this.state.items];
    listOfItems.push({ name: this.state.itemName, strikeThrough: false });
    this.setState({items: listOfItems});
  }

  onItemListKeyPress = () => {
    console.log('onItemListKeyPress');
    let listOfItems = [...this.state.items];
    listOfItems.push({ name: this.state.itemName, strikeThrough: false });
    this.setState({items: listOfItems});
  }

  onInputChange = (itemName) => {
    this.setState({itemName: itemName});
  }

  onItemListClick = (element, id) => {
    console.log(element, 'clicked', id);
    if ( element.includes('trash') ) {
      let listOfItems = [...this.state.items];
      let index = id;
      listOfItems.splice(index, 1);
      this.setState({ items: listOfItems });
    } else {
        let listOfItems = [...this.state.items];
        let index = id;
        listOfItems[index].strikeThrough = !listOfItems[index].strikeThrough;
        this.setState({ items: listOfItems });
    }
  }

  render() {
    return (
      <div className="App">
        <ItemInput 
          add={ this.onAddClick } 
          change={ this.onInputChange }
          keyPress={ this.onItemListKeyPress }
          />
        <div className='item-wrapper'>
        {
          this.state.items.map((item, index) => {
            return <ItemList 
              itemProp={ item.name } 
              key={ `item${index}` } 
              id={ `${index}` } 
              itemlistClick={ this.onItemListClick }               
              strike={ item.strikeThrough }
              />
          })
        }
        </div>
      </div>
    );
  }
}

export default App;
