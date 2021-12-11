import HeaderName from '../header-name/header-name';
import PanelAddNewTodo from '../panel-add-new-todo/panel-add-new-todo';
import ToDoList from '../to-do-list/to-do-list';
import './app.css';

 
function App(){
    return(
        <div className="app">
            
            <HeaderName/>,
            <PanelAddNewTodo/>,
            <div>
            <ToDoList/>,
            
            </div>
           

        </div>
    )
}

export default App;