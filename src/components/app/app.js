import {Component} from 'react';
import './app.css';
import HeaderName from '../header-name/header-name';
import FooterPanel from '../footer-panel/footer-panel';
import PanelAddNewTodo from '../panel-add-new-todo/panel-add-new-todo';
import ToDoList from '../to-do-list/to-do-list';

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
        this.maxId = 15;
    }
    onAddNewTodo = (name) => {
        const newTodo = {
            name,
            srar: false,
            id : this.maxId ++
        }
        this.setState(({data}) => {
            const newArrTodo = [...data, newTodo];
            return {
                data : newArrTodo
            }
        })
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
           return {
               data : data.filter(item => item.id !== id)
           }
        })
    }

    onTogglePriority = (id) => {
        this.setState(({data}) => ({
            data : data.map(item => {
                if(item.id === id){
                    return {...item, star : !item.star}
                }
                return item;
            })
        }))
    }
  
    render(){
        const tasksCounter = this.state.data.length;
        return(
            <div className="app">
                <HeaderName/>
                <PanelAddNewTodo 
                    onAddNewTodo={this.onAddNewTodo}/>
                <ToDoList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onTogglePriority={this.onTogglePriority}

                />
                <FooterPanel
                tasksCounter={tasksCounter}/>
            </div>
             
        )
    }
 
}

export default App;