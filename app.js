
let button=document.createElement('button');
button.innerHTML='PSG';
document.body.appendChild(button);

let deletebtn=document.createElement('button');
deletebtn.innerHTML='delete';
document.body.appendChild(deletebtn);

button.addEventListener('click', () => {
    let features = "menubar=no, scrollbars=no, width=450, height=300"
    let newpsg = window.open("https://www.psg.fr/", '', features)
    newpsg.moveTo(600, 600);

    deletebtn.addEventListener("click", () => {
        newpsg.close()
    })
})