// code your solution here
function superbowlWin(array){
    let findResult = array.find(item => item.result === 'W');
    
    if(findResult) {
        return findResult.year;
    }
}