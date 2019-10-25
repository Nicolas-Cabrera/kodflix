import React from 'react';
import TvItem from './Stack';
import Stack from './Stack';
import getMovies from './getMovies';

//Display array of movies from getMovies.js

export default function Movies() {
    return (
        <div>
            <div className='container'>
            {
                getMovies().map(stack=>(
                    <Stack 
                    key={stack.id}
                    id={stack.id} 
                    name={stack.name} 
                    logo={stack.logo} />
                ))
            }
            </div>
        </div>
    );
}