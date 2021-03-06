import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createEntry } from '../../store/actions/entryActions'

class CreateEntry extends Component {

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
        this.props.createEntry(this.state)
        this.props.history.push('/')
    } 

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white" >
                    <h5 className="grey-text text-darken-3">New Entry</h5>
                    <div className="input-field" >
                        <label htmlFor="firstname">Firstname</label>
                        <input type="text" id="firstname" onChange={this.handleChange} />
                    </div>
                    <div className="input-field" >
                        <label htmlFor="lastname">Lastname</label>
                        <input type="text" id="lastname" onChange={this.handleChange} />
                    </div>
                    <div className="input-field" >
                        <label htmlFor="phoneNumber">Phone number</label>
                        <input type="text" id="phoneNumber" pattern="^\+[0-9]{2}\s[0-9]{2}\s[0-9]{6,7}" onChange={this.handleChange} />
                    </div>
                    <div className="input-field" >
                        <button className="btn pink lighten-1 z-depth-0" >Create</button>
                    </div>

                </form>
                
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createEntry: (entry) => dispatch(createEntry(entry))
    }
}

export default connect(null, mapDispatchToProps)(CreateEntry)