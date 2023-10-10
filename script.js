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
casa.addEventListener(click)
{
    
}
function verificaVitoria()
{
//verifica colunas
    if((casa[0].innerText) &&
        (casa[0].innerText == casa[1].innerText) &&
        (casa[1].innerText == casa[2].innerText)){
        return casa[0].innerText;
    }

    if((casa[0].innerText) &&
        (casa[0].innerText == casa[1].innerText) &&
        (casa[1].innerText == casa[2].innerText)){
        return casa[0].innerText;
    }

    return '';
}
function verificaEmpate()
{
    if(
        (casa[0].innerText)&&
        (casa[1].innerText != "x") ||
        (casa[1]).innerText != "")
        {
            return "empate";
        }
 
}