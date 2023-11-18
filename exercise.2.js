const checkObj = {
    first: 3,
    second: 'four'
};
const d = 'three'
const b = 'quarter'
function oneFunc(a, checkObj) {
    return a  in checkObj;
}
console.log(oneFunc(d, checkObj))
console.log(oneFunc(b, checkObj))