// [] create a button on Rent component, once pressed it should take a name and set the state/LS

import React, { useContext } from 'react'
import { RoomContext } from '../context/RoomContext'

export default function RentRoom() {

    const { motelRooms, setRooms} = useContext(RoomContext);

    let available = motelRooms.filter(motel => motel.renter === null)

    const CheckIn = (e) => {
        if (prompt("Are you sure you want to book this room? Y/N") === "Y"){
            let guest = prompt("Enter your name:")
            // motelRooms[e.id].renter=guest
            console.log(motelRooms)
            console.log(motelRooms[e.target.id])
            motelRooms[e.target.id].renter = guest;
            setRooms(motelRooms)
        }

    }
 
        return (
            <div>
                <h3>
                    These {available.length} Rooms Are Available To Rent
                </h3>
                    <div>
                        {motelRooms.filter(motel => motel.renter === null).map(
                            ({room, price},i) => {
                                return (
                                <div   id = {i} key={i}>
                                <button id = {i} key={i} onClick={CheckIn}>Click To Check In</button>
                                {room} Is Available And Costs {price} A Night.
                                </div>
                                )
                            }
                        )
                    }
                    </div>
            </div>
        )
    }
    