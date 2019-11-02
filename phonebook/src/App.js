import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import EntryDetails from './components/entries/EntryDetails'
import CreateEntry from './components/entries/CreateEntry'
import UpdateEntry from './components/entries/UpdateEntry'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" >
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/entries/:id' component={UpdateEntry} />
            <Route exact path='/create' component={CreateEntry} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
