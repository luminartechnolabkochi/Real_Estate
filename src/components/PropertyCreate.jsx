import axios from 'axios';
import React, { useState } from 'react'
import { propertyCreateApi } from '../Services/api';

function PropertyCreate() {

    let [property,setProperty]=useState({location:"",address:"",price:0,property_type:"",bedroom_count:0,square_footage:0,image:"",phone:""})
  

   async function handleSubmit(event){

        event.preventDefault()
        console.log(property);
        let response=await propertyCreateApi(property)

        console.log(response.data);
        
        
    }

    return (
    <div>

        <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="">Enter location</label>
                        <input type="text"
                         className='form-control'
                         onChange={(e)=>setProperty({...property,location:e.target.value})}
                         />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Enter address</label>
                        <input type="text"
                         className='form-control'
                         onChange={(e)=>setProperty({...property,address:e.target.value})}
                         
                         />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Enter price</label>
                        <input 
                        type="text" 
                        className='form-control'
                        onChange={(e)=>setProperty({...property,price:e.target.value})}
                        
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Enter property_type</label>
                        <input type="text" 
                        className='form-control'

                        onChange={(e)=>setProperty({...property,property_type:e.target.value})}
                        
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Enter bed_room_count</label>
                        <input 
                        type="text" 
                        className='form-control'
                        onChange={(e)=>setProperty({...property,bedroom_count:e.target.value})}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="">Enter square_footage</label>
                        <input type="text"
                         className='form-control'
                        onChange={(e)=>setProperty({...property,square_footage:e.target.value})}
                         />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="">select image</label>
                        <input type="file" 
                        className='form-control'
                        onChange={(e)=>setProperty({...property,image:e.target.files[0]})}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="">Enter phone</label>
                        <input type="text" 
                        className='form-control'
                        onChange={(e)=>setProperty({...property,phone:e.target.value})}
                        />
                    </div>

                    <div className="mb-3">
                        
                        <input type="submit"  value="add" />
                    </div>


                    
                </form>

            </div>
            <div className="col-3"></div>
        </div>

        
      
    </div>
  )


}
export default PropertyCreate
