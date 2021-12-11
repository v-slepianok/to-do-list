import './panel-add-new-todo.css';

const PanelAddNewTodo = () => {
    return(
        <div className="panel-add-new-todo">
           <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="write a new todo"/>
                <button type="submit" className="btn btn-outline-light">add</button>
            </div>
        </div>
    )
}

export default PanelAddNewTodo;