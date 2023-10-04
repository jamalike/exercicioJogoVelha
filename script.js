const casa = document.querySelectorAll(".casa");
let atual = "X";

casa.forEach(c => {
    c.addEventListener('click', event => {
        if(event.target.innerText == ''){
            event.target.innerText = atual;
            if(atual == 'X')
                atual = "O";
            else 
                atual = 'X';
        }
    });
})
