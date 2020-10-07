// Imports
import React, { createContext, useState, useEffect } from 'react'

// Exporting and creating our Room Context
export const RoomContext = createContext();

export default function RoomContextProvider(props) {
function roomGen(floors, rooms) {
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

let twoDArray = roomGen(4,4);
let totalRooms = twoDArray.flat()
   
const savedRooms = JSON.parse(localStorage.getItem('Server'));

const [motelRooms, setRooms] = useState(savedRooms || totalRooms);   

const ShowAvailableRooms = () => {
    let availableRooms = totalRooms.filter(motel => motel.room>200)
    // console.log(availableRooms)
    setRooms(availableRooms)
}

const ShowRentedRooms = () => {
    let rentedRooms = totalRooms.filter(motel => motel.room < 200)
    setRooms(rentedRooms)
}

const ShowAllRooms = () => {
    setRooms(savedRooms)
}

useEffect(() => {
    localStorage.setItem('Server', JSON.stringify(motelRooms))
}, [motelRooms])

    return (
      <RoomContext.Provider value={{motelRooms, ShowAvailableRooms, ShowRentedRooms, ShowAllRooms}}>
          {props.children}
        </RoomContext.Provider>
    )
}





