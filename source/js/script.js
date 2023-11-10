document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.getElementById('no');
    const yesButton = document.getElementById('yes');
    const messageDiv = document.getElementById('message');
    const music = document.getElementById('background-music');
    const countdownElement = document.getElementById('countdown');
    const proposal = document.getElementById('proposal');

    
    const playMusic = () => {
        music.play().catch(e => console.error("A reprodução automática foi bloqueada pelo navegador."));
    };

    const startHeartsAnimation = () => {
        function createHeart() {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // entre 3 e 5 segundos
            heart.innerText = '❤️';
            document.body.appendChild(heart);

            
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }

        setInterval(createHeart, 300);
    };

    const startCountdown = () => {
        let countdownNumber = 10;
        countdownElement.innerText = countdownNumber;

        const countdownInterval = setInterval(() => {
            countdownNumber--;
            countdownElement.innerText = countdownNumber;

            if (countdownNumber <= 0) {
                clearInterval(countdownInterval);
                countdownElement.style.display = 'none';
                proposal.style.display = 'block';
                yesButton.style.display = 'inline-block';
                noButton.style.display = 'inline-block';
                playMusic();
            }
        }, 1000);
    };

    startCountdown();

    noButton.addEventListener('mouseover', function(e) {
        const maxDistance = 500;
        const x = Math.random() * maxDistance - maxDistance / 2;
        const y = Math.random() * maxDistance - maxDistance / 2;
        this.style.transform = `translate(${x}px, ${y}px)`;
    });

    yesButton.addEventListener('click', () => {
        noButton.style.transform = 'translate(0, 0)';
        messageDiv.style.display = 'block';

        document.body.classList.add('bg-after-yes');
        proposal.classList.add('text-white');
        startHeartsAnimation();
       
    });
});
