import Carousel from 'react-bootstrap/Carousel';
import { useContext } from 'react';
import { appContext } from '../App';
import Cards from './MultipleMenuItemsCards';
import CategoryCards from './MenuCategoryCards'; 
import FormData1 from './formData';
import FormData2 from './PatchComponent';
import DeleteComponent from './DeleteComponent';


function Body() {
  const {displayMenuItems, displayCatItems, modifyButton, changeMenuItem, deleteMenuItem}=useContext(appContext);
  if(displayMenuItems===true) {
    return <Cards />
  } 
  if(displayCatItems===true) {
    return <CategoryCards />
  }
  if(modifyButton===true) {
    return <FormData1 />
  }
  if(changeMenuItem===true) {
    return <FormData2 />
  }
  if(deleteMenuItem===true) {
    return <DeleteComponent />
  }
  else {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./los.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>A wonderful Place to eat</h3>
          <p>Come check us out we are located in Jackson TN</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./los3.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Sit down and have a drink!</h3>
          <p>Quench your thirst at the bar</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./los4.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>check out our menu</h3>
          <p>
            we have delicous food.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
  }
}
export default Body;