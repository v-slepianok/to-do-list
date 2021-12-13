import {Component} from 'react';
import './to-do-list-item.css';

class ToDoListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
   
    render(){
        const {name} = this.props;
  
    return (
        <li className="list-group-item d-flex justify-content-between">
             <input type="checkBox" className="list-group-item-input custom-control-input"/>
            <span className="list-group-item-label">{name}</span>
            <div className=' d-flex justify-content-center align-items-center '>
                <button type="button"
                    className="btn-star btn-sm ">
                    <i className="fas fa-star"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </li>
    )

}

}

export default ToDoListItem;