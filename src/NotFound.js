import React from 'react';
import warning from './Images/Warning.png'
import { Link } from 'react-router-dom';

export default function NotFound(){
    return(
        <div className=''>
            <h1>Oops... This page does not exist</h1>
            <img className='icons' src={warning} alt='Warning icon' />
            <div>
                <Link to='/'>Back to home page</Link>
            </div>            
        </div>
    )
}