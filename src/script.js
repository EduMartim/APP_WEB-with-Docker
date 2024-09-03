document.addEventListener('DOMContentLoaded', () => {
    const changeColorBtn = document.getElementById('changeColorBtn');
    const container = document.querySelector('.container');

    changeColorBtn.addEventListener('click', () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        container.style.backgroundColor = "#" + randomColor;
    });
});