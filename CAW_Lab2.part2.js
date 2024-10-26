//ex0 01:
document.querySelectorAll('.boundary').forEach(boundary => {
    boundary.addEventListener('mouseenter', () => {
        boundary.classList.add('youlose');
    });
});
//exo 02:
document.querySelectorAll('.boundary').forEach(boundary => {
    boundary.addEventListener('mouseenter', () => {
        document.querySelectorAll('.boundary').forEach(b => b.classList.add('youlose'));
    });
});
//exo 03:
document.getElementById('end').addEventListener('mouseenter', () => {
    alert('You win!');
});

//exo 04:
document.getElementById('start').addEventListener('click', () => {
    document.querySelectorAll('.boundary').forEach(boundary => {
        boundary.classList.remove('youlose');
    });
});
