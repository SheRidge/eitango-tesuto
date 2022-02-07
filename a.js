const from_json = JSON.parse(date.json);

console.log(from_json);

console.log(from_json[0].Name)

var point=0
var mondaisuu=0

function mondai() {
  const messageNo = Math.floor( Math.random() * from_json.length);
  console.log(from_json[messageNo]);
  var toi = from_json[messageNo]
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
  alert("リセットしました…")
}
