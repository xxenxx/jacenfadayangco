import { animeCharacter } from "../data/character-list.js";
import { searchCharacter} from "../function/search-character.js"
// Function to get URL parameters
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Extract the animeId
const animeId = getUrlParameter('animeId');

let matchingAnimeId;
animeCharacter.forEach((animeChar) => {
  if(animeChar.id === animeId){
    matchingAnimeId = animeChar;
  }
});

let characterHTML = '';
matchingAnimeId.characters.forEach((char) => {
  characterHTML += `
    <div class="character-card">
      <div class="character-thumbnail">
        <img src="${char.thumbnail}">
      </div>
      <div class="character-name">${char.name}</div>
    </div>
  `
})

document.querySelector('.trailer-container')
  .innerHTML = `
    <div class="trailer-block">
      <video class="main-video-thumbnail display-none js-video-trailer" src="${matchingAnimeId.mainVideo}" loop></video>
      <img class="main-image-thumbnail display-block js-image-thumbnail" src="${matchingAnimeId.mainThumbnail}" alt="">
    </div>
    <div class="inner-background" style="background: linear-gradient(to right, ${matchingAnimeId.backgroundColor}, rgba(255, 255, 255, 0) 70%);">
      <div class="thumbnail-text-button-container">
        <img class="thumbnail-video" src="${matchingAnimeId.textLogo}" alt="">
        <div class="button-container">
          <button class="play-trailer-button js-play-trailer-button">&#9654; Play Trailer</button>
          <a href="#characters"><button class="anime-characters-button">Characters</button></a>
        </div>
      </div>
    </div>

  `


const newThumnail = document.getElementById('js-anime-thumbnail');
newThumnail.src = matchingAnimeId.animeThumbnail;

document.querySelector('.js-character-grid')
  .innerHTML = characterHTML;

searchCharacter();

document.querySelector('.js-play-trailer-button')
  .addEventListener('click', () => {
    const videoTrailer = document.querySelector('.js-video-trailer');
    const imageThumbnail = document.querySelector('.js-image-thumbnail');
    if (videoTrailer.classList.contains('display-none')
        && imageThumbnail.classList.contains('display-block')) {
      videoTrailer.classList.remove('display-none');
      videoTrailer.classList.add('display-block');
      videoTrailer.play();
      imageThumbnail.classList.remove('display-block');
      imageThumbnail.classList.add('display-none');
    } else if (videoTrailer.classList.contains('display-block')
      && imageThumbnail.classList.contains('display-none')){
      videoTrailer.classList.add('display-none');
      videoTrailer.classList.remove('display-block');
      imageThumbnail.classList.add('display-block');
      imageThumbnail.classList.remove('display-none');
      videoTrailer.pause();
      videoTrailer.currentTime = 0;
    }
  });