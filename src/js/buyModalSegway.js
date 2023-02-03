document.addEventListener('DOMContentLoaded', function() {
    const btnBuy = document.querySelectorAll('.section:nth-child(1) .title__segway .container .block__left .block__warranty .block__btn .btn:nth-child(2)')
    const btnButPhone = document.querySelectorAll('.title__segway-phone .block__warranty .block__btn-2 .btn:nth-child(2)')
    const btnButContainer = document.querySelectorAll('.section:nth-child(16) .container .container__segway .slider .slider__line .slider__segway .btn')
    const modalVisible = document.querySelector('.section:nth-child(1) .modal__segway-overlay')
    const modal = document.querySelector('.section:nth-child(1) .modal__segway-overlay .modal')
    const btn = document.querySelector('.modal__segway .modal .back')
    const body = document.body;

    const formEmail = document.querySelectorAll('.modal__segway .modal__segway-overlay .modal .form .form__item .input')

    let formReq = this.documentElement.querySelectorAll('.req')
    let error = 0
    //Отвечает за  модальное окно за самоката
    btnBuy.forEach(el => {
        el.addEventListener('click', function() {
            modalVisible.classList.add('modal--visible-overlay')
            modal.classList.add('modal--visible-window')
            btn.classList.add('active')
            body.classList.add('stop__scroll')
        })
    });
    
    btnButPhone.forEach(el => {
        el.addEventListener('click', function() {
            modalVisible.classList.add('modal--visible-overlay')
            modal.classList.add('modal--visible-window')
            btn.classList.add('active')
            body.classList.add('stop__scroll')
        })
    });
    btnButContainer.forEach(el => {
        el.addEventListener('click', function() {
            modalVisible.classList.add('modal--visible-overlay')
            modal.classList.add('modal--visible-window')
            btn.classList.add('active')
            body.classList.add('stop__scroll')
        })
    });


    btn.addEventListener('click', function() {
        modalVisible.classList.remove('modal--visible-overlay')
        modal.classList.remove('modal--visible-window')
        btn.classList.remove('active')
        body.classList.remove('stop__scroll')
    })

    // form в модальное окно
    formEmail.forEach(item => {
        item.addEventListener('click', function() {
            item.classList.add('active')
        })
    })

    const form = document.forms["form"]; // считываем форму
    const formArr = Array.from(form); // формируем массив из элементов формы
    const validFormArr = []; // в этом массиве хранятся поля, которые нужно проверить
    const button = form.elements["button"]; // считываем кнопку

    formArr.forEach((el) => {
        if (el.hasAttribute("data-reg")) {
        el.setAttribute("is-valid", "0");
        validFormArr.push(el);
        }
    });

    form.addEventListener("input", inputHandler);

    function inputHandler({ target }) {
        if (target.hasAttribute("data-reg")) {
            inputCheck(target);
        }
    }

    function inputCheck(el) {
        const inputValue = el.value;
        const inputReg = el.getAttribute("data-reg");
        const reg = new RegExp(inputReg);
        if (reg.test(inputValue)) {
            el.setAttribute("is-valid", "1");
            el.style.borderBottom = "2px solid #009EFF";
        } else {
            el.setAttribute("is-valid", "0");
            el.style.borderBottom = "2px solid rgb(255, 0, 0)";
        }
    }

    function buttonHandler(e) {
        const allValid = [];
        validFormArr.forEach((el) => {
            allValid.push(el.getAttribute("is-valid"));
        });
        const isAllValid = allValid.reduce((acc, current) => {
            return acc && current;
        });

        if (!Boolean(Number(isAllValid))) {
            e.preventDefault();
        }
    }
})