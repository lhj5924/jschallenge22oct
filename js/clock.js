const clock = document.querySelector("#clock");


function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");

  clock.innerText = `${hours}:${minutes}`;
 
}

// "1".padStart(2,"0") // string 에만 쓸 수 있음!! 2 charactor 가 아닐 경우 앞에 0을 추가함. 뒤에 추가는 padEnd(2,"0").
// String() // string 이 됨.

getClock()
setInterval(getClock, 1000);
// setTimeout(sayHello, 5000);

// new Date()
// const date = new Date();
// date.getDate();
// date.getDay();
// date.getFullYear();
// date.getHours();
// date.getSeconds();

