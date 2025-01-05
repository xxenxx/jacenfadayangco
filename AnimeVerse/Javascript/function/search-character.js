export function searchCharacter () {
  document.getElementById('search-character').addEventListener('input', function () {
    const searchQuery = this.value.toLowerCase();
    const animeCharacter = document.querySelectorAll('.character-card');

    animeCharacter.forEach((animeChar) => { 
        const charName = animeChar.querySelector('.character-name').textContent.toLowerCase(); 

        if (charName.includes(searchQuery)) {
          animeChar.classList.remove('hide'); 
        } else {
          animeChar.classList.add('hide'); 
        }
    });
});
}