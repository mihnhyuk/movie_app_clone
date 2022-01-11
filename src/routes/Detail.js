import React, {useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';

function Detail(){
    const location= useLocation();
    const navigation= useNavigate();
    useEffect(() => {
        if (location.state === null){
            navigation('/');    
        }
    }); 
    if (location.state === null){
        return null;
    }
    return(
        <span>{location.state.title}</span>
    );
}

export default Detail;