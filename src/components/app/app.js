import {Component} from 'react';
import './app.css';
import HeaderName from '../header-name/header-name';
import FooterPanel from '../footer-panel/footer-panel';
import PanelAddNewTodo from '../panel-add-new-todo/panel-add-new-todo';
import ToDoList from '../to-do-list/to-do-list';



const data = [
    {name : "книга", star : false, id: 1},
    {name : "английский", star : false, id: 2},
    {name : "react", star : false, id: 3},
    {name : "js", star : false, id: 4},
    {name : "html", star : false, id: 5},
    {name : "stretching", star : false, id: 6},
  
];

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : [
                {name : "книга", star : false, id: 1},
                {name : "английский", star : false, id: 2},
                {name : "react", star : false, id: 3},
                {name : "js", star : false, id: 4},
                {name : "html", star : false, id: 5},
                {name : "stretching", star : false, id: 6},
              
            ]
        }
    }
    onAddNewTodo = (text) => {
        console.log(text);
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
           return {
               data : data.filter(item => item.id !== id)
           }
        })
    }

    render(){
        return(
            <div className="app">
                <HeaderName/>
                <PanelAddNewTodo onAddNewTodo={this.onAddNewTodo}/>
                <ToDoList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                />
                <FooterPanel/>
            </div>
             
        )
    }
 
}

export default App;