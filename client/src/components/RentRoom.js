// [] create a button on Rent component, once pressed it should take a name and set the state/LS

import React, { useContext } from 'react'
import { RoomContext } from '../context/RoomContext'

export default function RentRoom() {

    const { motelRooms } = useContext(RoomContext);

    let topFloor = motelRooms.filter(motel => motel.renter ===null)
    
    console.log(topFloor)
    
        return (
            <div>
                <h3>
                    These Rooms Are Available To Rent
                </h3>
                    <div>
                        {motelRooms.filter(motel => motel.renter === null).map(
                            ({room, price}) => {
                                return (
                                <div>
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
    