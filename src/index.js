module.exports = function toReadable (number) {
    let result = [];
    const u = number % 10;
    const t = Math.floor(number % 100 / 10);
    const h = Math.floor(number / 100);

    if(h>0){
        result.push([
            undefined, 'one hundred', 'two hundred' , 'three hundred'   , 'four hundred',
            'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'
        ][h]);
    } 

    if(t === 1){
        result.push(['ten', 'eleven' ,
            'twelve'  , 'thirteen'  ,
            'fourteen', 'fifteen'  ,
            'sixteen' , 'seventeen'  ,
            'eighteen', 'nineteen'][u]);
            return result.join(' ');
    } else if (t > 1){
        result.push([undefined    , undefined  ,
            'twenty'   , 'thirty' ,
            'forty'      , 'fifty',
            'sixty' , 'seventy',
            'eighty', 'ninety'][t])
    }

    if(u > 0){
        result.push([undefined, 'one' , 'two' , 'three'   , 'four',
            'five'   , 'six', 'seven', 'eight', 'nine'][u])
    }


    return result.join(' ').length === 0 ? 'zero' : result.join(' ');
  
}

