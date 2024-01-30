const searchInput = document.getElementById('search-input');
const resultsArtist = document.getElementById('result-artist')
const resultsPlaylist = document.getElementById('result-playlists')

function requestApi(searchTerm){ //revisar API//
    fetch(`https://api.spotify.com/v1/search?query=${searchTerm}&type=track,artist&market=ES`)
        .then((response) => response.json())
        .then(result => displayResults(result))
}

function displayResults(result){
    resultsPlaylist.classList.add('hidden');
    const artisName = document.getElementById('artist-name');
    const artisImage = document.getElementById('artist-img');

    result.forEach(element => {
        artisName.innerText = element.name;
        artisImage.src = element.urlImg;
    });

    resultsArtist.classList.remove('hidden');
    
}

document.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm === '') {
            resultsPlaylist.classList.add('hidden')
            resultsArtist.classList.remove('hidden')
            return;
        }
})