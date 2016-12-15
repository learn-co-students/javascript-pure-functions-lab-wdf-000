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
  return [...playlist, episode];
}

function removeFromPlaylist(playlist, episode) {
  let newPlaylist = [];
  newPlaylist = playlist.filter(function (ep){
    if (ep !== episode){
      return Object.assign({}, playlist, ep);
    }
  });
  /// This works in browser & console because of underscore library load in index.html, however, does not work for terminal tests
  /// Changed .map to .filter => problem solved!
  // return _.compact(newPlaylist);
  return newPlaylist;
}

function getNextEpisodeInPlaylist(playlist) {
  return playlist[0];
}

function bingeWatch(playlist) {
  while (playlist.length > 0){
    playlist.shift();
    bingeWatch(playlist);
  }
  return "Please let there be more!";
}
