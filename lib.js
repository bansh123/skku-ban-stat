function sum(numbers){
    /*let s =0;
    for (let i =0; i<numbers.length;i++) s+= numbers[i];
    return s;*/
    return numbers.reduce((p,c)=>p+c,0);
}

function avg(numbers){
    return sum(numbers) / numbers.length;
}

function max(numbers){
    /*let m =numbers[0];
    for (let i =0; i<numbers.length;i++) if (m<numbers[i]) m = numbers[i];
    return m;*/
    return numbers.reduce((m,c)=>(m>c?m:c),numbers[0]);
}
module.exports ={
    sum,
    avg,
    max,
};
/*
exports.sum = sum;
exports.avg = avg;
exports.max = max;
*/