var num = Math.floor( Math.random() * 11 );

const from_json = JSON.parse(date.json);

console.log(from_json);

console.log(from_json[0].Name)

point=0
mondaisuu=0

function mondai() {
  console.log(from_json[num]);
  var toi = from_json[num]
  toi.innerHTML = toi;
}

function kotaeawase() {
  kotae = 'kotae'
  if (kotae == toi) {
    alert("正解！")
    point += 1
    mondaisuu += 1
  }
  else{
    alert("不正解…")
  }
}

function pass() {

}

function reset() {
  point=0
  mondaisuu=0
  alert("リセットしました…");
}
