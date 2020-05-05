import React, { Fragment } from 'react';
import CardList from './cardlist.js';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll.js';




class  App extends React.Component {
    constructor() {
        super()
        this.state={
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response=> response.json()).then(users=>this.setState({robots:users}))
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})            
        }
    

    render() {
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
        <Fragment>
            <div className ='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>    
            </div>
        </Fragment>
        );
    
    }
};

export default App;