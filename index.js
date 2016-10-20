const episodes = [
  { id: 's06e01', title: 'The Red Woman' },
  { id: 's06e02', title: 'Home' },
  { id: 's06e03', title: 'Oathbreaker' },
  { id: 's06e04', title: 'Book of the Stranger' },
  { id: 's06e05', title: 'The Door' },
  { id: 's06e06', title: 'Blood of My Blood' },
  { id: 's06e07', title: 'The Broken Man' },
  { id: 's06e08', title: 'No One' },
  { id: 's06e09', title: 'Battle of the Bastards' },
];

const finaleEpisode = { id: 's06e10', title: 'The Winds of Winter' };


function addToPlaylist(playlist, episode) {
  return [...playlist, episode]
}

function getNextEpisodeInPlaylist(playlist) {
  return playlist[0]
}

function removeFromPlaylist(playlist, episode) {
  return playlist.filter(ep => { return ep != episode})
}

function bingeWatch(playlist) {
  // var result;
  var episode = playlist[0]
  if (episode) {
    var playlist = removeFromPlaylist(playlist, episode)
    // console.log(playlist)
    return bingeWatch(playlist)
  }
  else {
    return 'Please let there be more!';
  }
}