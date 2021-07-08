import React, { Component } from 'react';
import './addTaskForm.scss';

export default class AddTaskForm extends Component{
    constructor(props){
        super(props);
        this.state={
            named:'',
            isEmpty: true,
            describtion: ''
        }
    }
    onNamedChange = (e) =>{
        this.setState({
            named: e.target.value,
            isEmpty: false
        })
    }
    onDescribtionChange = (e) => {
        this.setState({
            describtion: e.target.value
        })
    }
    onSubmit = (e) =>{
        e.preventDefault();
        if(this.state.named!==''){
            this.props.addTask(this.state);
        }
        else{
            this.setState({
                named: 'Введите название задачи',
                isEmpty: true,
            })
        }
    }
    render(){
        const {named, describtion, isEmpty} = this.state;
        const classForm = isEmpty ?'add-task-form__input add-task-form__input-red': 'add-task-form__input';
        return(
            <form  className='add-task-form' onSubmit={this.onSubmit}>
                <p className="add-task-form__title">Добавление задачи</p>
                <div className="add-task-form__inputblock">
                    <label htmlFor="named">
                        Название задачи*
                        <input
                        className={classForm}
                        type="text"
                        id="named"
                        value={named}
                        onChange={this.onNamedChange}
                        />
                    </label>
                </div>
                <div className="add-task-form__inputblock">
                    <label htmlFor="descr">
                        Описание задачи
                        <textarea
                        type="text"
                        className='add-task-form__textarea'
                        id="descr"
                        value={describtion}
                        onChange={this.onDescribtionChange}
                        />
                    </label>
                </div>
                <button className="add-task-form__button">Добавить задачу</button>
            </form>
        )
    }
}