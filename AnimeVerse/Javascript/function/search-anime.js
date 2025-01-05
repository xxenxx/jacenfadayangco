//document.getElementById allows us to get the id from html
//addEventListener is used to handle events that happen on the html. 
// let say when user clicks on the button, addEventListener will handle that 'click' event.
// this time we have addeventListener to handle the input event and perform a fuction if the user starts typing
document.getElementById('js-anime-search').addEventListener('input', function () {
    // get the value from the search bar and convert it to lower case and store it in searchQuery
    const searchQuery = this.value.toLowerCase();
    // Select all anime cards in html and store in animeList 
    const animeList = document.querySelectorAll('.anime-card');

    // forEach used to loop through the anime cards that stored in animeList.
    // "(anime) => {}" this is a function with a parameter "anime", 
    //  this parameter represents one element of the animeList. 
    //  it use to perform actions to animecard element in html
    animeList.forEach((anime) => { 
        // Get title of the anime from html and convert it into lowercase
        const animeTitle = anime.querySelector('.anime-info-title').textContent.toLowerCase(); 

        // Check if title includes the search term
        if (animeTitle.includes(searchQuery)) {
            anime.classList.remove('hide'); // Show if it matches
        } else {
            anime.classList.add('hide'); // Hide if it doesn’t match
        }
    });
});


