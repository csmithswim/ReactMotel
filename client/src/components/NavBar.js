import React, { useContext } from 'react'
import { RoomContext } from '../context/RoomContext';

export default function NavBar() {
    const { motelRooms } = useContext(RoomContext)
    const { ShowAvailableRooms } = useContext(RoomContext)
    const { ShowRentedRooms } = useContext(RoomContext)
    const { ShowAllRooms } = useContext(RoomContext)
         
    return (
        <div>
            <h1 style = {{textAlign: "center"}}>Welcome To The Motel Of Your Dreams</h1>
            <button onClick = {ShowAllRooms}>Click To See All Rooms</button>
            <button onClick={ShowAvailableRooms}>Click to See Available Rooms</button>
            <button onClick={ShowRentedRooms}>Click To See Occupied Rooms</button>
            
        </div>
    )
}
