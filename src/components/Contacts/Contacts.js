
import "./Contacts.css";
import React, { useState } from 'react';
import contactList from './lev3_4_projekt_js-reactjs_contacts.json';
const fiveContacts = contactList.slice(0, 5);

const contactListCopy = [...contactList];

export default function Contacts() {
    console.log(fiveContacts);
    const [contact, setContact] = useState(contactListCopy);

    function sortByName() {
        setContact([...contactListCopy].sort((a, b) => {
            return a.name.localeCompare(b.name);
        }));
    }
    function sortByPopularity() {
        setContact([...contactListCopy].sort((a, b) => a.popularity - b.popularity));
    }

    return (
        <div className="contacts">
            <button onClick={sortByName} >Sort by Name</button>

            <button onClick={sortByPopularity}>Sort by Popularity</button>
            <div className="flex">
                <h4>Picture</h4>
                <h4>Name</h4>
                <h4>Popularity</h4>
            </div>
            <div>
                {contact.map((contact, index) => {
                    return (
                        <div className="flex" key={index}>
                            <img src={contact.pictureUrl}></img>
                            <p>{contact.name}</p>
                            <p>{contact.popularity}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
