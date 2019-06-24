;
(function () {

    const makeArray = () => {
        let minIndex,
            maxIndex,
            arr = [],
            len,
            newArr = [];

        minIndex = +prompt("Введите начало массива: ", 0);
        maxIndex = +prompt("Введите конец массива: ", 0);

        if (minIndex == minIndex && maxIndex == maxIndex) {
            for (; minIndex <= maxIndex; minIndex++) {

                arr.push(minIndex);

            }
            len = arr.length;
            console.log("Вот наш массив : [" + arr + "] в нем: " + len + " элементов.");
         

        }

        else {
            alert("Вы ввели не числа, попробуй еще разок!");
            makeArray();
        };

        arr.forEach(function (i) {

            newArr.push(i);
        })


        return newArr;
        
    };
    
    const filterArr = (Arr) => {
        let arr = Arr();
        let filterArr = [];

        arr.forEach(i => {
            if(i%3 === 1){
                filterArr.push(i);
            }
        });
                      
      
    
        console.log(filterArr);

    };

    filterArr(makeArray);




})();