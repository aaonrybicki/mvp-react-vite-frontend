import React, { useEffect } from 'react';
import { useContext } from 'react';
import { appContext } from '../App';
import Card1 from './MenuCard';

const Cards = () => {
    const { backEndData } = useContext(appContext)
            console.log('backend data: ', backEndData)
    return (
        <div>
            {backEndData.map((cardData, i) => {
                {console.log(cardData)}
                return (
                <Card1 key={i} cardData={cardData} />
                )
            })}
      </div>
    )
  }
  
  export default Cards