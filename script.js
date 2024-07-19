const inputNumber = document.getElementById("number");
const button = document.getElementById("convert-btn");
const finalResult = document.getElementById("output");
const romanValues = {
        M:	1000,
        CM:	900,
        D:	500,
        CD:	400,
        C:	100,
        XC:	90,
        L:	50,
        XL:	40,
        X:	10,
        IX:	9,
        V:	5,
        IV:	4,
        I:	1
};
button.addEventListener("click",(num) => {
  num =  inputNumber.value;
  if(num === ""){
      finalResult.textContent = "Please enter a valid number";
      return;
  }
  else if(num <= 0){
    finalResult.textContent = "Please enter a number greater than or equal to 1";
    return;
  }
  else if(num >= 4000){
      finalResult.textContent = "Please enter a number less than or equal to 3999";
      return;
  };
  let result = "";
    for (let x in romanValues){

        while(num >= romanValues[x] ){
            result += x;
            num -= romanValues[x];
        }
    };
    finalResult.innerText = result;
});
