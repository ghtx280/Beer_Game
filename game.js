var fps = 60
var posY = 0
var posX = 0
var speed = 7
var speedY = speed
var speedX = speed
var nspeed = -speed
var count = 0
var update = setInterval(update, 1000 / fps)

function update() {
  width = $('main').width() - $('.beer').width()
  height = $('main').height()

  $('.beer').css('top', posY)
  $('.beer').css('left', posX)

  posY += speedY

  if (posY >= height) {
    posX = Math.floor(Math.random() * width)
    posY = -200
  }
  if (posY <= 0) {
    speedY = speed
  }
}

$('.beer').mousedown(function () {
  count++
  $('.beer-now p').text(count)
  localStorage.setItem('count', count)
  posY = -200
  posX = Math.floor(Math.random() * width)
  $('#img').attr('src', 'img/2.png')
  setTimeout(function () { $('#img').attr('src', 'img/1.png') }, 500)
})