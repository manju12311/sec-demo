const newParagraph =document.createElement('p');
newParagraph.textContent='This is a new paragraph'
myDiv.appendChild(newParagraph);
myDiv.addEventListener('click',() => {
    alert('Div clicked!');
});