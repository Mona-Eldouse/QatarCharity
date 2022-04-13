import React, { useState } from 'react'
import './App.css';
import db from './db'

function SearchVolunteerByName() {

    const [name, setName] = useState("")

    const handleSearchByName = event => {
        setName(event.target.value)
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Search Volunteers by Name</h1>
                <input type="text" onChange={handleSearchByName} placeholder="Name" value={name} />
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            db.Volunteer.findByName(name).map(volunteer =>
                                <tr key={volunteer.id}>
                                    <td>{volunteer.name}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </header>
        </div>
    )
}

export default SearchVolunteerByName