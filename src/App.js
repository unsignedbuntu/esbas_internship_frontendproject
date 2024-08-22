import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';
import EventList from './components/EventsList';
import CardReader from './components/CardReader'; 
import EventEnded from './components/EventEnded';
import AddNewParticipant from './components/AddNewParticipant';
import EventUpdate from './components/EventUpdate';
import AddNewEvent from './components/AddNewEvent';
import EventType from './settings/EventType';
import EventLocation from './settings/EventLocation';
import ParticipantLocation from './settings/ParticipantLocation';
import ParticipantGender from './settings/ParticipantGender';
import AddGuest from './components/AddGuest';
<<<<<<< HEAD
import Department from './settings/Department';
import Plist from './components/Plist';
=======
import Plist from './components/Plist';

>>>>>>> 4cb33403359dea332c271cc42594eef85abc7025

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element= {<EventList />} /> 
                <Route path="/add-new-event" element= {<AddNewEvent />} /> 
                <Route path="/add-guest" element= {<AddGuest />} /> 
                <Route path="/card-reader/:EventID" element= {<CardReader />} />
                <Route path="/event-ended/:EventID" element= {<EventEnded />} />
                <Route path="/add-new-participant/:EventID" element= {<AddNewParticipant />} />
                <Route path="/event-update/:EventID" element= {<EventUpdate />} />
                <Route path="/add-new-event/event-type" element= {<EventType />} />
                <Route path="/add-new-event/event-location" element= {<EventLocation />} />
                <Route path="/add-new-participant/department" element= { < Department />} />
                <Route path="/add-new-participant/participant-location" element= {<ParticipantLocation/>} />
                <Route path="/add-new-participant/participant-gender" element= {<ParticipantGender/>} />
<<<<<<< HEAD
                <Route path="/plist" element={<Plist />} />
=======
                <Route path="/plist" element= {<Plist />} />
>>>>>>> 4cb33403359dea332c271cc42594eef85abc7025

            </Routes>
        </Router>
    );
}

export default App;

