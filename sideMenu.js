const clientsButton = document.getElementById('clientsBt');
const nfsButton = document.getElementById('nfsBt');
const configButton = document.getElementById('configBt');
const contentBox = document.getElementById('contentBox');

const clientAddBt = document.getElementById('addBt');
const clientEditBt = document.getElementById('editBt');
const clientDelBt = document.getElementById('delBt');

const clientDT = document.getElementById('clientData');
const clientDTSaveBt = document.getElementById('clientSaveBt');
const clientDTCancelBt = document.getElementById('clientCancelBt');

clientsButton.addEventListener('click', () => {
    contentBox.style.marginTop = '0';
});

nfsButton.addEventListener('click', () => {
    contentBox.style.marginTop = '-400px';
});

configButton.addEventListener('click', () => {
    contentBox.style.marginTop = '-800px';
});

clientAddBt.addEventListener('click', () => {
    clientDT.style.marginLeft = '-300px';
});

clientEditBt.addEventListener('click', () => {
    clientDT.style.marginLeft = '-300px';
});

clientDTSaveBt.addEventListener('click', () => {
    clientDT.style.marginLeft = '0px';
});

clientDTCancelBt.addEventListener('click', () => {
    clientDT.style.marginLeft = '0px';
});