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
  return episodes.concat([finaleEpisode]);
};

function removeFromPlaylist(playlist, episode) {
  var list = [];
  playlist.map(function(epi) {
    if (epi != episode) {
        list.push(epi);
    };
  });
  return list;
};

function getNextEpisodeInPlaylist(playlist) {

  return playlist.slice(0,1)[0];
};


// function bingeWatch(playlist) {
//   // debugger;
//   if (playlist.length === 0) {
//     return "Please let there be more!"
//   } else {
//     playlist.shift();
//     bingeWatch(playlist);
//   };
// };


function bingeWatch(playlist) {
  // debugger;
  if (playlist.length > 0) {
    playlist.shift();
    bingeWatch(playlist);
  };
  return "Please let there be more!"
};
