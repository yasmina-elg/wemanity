import React, { Component } from 'react'
import EntryList from '../entries/EntryList'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="dashboard container">
                <EntryList/>
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
