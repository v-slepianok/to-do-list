import HeaderName from '../header-name/header-name';
import FooterPanel from '../footer-panel/footer-panel';
import PanelAddNewTodo from '../panel-add-new-todo/panel-add-new-todo';
import ToDoList from '../to-do-list/to-do-list';

import './app.css';

const data = [
    {name : "книга", star : false},
    {name : "английский", star : false},
    {name : "react", star : false},
    {name : "js", star : false},
    {name : "html", star : false},
];

 
function App(){
    return(
        <div className="app">
            <HeaderName/>
            <PanelAddNewTodo/>
            <ToDoList data={data}/>
            <FooterPanel/>
        </div>
         
    )
}

export default App;