function getArea(number){
    if(typeof number === "number"){
        let area = Math.PI * Math.pow(number, 2);
        console.log(`Площа круга = ${area}кв.од.`);
    } else if(typeof number != "number" & typeof number != "undefined"){
        console.log(`Повинно бути числове значення`);
    } else{
        console.log(`Будь ласка введіть радіус`);
    }
    
}

getArea();