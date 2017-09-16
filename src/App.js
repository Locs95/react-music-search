import React,{ Component } from 'react'
import SearchBar from './components/SearchBar'
import TracksList from './components/TracksList'
import './App.css'


class App extends Component {
	render() {
		return(
			<div className="App container">
			  <SearchBar />
			  <TracksList />
			</div>
		)
	}
}

export default App