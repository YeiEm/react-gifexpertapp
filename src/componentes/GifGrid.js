import React from 'react'
import { GifGridItem } from './GifGridItem';
import {useFetchGifs} from '../hooks/useFetchGifs'

export const GifGrid = ({category}) => {

            //los dos puntos despues de data es para referirse a data como images
    const {data:images, loading} = useFetchGifs(category);
  
  
  
    // console.log(loading);
   // console.log(data);
  
  
  

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading</p>}

            <div className="card-grid">
                {
                    images.map( img => ( 
                    <GifGridItem 
                        key={img.id}
                        {...img}
                    />
                    ))
                }
            </div>
        </>
    )
}
