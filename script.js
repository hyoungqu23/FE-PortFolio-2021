const $adjList = document.querySelector("#adjective_list");
const adjective_list = ["개발을 좋아하는", "매일 기록하는", "순간에 열정적인", "배움에 진심인", "어제보다 한걸음 성장한"];

function randomAdj() {
  setInterval(() => {
    $adjList.textContent = adjective_list[Math.floor(Math.random() * adjective_list.length)];
  }, 2000);
}

randomAdj();