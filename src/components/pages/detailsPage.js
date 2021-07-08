import React from 'react';
import Header from '../header/';
import Footer from '../footer/';
import Wrapper from '../wrapper/';
import TaskDetails from '../taskDetails/';

export default function DetailsPage({data,editTask}) {
    return(
        <Wrapper>
            <Header/>
            <TaskDetails data={data} editTask={editTask}/>
            <Footer/>
        </Wrapper>
    )
}