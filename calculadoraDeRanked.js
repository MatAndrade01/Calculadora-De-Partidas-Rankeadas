
function getMatches (victory, defeat) {
    let balanceOfVitorias = victory - defeat
    return balanceOfVitorias
}

function showRanked(victory) {
    if(victory < 10) {
        return "Ferro"
    } else if(victory > 10 && victory <= 20) {
        return "Bronze"
    } else if(victory > 20 && victory <= 50) {
        return "Prata"
    } else if(victory > 50 && victory <= 80) {
        return "Ouro"
    } else if(victory > 80 && victory <= 90) {
        return "Diamane"
    } else if(victory > 90 && victory <= 100) {
        return "Lendário"
    } else if(victory >= 101) {
        return "Imortal"
    }
}

let showVictoryaBalance = getMatches(81, 10)
let showRankedBalance = showRanked(showVictoryaBalance)

console.log(`O Herói tem de saldo ${showVictoryaBalance} e está no nível ${showRankedBalance}`)
