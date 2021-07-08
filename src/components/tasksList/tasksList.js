import React, {Component} from 'react';
import Container from '../container/';
import AddTaskForm from '../addTaskForm/';
import './tasksList.scss';
import {Link, withRouter} from 'react-router-dom';

class TasksList extends Component{
    render(){
        const {data,addTask,deleteTask} = this.props;
        const elements = data.map((item) =>{
            return <li
            key={`${item.name}${item.id}`}
            className='tasks-list__item'
            >
                <Link to={`/tasks/${item.id}`}>{`${item.name}, Дата ${item.date}`}</Link>
                <button 
                className="tasks-list__delete"
                onClick={(e)=>{
                    e.preventDefault();
                    deleteTask(item.id);
                }}
                >Удалить</button>
            </li>
        })
        return(
            <div className='tasks-list'>
                <Container>
                    <ul className="tasks-list__list">
                        {elements}
                        <AddTaskForm addTask={addTask}/>
                    </ul>
                </Container>
            </div>
        )
    }
}

export default withRouter(TasksList);

