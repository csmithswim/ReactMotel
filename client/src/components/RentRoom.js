import React, { useContext } from 'react'
import { RoomContext } from '../context/RoomContext'

//Import our motel rooms object

export default function RentRoom() {
//Have a function that changes the renter value to the person's name, this can be done with a prompt tied to a method

const { motelRooms } = useContext(RoomContext);
// console.log(motelRooms)

let availableRooms = motelRooms.filter(motel => motel.renter===null)
let renderOnline = availableRooms.map((i) => <li key={i}>{i.renter}</li>);
// console.log(availableRooms)
    return (
        <div>
            {renderOnline}
        </div>
    )
}