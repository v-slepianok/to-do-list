import './to-do-list.css';
import ToDoListItem from '../to-do-list-item/to-do-list-item'

const ToDoList = ({data, onDelete, onTogglePriority}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <ToDoListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onTogglePriority={() => onTogglePriority(id)}/> 
        )
    })
    return(
            <ul>
                {elements}
            </ul>
    )
} 

export default ToDoList;