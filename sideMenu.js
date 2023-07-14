const clientsButton = document.getElementById('clientsBt');
const nfsButton = document.getElementById('nfsBt');
const configButton = document.getElementById('configBt');
const contentBox = document.getElementById('contentBox');

clientsButton.addEventListener('click', () => {
    contentBox.style.marginTop = '0';
});

nfsButton.addEventListener('click', () => {
    contentBox.style.marginTop = '-400px';
});

configButton.addEventListener('click', () => {
    contentBox.style.marginTop = '-800px';
});