;
(function () {

    let str = 'НННКПРРРРОРППППР';

    function foo(str) {
        let sum = 0;
        let len = str.length;

        for (let index = 0; index <= len; index++) {

            switch (str[index - 1]) {
                case 'Н':
                    console.log('Н = ' + 1 + '\n');
                    sum += 1;
                    break;
                case 'К':
                    console.log('К = ' + 5 + '\n');
                    sum += 5;
                    break;
                case 'П':
                    console.log('П = ' + 2 + '\n');
                    sum += 2;
                    break;
                case 'Р':
                    console.log('Р = ' + 4 + '\n');
                    sum += 4;
                    break;
                case 'О':
                    console.log('О = ' + 7 + '\n');
                    sum += 7;
                    break;
            }

        }
        return sum;
    }
    foo(str);

})();