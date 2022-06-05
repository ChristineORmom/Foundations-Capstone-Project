
const baseURL = `http://localhost3000:/api`

const adviceSubmit = document.querySelector('#advice-form');
const songSubmit = document.querySelector('#songs-form');
const yesButton = document.querySelector('#yesButton'); 
const examplesBtn = document.getElementById('exampleButton'); 
let advice = document.getElementById('advice-input');
let songs = document.getElementById('song-input');



const getExamples = () => {
    axios.get('http://localhost:3000/api/examples')
    .then (res => {const data = res.data; alert(data);});
}

const handleAdviceSubmit = (e) => {
    e.preventDefault()
   console.log(advice.value)
    advice = advice.value
    axios.post('http://localhost:3000/advice', {advice})
    .then((res) => {console.log(res.data)})
}

const handleSongSubmit = (e) => {
    e.preventDefault()
    console.log(songs.value)
    songs = songs.value   
    axios.post('http://localhost:3000/songs', {songs})
    .then((res) => {console.log(res.data)})    
}


examplesBtn.addEventListener('click', getExamples)
adviceSubmit.addEventListener('submit', handleAdviceSubmit)
songSubmit.addEventListener('submit', handleSongSubmit)
yesButton.addEventListener('click', () => {
    alert('Thanks good advice is amazing to give and receive!');
});








