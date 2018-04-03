import React from 'react';
import JPlayer, {
  Gui, SeekBar, BufferBar,
  Poster, Audio, Title, Mute, Play, PlayBar,
  VolumeBar, Duration, CurrentTime, BrowserUnsupported,
} from 'react-jplayer';
import JPlaylist, {
  initializeOptions, Playlist, Shuffle, Next, Previous, Repeat,
  TogglePlaylist, Remove, MediaLink, Title as PlaylistTitle,
} from 'react-jplaylist';

const jPlayerOptions = {
  id: 'AmpliTubePlaylist',
  verticalVolume: true,
};

const jPlaylistOptions = {
  hidePlaylist: true,
  playlist: [
    {
      id: 0,
      title: 'Get Item',
      artist: 'Kingdom Hearts',
      sources: {
        mp3: 'api/audio/3JEyX9iBwcM',
      },
    },
    {
      id: 1,
      title: 'Alert',
      artist: 'Kingdom Hearts',
      sources: {
        mp3: 'api/audio/DcHdU_1xWQs',
      },
    },
    {
      id: 2,
      title: 'Random Vid',
      artist: 'Unknown',
      sources: {
        mp3: 'api/audio/s-mOy8VUEBk',
      },
      poster: 'http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png',
    },
  ],
};

initializeOptions(jPlayerOptions, jPlaylistOptions);

const AudioPlaylist = () => (
  <JPlaylist id={jPlayerOptions.id}>
    <JPlayer className='jp-sleek'>
      <Audio /> 
      <Gui>
        <div className='jp-controls jp-icon-controls'>
          <Play><i className='fa'></i></Play>
          <Repeat>
            <i className='fa'></i>
            <i className='fa fa-repeat' />
          </Repeat>
          <div className='jp-title-container'>
            <Poster />
            <Title />
          </div>
          <CurrentTime />
          <div className='jp-playlist-container'>
            <Playlist>
              <Remove />
              <MediaLink>
                <PlaylistTitle />
              </MediaLink>
            </Playlist>
            <TogglePlaylist><i className='fa fa-ellipsis-h' /></TogglePlaylist>
          </div>
        </div>
        <BrowserUnsupported />
      </Gui>
    </JPlayer>
  </JPlaylist>
);

export default AudioPlaylist;