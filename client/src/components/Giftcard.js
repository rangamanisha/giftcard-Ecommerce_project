import React from 'react';
import {get} from 'lodash';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {giftCardsAction} from '../reducer/giftCards.reducer';


const Giftcard = ({brand}) =>{
    const history = useHistory();
    const dispatch = useDispatch();
    const handleClick = () => {
        debugger
        dispatch(giftCardsAction.selectBrand(brand))
        history.push('/selectcard')
    }
    return (
        <>
        <img src={get(brand, 'images.color.medium_rectangle')} onClick={() => handleClick()} className="mr-sm-2 imgcards mt-5" alt={brand.name} /> 
        </>
    
        
    )
}

export default Giftcard;
