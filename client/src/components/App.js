import React, { Component } from 'react';
import Header from './Header'
import AudioPlaylist from './AudioPlaylist';

// Styles the jPlaylist to look nice
import '../../node_modules/react-jplaylist/dist/css/skins/sleek.min.css';
// Styles Play/Pause/Mute etc when icons (<i />) are used for them
import '../../node_modules/react-jplaylist/dist/css/controls/iconControls.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AudioPlaylist />
      </div>
    );
  }
}

export default App;
