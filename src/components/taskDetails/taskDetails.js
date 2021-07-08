import React, { Component } from 'react';
import Container from '../container/';
import './taskDetails.scss';

export default class TaskDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            name:this.props.data.name,
            isEmpty: false,
            describtion: this.props.data.describtion
        }
    }
    onNamedChange = (e) =>{
        this.setState({
            name: e.target.value,
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
        if(this.state.name!==''){
            const {name, describtion} = this.state;
            const {id} = this.props.data;
            const editData = {
                id,
                name,
                describtion,
                date: new Date().toDateString()
            }
            this.props.editTask(editData);
        }
        else{
            this.setState({
                name: 'Введите название задачи',
                isEmpty: true,
            })
        }
    }
    render(){
        const {name, describtion, isEmpty} = this.state;
        const classForm = isEmpty?'details__input details__input-red':'details__input';
        return(
            <div className="details">
                <Container>
                    <div className="details__block">
                        <p className="details__title">
                            {name}
                        </p>
                        <p className="details__describtion">
                            {describtion}
                        </p>
                    </div>
                    <form className="details__form" onSubmit={this.onSubmit}>
                        <p className="details__subtitle">Редактирование задачи</p>
                        <div className="details__input-block">
                            <label htmlFor="named">
                                Название задачи*
                                <input
                                className={classForm}
                                type="text"
                                id="named"
                                value={name}
                                onChange={this.onNamedChange}
                                />
                            </label>
                        </div>
                        <div className="details__input-block">
                            <label htmlFor="descr">
                                Описание задачи
                                <textarea
                                type="text"
                                className='details__textarea'
                                id="descr"
                                value={describtion}
                                onChange={this.onDescribtionChange}
                                />
                            </label>
                        </div>
                        <button className="details__button">Редактировать задачу</button>
                    </form>
                </Container>
            </div>
        )
    }
}