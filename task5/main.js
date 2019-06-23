;
(function () {
    let w = window,
        d = document;

    const pattern = /^[(А|В|Е|К|М|Н|О|Р|С|Т|У|Х)]{1}[0-9]{3}[(А|В|Е|К|М|Н|О|Р|С|Т|У|Х)]{2}[0-9]{2,3}$/;

    const validation = () => {
        let div = d.createElement('div');
        div.classList.add('sub');
        d.querySelector('#res').appendChild(div);
        div.innerHTML = " ";

        d.querySelector("#submit").addEventListener('click', function (e) {
            e.preventDefault();
            let valueValid = d.querySelector("#validArea").value;
             
            if (pattern.test(valueValid)) {
                div.innerHTML = "Номер в базе зарегестирован успешно";
            } else {
                div.innerHTML = "Введены не корректные данные..";
            }
        });
    
    }








    //   console.log(pattern.test("АВ"));
    //   console.log(pattern.test("А"));
    //   console.log(pattern.test("А123"));
    //   console.log(pattern.test("А1232"));
    //   console.log(pattern.test("А12"));
    //   console.log("Рез: " + pattern.test("А123А123"));
    //   console.log("Рез: " + pattern.test("А123АО12"));
    //   console.log("Рез: " + pattern.test("А123АХ123"));
    //   console.log("Рез: " + pattern.test("А123АО12"));
    //   console.log(pattern.test("А12АБ1234"));
    //   console.log(pattern.test("А123АСС12"));

    w.addEventListener('load', validation);




})();