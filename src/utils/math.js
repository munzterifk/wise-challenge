export const divideBy10E18 = (num) => { 
    return Math.round((num / Math.pow(10, 18)) * 100) / 100;
}

