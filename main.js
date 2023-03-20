document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    const choice = document.querySelector('input').value
    console.log(choice)
    const url = `https://api.nasa.gov/planetary/apod?api_key=83BE4MrJUp1AajkS3rOxwFBvqPJEuFGVHY2A3WBq&date=${choice}`

    fetch(url)
        .then(res => res.json())
        .then(data => {

            console.log(data)
            document.querySelector('h4').innerText = data.explanation
            document.querySelector('h2').innerText = data.title
            document.querySelector('.page-img').src = data.hdurl
            document.querySelector('iframe').src = data.url

            if(data.media_type === 'video'){
                document.querySelector('.page-img').style.display = 'none'
                document.querySelector('iframe').style.display = 'block'
            } else if(data.media_type === 'image') {
                document.querySelector('.page-img').style.display = 'block'
                document.querySelector('iframe').style.display = 'none'
            }
        })
        .catch(err => console.log(err))
}