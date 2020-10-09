import React, { useContext } from 'react'
import { RoomContext } from '../context/RoomContext';
import RentRoom from './RentRoom'
import ReturnRoom from './ReturnRoom'

export default function NavBar() {
    const { motelRooms, displayA, setDisplayA, displayUnAvailable, setDisplayUnAvailable} = useContext(RoomContext)

    let flatMotel = motelRooms.flat()
    let available = flatMotel.filter(motel => motel.renter === null)
    return (
        <div>
            <h1 style = {{textAlign: "center"}}>Welcome To The Motel Of Your Dreams<br/>
            There Are {available.length} Rooms To Rent
            </h1>          
            <button onClick={() => setDisplayA(!displayA)}>Click To Hide/Display Available Rooms</button>
            { displayA ?
                (<RentRoom /> ) : (null) }

            <br/><br/><br/>
                
            <button onClick={() => setDisplayUnAvailable(!displayUnAvailable)}>Click To Hide/Display Available Rooms</button>
            { displayUnAvailable ?
            (<ReturnRoom />) : (null)}
        </div>
    )
}

{/* <button onClick = {ShowAllRooms}>Click To See All Rooms</button>
<button onClick={ShowAvailableRooms}>Click to See Available Rooms</button> */}
// {/* <button onClick={ShowRentedRooms}>Click To See Occupied Rooms</button> */}