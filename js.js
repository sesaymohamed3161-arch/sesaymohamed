const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Message sent successfully!');
  form.reset(SpeechRecognitionResult);
});
