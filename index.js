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
  return playList.filter((e)=> {
  	if(JSON.stringify(e) != JSON.stringify(episode)){
       return e;
    }
});
}

function bingeWatch(playList){
  // playList.concat(finaleEpisode,"Please let there be more!").map(function(episode){
  //   console.log(episode)
  // })
    // if(playList.length > 0){
    //   console.log(playList)
    //   return bingeWatch(playList[playList.length]-1);
    // }else{
    //   return "no";
    // }
    playList.map((value,index)=> {
      if(index <= playList.length){
        debugger;
        removeFromPlaylist(playList,value);
        console.log(bingeWatch(playList));
      }else{
        console.log("Please let there be more!");
      }
    })
}

var countdown = function(value) {
    if (value > 0) {
        return countdown(value - 1);
    } else {
        return value;
    }
}
