import React, { Component } from 'react'
import EntryList from '../entries/EntryList'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <EntryList/>
            </div>
        )
    }
}

export default connect()(Dashboard)
