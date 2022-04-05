let btn = document.querySelector('.btnn')

btn.addEventListener('click', showPics)

function showPics(){
    let imgDiv = document.querySelector('.imgDiv')
    imgDiv.innerHTML = ''
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then((data) => {
        let imgUrl = data[0].url
        let imgEl = document.createElement('img')

        imgEl.setAttribute('src', `${imgUrl}`)
        imgEl.classList.add('imgShow')

        let imgDiv = document.querySelector('.imgDiv')
        imgDiv.appendChild(imgEl)

    })
   .catch(err => console.log(err))
}