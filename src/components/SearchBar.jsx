import React,{ Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchTracks } from '../actions/index'


class SearchBar extends Component {
    
    constructor(props) {
    	super();
    	this.state = {
    		query: ''
    	}
    	this.onInputChange = this.onInputChange.bind(this);
    	this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    
    onInputChange = (e) => {
    	this.setState({
    		query: e.target.value
    	});
    }

    onFormSubmit = (e) => {
    	e.preventDefault();
    	console.log(this.state.query)
        this.props.fetchTracks(this.state.query)
        
    }

	render() {
		return(
			<div className="SearchBar col-sm-12">
			   <form onSubmit={this.onFormSubmit}>
				<div className="from-group">
					<div className="input-group">
						<input onChange={this.onInputChange} type="text" placeholder="search music" className="form-control" />
						<div className="input-group-btn">
							<button type="submit" className="btn btn-danger">search</button>
						</div>
					</div>
				</div>
			  </form>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchTracks: fetchTracks},dispatch)
}

export default connect(null,mapDispatchToProps)(SearchBar)