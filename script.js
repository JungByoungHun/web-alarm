const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'ko-KR';

const exercises = {
    '푸쉬업': { reps: 'pushups-reps', set: 'pushups-set' },
    '파이크푸쉬업': { reps: 'pike-reps', set: 'pike-set' },
    '풀업': { reps: 'pullup-reps', set: 'pullup-set' },
    '할루우바디': { reps: 'hollow-reps', set: 'hollow-set' },
    '할로우 올리기': { reps: 'hollow-up-reps', set: 'hollow-up-set' },
    '한다리스쿼트': { reps: 'handari-reps', set: 'handari-set' },
};

let currentExercise = null;

recognition.onresult = function(event) {
    const command = event.results[0][0].transcript.trim();

    if (Object.keys(exercises).includes(command)) {
        currentExercise = command;
        alert(`${command} 시작!`);
    } else if (['하나', '둘', '셋', '넷', '다섯', '여섯', '일곱', '여덟', '아홉', '열'].includes(command) && currentExercise) {
        const repsSpan = document.getElementById(exercises[currentExercise].reps);
        let reps = parseInt(repsSpan.innerText, 10) + 1;
        repsSpan.innerText = reps;

        if (reps >= 10) {
            alert(`${currentExercise} 1세트 완료!`);
            repsSpan.innerText = 0;

            const setSpan = document.getElementById(exercises[currentExercise].set);
            let sets = parseInt(setSpan.innerText, 10) + 1;
            setSpan.innerText = sets;

            if (sets >= 3) {
                alert(`${currentExercise} 전체 완료!`);
                currentExercise = null;
            }
        }
    } else if (command === '완료') {
        alert("현재 세트 종료!");
        currentExercise = null;
    }
};

document.getElementById('start-voice').addEventListener('click', () => {
    recognition.start();
});

function finishWorkout() {
    alert("하루 운동 완료!");
    saveRecord();
}

function saveRecord() {
    const today = new Date().toISOString().slice(0, 10);
    const record = Object.keys(exercises).reduce((acc, exercise) => {
        const sets = document.getElementById(exercises[exercise].set).innerText;
        const reps = document.getElementById(exercises[exercise].reps).innerText;
        acc[exercise] = { sets, reps };
        return acc;
    }, {});

    localStorage.setItem(today, JSON.stringify(record));
    alert("운동 기록이 저장되었습니다!");
}
