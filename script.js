const url = document.getElementById('url')
const video = document.getElementById('video')
let videoID = ''

function getVid(e) {
  let id = e.clipboardData.getData('text').slice(32)
  id = id.split('&')
  videoID = id[0]

  video.src = `https://www.youtube.com/embed/${videoID}?autoplay=1`
  setTimeout(filterID, 10)
}

function filterID() {
  url.value = `${videoID}`
  url.focus()
}

url.addEventListener('paste', (e) => {
  getVid(e)
})
filterID()
