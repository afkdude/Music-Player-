// -----------------Toogle theme Js -----------------------------


const toggleButton = document.getElementById('toggle-theme'); 

// console.log(document.body.getAttribute('data-theme'));

toggleButton.textContent = document.body.getAttribute('data-theme');

// toggleButton.textContent = currentTheme
  
function toggleTheme() {
  const body = document.body; 
  const currentTheme = body.getAttribute('data-theme'); 
  toggleButton.textContent = currentTheme; 

  const newTheme = currentTheme === 'Light' ? 'Dark' : 'Light';
  

  if (newTheme === 'Dark') {
    toggleButton.style.color = "black";
    toggleButton.style.backgroundColor = "white"; 
  } else {
    toggleButton.style.backgroundColor = "black";
    toggleButton.style.color = "white";


  }
  
  body.setAttribute('data-theme', newTheme);
}

//event listener for toggle theme

toggleButton.addEventListener('click', toggleTheme);

// Additional setup to ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('toggle-theme').addEventListener('click', toggleTheme);
});







//---------------all songs and songs card player JS ----------------




const songs = [
  { id: 1, name: "Nakhra Nawabi ", artist: "Fateh", img:"images/nakhra-nawabi.webp", genre: "Pop", source:"songs/Nakhra Nawabi.mp3" },
  
  { id: 2, name: "Dope Shope", artist:"Honey Singh", img:"images/dope-shope.jpg", genre:"Pop", source:"songs/Dope Shope_320(PagalWorld.com.sb).mp3" },
  
  { id: 3, name:"Sadda Haqq", artist:"AR. Rehman", img:"images/sadda.jpg", genre: "Rock", source: "songs/SaaddaHaq.mp3" },
  
  { id: 4, name: "UDD DA punjab", artist: "Gopi Longia", img:"images/uddda.webp ", genre: "Rock", source:"songs/UddDaPunjab.mp3" },
  
  { id: 5, name: "Dekhte Dekhte", artist: "Atif Aslam", img: "images/dekhte.jpg ", genre: "Jazz", source: "songs/Dekhte Dekhte.mp3" },
  
  { id: 6, name: "Hamari Atariya", artist: "Gulzar", img: "images/attariya.jpeg ", genre: "Jazz", source:"songs/Hamari Atariya.mp3" },
]; 

let currentSongIndex = 0; 



//adding all the event listeners


document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('genre-filter').addEventListener('change', showSongs); 
  document.getElementById('search-song').addEventListener('input', showSongs); 
  document.getElementById('prev-song').addEventListener('click', playPreviousSong);
  document.getElementById('play-song').addEventListener('click', playCurrentSong);
  document.getElementById('next-song').addEventListener('click',playNextSong); 
  document.getElementById('add-to-playlist').addEventListener('click', addToPlaylist);
  

  showSongs(); //initially displaying list of songs

  renderCurrentSong();   //initial render of the song card 

  
}); 



//shosongs()   This function filters and displays the songs based on the selected genre and search input.

function showSongs() {
  
  const genre = document.getElementById('genre-filter').value; 

  // console.log(genre);

  const searchQuery = document.getElementById('search-song').value.toLowerCase(); 

  // console.log(searchQuery);
  
  const songList = document.getElementById('song-list'); 

  songList.innerHTML = ""; 

  const filteredSongs = songs.filter(song => {
    const matchesGenre = genre === 'all' || song.genre === genre;
    const matchesSearch = song.name.toLowerCase().includes(searchQuery);
    return matchesGenre && matchesSearch;
  });

  filteredSongs.forEach(song => {
    const li = document.createElement('li');
    li.textContent = `${song.name} - ${song.artist}`;
    li.addEventListener('click', () => playSong(song.id));
    songList.appendChild(li);
  });
}

//playSong()  This function sets the current song to the one clicked in the song list and updates the song card.  renderCurrentSong
// This function updates the song card with the details of the current song and plays the song.

function playSong(id) {
  currentSongIndex = songs.findIndex(song => song.id === id);
  renderCurrentSong();
}

function renderCurrentSong() {
  const song = songs[currentSongIndex]; 

  document.getElementById('current-song-img').src = song.img; 
  document.getElementById('current-song-name').textContent = song.name; 
  document.getElementById('current-song-artist').textContent = song.artist;
  
  const audioPlayer = document.getElementById('audio-player'); 

  audioPlayer.src = song.source; 
  audioPlayer.play(); 
}

//previous and next song

function playPreviousSong() {
  if (currentSongIndex > 0) {
    currentSongIndex--;
    renderCurrentSong();
  }
}

function playNextSong() {
  if (currentSongIndex < songs.length - 1) {
    currentSongIndex++;
    renderCurrentSong();
  }
}


//playCurrentSong This function toggles between playing and pausing the current song.

function playCurrentSong() {
  const audioPlayer = document.getElementById('audio-player');
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
}