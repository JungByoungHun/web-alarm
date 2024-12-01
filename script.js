let alarmTime = null;
let alarmSet = false;

function setAlarm() {
    const timeInput = document.getElementById("time").value;
    if (!timeInput) {
        alert("시간을 설정하세요!");
        return;
    }
    alarmTime = timeInput;
    alarmSet = true;
    document.getElementById("status").innerText = `알람 설정됨: ${alarmTime}`;
}

setInterval(() => {
    if (alarmSet) {
        const currentTime = new Date().toTimeString().slice(0, 5);
        if (currentTime === alarmTime) {
            alarmSet = false;
            alert("알람 시간입니다!");
        }
    }
}, 1000);
