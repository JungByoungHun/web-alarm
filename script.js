document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');

    // FullCalendar 초기화
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'ko',
        events: loadEvents()
    });

    calendar.render();
});

const exercises = {
    pushups: { reps: 'pushups-reps', set: 'pushups-set', time: 'pushups-time' },
    pike: { reps: 'pike-reps', set: 'pike-set', time: 'pike-time' },
    pullup: { reps: 'pullup-reps', set: 'pullup-set', time: 'pullup-time' },
};

// 횟수 증가
function incrementReps(exercise) {
    const repsSpan = document.getElementById(exercises[exercise].reps);
    let reps = parseInt(repsSpan.innerText, 10) + 1;
    repsSpan.innerText = reps;
}

// 횟수 감소
function decrementReps(exercise) {
    const repsSpan = document.getElementById(exercises[exercise].reps);
    let reps = Math.max(0, parseInt(repsSpan.innerText, 10) - 1); // 0 이하로 감소하지 않음
    repsSpan.innerText = reps;
}

// 세트 완료 처리
function completeSet(exercise) {
    const repsSpan = document.getElementById(exercises[exercise].reps);
    const setSpan = document.getElementById(exercises[exercise].set);
    const timeSpan = document.getElementById(exercises[exercise].time);

    let reps = parseInt(repsSpan.innerText, 10);
    if (reps >= 10) {
        repsSpan.innerText = 0; // 횟수 초기화
        let sets = parseInt(setSpan.innerText, 10) + 1;
        setSpan.innerText = sets;

        // 세트 완료 시간 기록
        const now = new Date();
        timeSpan.innerText = `마지막 세트 완료: ${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;

        if (sets >= 3) {
            alert(`${exercise} 운동 완료!`);
        }
    } else {
        alert("횟수가 부족합니다! 10회를 완료하세요.");
    }
}

// 운동 완료 버튼
function finishWorkout() {
    alert("하루 운동 완료!");
    saveRecord();
}

// 운동 기록 저장
function saveRecord() {
    const today = new Date().toISOString().slice(0, 10);
    const record = Object.keys(exercises).reduce((acc, exercise) => {
        const sets = document.getElementById(exercises[exercise].set).innerText;
        acc[exercise] = { sets };
        return acc;
    }, {});

    localStorage.setItem(today, JSON.stringify(record));
    alert("운동 기록이 저장되었습니다!");
}

// 달력 이벤트 로드
function loadEvents() {
    const events = [];
    for (let i = 0; i < localStorage.length; i++) {
        const date = localStorage.key(i);
        const record = JSON.parse(localStorage.getItem(date));

        const totalSets = Object.values(record).reduce((sum, exercise) => {
            return sum + parseInt(exercise.sets, 10);
        }, 0);

        events.push({
      
