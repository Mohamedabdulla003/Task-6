class UberPrice(){
    contructor(ratePerKM){
        this.ratePerKM = ratePerKM;
    }
}
CalucPrice(distanceinKM){
    return distanceinKM * ratePerKM;
}

const calu =new UberPrice(2);
const price =calu.CalucPrice(d);
console.log(price);