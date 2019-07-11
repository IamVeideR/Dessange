(function (){
let currentPage = document.getElementsByTagName('body')[0].className;
let headerDesktop = document.getElementsByClassName('header__block')[0];
let headerDropdown = document.getElementsByClassName('header__dropdown')[0];
let headerMobile = document.getElementsByClassName('header__mobile')[0];
let headerLogo = document.getElementsByClassName('header__logo')[0];

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

$(".slider__slides").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 800,
});


if(window.screen.width > 765){
    window.onscroll = () => {
        if(window.pageYOffset > 0) {
            headerDesktop.style.height = '70px';
        } else {
            headerDesktop.style.height = '110px';
        }
    }
    
    $(".products__list").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1200,
        arrows: false,
        asNavFor: '.products__navigation',
    });

    $(".products__navigation").slick({
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.products__list',
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

    $(".portfolio__content").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        fade: true,
        arrows: false,
        draggable: false,
        swipe: false,
    });
}

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
                category[i].style.borderBottom = 'none';
                block[i].style.height = '0';
                block[i].style.marginTop = '0';
            } else {
                for (let j = 0; j < dropdown.length; j++) {
                    category[j].style.borderBottom = 'none';
                    block[j].style.height = '0';
                    block[j].style.marginTop = '0';
                }
                window.scrollTo(0,178 + i*61);
                category[i].style.borderBottom = '1px solid #7b7b7b';
                block[i].style.height = 'initial';
                block[i].style.marginTop = '25px';
            }
        }
    }
}
})();




