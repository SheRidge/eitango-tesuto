//問題数
let number = 0
//正解数
let seikai = 0
//連続正解数
let renzoku = 0
//最高連続正解数
let saikou = 0
//問題数
let mondaisuu = 100
//Point
let point = 0

let db_data

//Jsonの読み込み
if (getParam('type') == 'word') {
  const db_name = 'data.json'
} else if (getParam('type') == 'kako'){
  const db_name = 'kako.json'
} else if (getParam('type') == 'kako') {
  const db_name = 'kakobunshi.json'
} else {
  const db_name = 'data.json'
}
$.getJSON('../db/data.json', function (data, textStatus, jqXHR) {
  db_data = shuffle(data)
})

function set(n) {
  mondaisuu = n
  alert(`問題数を${n}問に設定しました。`)
}


function mondai() {
  $('#m_box').text(number + 1 + "/" + mondaisuu + "問目")
  $('#q_box').text(db_data[number].q) //問題を表示
}

function kotaeawase() {
  const kaitou = $('#kaitou').val() //入力したもの
  const answer = db_data[number].a //答え
  number++
  if (kaitou == answer) {
    seikai++
    renzoku++
    if (renzoku > saikou) {
      saikou = renzoku
    }
    if (mondaisuu > number) {
      var result = confirm('正解\n' + renzoku + "連続正解！！！")

      if (result == true) {
        $('#m_box').text(number + 1 + "/" + mondaisuu + "問目")
        $('#q_box').text(db_data[number].q) //問題を表示
        $('#s_box').text(renzoku + "連続正解中！")
        $('#kaitou').val("")
      } else if (result == false) {
        if (number == renzoku) {
          alert("終了！" + seikai + "/" + number + "正解！\n" + seikai / number * 100 + "％正解！\n全問正解！！！！！\n")
          number = 0
          seikai = 0
          renzoku = 0
          saikou = 0
        } else {
          alert("終了！" + seikai + "/" + number + "正解！\n" + seikai / number * 100 + "％正解！\n最高" + saikou + "連続正解！！")
          number = 0
          seikai = 0
          renzoku = 0
          saikou = 0
        }
      }
    } else {
      alert("正解\n終了！" + seikai + "/" + number + "正解！\n" + seikai / number * 100 + "％正解！\n最高" + saikou + "連続正解！！")
      number = 0
      seikai = 0
      renzoku = 0
      saikou = 0
    }
  } else {
    if (mondaisuu > number) {
      var result = confirm('不正解…答えは' + answer + 'でしたー')
      renzoku = 0
      if (result == true) {
        $('#m_box').text(number + 1 + "/" + mondaisuu + "問目")
        $('#q_box').text(db_data[number].q) //問題を表示
        $('#s_box').text("")
        $('#kaitou').val("")
      } else if (result == false) {
        if (number == renzoku) {
          alert("終了！" + seikai + "/" + number + "正解！\n" + seikai / number * 100 + "％正解！\n全問正解！！！！！\n")
          number = 0
          seikai = 0
          renzoku = 0
          saikou = 0
        } else {
          alert("終了！" + seikai + "/" + number + "正解！\n" + seikai / number * 100 + "％正解！\n最高" + saikou + "連続正解！！")
          number = 0
          seikai = 0
          renzoku = 0
          saikou = 0
        }
      }
    } else {
      alert('不正解…答えは' + answer + 'でしたー')
      alert("終了！" + seikai + "/" + number + "正解！\n" + seikai / number * 100 + "％正解！\n最高" + saikou + "連続正解！！\n" + point + "点！")
      number = 0
      seikai = 0
      renzoku = 0
      saikou = 0
    }
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

function getParam(name, url) {
    if (!url) url = location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}