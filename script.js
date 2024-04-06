document.addEventListener("DOMContentLoaded", function () {
    var aboutLink = document.querySelector('a[href="about.html"]');
    var aboutMiddle = document.querySelector('.about-middle');
    var profileContainer = document.querySelector('.profile-container');
    var contactContainer = document.querySelector('.contact-container');
    var infoTable = document.querySelector('.info-table');

    aboutLink.addEventListener('click', function (event) {
        event.preventDefault();

        aboutMiddle.classList.toggle('show');

        if (aboutMiddle.classList.contains('show')) {
            aboutMiddle.style.maxWidth = '60%';
            profileContainer.style.transition = 'transform 0.5s ease-in-out';
            contactContainer.style.transition = 'transform 0.5s ease-in-out';
            infoTable.style.transition = 'transform 0.5s ease-in-out';
            profileContainer.style.transform = 'translateX(-60%)';
            contactContainer.style.transform = 'translateX(80%)';
            infoTable.style.transform = 'translateX(50%)';
        } else {
            aboutMiddle.style.maxWidth = 0;
            profileContainer.style.transition = 'transform 0.5s ease-in-out';
            contactContainer.style.transition = 'transform 0.5s ease-in-out';
            infoTable.style.transition = 'transform 0.5s ease-in-out';
            profileContainer.style.transform = 'translateX(-20%)';
            contactContainer.style.transform = 'translateX(-10%)';
            infoTable.style.transform = 'translateX(30%)';
        }
    });

    const updateCount = () => {
        const visitCount = parseInt(localStorage.getItem('visitCount')) || 0;
        document.getElementById('visit-count').textContent = `You've visited this page ${visitCount} times.`;
    };

    const incrementCount = () => {
        let visitCount = parseInt(localStorage.getItem('visitCount')) || 0;
        visitCount++;
        localStorage.setItem('visitCount', visitCount);
        updateCount();
    };

    document.getElementById('greet-button').addEventListener('click', function () {
        incrementCount();
        this.disabled = true;
    });

    if (localStorage.getItem('hasClicked') === 'true') {
        document.getElementById('greet-button').disabled = true;
    }

    updateCount();
});
