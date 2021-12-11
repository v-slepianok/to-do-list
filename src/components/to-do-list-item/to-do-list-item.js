import './to-do-list-item.css';


const ToDoListItem = ({name}) => {
    return(
        <li className="list-group">
          <label className="list-group-item">
            <input className="form-check-input me-1" type="checkBox" />
            <span className="list-group-item-label">{name}</span>
            <div className='d-flex justify-content-end align-items-center'>
                <button type="button" className="btn-trash btn-sm "><i className="fas fa-trash"></i></button>
            </div>
          </label> 
        </li>

    )
}
export default ToDoListItem;