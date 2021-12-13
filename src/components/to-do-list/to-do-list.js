import './to-do-list.css';
import ToDoListItem from '../to-do-list-item/to-do-list-item'

const ToDoList = ({data}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <ToDoListItem key={id} {...itemProps}/>
        )
    })
    return(
            <ul>
                {elements}
            </ul>
    )
} 

export default ToDoList;