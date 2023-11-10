const noButton = document.getElementById('no');
const yesButton = document.getElementById('yes');

noButton.addEventListener('mouseover', function(){
  let maxDistance = 500;
  const x = Math.random() * maxDistance - maxDistance / 2;
  const y = Math.random() * maxDistance - maxDistance / 2;
  this.style.transform = `translate(${x}px, ${y}px)`;
});


yesButton.addEventListener('click', function() {
  document.getElementById('message').style.display = 'block';
});
