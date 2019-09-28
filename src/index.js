module.exports = function check(str, bracketsConfig) {
    const strLength = str.length;
    const brackets = bracketsConfig.reduce((acc, item) => {
            acc[item[0]] = item[1];
            return acc;
        }, {});
    
    let balancedBrackets = [];
    for (let i = 0; i < strLength; i++) {
        if (brackets[balancedBrackets[balancedBrackets.length - 1]] === str[i]) {
            balancedBrackets.pop();
        } else {
            balancedBrackets.push(str[i]);
        }
    }
    return !balancedBrackets.length;
}
