import React, { Component } from 'react';
import Header from './Header'
import SearchResults from './SearchResults';
import AudioPlaylist from './AudioPlaylist';

// Styles the jPlaylist to look nice
import '../../node_modules/react-jplaylist/dist/css/skins/sleek.min.css';
// Styles Play/Pause/Mute etc when icons (<i />) are used for them
import '../../node_modules/react-jplaylist/dist/css/controls/iconControls.min.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showResults: false
    }
  }

  toggleSearchResults = () => {
    this.setState({ showResults: !this.state.showResults });
  }

  render() {
    return (
      <div>
        <Header toggleSearchResults={this.toggleSearchResults} />
        { this.state.showResults ? <SearchResults /> : null }
        <AudioPlaylist />
      </div>
    );
  }
}

export default App;
