Intermediate Final Project: React Hotel
Overview:
    This React Front-end will show an accurate display of available rooms at the CareerDevs Hotel. There will be a total of sixteen available rooms at the CD Hotel. Four for each of the four floors. Your goal is to create an interface for renting and returning a room at the CD Hotel. The application should be set up to display different components. One will be a viewing component to rent, and another to return. The app needs to include a navigation bar with two buttons to display to the user to the aforementioned components. 
Data; 
    The hotel room data needs to be stored in state and localStorage. This is so the whole app can have read/set access to the data, make sure you create a roomsContext hook and provide that context to the whole application. Use that context in functional components when the data needs to be read or set. The room's information needs to be stored in both a context and localStorage as a two dimensional array, where each nested element is an object. 
Ex. [ [ {room: ‘101’, renter: ‘bill’, price: 50 }}, { room: ‘102’, renting: null, price: 60 }, ... ], [ {room: ‘202’, …}, …], [...], [...] ]

Renting Component;
The renting interface should be set up as one button to start with. It will be the ‘express checkout’ option. This button should only display if there are rooms available otherwise a message should show in its place; ‘There are no rooms available at this moment’. This button should pick the cheapest available room and rent that to the user. A prompt should be used to ask the name who is renting this room. Once your user enters a name that rooms rented property should be set to the user's name, the state and context should be modified which in turn should also update the local storage.
Return Component;
The return component should be set up as a flex display (use styling flexWrap: ‘wrap’) of all the rooms that are being rented. When the room is clicked upon a prompt to enter your name should appear. If you enter in the correct name the rooms renter property should be set back to null and the state/LS should update to reflect that.

Cullen Task List
[]Import UUID system to provide unique keys to the hotel rooms

CD's 
Task List
    [x] initialize React project
    [x] create navigation bar
    [x] create components for Rent and Return components.
    [x] have the renting page or returning page display when a navbar button is pressed
    [x] create context for hotel rooms
    [x] create short algorithm to create room data programmatically and set that data as the initial value of the roomsContext
    [x] provide roomsContext to the application in App.js
    [x] create a button on Rent component, once pressed it should take a name and set the state/LS
    [x] create the a display on the Return component that will show all the unavailable rooms
    [x] implement features on Return items, when you click on one it should prompt the user to enter their name. If they enter the correct name the rooms renter property should go back to default.

Extra Tasks after completion of main app
    [x] include the roomsContext in the navbar component and display how many rooms are currently available with simple text
    [] implement a monetary system. User gets $300 (or whatever amount) to start with. And as they rent rooms they have the rooms cost taken out (plus a fixed deposit). When they return their room they should get their deposit back. To keep track of how much money a user has that data should be in its own context and stored in the context’s state and LS.


10/6 9 AM
Began work on algorithm in RoomContext.js
10/6 10 AM
Begin work on RoomContext
10/6 5:30 PM - 9PM - added NavBar, RentRoom, ReturnRoom and Roomlist components. Added context and local storage to the App and got local state to display.
10/7 8 AM - Added filter/map methods to RentRoom/ReturnRoom to display when renter is null, migrating it to NavBar components to display which rooms are available when a button is clicked.
10/7 4 pm - Added methods to filter through available and unavailable rooms but it mutates the state/local storage, need to circle back and fix that.
10/8 2 pm - Added a book room method to RentRoom component that allows a user to input their name and then change the array of objects.
10/9 5 PM - Added two buttons to toggle between the rent and return components and refactored/cleaned up some code. All main tasks complete.


