import './panel-add-new-todo.css';

const PanelAddNewTodo = () => {
    return(
        <div className="panel-add-new-todo">
            <div class="input-group">
            <input type="text" class="form-control shadow-none"
                    placeholder="write a new todo..."/>
            <button type="button" class="btn btn-outline-secondary">Add</button>
            </div>
        </div>
    )
}

export default PanelAddNewTodo;