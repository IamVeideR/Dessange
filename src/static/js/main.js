(function (){
let currentPage = document.getElementsByTagName('body')[0].className;
let headerDesktop = document.getElementsByClassName('header__block')[0];
let headerDropdown = document.getElementsByClassName('header__dropdown')[0];
let headerMobile = document.getElementsByClassName('header__mobile')[0];
let headerLogo = document.getElementsByClassName('header__logo')[0];
let onTheTop = document.getElementsByClassName('up-button')[0];

if(headerLogo){
headerDropdown.onclick = () => {
    if(headerMobile.style.display == 'flex') {
        headerMobile.style.display = 'none'; 
        headerLogo.style.display = 'block'; 
        headerDropdown.style.background = 'url(static/img/dropdown.png) center no-repeat';
    } else {
        headerMobile.style.display = 'flex';
        headerLogo.style.display = 'none'; 
        headerDropdown.style.background = 'url(static/img/cross.png) center no-repeat';
    }
}
window.onscroll = () => {
    if(window.screen.width < 765){
        if(window.pageYOffset > screen.height) {
            onTheTop.style.display = 'block';
        } else {
            onTheTop.style.display = 'none';
        }
    }
}
onTheTop.onclick = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}

$(".slider__slides").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 800,
});

$(".merchandise__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 800,
    asNavFor: '.merchandise__navigation',
});

$(".merchandise__navigation").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.merchandise__slider',
});

$(".works__slide--main").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1200,
    arrows: false,
    responsive: [
        {
          breakpoint: 765,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
});

$(".works__slide--popup").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1200,
    arrows: false,
    responsive: [
        {
          breakpoint: 765,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
});

if(window.screen.width > 765){
    window.onscroll = () => {
        if(window.pageYOffset > 0) {
            headerDesktop.style.height = '70px';
        } else {
            headerDesktop.style.height = '110px';
        }
    }
    
    $(".products-main__list").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1200,
        arrows: false,
        asNavFor: '.products-main__navigation',
    });

    $(".products-main__navigation").slick({
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.products-main__list',
    });

    $(".instagram__list").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1200,
        arrows: false,
        asNavFor: '.instagram__navigation',
    });
    
    $(".instagram__navigation").slick({
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.instagram__list',
    });

    $(".masters__list").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1200,
        arrows: false,
        asNavFor: '.masters__navigation',
    });
    
    $(".masters__navigation").slick({
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.masters__list',
    });
    $(".portfolio__content").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        fade: true,
        arrows: false,
        draggable: false,
        swipe: false,
    });
    
    $(".portfolio__slides--1").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1200,
        arrows: false,
        asNavFor: '.portfolio__navigation--1',
    });

    $(".portfolio__navigation--1").slick({
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.portfolio__slides--1',
    });

    $(".portfolio__slides--2").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1200,
        arrows: false,
        asNavFor: '.portfolio__navigation--2',
    });

    $(".portfolio__navigation--2").slick({
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.portfolio__slides--2',
    });
}

$(".products__pagination").slick({
    centerMode: true,
    centerPadding: '50px',
    slidesToShow: 1,
    slidesToScroll: 1,
});

$(".services__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    fade: true,
    arrows: false,
    draggable: false,
    swipe: false,
});

if(currentPage =='portfolio-page') {
    let category = document.getElementsByClassName('portfolio__category-title');
    let dropdown = document.getElementsByClassName('portfolio__dropdown');
    let block = document.getElementsByClassName('portfolio__category');

    for (let i = 0; i < category.length; i++) {
        category[i].onclick = () => {
            for (let j = 0; j < category.length; j++) {
                category[j].style.borderBottom = '1px solid white';
            }
            category[i].style.borderBottom = '1px solid #616161';
            $('.portfolio__content').slick('slickGoTo', i);
        }
    }
    for (let i = 0; i < dropdown.length; i++) {
        dropdown[i].onclick = () => {
            if(block[i].style.height == 'initial') {
                dropdown[i].style.borderBottom = 'none';
                dropdown[i].classList.remove('portfolio__dropdown--active');
                block[i].style.height = '0';
                block[i].style.marginTop = '0';
            } else {
                for (let j = 0; j < dropdown.length; j++) {
                    dropdown[j].style.borderBottom = 'none';
                    dropdown[j].classList.remove('portfolio__dropdown--active');
                    block[j].style.height = '0';
                    block[j].style.marginTop = '0';
                }
                window.scrollTo({
                    top: 177 + i*61,
                    left: 0,
                    behavior: 'smooth'
                  });
                dropdown[i].style.borderBottom = '1px solid #7b7b7b';
                dropdown[i].classList.add('portfolio__dropdown--active');
                block[i].style.height = 'initial';
                block[i].style.marginTop = '25px';
            }
        }
    }
}
$(function(){
    $(".feedback__phone").mask("+9999999999?9");
  });
if(currentPage =='products-page') {
    let dropdown = document.getElementsByClassName('products__type--title');
    let merchandise = document.getElementsByClassName('products__merchandise');
    let merchClose = document.getElementsByClassName('merchandise__close');
    let merchContainer = document.getElementsByClassName('merchandise__container');
    let product = document.getElementsByClassName('product');
    let merchButton = document.getElementsByClassName('merchandise__button'); 
    let feedback = document.getElementsByClassName('products__feedback')[0];
    let feedbackClose = document.getElementsByClassName('feedback__close')[0];
    let feedbackContainer = document.getElementsByClassName('feedback__container')[0];
    let feedbackButton = document.getElementsByClassName('feedback__button')[0];
    let active = document.getElementsByClassName('active__block');
    let activeClose = document.getElementsByClassName('active__close');
    let more = document.getElementsByClassName('products__more')[0];
    let slide = document.getElementsByClassName('products__list')[0].getElementsByClassName('product');


    if(window.screen.width < 765) {
        slide[0].style.display = 'block';
        for (let i = 0; i < 4; i++) {
            slide[i].style.display = 'block';
    }
        for (let i = 4; i <slide.length; i++) {
            slide[i].style.display = 'none';
        }
    }
    for (let i = 0; i < active.length; i++) {
        activeClose[i].onclick = ()=> {
            active[i].style.display = 'none';
        }
    }
    more.onclick = () => {
        for (let i = slide.length-1; i > 3; i--) {
            if ((slide[i].style.display == 'none') && (slide[i-4].style.display == 'block')) {
                for (let j = i; j > i-4; j--) {
                    slide[j].style.display = 'block';
                }
            }
            if(slide[slide.length-1].style.display == 'block') {
                more.style.display = 'none';
            }
        }
    }
    for (let i = 0; i < product.length; i++) {
        product[i].onclick = () => {
            merchandise[0].style.height = '100vh';
            document.body.classList.add('body--static');
        }
        merchClose[0].onclick = () => {
            merchandise[0].style.height = '0'; 
            document.body.classList.remove('body--static');
        }
        merchContainer[0].onclick = (e) => {
            e.stopPropagation();
        }
        merchandise[0].onclick = () => {
            merchandise[0].style.height = '0';
            document.body.classList.remove('body--static');
        }
        merchButton[0].onclick = () => {
            merchandise[0].style.height = '0'; 
            feedback.style.height = '100vh';
        }
        feedbackClose.onclick = () => {
            feedback.style.height = '0'; 
            document.body.classList.remove('body--static');
        }
        feedbackContainer.onclick = (e) => {
            e.stopPropagation();
        }
        feedback.onclick = () => {
            feedback.style.height = '0';
            document.body.classList.remove('body--static');
        }
    }
    for (let i = 0; i < dropdown.length; i++) {
        let subvariation = document.getElementsByClassName('products__type')[i].getElementsByClassName('products__subvariation');
        let variation = document.getElementsByClassName('products__type')[i].getElementsByClassName('products__variation');
        for (let j = 0; j < subvariation.length; j++) {
            subvariation[j].onclick = () => {
                if(subvariation[j].classList.contains('products__subvariation--active')) {
                    subvariation[j].classList.remove('products__subvariation--active'); 
                } else {
                    subvariation[j].classList.add('products__subvariation--active'); 
                }  
            }        
        } 
        for (let j = 0; j < variation.length; j++) {
            variation[j].onclick = () => {
                if(variation[j].classList.contains('products__variation--active')) {
                    variation[j].classList.remove('products__variation--active'); 
                } else {
                    variation[j].classList.add('products__variation--active'); 
                }  
            }        
        } 
    }
    if(window.screen.width < 765){
        for (let i = 0; i < dropdown.length; i++) {
            let subvariation = document.getElementsByClassName('products__type')[i].getElementsByClassName('products__subvariation');
            let variation = document.getElementsByClassName('products__type')[i].getElementsByClassName('products__variation');

            dropdown[i].onclick = () => {
                if(subvariation[0].style.height == 'initial') {
                    for (let j = 0; j < subvariation.length; j++) {
                        subvariation[j].style.height = '0';
                        subvariation[j].style.display = 'none';
                        document.getElementsByClassName('products__type')[i].classList.remove('products__type--opened');
                        
                    }
                } else {
                    for (let j = 0; j < subvariation.length; j++) {
                        subvariation[j].style.height = 'initial';
                        subvariation[j].style.display = 'block';
                        document.getElementsByClassName('products__type')[i].classList.add('products__type--opened');
                    }
                }
                if(event.target == dropdown[0]) {
                    if(variation[0].style.height == 'initial') {
                        for (let j = 0; j < variation.length; j++) {
                            variation[j].style.height = '0';
                            variation[j].style.display = 'none';
                        }
                    } else {
                        for (let j = 0; j < variation.length; j++) {
                            variation[j].style.height = 'initial';
                            variation[j].style.display = 'list-item';
                        }
                    }
                }
            }
        }
    }
}
if(currentPage =='services-page') {
    let priceTitle = document.getElementsByClassName('pricelist__item--title');
    let prevWork = document.getElementsByClassName('works__prev--main')[0];
    let nextWork = document.getElementsByClassName('works__next--main')[0];
    let prevPopup = document.getElementsByClassName('works__prev--popup')[0];
    let nextPopup = document.getElementsByClassName('works__next--popup')[0];
    let foreman = document.getElementsByClassName('services__foreman');
    let foremanClose = document.getElementsByClassName('foreman__close');
    let foremanContainer = document.getElementsByClassName('foreman__container');
    let foremanButton = document.getElementsByClassName('foreman__button');
    let master = document.getElementsByClassName('master');
    let dropdown = document.getElementsByClassName('services__dropdown')[0];
    let dropdownContainer = document.getElementsByClassName('services__category-drop')[0];
    let category = document.getElementsByClassName('services__category-title');
    let more = document.getElementsByClassName('masters__more')[0];
    let slide = document.getElementsByClassName('masters__list')[0].getElementsByClassName('masters__slide');

    dropdown.onclick = () => {
        if(dropdownContainer.style.height == category.length*47+'px') {
            dropdown.classList.remove('services__dropdown--active');
            dropdownContainer.style.height = '0';
        } else {
            dropdown.classList.add('services__dropdown--active');
            dropdownContainer.style.height = category.length*47+'px';
        }
    }
    if(window.screen.width < 765) {
        slide[0].style.display = 'block';
        for (let i = 1; i <slide.length; i++) {
                slide[i].style.display = 'none';
        }
    }
    more.onclick = () => {
        for (let i = slide.length-1; i > 0; i--) {
            if ((slide[i].style.display == 'none') && (slide[i-1].style.display == 'block')) {
                slide[i].style.display = 'block';
            }
            if(slide[slide.length-1].style.display == 'block') {
                more.style.display = 'none';
            }
        }
    }
    for (let i = 0; i < category.length; i++) {
        category[i].onclick = () => {
            for (let j = 0; j < category.length; j++) {
                category[j].classList.remove('services__category-title--active');
            }
            category[i].classList.add('services__category-title--active');
            $('.services__slider').slick('slickGoTo', i);
            if(window.screen.width < 765) {
                category[i].classList.remove('services__category-title--active');
                dropdown.classList.remove('services__dropdown--active');
                dropdownContainer.style.height = '0';
            }
        }
    }

    for (let i = 0; i < priceTitle.length; i++) {
        let priceItem = document.getElementsByClassName('pricelist__item')[i].getElementsByClassName('item');

        priceTitle[i].onclick = () => {
            if(priceItem[0].style.height == 'initial') {
                for (let j = 0; j < priceItem.length; j++) {
                    priceItem[j].style.height = '0';
                    priceItem[j].style.display = 'none';
                    priceTitle[i].classList.remove('pricelist__item--title--opened');
                    priceTitle[i].style.borderBottom= '1px solid #616161';
                }
            } else {
                for (let j = 0; j < priceItem.length; j++) {
                    priceItem[j].style.height = 'initial';
                    priceItem[j].style.display = 'flex';
                    priceTitle[i].classList.add('pricelist__item--title--opened');
                    priceTitle[i].style.borderBottom= '1px solid #9b9b9b';
                }
            }
        }
    }
    prevWork.onclick = () => {
        $('.works__slide--main').slick('slickPrev');
    }
    nextWork.onclick = () => {
        $('.works__slide--main').slick('slickNext');
    }
    prevPopup.onclick = () => {
        $('.works__slide--popup').slick('slickPrev');
    }
    nextPopup.onclick = () => {
        $('.works__slide--popup').slick('slickNext');
    }

    for (let i = 0; i < master.length; i++) {
        master[i].onclick = () => {
            foreman[0].style.height = '100vh';
            document.body.classList.add('body--static');
        }
        foremanClose[0].onclick = () => {
            foreman[0].style.height = '0'; 
            document.body.classList.remove('body--static');
        }
        foremanContainer[0].onclick = (e) => {
            e.stopPropagation();
        }
        foreman[0].onclick = () => {
            foreman[0].style.height = '0';
            document.body.classList.remove('body--static');
        }
        foremanButton[0].onclick = () => {
            foreman[0].style.height = '0'; 
            document.body.classList.remove('body--static');
        }
    }
}
}
    if(window.screen.width > 765) {
    class ClassWatcher {
        constructor(targetNode, classToWatch, classAddedCallback) {
            this.targetNode = targetNode
            this.classToWatch = classToWatch
            this.classAddedCallback = classAddedCallback
            this.observer = null
            this.lastClassState = targetNode.classList.contains(this.classToWatch)
            this.init()
        }
        init() {
            this.observer = new MutationObserver(this.mutationCallback)
            this.observe()
        }
        observe() {
            this.observer.observe(this.targetNode, { attributes: true })
        }
        disconnect() {
            this.observer.disconnect()
        }
        mutationCallback = mutationsList => {
            for(let mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    let currentClassState = mutation.target.classList.contains(this.classToWatch)
                    if(this.lastClassState !== currentClassState) {
                        this.lastClassState = currentClassState
                        if(currentClassState) {
                            this.classAddedCallback()
                        }
                    }
                }
            }
        }
    }
    if(currentPage =='main-page') {
        const changeScale = () => {
            let current = document.getElementsByClassName('slider__current')[0];
            let all = document.getElementsByClassName('slider__all')[0];
            let scale = document.getElementsByClassName('slider__scale--before')[0];
            let image = document.getElementsByClassName('slider__slides')[0].getElementsByClassName('slick-slide');
            
            if(image.length >= 10) {
                all.innerHTML = image.length;
            } else {
                all.innerHTML = "0"+image.length;  
            }    
            scale.style.width = `${Math.ceil(100/image.length)}%`;
            for(let i = 0; i<image.length; i++) {
                function workOnClassAdd() {
                    if(i >= 9) {
                        current.innerHTML = i+1;
                    } else {
                        current.innerHTML = `0${i+1}`;  
                    } 
                    scale.style.width = `${Math.ceil(100/image.length*(i+1))}%`;
                }
                let classWatcher = new ClassWatcher(image[i], 'slick-active', workOnClassAdd)
            }
        };
        changeScale();
    }
    }
})();