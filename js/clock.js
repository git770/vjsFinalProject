const clockTitle = document.querySelector(".clockTitle");

function nowDateFnc () {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

//현재 시각 함수 호출
nowDateFnc();
setInterval(nowDateFnc ,1000);
