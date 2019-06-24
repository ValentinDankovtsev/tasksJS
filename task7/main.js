;
(function () {

    /* Дан объект. в котором хранятся численные и строчные свойства.
     Все численные свойства умножаем на 2 и складываем их. Выводим на экран.*/


    const obj = {
        name: "Pipa",
        nameFriend: "Lupa",
        agePipa: "30",
        ageLupa: "31",
        salaryPipa: 1000,
        salaryLupa: 1500
    };

    const salarySumTwoMonth = (obj) => {
        let salaries = 0;
        for ( let key in obj) {
            if ( typeof obj[key] == "number" ){
                obj[key] = obj[key]*2;
                salaries += obj[key];
            }
        }
        return salaries ;
    } 

    console.log(salarySumTwoMonth(obj));













})()