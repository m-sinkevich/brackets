module.exports = function check(str, bracketsConfig) {
    for (let i = 0; i < str.length; i++) {
        for (let k = 0; k < bracketsConfig.length; k++) {
            if (str[i] == bracketsConfig[k][0] && str[i+1] == bracketsConfig[k][1]) {
                str = str.slice(0, i) + str.slice(i + 2);
                i = i - 2;
            }
        }
    }
    return  !str.length ;
}
