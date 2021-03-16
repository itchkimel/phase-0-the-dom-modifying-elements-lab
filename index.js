document.querySelector('main').remove();
const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
const victiryId = newHeader.setAttribute('id', 'victory');
newHeader.innerHTML = 'Itche is the champion';