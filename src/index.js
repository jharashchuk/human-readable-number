module.exports = function toReadable (number) {    
    let ones = ['zero', 'one', 'two', 'three', 'four',
            'five', 'six', 'seven', 'eight', 'nine',
            'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
            'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];   
    let tens = ['twenty','thirty', 'forty','fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let rest = 0;   
    if (number < 20) return ones[number];   
    if (number < 100) {     
        rest = number % 10; 
        if (rest === 0) {
            return tens[Math.floor(number/10)-2]; 
        } else {   
        return tens[Math.floor(number/10)-2] + " " + (rest > 0 ? ones[rest] : "");   
        }
    }
    if (number < 1000) {   
        rest = number % 100;
        if (rest === 0) {
            return ones[Math.floor(number/100)] + " hundred"; 
        } else {
        return ones[Math.floor(number/100)] + " hundred " + (number % 100 > 0 ? toReadable(number % 100) : "");  
        } 
    }   
};
