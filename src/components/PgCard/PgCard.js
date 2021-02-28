import React from 'react'
import RoomImage from '../../assets/room.jpg'
const PgCard=() => {
    return(
        <div className='m-2 shadow bg-white col-12 col-md-4 col-lg-3 p-0' style={{borderRadius:'10px',overflow:'hidden'}}>
            <img style={{width:'100%'}} src={RoomImage}/>
            <h3 style={{padding:'0 10px'}}>Shivaram PG</h3>
           <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
           <p className='pl-1'>Single Sharing:10000<br/>
                                Double Sharing:7000<br/>
                                Triple Sharing:5000<br/>        
            </p>
            <div>
            Facilities:
            <p className='d-flex' style={{flexWrap:'wrap'}}>
                
                <i class="m-1 fad fa-wifi"></i>
                <i class="m-1 fal fa-tv"></i>
                <i class="m-1 fal fa-washer"></i>  
                <i class="fas fa-utensils"></i>  
            </p>
            </div>
           </div>
        </div>
    )
}

export default PgCard