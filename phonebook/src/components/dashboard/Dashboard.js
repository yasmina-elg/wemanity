import React, { Component } from 'react'
import EntryList from '../entries/EntryList'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {

        const { entries } = this.props

        return (
            <div className="dashboard container">
                <EntryList entries={entries}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        entries: state.entry.entries
    }
}

const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps)(Dashboard)
