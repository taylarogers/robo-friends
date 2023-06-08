import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';
import './SearchBox.css';

class App extends React.Component {
    // Constructor to define state of the application
    constructor() {
        super()

        // Robots and what is in the search field describes the state
        this.state = {
            robots: [],
            searchField: ""
        }
    }

    // When component has been mounted onto document
    componentDidMount() {
        // Make HTTP request to receive list of users
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({ robots: users})
            }) 
    }

    // Every time input changes
    onSearchChange = (event) => {
        // Update state so that searchField includes what is in the search box
        this.setState({ searchField: String(event.target.value) })
    }

    render = () => {
        // Filter the robots based on search criteria
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })

        // Waiting for robots to be received
        if (this.state.robots.length === 0) {
            return <h1 className='tc f1'> Loading... </h1>
        }
        else {
            return (
                <div className="tc">
                    <h1 className="f1"> RoboFriends </h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
        }
    } 
}

export default App;