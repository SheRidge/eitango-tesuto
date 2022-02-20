//問題数
window.number = 0
//正解数
window.seikai = 0
//連続正解数
window.renzoku = 0

//Jsonの読み込み
$.getJSON('../JSON/data.json', function (data, textStatus, jqXHR) {
  window.data = shuffle(data)
})
function mondai() {
  $('#q_box').text(window.data[window.number].jp) //問題を表示
}

function kotaeawase() {
  const kaitou = $('#kaitou').val() //入力したもの
  const answer = window.data[window.number].en //答え
  window.number++
  if (kaitou == answer) {
    var result = window.confirm('正解' + window.renzoku + "連続正解！！！")
    window.seikai++
    window.renzoku++
    if (result == true) {
      $('#q_box').text(window.data[window.number].jp) //問題を表示
      $('#kaitou').val("")
    } else if (result == false) {
      alert("終了！" + window.seikai + "/" + window.number + "正解！")
    }
  } else {
    var result = window.confirm('不正解…答えは' + answer + 'でしたー')
    window.renzoku = 0
    if (result == true) {
      $('#q_box').text(window.data[window.number].jp) //問題を表示
      $('#kaitou').val("")
    } else if (result == false) {
      alert("終了！" + window.seikai + "/" + window.number + "正解！\n" + window.seikai / window.number * 100 + "％正解！")
    }
  }
}

function reset() {
  window.number = 0
  window.seikai = 0
  alert("リセットしました")
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
