import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends React.Component {
    // Constructor to define state of the application
    constructor() {
        super()

        // Robots and what is in the search field describes the state
        this.state = {
            robots: robots,
            searchField: ""
        }
    }

    // Every time input changes
    onSearchChange = (event) => {
        // Update state so that searchField includes what is in the search box
        this.setState({ searchField: String(event.target.value) })
    }

    render = () => {
        console.log(this.state.searchField)

        // Filter the robots based on search criteria
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })

        console.log(filteredRobots)

        return (
            <div className="tc">
                <h1> RoboFriends </h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    } 
}

export default App;