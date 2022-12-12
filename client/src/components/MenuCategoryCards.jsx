import { useContext } from 'react';
import { appContext } from '../App';
import React, { useEffect } from 'react';
import Card2 from "./CategoryCard"

const CategoryCards = () => {
    const { menuCategoryData } = useContext(appContext)
    return (
        <div>
            {menuCategoryData.map((cardData2, i) => {
                {console.log(cardData2)}
                return (
                <Card2 key={i} cardData2={cardData2} />
                )
            })}
      </div>
    )
  }
  
  export default CategoryCards