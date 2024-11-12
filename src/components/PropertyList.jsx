import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { propertyDeleteApi, propertyListApi } from '../Services/api'
import PropertyDetail from './PropertyDetail'

function PropertyList() {

    let [properties,setProperties]=useState()

    useEffect(()=>{

        fetchProperties()

    },[])

   async function fetchProperties(){

       let response= await propertyListApi()
       
        setProperties(response.data);
        
        

    }


    async function handleDelete(id){

        let response=await propertyDeleteApi(id)
        fetchProperties()

    }
  return (
    <div>
      
      <div className="container mt-5">

     <div className='border border-3 shadow rounded p-3 '>
     <table className='table'>
            <tr>
                <th>Location</th>
                <th>Address</th>
                <th>Price</th>
                <th>PropertyType</th>
                <th>Action</th>
            </tr>
            <tbody>
                {properties&&properties.map((p,i)=>(

                    <tr>
                        <td>{p.location}</td>
                        <td>{p.address}</td>
                        <td>{p.price}</td>
                        <td>{p.property_type}</td>
                        <td>
                            <button onClick={()=>handleDelete(p.id)}>Delete</button>

                           <PropertyDetail proprtyId={p.id}></PropertyDetail>
                        </td>
                    </tr>
                ))}
            </tbody>
       </table>
     </div>
      </div>



    </div>
  )
}

export default PropertyList
