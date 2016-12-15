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

// const playLister = [{ id: 's06e09', title: 'Battle of the Bastards' },{ id: 's06e10', title: 'The Winds of Winter' },{ id: 's06e10', title: 'The Winds of Winter' }, { id: 's06e09', title: 'Battle of the Bastards' }];

function addToPlaylist(playList,episode){
  return playList.concat(episode);
}

function getNextEpisodeInPlaylist(playList,episode){
  return playList[0];
}


function removeFromPlaylist(playList,episode){
    return playList.filter(function(e){return e !=episode})
}

function bingeWatch(playList){
  if (playList.length == 0){
    return 'Please let there be more!'
  }else {
    return bingeWatch(playList.slice(1))
  }
}
