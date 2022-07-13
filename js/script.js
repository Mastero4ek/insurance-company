window.addEventListener('DOMContentLoaded', () => {

//select header

  const selectHeader = document.querySelector('.select__header'),
        selectBody = document.querySelector('.select__body'),
        selectItem = document.querySelectorAll('.select__item'),
        selectSpan = document.querySelector('.select__title'),
        selectImg = document.querySelector('.select__header img'),
        selectHeaderMobile = document.querySelector('.select__header-mobile'),
        selectBodyMobile = document.querySelector('.select__body-mobile'),
        selectItemMobile = document.querySelectorAll('.select__item-mobile'),
        selectSpanMobile = document.querySelector('.select__title-mobile'),
        selectImgMobile = document.querySelector('.select__header-mobile img');

  selectHeader.addEventListener('click', () => {
  if (selectBody.classList.contains('select__body--active')) {
    selectBody.classList.remove('select__body--active');
    selectImg.style.transform = 'rotate(0deg)';
    selectBody.style.maxHeight = null;
  } else {
    selectBody.classList.add('select__body--active');
    selectImg.style.transform = 'rotate(180deg)';
    selectBody.style.maxHeight = selectBody.scrollHeight + 'px';
  }
  });

  selectItem.forEach((item, i) => {
    item.addEventListener('click', () => {
      selectSpan.textContent = item.textContent;
      selectBody.classList.remove('select__body--active');
      selectImg.style.transform = 'rotate(0deg)';
      selectBody.style.maxHeight = null;
    });
  });

//select mobile

  selectHeaderMobile.addEventListener('click', () => {
  if (selectBodyMobile.classList.contains('select__body-mobile--active')) {
    selectBodyMobile.classList.remove('select__body-mobile--active');
    selectImgMobile.style.transform = 'rotate(0deg)';
  } else {
    selectBodyMobile.classList.add('select__body-mobile--active');
    selectImgMobile.style.transform = 'rotate(180deg)';
  }
  });

  selectItemMobile.forEach((item, i) => {
    item.addEventListener('click', () => {
      selectSpanMobile.textContent = item.textContent;
      selectBodyMobile.classList.remove('select__body-mobile--active');
      selectImgMobile.style.transform = 'rotate(0deg)';
    });
  });

//mobile menu

  const headerMobile = document.querySelector('.header__mobile'),
      burger = document.querySelector('.header__personal-burger'),
      body = document.querySelector('body'),
      innerWidth = window.innerWidth;

        burger.addEventListener('click', () => {
        headerMobile.classList.toggle('active__burger');
        body.classList.toggle('noscroll');
        });

//slider

if (innerWidth > 768) {

  const swiper = new Swiper('.swiper', {

    slidesPerView: 4,
    spaceBetween: 34.4,
    loop: true,
  
    navigation: {
      nextEl: '.slider__arrow-right',
      prevEl: '.slider__arrow-left',
    }
    
  });

} else {

  const swiper = new Swiper('.swiper', {

    slidesPerView: 4,
    spaceBetween: 15.77,
    loop: true,
  
    navigation: {
      nextEl: '.slider__arrow-right',
      prevEl: '.slider__arrow-left',
    }
    
  });
}

//accordeon

const accordeon = document.querySelector('.facts__items'),
      tab = document.querySelectorAll('.facts__item'),
      answer = document.querySelectorAll('.facts__answer'),
      arrow = document.querySelectorAll('.facts__img');
      dash = document.querySelectorAll('.facts__question-img');

  accordeon.addEventListener('click', (e) => {
    const target = e.target.closest('.facts__item');

    if (target) {

      tab.forEach((item, i) => {
        if (item === target && !target.classList.contains('facts__question--active')) {
          tab[i].classList.add('facts__question--active');
          answer[i].classList.add('active');
          answer[i].classList.add('facts__answer--active');
          dash[i].style.display = 'none';
          arrow[i].style.transform = 'rotate(180deg)';
        } else {
          tab[i].classList.remove('facts__question--active');
          answer[i].classList.remove('active');
          answer[i].classList.remove('facts__answer--active');
          dash[i].style.display = 'block';
          arrow[i].style.transform = 'rotate(0deg)';
        }

      });
    }
  });

//happen-tabs

  const questions = document.querySelector('.happen__question'),
        questionCart = document.querySelectorAll('.happen__item'),
        answerCart = document.querySelectorAll('.happen__answer');

        questions.addEventListener('click', (e) => {
          const questionCarts = e.target.closest('.happen__item');

          if (questionCarts) {

            questionCart.forEach((item, i) => {

              if (item === questionCarts) {
                questionCart[i].classList.add('happen__item--active');
                answerCart[i].classList.add('happen__answer--active');
              } else {
                questionCart[i].classList.remove('happen__item--active');
                answerCart[i].classList.remove('happen__answer--active');
              }
            });
          }
        });

//maps

  let flag = 0;

  window.addEventListener('scroll', function () {
    let scrollY = window.scrollY;
    let mapOffset = document.querySelector('.map').offsetTop;

    if ((scrollY >= mapOffset - 500) && (flag == 0)) {
        let center = [55.72969548582525,37.58683753311406];
        
        function init() {
        let map = new ymaps.Map('map-element', {
        center: center,
        zoom: 15
        });

        map.controls.remove('geolocationControl'); // удаляем геолокацию
        map.controls.remove('searchControl'); // удаляем поиск
        map.controls.remove('trafficControl'); // удаляем контроль трафика
        map.controls.remove('typeSelector'); // удаляем тип
        map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
        map.controls.remove('zoomControl'); // удаляем контрол зуммирования
        map.controls.remove('rulerControl'); // удаляем контрол правил
        map.behaviors.disable(['scrollZoom']); // отключаем скролл карты
      }

      const yaScript = document.createElement('script');
    
        yaScript.type = 'text/javascript';
        yaScript.src = "https://api-maps.yandex.ru/2.1/?apikey=76e41e6b-f3a9-4a9c-80d3-17839d5764b8&lang=ru_RU";
        document.body.appendChild(yaScript);

        yaScript.addEventListener("load", () => {
          ymaps.ready(init);
        });


        flag = 1;
    }
  });

  //iform send

const form = document.querySelector('.form__elements');

const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);

const validation = new JustValidate('.form__elements');

validation
  .addField('#name', [{
    rule: 'minLength',
    value: 2,
    errorMessage: 'Колл-во символов меньше 2!'
  },
  {
    rule: 'maxLength',
    value: 30,
    errorMessage: 'Кол-во символов больше 30!'
  },
  {
    rule: 'required',
    value: true,
    errorMessage: 'Введите имя!'
  }
  ])
  .addField('#telephone', [{
    rule: 'required',
    value: true,
    errorMessage: 'Введите номер телефона!'
  },
  {
    rule: 'function',
    validator: function () {
      const phone = telSelector.inputmask.unmaskedvalue();
      return phone.length === 10;
    },
    errorMessage: 'Введите корректный номер телефона!'
  }
  ]).onSuccess((e) => {
      const sendForm = (data) => {
        return fetch('mail.php', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        }).then(res => res.json());
      };

      const dataForm = new FormData(e.target);
      const user = {};

        dataForm.forEach((val, key) => {
          user[key] = val;
        });

        sendForm(user).then(data => {
          document.location.replace('https://www.slava-chirkov.ru/insurance-company/thank-you.html');
          //alert("Спасибо. Ваше письмо отправлено!")
          //console.log("Письмо отправлено");
        });

        e.target.reset();
    });

  //download-file

    /*const download = document.querySelectorAll(".download");

      download.forEach((item, i) => {
        item.addEventListener('click', request);

        function request() {
          window.location = 'original-img/pdf/pdf.pdf';
        }
      });*/
});