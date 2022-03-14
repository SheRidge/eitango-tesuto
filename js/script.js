//問題数
window.number = 0
//正解数
window.seikai = 0
//連続正解数
window.renzoku = 0
//最高連続正解数
window.saikou = 0
//問題数
window.mondaisuu = 100
//Point
window.point = 0

//Jsonの読み込み
if (getParam('type') == 'word') {
  const db_name = 'data.json'
} else if (getParam('type') == 'kako'){
  const db_name = 'kako.json'
} else {
  location.href = "../"
}
$.getJSON('../db/data.json', function (data, textStatus, jqXHR) {
  window.data = shuffle(data)
})

function tenmon() {
  window.mondaisuu = 10
  alert("問題数を10問に設定しました。")
}

function fivemon() {
  window.mondaisuu = 5
  alert("問題数を5問に設定しました。")
}

function mondai() {
  $('#m_box').text(window.number + 1 + "/" + window.mondaisuu + "問目")
  $('#q_box').text(window.data[window.number].jp) //問題を表示
}

function kotaeawase() {
  const kaitou = $('#kaitou').val() //入力したもの
  const answer = window.data[window.number].en //答え
  window.number++
  if (kaitou == answer) {
    window.seikai++
    window.renzoku++
    if (window.renzoku > window.saikou) {
      window.saikou = window.renzoku
    }
    if (window.mondaisuu > window.number) {
      var result = window.confirm('正解\n' + window.renzoku + "連続正解！！！")

      if (result == true) {
        $('#m_box').text(window.number + 1 + "/" + window.mondaisuu + "問目")
        $('#q_box').text(window.data[window.number].jp) //問題を表示
        $('#s_box').text(window.renzoku + "連続正解中！")
        $('#kaitou').val("")
      } else if (result == false) {
        if (window.number == window.renzoku) {
          alert("終了！" + window.seikai + "/" + window.number + "正解！\n" + window.seikai / window.number * 100 + "％正解！\n全問正解！！！！！\n")
          window.number = 0
          window.seikai = 0
          window.renzoku = 0
          window.saikou = 0
        } else {
          alert("終了！" + window.seikai + "/" + window.number + "正解！\n" + window.seikai / window.number * 100 + "％正解！\n最高" + window.saikou + "連続正解！！")
          window.number = 0
          window.seikai = 0
          window.renzoku = 0
          window.saikou = 0
        }
      }
    } else {
      alert("正解\n終了！" + window.seikai + "/" + window.number + "正解！\n" + window.seikai / window.number * 100 + "％正解！\n最高" + window.saikou + "連続正解！！")
      window.number = 0
      window.seikai = 0
      window.renzoku = 0
      window.saikou = 0
    }
  } else {
    if (window.mondaisuu > window.number) {
      var result = window.confirm('不正解…答えは' + answer + 'でしたー')
      window.renzoku = 0
      if (result == true) {
        $('#m_box').text(window.number + 1 + "/" + window.mondaisuu + "問目")
        $('#q_box').text(window.data[window.number].jp) //問題を表示
        $('#s_box').text("")
        $('#kaitou').val("")
      } else if (result == false) {
        if (window.number == window.renzoku) {
          alert("終了！" + window.seikai + "/" + window.number + "正解！\n" + window.seikai / window.number * 100 + "％正解！\n全問正解！！！！！\n")
          window.number = 0
          window.seikai = 0
          window.renzoku = 0
          window.saikou = 0
        } else {
          alert("終了！" + window.seikai + "/" + window.number + "正解！\n" + window.seikai / window.number * 100 + "％正解！\n最高" + window.saikou + "連続正解！！")
          window.number = 0
          window.seikai = 0
          window.renzoku = 0
          window.saikou = 0
        }
      }
    } else {
      alert('不正解…答えは' + answer + 'でしたー')
      alert("終了！" + window.seikai + "/" + window.number + "正解！\n" + window.seikai / window.number * 100 + "％正解！\n最高" + window.saikou + "連続正解！！\n" + window.point + "点！")
      window.number = 0
      window.seikai = 0
      window.renzoku = 0
      window.saikou = 0
    }
  }
}

console.log(renzoku)

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

function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}