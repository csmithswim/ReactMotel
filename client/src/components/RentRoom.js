import React, { useContext } from 'react'
import { RoomContext } from '../context/RoomContext'

export default function RentRoom() {

const { motelRooms, setRooms} = useContext(RoomContext);

let flatMotel = motelRooms.flat()

let available = flatMotel.filter(motel => motel.renter === null)

const CheckIn = (e) => {
    if (prompt("Are you sure you want to book this room? Y/N") === "Y"){
        let guest = prompt("Enter your name:")
            flatMotel[e.target.id].renter = guest;
                setRooms([...motelRooms])
        }
    } 
    return (
            <div>
                <h3>
                    These {available.length} Rooms Are Available To Rent
                </h3>
                    <div>
                        {flatMotel.map(
                            ({room, renter,price},i) => {
                                if (renter===null){
                                    return (
                                    <div   id = {i} key={i}>
                                    <button id = {i} key={i} onClick={CheckIn}>Click To Check In</button>
                                    {room} Is Available And Costs ${price} A Night.
                                    </div>
                                )} else return null;
                            }
                        )
                    }
                    </div>
            </div>
        )
    }
    

