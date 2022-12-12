import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { appContext } from '../App';
import { useContext } from 'react';

function FormData2() {
  const {setDisplayMenuItems,setRefreshItems, refreshItems}=useContext(appContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [calories, setCalories] = useState('')
  const [menu_categories_id, setMenu_categories_id] = useState('')

const handleSubmitPatch = (e) => {
  e.preventDefault();
  const update = {name, description, price, calories, menu_categories_id};
  console.log(update)
  fetch('http://localhost:8001/menuItems', {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(update)
  })
  .then(() => {
    console.log('new item modified');
    setDisplayMenuItems(false)
    setRefreshItems(!refreshItems)
    setDisplayMenuItems(true);
  })
};

  return (
    <div className="form-container">
        <h1>Change your pre-existing menu Item here!</h1>
    <form className="signup-form" onSubmit={handleSubmitPatch}>
        <input type="text"
          required 
          placeholder="name" 
          value={name}
          onChange={(e) => setName(e.target.value)} 
          name="name"
          />
        <input type="text" 
          required 
          placeholder="description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)}
          name="description" 
          />
        <input type="number" 
          required 
          placeholder='price' 
          value={price}
          onChange={(e) => setPrice(e.target.value)} 
          name='price'/>
        <input type='number' 
          required 
          placeholder='calories' 
          value={calories} 
          onChange={(e) => setCalories(e.target.value)}
          name='calories' 
          />
          <input type='number' 
          required 
          placeholder='menu Category id' 
          value={menu_categories_id} 
          onChange={(e) => setMenu_categories_id(e.target.value)}
          name='menuCategoryId' 
          />

          {/* <label>What menu category does this belong to?</label>
          <select>
            <option value={menu_categories_id}
            onChange={(e) => setMenu_categories_id(e.target.value)}>1
            </option>
            <option value={menu_categories_id}
            onChange={(e) => setMenu_categories_id(e.target.value)}>2
            </option>

          </select> */}
      <Button variant="primary" type="submit" onClick={handleSubmitPatch}>
        Submit
      </Button>
    </form>
    <p>{name}</p>
</div>
    
  );
}


export default FormData2;