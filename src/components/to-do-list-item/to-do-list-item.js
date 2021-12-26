import './to-do-list-item.css';

const ToDoListItem = (props) =>{
    const {name, onDelete, star, onTogglePriority} = props;
   
    let classNames =  "list-group-item d-flex justify-content-between ";

    if(star){
        classNames += ' starred';
    }

    return (
        <li className={classNames}>
             <input type="checkBox" className="list-group-item-input custom-control-input"/>
            <span className="list-group-item-label">{name}</span>
            <div className='d-flex justify-content-center align-items-center '>
                <button type="button"
                    className="btn-star btn-sm " onClick={onTogglePriority}>
                    <i className="fas fa-star"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm" 
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </li>
    )
 

}
 



export default ToDoListItem;