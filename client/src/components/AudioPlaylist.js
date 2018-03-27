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
  id: 'AudioPlaylist',
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
        mp3: 'youtube.com/watch?v=3JEyX9iBwcM',
      },
    },
    {
      id: 1,
      title: 'Alert',
      artist: 'Kingdom Hearts',
      sources: {
        mp3: 'youtube.com/watch?v=DcHdU_1xWQs',
      },
    },
    {
      id: 2,
      title: 'Random Vid',
      artist: 'Unknown',
      sources: {
        mp3: 'youtube.com/watch?v=s-mOy8VUEBk',
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
          <Previous><i className='fa fa-step-backward' /></Previous>
          <Play><i className='fa'></i></Play>
          <Next><i className='fa fa-step-forward' /></Next>
          <Repeat>
            <i className='fa'></i>
            <i className='fa fa-repeat' />
          </Repeat>
          <div className='jp-playlist-container'>
            <Playlist>
              <Remove />
              <MediaLink>
                <PlaylistTitle />
              </MediaLink>
            </Playlist>
            <TogglePlaylist><i className='fa fa-ellipsis-h' /></TogglePlaylist>
          </div>
          <Shuffle><i className='fa fa-random' /></Shuffle>
          <div className='jp-progress'>
            <SeekBar>
              <BufferBar />
              <PlayBar />
              <CurrentTime />
              <Duration />
            </SeekBar>
          </div>
          <div className='jp-volume-container'>
            <Mute>
              <i className='fa'></i>
            </Mute>
            <div className='jp-volume-slider'>
              <div className='jp-volume-bar-container'>
                <VolumeBar />
              </div>
            </div>
          </div>
          <div className='jp-title-container'>
            <Poster />
            <Title />
          </div>
        </div>
        <BrowserUnsupported />
      </Gui>
    </JPlayer>
  </JPlaylist>
);

export default AudioPlaylist;