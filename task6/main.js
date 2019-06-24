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

        if ( !isNaN(minIndex) && !isNaN (maxIndex)) {
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
    

        arr = arr.filter(function(i){
            return i%3 === 1;
        });

                              
      
    
        console.log(arr);

    };

    filterArr(makeArray);




})();