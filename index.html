document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('calendar');

    // FullCalendar 초기화
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'ko',
        events: loadEvents(),
        eventClick: function (info) {
            const date = info.event.startStr;
            showDetails(date);
        }
    });

    calendar.render();
});

const exercises = {
    pushups: { reps: 'pushups-reps', set: 'pushups-set', time: 'pushups-time' },
    pike: { reps: 'pike-reps', set: 'pike-set', time: 'pike-time' },
    pullup: { reps: 'pullup-reps', set: 'pullup-set', time: 'pullup-time' },
};

function incrementReps(exercise) {
    const repsSpan = document.getElementById(exercises[exercise].reps);
    let reps = parseInt(repsSpan.innerText, 10) + 1;
    repsSpan.innerText = reps;
}

function decrementReps(exercise) {
    const repsSpan = document.getElementById(exercises[exercise].reps);
    let reps = Math.max(0, parseInt(repsSpan.innerText, 10) - 1);
    repsSpan.innerText = reps;
}

function completeSet(exercise) {
    const repsSpan = document.getElementById(exercises[exercise].reps);
    const setSpan = document.getElementById(exercises[exercise].set);
    const timeSpan = document.getElementById(exercises[exercise].time);

    let reps = parseInt(repsSpan.innerText, 10);
    if (reps >= 10) {
        repsSpan.innerText = 0;
        let sets = parseInt(setSpan.innerText, 10) + 1;
        setSpan.innerText = sets;

        // 시간 기록
        const now = new Date();
        timeSpan.innerText += `세트 ${sets}: ${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')} `;
    } else {
        alert("횟수가 부족합니다! 10회를 완료하세요.");
    }
}

function finishWorkout() {
    alert("하루 운동 완료!");
    saveRecord();
}

function saveRecord() {
    const today = new Date().toISOString().slice(0, 10);
    const record = Object.keys(exercises).reduce((acc, exercise) => {
        const sets = document.getElementById(exercises[exercise].set).innerText;
        const times = document.getElementById(exercises[exercise].time).innerText;
        acc[exercise] = { sets, times };
        return acc;
    }, {});

    localStorage.setItem(today, JSON.stringify(record));
    alert("운동 기록이 저장되었습니다!");
    location.reload();
}

function loadEvents() {
    const events = [];
    for (let i = 0; i < localStorage.length; i++) {
        const date = localStorage.key(i);
        const record = JSON.parse(localStorage.getItem(date));

        events.push({
            title: `운동 완료`,
            start: date,
            extendedProps: record
        });
    }
    return events;
}

function showDetails(date) {
    const record = JSON.parse(localStorage.getItem(date));
    if (record) {
        let details = `운동 기록 (${date}):\n\n`;
        Object.keys(record).forEach(exercise => {
            details += `${exercise} - 세트: ${record[exercise].sets}, 시간: ${record[exercise].times}\n`;
        });
        alert(details);
    } else {
        alert("해당 날짜에 기록이 없습니다.");
    }
}
