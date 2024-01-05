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
            profileContainer.style.transform = 'translateX(-65%)';
            contactContainer.style.transform = 'translateX(90%)';
            infoTable.style.transform = 'translateX(50%)';
        } else {
            aboutMiddle.style.maxWidth = 0;
            profileContainer.style.transition = 'transform 0.5s ease-in-out';
            contactContainer.style.transition = 'transform 0.5s ease-in-out';
            infoTable.style.transition = 'transform 0.5s ease-in-out';
            profileContainer.style.transform = 'translateX(-20%)';
            contactContainer.style.transform = 'translateX(20%)';
            infoTable.style.transform = 'translateX(30%)';
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem('hasClicked') === 'true') {
        document.getElementById('greet-button').disabled = true;
    }

    document.getElementById('greet-button').addEventListener('click', function () {
        if (localStorage.getItem('hasClicked') !== 'true') {
            var visitCount = parseInt(sessionStorage.getItem('visitCount')) || 0;
            visitCount++;
            localStorage.setItem('visitCount', visitCount);
            sessionStorage.setItem('visitCount', visitCount);
            document.getElementById('visit-count').textContent = visitCount;
            localStorage.setItem('hasClicked', 'true');
            this.disabled = true;
        }
    });

    var visitCount = localStorage.getItem('visitCount') || 0;
    document.getElementById('visit-count').textContent = visitCount;
});

