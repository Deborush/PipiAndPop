// Conexión con HTML (Selecionar elementos)

const songForm = document.getElementById('song_form');
const playList = document.getElementById('play_list');

// Funcion para agregar una canción a la lista
function addSong(songName, artistName, songUrl){
    const listSong = document.createElement ('li')
    listSong.innerHTML = `
            <strong> ${songName} </strong>
            - ${artistName}
            <a href="${songUrl}" target="_blank" >Reproducir</a>
            <Button class="delete-btn"> Eliminar </Button>
   
    `
    //agregar al HTML
    playList.appendChild(listSong);
 
    //agregar evento al boton de eliminar
const deleteButton = listSong.getElementByIdBuCLassName ('delete.btn');
deleteButton.addEventListener('click', () => {
    listSong.remove(); //Eliminar la cancion de la lista
})

}
 
//Manejo de envio de formularios (Eventos)
 
songForm.addEventListener('submit', (event) => {
    event.preventDefault();
 
    //Obtener datos del form
    const songName = document.getElementById("song_name").value;
    const artistName = document.getElementById("artist_name").value;
    const songUrl = document.getElementById("url_song").value;
 
    addSong(songName, artistName, songUrl);
 
    songForm.reset();
 
})
 