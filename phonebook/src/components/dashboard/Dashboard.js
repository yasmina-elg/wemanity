import React, { Component } from 'react'
import EntryList from '../entries/EntryList'

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <EntryList/>
            </div>
        )
    }
}

export default Dashboard
