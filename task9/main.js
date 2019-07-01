;
(function () {
    let w = window,
        d = document;

    const calculator = {
        flag: false,
        init: function () {

            d.addEventListener('click', delegateFunction);
            d.addEventListener('keypress', KeyboadFunction);

        },
        cash: "",
        res: 0,
        //area: d.querySelector('.form-control'),
        getCash: function () {

            d.querySelector('.form-control').value = this.cash;
        },
        getRes: function () {

            this.res = eval(this.cash);
            if (!this.res) this.res = 0;
            d.querySelector('#result').value = this.res;
        },
        operation: function (oper) {
            
            if (typeof this.cash.substr(-1) != "number") {
                this.flag = true;
            }
            switch (oper) {
                case '+':
                    if (this.flag) {
                        this.getRes();
                    }
                    this.flag = true;
                    this.cash += oper;
                    this.getCash();
                    break;
                case '-':
                    if (this.flag) {
                        this.getRes();
                    }
                    this.flag = true;

                    this.cash += oper;
                    this.getCash();
                    break;
                case '=':
                    this.getRes();
                    break;
                case '*':
                    if (this.flag) {
                        this.getRes();
                    }
                    this.flag = true;
                    this.cash += oper;
                    this.getCash();
                    break;
                case '/':
                    if (this.flag) {
                        this.getRes();
                    }
                    this.flag = true;
                    this.cash += oper;
                    this.getCash();
                    break;
                case '√':
                    this.getRes();
                    if (this.res >= 0) {
                        this.flag = true;
                        this.cash = Math.sqrt(this.res) + "+";
                        this.getCash();
                        //this.getCash();
                    } else {
                        this.res = "Error!!!";
                        this.getRes();
                        this.getCash();
                    }


                    break;
                case '.':
                    if (oper === '' || oper === '0') {
                        this.doDigit(0);
                    }

                    this.doDigit(oper);
                    break;
                case 'C':
                    this.cash = " ";
                    this.res = 0;
                    this.getRes();
                    this.getCash();
                    break;
                case '%':
                    if (this.flag) {
                        let val;

                        val = this.res * this.cash.substr(-1) / 100;

                        this.cash = this.cash.slice(0, -1) + val;
                        this.flag = true;
                        this.getRes();
                        this.getCash();
                    } else if (typeof this.cash.substr(-1) != "number") {
                        this.cash = "Error!!!";

                        this.getCash();
                    }

                    break;


            }
        },
        doDigit: function (num) {
            debugger;
            this.cash += num;
            this.getCash();
        }

    };


    const KeyboadFunction = (e) => {
        
        let char = String.fromCharCode(e.which);

        if ( e.keyCode === 13 ){ char = "="; calculator.operation(char); return; }

        switch (char) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '.':
                    calculator.doDigit(char);
                    break;    
            case '+':
            case '-':
            case '*':
            case '/':
            calculator.operation(char);
            break;
            




              


        }




    }



    const delegateFunction = (e) => {
        let target = e.target;

        if (target.hasAttribute('data-num')) {
            calculator.doDigit(target.innerText);
        } else if (target.hasAttribute('data-oper')) {
            calculator.operation(target.innerText);
        }

    };

    w.addEventListener('load', calculator.init);

})();