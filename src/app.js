import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
const API_KEY = 'AIzaSyCgJSb9wOBtoqynnb7TnA89AiTbaHiBncA';

class YouTube extends Component {
    constructor(props)
    super(props)
        this.state = {
    selectedVideo: null,
    videos: []
};
this.videoSearch('surfboards'); // initial search term
    }

videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => { // same as function(videos) {...} ES6
        // this.setState({ videos: videos }); ES6 allows just:
        this.setState({
            videos: videos,
            selectedVideo: videos[0]
        });
    })
}

render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
        <div>
            <SearchBar onSearchTermChange={videoSearch} />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
                onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                videos={this.state.videos} />  {/* passing data is known as passing 'props'*/}
        </div>
    );
}
}

ReactDOM.render(<YouTube />, document.querySelector('.container'))


// downwards data-flow: only the most parent components that needs data should be 
// responsible for fetching data.