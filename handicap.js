function calculateScoreDifferential(rounds) {
    const differentials = [];

    for (const round of rounds) {
        let score_differential = (round.score - round.par) * (113 / round.slope)
        differentials.push(score_differential)
    }

    differentials.sort((a, b) => a - b);

    switch (differentials.length) {
        case 3:
            return differentials.slice(0,1)
        case 4:
            return differentials.slice(0,1)
        case 5:
            return differentials.slice(0,1)
        case 6:
            return differentials.slice(0,2)
        case 7:
        case 8:
            return differentials.slice(0,2)
        case 9:
        case 10:
        case 11: 
            return differentials.slice(0,3)
        case 12:
        case 13:
        case 14:
            return differentials.slice(0,4)
        case 15:
        case 16:
            return differentials.slice(0,5)
        case 17:
        case 18:
            return differentials.slice(0,6)
        case 19:
            return differentials.slice(0,7)
        default:
            return differentials.slice(0,8)
        
    }
}

function handicapIndex(rounds) {
    const differentials = calculateScoreDifferential(rounds)

    let diff_sum = differentials.reduce((acc, curr) => acc + curr, 0);
    let handicap_index = diff_sum / differentials.length;

    if (rounds.length === 3) {
        return handicap_index - 2;
    }
    else if (rounds.length === 4 || rounds.length === 6) {
        return handicap_index - 1;
    }
    return handicap_index;
}

export { handicapIndex }