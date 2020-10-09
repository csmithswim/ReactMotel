import React, { useContext } from 'react'
import { RoomContext } from '../context/RoomContext'

export default function ReturnRoom() {

const { motelRooms, setRooms } = useContext(RoomContext);

let unAvailableRooms = motelRooms.filter(motel => motel.renter !== null)

const CheckOut = (e) => {
    if (prompt("Do you want to check out? Y/N") === "Y"){
        let guest = prompt("Enter your name:")
        console.log(guest)
        console.log(motelRooms[e.target.id].renter)
            if(guest===motelRooms[e.target.id].renter){
               motelRooms[e.target.id].renter=null
               setRooms([...motelRooms])
               console.log(motelRooms[e.target.id].renter)
            }
    }
}
    return (
        <div>
            <h3>
                There are {unAvailableRooms.length} Rooms Not Available To Rent
            </h3>
                <div>
                    {motelRooms.map(
                        ({room,renter,price},i) => {
                            if (renter!== null){
                                return (
                                        <div   id = {i} key={i}>
                                        <button id = {i} key={i} onClick={CheckOut}>Click To Check Out</button>
                                        {room} Is Available And Costs {price} A Night.
                                        </div>
                                    )} else return null;
                                }
                            )
                        }
                </div>
        </div>
    )
}
