const button = document.getElementById('avoidButton');
const container = document.querySelector('.container');
const yesButton = document.getElementById('yesButton');
const loveGif = document.getElementById('loveGif');
const loveMusic = document.getElementById('loveMusic');

// Initial button position
button.style.left = "185px";
button.style.top = "127px";

// No button movement
button.addEventListener('mousemove', (e) => {
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const distanceX = mouseX - (buttonRect.left + buttonRect.width / 2);
    const distanceY = mouseY - (buttonRect.top + buttonRect.height / 2);

    const threshold = 80;

    if (Math.abs(distanceX) < threshold && Math.abs(distanceY) < threshold) {
        let offsetX = (distanceX > 0 ? -1 : 1) * (threshold - Math.abs(distanceX));
        let offsetY = (distanceY > 0 ? -1 : 1) * (threshold - Math.abs(distanceY));

        let newLeft = button.offsetLeft + offsetX;
        let newTop = button.offsetTop + offsetY;

        newLeft = Math.max(0, Math.min(container.clientWidth - button.offsetWidth, newLeft));
        newTop = Math.max(0, Math.min(container.clientHeight - button.offsetHeight, newTop));

        button.style.left = `${newLeft}px`;
        button.style.top = `${newTop}px`;
    }
});

// Heart animation & music on Yes
yesButton.addEventListener('click', () => {
    loveMusic.play();
    loveGif.style.display = 'block';

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerText = '❤️';
        heart.style.left = `${Math.random() * window.innerWidth}px`;
        heart.style.top = `${window.innerHeight - 100}px`;
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000);
    }
});