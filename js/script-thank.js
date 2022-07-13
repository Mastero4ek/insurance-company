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
        headerMobile.classList.toggle('active');
        body.classList.toggle('noscroll');
        });

});