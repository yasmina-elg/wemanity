import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateEntry, getAllEntries } from '../../store/actions/entryActions'

class UpdateEntry extends Component {

    
    state= {
        firstname: '',
        lastname: '',
        phoneNumber: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.props.updateEntry(this.props.entry.id, this.state)
        this.props.getAllEntries()
        this.props.history.push('/')
    } 

    componentDidMount(){
        this.setState({
            firstname: this.props.entry.firstname,
            lastname: this.props.entry.lastname,
            phoneNumber: this.props.entry.phoneNumber
        })
    }

    render() {
        console.log(this.props)
        const { entry } = this.props
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white" >
                    <h5 className="grey-text text-darken-3">Update Entry</h5>
                        <label htmlFor="firstname">Firstname</label>
                        <input type="text" id="firstname" onChange={this.handleChange} defaultValue={entry.firstname} />

                        <label htmlFor="lastname">Lastname</label>
                        <input type="text" id="lastname" onChange={this.handleChange} defaultValue={entry.lastname} />

                        <label htmlFor="phoneNumber">Phone number</label>
                        <input type="text" id="phoneNumber" pattern="^\+[0-9]{2}\s[0-9]{2}\s[0-9]{6,7}" onChange={this.handleChange} defaultValue={entry.phoneNumber}/>

                    <div className="input-field" >
                        <button className="btn pink lighten-1 z-depth-0" >Update</button>
                    </div>

                </form>
                
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const entries = state.entry.entries
    const entry = entries ? entries.find(entry => entry.id === id) : null
    return {
        entry: entry
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateEntry: (id, entry) => dispatch(updateEntry(id, entry)),
        getAllEntries: () => dispatch(getAllEntries())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateEntry)