import React from 'react';
import Header from '../header/';
import Footer from '../footer/';
import TasksList from '../tasksList/';
import Wrapper from '../wrapper/';

export default function TasksPage({data,addTask,deleteTask}){
    return(
        <Wrapper>
            <Header/>
            <TasksList data={data} addTask={addTask} deleteTask={deleteTask}/>
            <Footer/>
        </Wrapper>
    )
}