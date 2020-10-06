// Imports
import React, { createContext, useState } from 'react'

// Exporting and creating our Room Context
export const RoomContext = createContext();

// Exporting our context provider
export default function RoomContextProvider(props) {
    const makeRooms = (floors, rooms) => {
        let totalRooms = [];
        let subArray = [];
            for (let i = 0; i < floors; i++) {
               for (let j = 0; j < rooms; j++) {
                   subArray.push({room: (i+1)*(100)+(j+1), renter: null, price: (50*(i+1) - 10) + (10*(j+1)) + 45 })
                //    console.log(subArray.length)
                   if (subArray.length === 4){
                    //    console.log('test')
                    totalRooms.push(subArray)
                       subArray = [];
                   }     
               }
            }
        // console.log(totalRooms)
        return totalRooms;
    }

    let totalRooms = makeRooms(4,4);
    
    const [motelRooms, setRooms] = useState(totalRooms);   
    return (
      <RoomContext.Provider value={{motelRooms}}>
        {console.log(motelRooms)}
          {props.children}
        </RoomContext.Provider>
    )
}





