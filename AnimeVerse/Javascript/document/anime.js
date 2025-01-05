// import the animeList data from data folder
import { animeList } from "../data/anime-list.js";
import { topFive } from "../data/top-five-anime.js";

//top five anime HTML here
let topFiveAnimeHTML = '';

topFive.forEach((anime) => {
  topFiveAnimeHTML += `
    <img class="js-top-five-anime" src="${anime.thumbnail}" data-anime-id="${anime.animeId}" alt="anime thumbnail">
  `
});

document.querySelector('.card-wrapper')
  .innerHTML = topFiveAnimeHTML;

document.querySelectorAll('.js-top-five-anime')
  .forEach((anime) => {
    anime.addEventListener('click', () => {
      const animeId = anime.dataset.animeId;
      window.location.href = `characters.html?animeId=${animeId}`;
    });
  });

// initialize an empty variable animeCardHTML string 
let animeCardHTML = '';

// Loop through each data that we import from data folder
animeList.forEach((anime) => {
  // for each data, create an HTML string and add it to animeCardHTML string
  // "${anime.thumbnail}", "${anime.title}", "${anime.description}" are the data from animeList
  animeCardHTML += `
    <div class="anime-card" data-anime-id="${anime.id}">
        <div class="anime-thumbnail-container">
            <img class="anime-thumbnail" src="${anime.thumbnail}" alt="">
        </div>
        <div class="anime-info-grid">
          <div>
            <p class="anime-info-title">${anime.title}</p>
          </div>
          <div >
            <p class="anime-info-description">${anime.description}</p>
          </div>
        </div>
    </div>
  `
});

// Replace the current content inside the HTML element with id 'js-anime-grid' with animeCardHTML string
const animeGrid = document.querySelector('.js-anime-grid');
animeGrid.innerHTML = animeCardHTML;

// Add click event listener to each anime card
animeGrid.querySelectorAll('.anime-card').forEach((card) => {
  card.addEventListener('click', () => {
    const animeId = card.dataset.animeId;
    // Navigate to the characters page with the anime ID in the URL
    window.location.href = `characters.html?animeId=${animeId}`;
  });
});