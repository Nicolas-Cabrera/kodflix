import React from 'react';
import { Link } from 'react-router-dom';

//Displays movie covers and overlay of movie title

export default function Stack(props) {
    return (
      <Link to={`/${props.id}`} className='item'>
        <img src={props.logo} alt={`${props.name} logo`}></img>
        <div className='overlay'>
          <h3>{props.name}</h3>
        </div>
      </Link>
    );
  }