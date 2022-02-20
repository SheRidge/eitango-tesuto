//問題数
window.number = 0
//正解数
window.seikai = 0
//連続正解数
window.renzoku = 0
//最高連続正解数
window.saikou = 0

//Jsonの読み込み
$.getJSON('../JSON/kako.json', function (kako, textStatus, jqXHR) {
  window.kako = shuffle(kako)
})
function mondai() {
  $('#m_box').text(window.number + "問目")
  $('#q_box').text(window.kako[window.number].gen + "の過去形") //問題を表示
}

function kotaeawase() {
  const kaitou = $('#kaitou').val() //入力したもの
  const answer = window.kako[window.number].kako //答え
  window.number++
  if (kaitou == answer) {
    window.seikai++
    window.renzoku++
    var result = window.confirm('正解\n' + window.renzoku + "連続正解！！！")
    if (window.renzoku > window.saikou) {
      window.saikou = window.renzoku
    }
    if (result == true) {
      $('#m_box').text(window.number + "問目")
      $('#q_box').text(window.kako[window.number].gen + "の過去形") //問題を表示
      $('#s_box').text(window.renzoku + "連続正解中！")
      $('#kaitou').val("")
    } else if (result == false) {
      if (window.number == window.renzoku) {
        alert("終了！" + window.seikai + "/" + window.number + "正解！\n" + window.seikai / window.number * 100 + "％正解！\n全問正解！！！！！\n")
        window.number = 0
        window.seikai = 0
        window.renzoku = 0
        window.saikou = 0
      }else {
        alert("終了！" + window.seikai + "/" + window.number + "正解！\n" + window.seikai / window.number * 100 + "％正解！\n最高" + window.saikou + "連続正解！！")
        window.number = 0
        window.seikai = 0
        window.renzoku = 0
        window.saikou = 0
      }
    }
  } else {
    var result = window.confirm('不正解…答えは' + answer + 'でしたー')
    if (result == true) {
      $('#m_box').text(window.number + "問目")
      $('#q_box').text(window.kako[window.number].gen + "の過去形") //問題を表示
      $('#s_box').text("")
      $('#kaitou').val("")
    } else if (result == false) {
      if (window.number == window.renzoku) {
        alert("終了！" + window.seikai + "/" + window.number + "正解！\n" + window.seikai / window.number * 100 + "％正解！\n全問正解！！！！！\n")
        window.number = 0
        window.seikai = 0
        window.renzoku = 0
        window.saikou = 0
      }else {
        alert("終了！" + window.seikai + "/" + window.number + "正解！\n" + window.seikai / window.number * 100 + "％正解！\n最高" + window.saikou + "連続正解！！")
        window.number = 0
        window.seikai = 0
        window.renzoku = 0
        window.saikou = 0
      }
    }
  }
}

function reset() {
  window.number = 0
  window.seikai = 0
  window.renzoku = 0
  window.saikou = 0
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
