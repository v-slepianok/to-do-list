import ToDoListItem from '../to-do-list-item/to-do-list-item';
import './to-do-list.css';

const ToDoList = ({data}) => {
  const elements = data.map(item => {
    return(
     <ToDoListItem {...item}/>
    )
  })
  return(
    <ul class="to-do-list list-group">
      {elements}
    </ul>
  )
}

export default ToDoList ;