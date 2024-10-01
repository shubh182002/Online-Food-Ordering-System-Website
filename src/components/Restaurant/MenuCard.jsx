import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ingredients = [
  {
    category: "Nuts & Seeds",
    ingredient: ["Cashews"]
  },
  {
    category: "Protein",
    ingredient: ["Bacon strips", "Ground beef"]
  }
]

const MenuCard = () => {
  const handleCheckBoxChange =(value)=>{
   console.log("value");
  }
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className='lg:flex items-center justify-between'>
          <div className='lg:flex items-center lg:gap-5'>
            <img className='w-[7rem] h-[7rem] object-cover' src="https://img.freepik.com/free-photo/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon_2829-5398.jpg?t=st=1727769040~exp=1727772640~hmac=ca3d1285b513df8d4df54a70900e229007b1a81b0fb136e21215c544a81e9038&w=740" alt="" />
            <div className='space-y-1lg:space-y-5 lg:max-w-2xl'>
              <p className='font-semibold text-xl'>Burger</p>
              <p>₹499</p>
              <p className='text-gray-400'>nice food</p>

            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <form >
          <div className='flex flex-wrap gap-5'>
            {
              ingredients.map((item) =>
                <div>
                  <p>{item.category}</p>
                  <FormGroup>
                    {item.ingredient.map((item) => <FormControlLabel control={<Checkbox  onChange={()=>handleCheckBoxChange(item)}/>} label={item} />)}
                  </FormGroup>
                </div>
              )
            }
          </div>
          <div className='pt-5'>
            <Button disabled={false} type='submit' variant='contained'>{true?"Add to Cart":"Out of Stock"}</Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  )
}

export default MenuCard;
