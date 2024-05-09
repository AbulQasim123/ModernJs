const music = document.querySelector('audio');
const play = document.querySelector('#play');
const img = document.querySelector('img');
const artist = document.querySelector('#artist');
const title = document.querySelector('#title');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const progress = document.querySelector('#progress');
const progress_div = document.querySelector('#progress_div');
let total_duration = document.querySelector('#duration');
let current_time = document.querySelector('#current_time');
const songs = [
    {
        name: "one",
        title: "Teri Meri",
        artist: "Lyrics",
    },
    {
        name: "two",
        title: "Meri Ashiqui",
        artist: "Lyrics",
    },
    {
        name: "three",
        title: "Pagal world",
        artist: "Lyrics",
    }
];
let isPlaying = false;

let musicPlay = () => {
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play', 'fa-pause');
    img.classList.add('anime');
}
let musicPause = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause', 'fa-play');
    img.classList.remove('anime');
}
play.addEventListener('click', function () {
    isPlaying ? musicPause() : musicPlay();
})

// Changing the music data
const laodSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = `music/${songs.name}.mp3`;
    img.src = `images/${songs.name}.jpg`;
}
let songIndex = 0;
// laodSong(songs[0]);

// // Function to change the song
const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    laodSong(songs[songIndex]);
    musicPlay();
}
const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    laodSong(songs[songIndex]);
    musicPlay();
}


music.addEventListener("timeupdate", (event) => {
    const { currentTime, duration } = event.target;
    let progress_time = (currentTime / duration) * 100;
    progress.style.width = `${progress_time}%`;
    progress.style.backgroundColor = '#4CAF50';
    progress.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';

    //  music duration update
    let min_duration = Math.floor(duration / 60);
    let sec_duration = Math.floor(duration % 60);
    let tot_duration = `${min_duration}:${sec_duration}`;
    if (duration) {
        total_duration.textContent = `${tot_duration}`;
    }

    //  current duration update
    let min_currentTime = Math.floor(currentTime / 60);
    let sec_currentTime = Math.floor(currentTime % 60);
    if (sec_currentTime < 10) {
        sec_currentTime = `0${sec_currentTime}`;
    }
    let tot_currentTime = `${min_currentTime}:${sec_currentTime}`;
    current_time.textContent = `${tot_currentTime}`;
});
progress_div.addEventListener('click', (event) => {
    const { duration } = music;
    const clickPosition = event.clientX - progress_div.getBoundingClientRect().left;
    const newPlaybackTime = (clickPosition / progress_div.clientWidth) * duration;
    music.currentTime = newPlaybackTime;
});


// if music end then next song
music.addEventListener('ended', nextSong);
next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);