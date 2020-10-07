import React, { useContext } from 'react'
import { RoomContext } from '../context/RoomContext';

export default function RoomList() {
const { motelRooms } = useContext(RoomContext);

//Flatten array with array.prototype
// let flatMotelRooms = motelRooms.flat()
// console.log(flatMotelRooms)

//Make two functions that filter out rented and available rooms to show them with display

//Make these into divs
    return (
        <div>
            <div className = "container">            
            {motelRooms.map(({room, renter, price},i) => {

                    return (
                      
                        <div className = "rooms" key = {i}>
                         Room #{room} is available{renter} and costs ${price}                        
                        </div>)
                    }
                )
            }             
            </div>            
        </div>
    )
}
