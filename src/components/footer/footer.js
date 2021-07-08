import React from 'react';
import Container from '../container';
import './footer.scss';

export default function Footer(){
    return(
        <footer className='footer'>
            <Container>
                <div className='footer__block'>
                    <a target='blank' href='https://github.com/godboibreath/test_transtelematica'>Исходники GitHab</a>
                </div>
            </Container>
        </footer>
    )
}