import React, { createContext, useState, useEffect } from 'react'

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
    return totalRooms;
}    

let totalRooms = roomGen(4,4);

const [motelRooms, setRooms] = useState(() => {
    const localData = localStorage.getItem('motelRooms')
    if (localData) {
        return (JSON.parse(localData));
    } else return totalRooms;
})

useEffect(() => {
    localStorage.setItem('motelRooms', JSON.stringify(motelRooms))
}, [motelRooms])

console.log(motelRooms)
    return (
      <RoomContext.Provider value={{motelRooms, setRooms}}>
          {props.children}
        </RoomContext.Provider>
    )
}




// const ShowAvailableRooms = () => {
//     let availableRooms = totalRooms.filter(motel => motel.room>200)
//     // console.log(availableRooms)
//     setRooms(availableRooms)
// }

// const ShowRentedRooms = () => {
//     let rentedRooms = totalRooms.filter(motel => motel.room < 200)
//     setRooms(rentedRooms)
// }

// const ShowAllRooms = () => {
//     setRooms(savedRooms)
// }




