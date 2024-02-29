let btns = document.querySelectorAll("#btn")
let pOne = true
let newGame = document.querySelector("#newGame")
let winnerDiv = document.querySelector(".winner")
let resetGame = document.querySelector("#resetGame")

const ansSet = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const disable = () => {
    btns.forEach( (btn) => {
        btn.disabled = true
    } )
}

const enable = () => {
    btns.forEach((btn) => {
        btn.disabled = false
    })
}

const winner = (value) => {
    document.querySelector(".winner").innerHTML = `Winner is ${value}`
}

const checkWinner = () => {
    ansSet.forEach((index) => {
        let pos1Val = btns[index[0]].innerHTML
        let pos2Val = btns[index[1]].innerHTML
        let pos3Val = btns[index[2]].innerHTML

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                disable()
                winner(pos2Val)
            }
        }
    })
}


btns.forEach( (btn) => {
    btn.addEventListener("click", () => {
        // console.log("clicked");
        if(pOne){
            btn.innerHTML = "X"
            pOne = false
        }
        else{
            btn.innerHTML = "O"
            pOne = true
        }
        btn.disabled = true


        checkWinner()
    });
})

const reset = () => {
    enable()
    btns.forEach((btn) => {
        btn.innerHTML = null
    })
    winnerDiv.innerHTML = null
}

newGame.addEventListener('click', reset)
resetGame.addEventListener('click', reset)