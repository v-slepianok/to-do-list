import './panel-add-new-todo.css';
import {Component} from 'react';

class PanelAddNewTodo extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
    }

    onInput = (e) => {
        this.setState({
            text: e.target.value // [e.target.name] (if we have a few inputs)
        })
    }

    onAddClick = (e) => {
        e.preventDefault();
        this.props.onAddNewTodo(this.state.text);
        this.setState({
            text : ''
        })
        // this.props.onAddNewTodo(this.state.text);
    }

    render(){
        const{text} = this.state;
        return(
            <div className="panel-add-new-todo">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control shadow-none"
                        name="text"
                        value={text}
                        onChange={this.onInput}
                        placeholder="write a new todo..."
                    />
                    <button type="button" className="btn btn-outline-secondary" onClick={this.onAddClick}>Add</button>
                </div>
            </div>
        )
    }
}

export default PanelAddNewTodo;