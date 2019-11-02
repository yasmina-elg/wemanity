import React, { Component } from 'react'
import EntryList from '../entries/EntryList'
import { connect } from 'react-redux'
import { getAllEntries } from '../../store/actions/entryActions'

class Dashboard extends Component {
    componentDidMount() {
        this.props.getAllEntries().then(entries => {
            console.log(entries)
        })
    }
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
    return {
        getAllEntries: () => dispatch(getAllEntries())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
