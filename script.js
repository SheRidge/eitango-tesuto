//問題数
window.number = 0

//Jsonの読み込み
$.getJSON('./data.json', function (data, textStatus, jqXHR) {
  window.data = shuffle(data)
})
function mondai() {
  $('#q_box').text(window.data[window.number].jp) //問題を表示
}

function kotaeawase() {
  const kaitou = $('#kaitou').val() //入力したもの
  const answer = window.data[window.number].en //答え
  if (kaitou == answer) {
    alert('正解')
  } else {
    alert('不正解')
  }
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }
  return array
}
