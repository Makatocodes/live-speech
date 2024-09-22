const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const transcriptTextarea = document.getElementById('transcript');

let recognition = new webkitSpeechRecognition();
recognition.lang = 'en-US';
recognition.maxResults = 10;
recognition.onresult = event => {
    const transcript = event.results[0][0].transcript;
    transcriptTextarea.value += transcript + '\n';
};
recognition.onerror = event => {
    console.error('Error occurred:', event);
};
recognition.onend = () => {
    console.log('Recognition ended');
};

startBtn.addEventListener('click', () => {
    recognition.start();
    startBtn.disabled = true;
    stopBtn.disabled = false;
});

stopBtn.addEventListener('click', () => {
    recognition.stop();
    startBtn.disabled = false;
    stopBtn.disabled = true;
});