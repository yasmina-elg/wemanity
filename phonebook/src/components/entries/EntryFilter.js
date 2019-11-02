import React, { Component } from 'react'
import EntrySummary from './EntrySummary'
import { Link } from 'react-router-dom'


class EntryFilter extends Component {
    state = {
        initialItems: [],
        items: []
    }

    filterList = (event) => {
        if (event.target.value !== '') {

            let items = [...this.props.content.entries];
            console.log(items)
            items = items.filter((item) => {
                return (item.firstname.toLowerCase().search(event.target.value.toLowerCase()) !== -1) ||
                (item.lastname.toLowerCase().search(event.target.value.toLowerCase()) !== -1) ||
                (item.phoneNumber.toLowerCase().search(event.target.value.toLowerCase()) !== -1)
            });
            console.log(items)
            this.setState({ items: items });
        }else {
            this.setState({items: []})
        }
    }


    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="Search" onChange={this.filterList} />
                </form>
                <div>
                    {this.state.items && this.state.items.map(entry => {
                        return (
                            <Link to={'/entries/' + entry.id}>
                                <EntrySummary entry={entry} key={entry.id} />
                            </Link>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default EntryFilter