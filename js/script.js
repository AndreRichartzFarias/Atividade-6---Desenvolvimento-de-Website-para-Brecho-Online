document.addEventListener('DOMContentLoaded', function () {
    const hearts = document.querySelectorAll('.sc-be715261-0kuvDHm');

    hearts.forEach(function (heart) {
        heart.addEventListener('click', function () {
            heart.classList.toggle('isClicked');
        });
    });
});