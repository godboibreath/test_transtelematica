import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './app.scss';
import HomePage from '../pages/homePage';
import DetailsPage from '../pages/detailsPage';
import TasksPage from '../pages/tasksPage';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[
                {
                    id: 1,
                    name: 'Задача номер 1',
                    date:'Thu Jul 08 21',
                    describtion: 'Описание задачи номер 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci officiis inventore aspernatur non necessitatibus magnam quo totam quam libero ex sequi aliquam, at quidem rerum asperiores! Doloribus nulla enim inventore.'
                },
                {
                    id: 2,
                    name: 'Задача номер 2',
                    date:'Wen Jul 07 21',
                    describtion: 'Описание задачи номер 2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur sunt ea repudiandae corporis fugiat soluta maiores expedita dignissimos quisquam minima eius impedit, assumenda earum cupiditate voluptatibus et enim maxime quam.'
                },
                {
                    id: 3,
                    name: 'Задача номер 3',
                    date:'Tue Jul 06 21',
                    describtion: 'Описание задачи номер 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate asperiores nesciunt commodi reiciendis neque reprehenderit molestiae cum soluta, exercitationem, modi harum eos adipisci doloribus, beatae laboriosam atque corrupti. Incidunt.'
                },
                {
                    id: 4,
                    name: 'Задача номер 4',
                    date:'Mon Jul 05 21',
                    describtion: 'Описание задачи номер 4 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsa nihil perspiciatis repudiandae quasi atque iusto nemo? Deleniti cupiditate ducimus illo molestias praesentium exercitationem! Eveniet, delectus iste. Delectus, alias laudantium!'
                },
                {
                    id: 5,
                    name: 'Задача номер 5',
                    date:'San Jul 04 21',
                    describtion: 'Описание задачи номер 5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dignissimos dolorem reiciendis laborum itaque deleniti adipisci doloribus, illo molestiae praesentium distinctio est odio totam numquam ipsum maxime! At, excepturi expedita?'
                }
            ]
        }
    }
    addTask = (body)=>{
        const {data} = this.state;
        const newTask = {
            id: data.length+1,
            name:body.named,
            date: new Date().toDateString(),
            describtion: body.describtion
        }
        this.setState(({data})=>{
            const newData = [...data,newTask];
            return {
                data:newData
            };
        })
    }
    deleteTask = (id) =>{
        const {data} = this.state;
        const index = data.findIndex(element => element.id === id);
        const before = data.slice(0,index),
            after=data.slice(index+1);
        const newData = [...before,...after];
        this.setState({
            data: newData
        })
    }
    editTask = (body) =>{
        const {data} = this.state;
        const {id} = body;
        const index = data.findIndex(element => element.id === id);
        const before = data.slice(0,index),
            after=data.slice(index+1);
        const newData = [...before,body,...after];
        this.setState({
            data: newData
        })
    }
    render() {
        const {data} = this.state;
        return (
            <Router>
                <Route path='/' exact component={HomePage}/>
                <Route path='/tasks' exact render={()=>{
                    return <TasksPage data={data} addTask={this.addTask} deleteTask={this.deleteTask}/>
                }} />
                <Route path='/tasks/:id' render={({match})=>{
                    const {id} = match.params;
                    return <DetailsPage data={this.state.data[+id-1]} editTask={this.editTask}/>
                }}/>
            </Router>
        );
    }
}