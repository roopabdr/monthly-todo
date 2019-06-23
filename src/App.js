import React, {Component} from 'react';
import ItemInput from './ItemInput/ItemInput';
import './App.css';
import ItemList from './ItemList/ItemList';

class App extends Component {
  
    constructor(props) {
        super(props);
        if (!(localStorage.getItem('items'))) {
            let itemsArray = [];
            localStorage.setItem('items', JSON.stringify(itemsArray));
        }
        else {
            this.state = {
                itemName: '',
                items: JSON.parse(localStorage.getItem('items')),
            };
        }
    }

  saveToLocalStorage = (label, value) => {
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem(label, JSON.stringify(value));
    }
  }

  onAddClick = () => {
    let listOfItems = [...this.state.items];
    listOfItems.push({ name: this.state.itemName, strikeThrough: false });
    this.setState({itemName: '', items: listOfItems});
    this.saveToLocalStorage('items', listOfItems);
  }

  onItemListKeyPress = () => {
    // console.log('onItemListKeyPress');
    let listOfItems = [...this.state.items];
    listOfItems.push({ name: this.state.itemName, strikeThrough: false });
    this.setState({itemName: '', items: listOfItems});
    this.saveToLocalStorage('items', listOfItems);
  }

  onInputChange = (itemName) => {
    this.setState({itemName: itemName});
  }

  onItemListClick = (element, id) => {
    // console.log(element, 'clicked', id);
    if ( element.includes('trash') ) {
      let listOfItems = [...this.state.items];
      let index = id;
      listOfItems.splice(index, 1);
      this.setState({ items: listOfItems });
      this.saveToLocalStorage('items', listOfItems);
    } else {
        let listOfItems = [...this.state.items];
        let index = id;
        listOfItems[index].strikeThrough = !listOfItems[index].strikeThrough;
        this.setState({ items: listOfItems });
        this.saveToLocalStorage('items', listOfItems);
    }
  }

  render() {
    return (
      <div className="App">
        <ItemInput 
          add={ this.onAddClick } 
          change={ this.onInputChange }
          keyPress={ this.onItemListKeyPress }
          value = { this.state.itemName }
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
