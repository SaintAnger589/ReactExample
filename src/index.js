import React, { Component } from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_player';
import VideoDetail from './components/video_details';
import _ from 'lodash';



const API_KEY = 'AIzaSyAkS-wBEQpdBtD9x44M4mPfu3TNyhMsOoA';




class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState(
        {
          videos,
          selectedVideo: videos[0]
        }
    );
      //this.setState({videos: videos})
    });

  };

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    )
  }
}

//take this component and generate HTML and put on dom
ReactDom.render(<App />, document.querySelector('.container'));
