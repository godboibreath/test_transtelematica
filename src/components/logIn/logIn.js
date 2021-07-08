import React, {Component} from 'react';
import Container from '../container';
import MainContent from '../mainContent/';
import {withRouter} from 'react-router-dom';
import './logIn.scss';

class LogIn extends Component{
    constructor(props){
        super(props);
        this.state ={
            email: '',
            password: ''
        };
    }
    onUpdateEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    onUpdatePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    onSubmit = (e) =>{
        e.preventDefault();
        const {email,password} = this.state;
        if(email==='admin@transtelematic.ru'&&password==='admin'){
            this.props.history.push('tasks');
        }
        else{
            this.setState({
                login:'',
                password:''
            })
        }
    }
    render() {
        const {email, password} = this.state;
        return(
            <MainContent>
                <div className='log-panel'>
                    <Container>
                        <form className='log-panel__block' onSubmit={this.onSubmit}>
                            <h2 className='log-panel__title'>Вход</h2>
                            <div className='log-panel__login'>
                                <label htmlFor='email'>
                                    Email
                                    <input id='email'
                                    name='email'
                                    type='email'
                                    value={email}
                                    onChange={this.onUpdateEmail}
                                    ></input></label>
                            </div>
                            <div className='log-panel__login'>
                                <label htmlFor='password'>
                                    Пароль
                                    <input id='password'
                                    name='login'
                                    type='password'
                                    value={password}
                                    onChange={this.onUpdatePassword}></input></label>
                            </div>
                            <button className='log-panel__submit'>Войти</button>
                        </form>
                    </Container>
                </div>
            </MainContent>
        )
    }
}

export default withRouter(LogIn);