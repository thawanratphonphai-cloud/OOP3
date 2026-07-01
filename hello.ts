function vat(price:number,type: string):number{
    if(type==="E")
    return price*7/100;
    else if(type==="N")
        return 0;
    else
        return price*7/107;
}
let price1:number =200;
let price2:number =750;
console.log(`สินค้าราคา ${price1}บาท ภาษีมูลค่าเพิ่ม ${vat(price1,"N")}บาท`);
console.log(`สินค้าราคา ${price2}บาท ภาษีมูลค่าเพิ่ม ${vat(price2,"I")}บาท`);

function hello(name:string):string{
    return `ยินดีต้อนรับ คุณ ${name} สู่เว็บไซต์ NPR`;
}

console.log (hello("Thawanrat"));
console.log (hello("Prae"));