import React,{ Component } from 'react'
import { connect } from 'react-redux'


class TracksList extends Component {

	constructor(props) {
		 super(props);
		 this.state = {
		 	playingUrl: '',
		 	playing: false,
		 	audio: null

		 }
		 this.renderList = this.renderList.bind(this);
		 this.playMusic = this.playMusic.bind(this);
	}

    componentDidUpdate() {
    	console.log(this.props.tracks);
    }

    playMusic(url) {
    	 
    	 let audio = new Audio(url);
    	 
    	 if(this.state.playing === false) {
    	 	 audio.play();
    	 	 this.setState({
    	 	 	 playingUrl: url,
    	 	 	 playing: true,
    	 	 	 audio
    	 	 });
    	 }else {
    	     if(this.state.playingUrl === url){
    	     	this.state.audio.pause();
    	     	this.setState({
    	     		playing: false
    	     	});
    	     }
    	     else{
    	     	this.state.audio.pause();
    	     	audio.play();
    	     	this.setState({
    	     		playingUrl: url,
    	     		playing: true,
    	     		audio
    	     	});
    	     }
    	 }

    }

    renderList(trackData) {

  
 
    	if(trackData.success !== false){

	    	return (
	    		trackData.map(function(item) {
	    		  return(
					<div className="col-sm-4" key={Math.random()}>
						<div className="card">
						    <img  
						     className="card-img-top img-fluid" 
						     src={ item.artwork_url } alt=""
						     />
						    <div className="play-track">
						        <div
						        className="play-track-inner" 
						        onClick={() => this.playMusic(item.stream_url)}>
						        {
						           (this.state.playingUrl !== item.stream_url)
						           ? <span>&#9654;</span>
						           : <span>||</span>
						        }
						         </div>
					         </div>
					     </div>
					</div>
			      )
	    		},this)
	    	)

        }


    }

 

	render() {
		return(
			<div className="TracksList col-sm-12">
			   <div className="row">
					{
						this.props.tracks.map(this.renderList)
					}
					
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		tracks: state.tracks
	}
}

export default connect(mapStateToProps)(TracksList)