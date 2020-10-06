import React from 'react'

export default function RoomContext() {
    return (
        <div>
            
        </div>
    )
}

const makeRooms = () => {
let rooms = [];
let subArray = [];
    for (let i = 0; i <= 3; i++) {
       for (let j = 0; j <= 3; j++) {
           subArray.push({room: (i+1)*(100)+(j+1), renter: null, price: (50*(i+1) - 10) + (10*(j+1)) + 45 })
           console.log(subArray.length)
           if (subArray.length === 4){
               console.log('test')
               rooms.push(subArray)
               subArray = [];
           }     
       }
    }
// console.log(rooms)
return rooms;
}


