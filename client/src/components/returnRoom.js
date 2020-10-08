// [x] create the a display on the Return component that will show all the unavailable rooms
// [] implement features on Return items, when you click on one it should prompt the user to enter their name. If they enter the correct Same the rooms renter property should go back to default.
import React, { useContext } from 'react'
import { RoomContext } from '../context/RoomContext'

export default function ReturnRoom() {

const { motelRooms } = useContext(RoomContext);

let unAvailableRooms = motelRooms.filter(motel => motel.renter !== null)

const CheckIn = (e) => {

    console.log(e.target)
}

    return (
        <div>
            <h3>
                There are {unAvailableRooms.length} Rooms Not Available To Rent
            </h3>
                <div>
                    {motelRooms.filter(motel => motel.renter !== null).map(
                        ({room, price},i) => {
                            return (
                            <div id={room.id}>
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
