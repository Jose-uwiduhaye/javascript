let temperature;
let sum;
let meanTemp;
function getMeanTemp(){
    sum=0;
    for(let i=0;i<temperature.length;i++){
        sum +=temperature[i];
    }
    meanTemp=sum/temperature.length;

}
temperature=[14,15,28,30,45];
getMeanTemp();

console.log(`Mean Temp:${meanTemp}`);