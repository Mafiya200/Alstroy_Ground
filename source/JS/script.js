'use strict';

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};
function check() {
    [].forEach.call(document.querySelectorAll('.tel'), function (input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ __ __",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5) this.value = ""
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)

    });

};
function check2() {
    [].forEach.call(document.querySelectorAll('.tel-2'), function (input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ __ __",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5) this.value = ""
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)

    });

};
function check3() {
    [].forEach.call(document.querySelectorAll('.tel-3'), function (input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ __ __",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5) this.value = ""
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)

    });

};
function check4() {
    [].forEach.call(document.querySelectorAll('.tel-4'), function (input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ __ __",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5) this.value = ""
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)

    });

};

$(`.header__burger`).click(function () {
    $(this).toggleClass(`_active`);
    $(`.header__menu`).toggleClass(`_active`);
    $(`.background`).toggleClass(`_active`);
$(`body`).toggleClass(`_lock`);
    document.querySelector(`.background`).addEventListener(`click`, function (e) {
        if (e.target.closest(`.background`)) {
            closeB();
        };
    });

});

function closeB() {
    $(`.header__burger`).removeClass(`_active`);
    $(`.header__menu`).removeClass(`_active`);
    $(`.background`).removeClass(`_active`);
    $(`body`).removeClass(`_lock`);

}

const mySwiperQuestion = new Swiper(`.question__swiper`, {
    slidesPerView: 1,
    pagination: {
        el: `.question__pagination`,
        type: `bullets`,
        spaceBetween: 140,
        clickable: false,
        bulletClass: `question__bullet`,///new меняет класс стилей на нужный
        /* autoHeight: true, */
        bulletActiveClass: `question__bullet_active`,///new меняет класс стилей на нужный когда активный кружок
        observer: true,
        observeParents: true,
        preloadImages: false, //true-вкл/false-выкл предзагрузку картинок
        watchSlidesVisibility: true,
    },
    // обновить свайпер
    // при изменении элементов слайдера
    observer: true,//true-вкл/false-выкл обновление свайпера при изменении элементов слайдера

    // обновить свайпер
    // при изменении родительских
    // элементов слайдера
    observeParents: true,//true-вкл/false-выкл обновление свайпера при изменении родительских элементов слайдера

    // обновить свайпер
    // при изменении дочерних
    // элементов слайдера
    observeSlideChildren: true, //true-вкл/false-выкл обновление свайпера при изменении дочерних элементов слайдера
    simulateTouch: false,
    slideToClickedSlide: false,
    allowTouchMove: false,
    init: false,
    on: {
        slideChange: function () {
            counterSlide();
        },
    },
});
mySwiperQuestion.init();

function counterSlide() {
    $(`.question__counter span`).text(`Вы отвечаете на ${mySwiperQuestion.realIndex + 1} вопрос из ${mySwiperQuestion.slides.length}`);
}

$(`.next__button`).on(`click`, submitAdd);


function submitAdd() {
    mySwiperQuestion.slideNext();
    let mySwiperQuestionLength = mySwiperQuestion.slides.length;

    if (mySwiperQuestion.realIndex === mySwiperQuestionLength - 1) {
        $(this).parent().find(`.next__text`).replaceWith(`<input class="tel" type="tel" required name="telUser" placeholder="Ваш телефон">`);
        check();
        $(this).attr('type', `submit`);
        $(this).find(`span`).text(`Отправить`);
$(this).addClass(`_unready`);
const submitSlide = $(this);
        $(`.tel`).on(`input`, function () {

            if ($(`.tel`).val().length >= 18) {
                $(`.tel`).removeClass(`red-shadow`);

                $(`.tel`).addClass(`green-shadow`);
                releteClick();
                submitSlide.removeClass(`_unready`);

            }
            else {
                $(`.tel`).removeClass(`green-shadow`);
                $(`.next__button`).on(`click`, submitAdd);
                $(`.tel`).addClass(`red-shadow`);
                submitSlide.addClass(`_unready`);

            }
        });



        return false;

    }

if(document.querySelector(`.check-choice`).classList.contains(`_active`)){
    let design_remove = document.querySelectorAll(`.design_remove`).length;

    for (let i = 0; i < design_remove; i++) {

        for (let j = 0; j < mySwiperQuestion.slides.length; j++) {
            if (mySwiperQuestion.slides[j].classList.contains(`design_remove`)) {
                mySwiperQuestion.removeSlide(j);
            }

        }
    }
}

counterSlide();  
}

function releteClick() {
    $(`.next__button`).off(`click`, submitAdd);
};

$(`.design`).on(`click`, function (e) {
    if (!e.target.closest(`.design__item`)) {
        return false;
    }
    const item = e.target.closest(`.design__item`);
    const itemParent = item.parentElement;
    const itemCircle = item.querySelector(`.design__circle`);
    const itemCircleRadio = itemCircle.querySelector(`input`);

    const allCircleInBody = itemParent.querySelectorAll(`.design__circle`);

    const allInputInBody = itemParent.querySelectorAll(`input`);

    for (let i = 0; i < allCircleInBody.length; i++) {
        const element = allCircleInBody[i];
        element.classList.remove(`_active`);
    }
    itemCircle.classList.add(`_active`);
    for (let i = 0; i < allInputInBody.length; i++) {
        allInputInBody[i].removeAttribute('checked');
    }
    itemCircleRadio.setAttribute('checked', ``);



});


const animItems = document.querySelectorAll(`._anim-item`);

if(animItems.length > 0){
    animScroll();

   window.addEventListener('scroll',animScroll); 
}
function animScroll(){
    for (let i = 0; i < animItems.length; i++) {
        const animItem = animItems[i];
        const animItemHeight = animItem.offsetHeight;
        const animStart = 4;
        const animOffset = offsetAnim(animItem).top; 
        var animPoint = window.innerHeight - (animItemHeight/animStart);

        if(animItemHeight > window.innerHeight){
          var  animPoint = window.innerHeight - (window.innerHeight / animStart);
        }

        if((pageYOffset > animOffset-animPoint) && pageYOffset < (animOffset + animItemHeight)){
        animItem.classList.add(`_active`);
        }
        else{
            if(!animItem.classList.contains(`_anim-no-hide`)){
                animItem.classList.remove(`_active`);

            }
        }
    }
}
function offsetAnim(elem){
    const rect = elem.getBoundingClientRect();
const scrollY = window.pageYOffset||document.documentElement.scrollTop;
const scrollX = window.pageXOffset||document.documentElement.scrollLeft;
return{top:scrollY + rect.top,left:scrollX+rect.left}
}


check2();
check3();
check4();


$(`.tel-2`).on(`input`, function () {
    if ($(this).val().length >= 18) {

        $(this).removeClass(`red-shadow`);
        checkedTel = true;
        $(this).addClass(`green-shadow`);
    }
    else {
        checkedTel = false;
        $(this).removeClass(`green-shadow`);
        $(this).addClass(`red-shadow`);
    }
});
$(`.tel-3`).on(`input`, function () {
    if ($(this).val().length >= 18) {

        $(this).removeClass(`red-shadow`);
        checkedTel3 = true;
        $(this).addClass(`green-shadow`);

    }
    else {
        checkedTel3 = false;
        $(this).removeClass(`green-shadow`);
        $(this).addClass(`red-shadow`);
    }
});
$(`.tel-4`).on(`input`, function () {
    if ($(this).val().length >= 18) {

        $(this).removeClass(`red-shadow`);
        checkedTel4 = true;
        $(this).addClass(`green-shadow`);
    }
    else {
        checkedTel4 = false;
        $(this).removeClass(`green-shadow`);
        $(this).addClass(`red-shadow`);
    }
});
let checkedName = false;
let checkedTel = false;
let checkedTel3 = false;
let checkedTel4 = false;
$(`.smoke__form_item-name input`).on(`input`, function () {
    if ($(this).val().length > 0) {

        $(this).removeClass(`red-shadow`);
        checkedName = true;
        $(this).addClass(`green-shadow`);
    }
    else {
        checkedName = false;
        $(this).removeClass(`green-shadow`);
        $(this).addClass(`red-shadow`);
    }
    if(checkedName===true&&checkedTel===true){
        $(`.smoke__form_item-button .button`).removeClass(`_unready`); 

    }
    else{
        $(`.smoke__form_item-button .button`).addClass(`_unready`);
    }

});
$(`.smoke__form_item-tel input`).on(`input`, function () {
    if(checkedName===true&&checkedTel===true){
        $(`.smoke__form_item-button .button`).removeClass(`_unready`); 

    }
    else{
        $(`.smoke__form_item-button .button`).addClass(`_unready`);
    } 
});
$(`.smoke__form_item-button .button`).on(`click`,function(){

    if(checkedName===true&&checkedTel===true){
       document.querySelector(`.smoke__form`).submit(); 
    }
        
    return false;
    
    });
/////3

$(`.leave-reguest__form_item-tel input`).on(`input`, function () {
    if(checkedTel3){
        $(`.leave-reguest__form_item-button .button`).removeClass(`_unready`); 

    }
    else{
        $(`.leave-reguest__form_item-button .button`).addClass(`_unready`);
    } 
});
$(`.leave-reguest__form_item-button .button`).on(`click`,function(){

if(checkedTel3){
   document.querySelector(`.leave-reguest__form`).submit(); 
}
    
return false;

});


/////4
$(`.address__form_item-tel input`).on(`input`, function () {
    if(checkedTel4){
        $(`.address__form_item-button .button`).removeClass(`_unready`); 

    }
    else{
        $(`.address__form_item-button .button`).addClass(`_unready`);
    } 
});
$(`.address__form_item-button .button`).on(`click`,function(){

if(checkedTel4){
   document.querySelector(`.address__form`).submit(); 
}
    
return false;

});





















$(`.block__mini-images .mini-image`).on(`click`,function(){

$(this).parent().parent().children(`.block__big-image`);


if($(this).parent().parent().children(`.block__big`).length){

const cloneBig = $(this).parent().parent().children(`.block__big`).children(`.block__big-image`).children(`img`).clone();
const cloneMini = $(this).children(`img`).clone();
$(this).parent().parent().children(`.block__big`).children(`.block__big-image`).children(`img`).replaceWith(cloneMini);
$(this).children(`img`).replaceWith(cloneBig);

}

});


$(`.start-logo`).on(`click`,function(e){

        window.scrollTo({
            top:0,
            left:0,
            behavior:`smooth`,
        });

e.preventDefault();
});

$(`.tel-3`).on(`blur`,function(){
    $(this).removeClass(`red-shadow`);
    console.log(1);
})
    







