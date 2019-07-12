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
    
    $(".products-main__list").slick({
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

$(".products__pagination").slick({
    centerMode: true,
    centerPadding: '50px',
    slidesToShow: 1,
    slidesToScroll: 1,
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
                window.scrollTo(0,177 + i*61);
                dropdown[i].style.borderBottom = '1px solid #7b7b7b';
                dropdown[i].classList.add('portfolio__dropdown--active');
                block[i].style.height = 'initial';
                block[i].style.marginTop = '25px';
            }
        }
    }
}

if(currentPage =='products-page') {
    let dropdown = document.getElementsByClassName('products__type--title');
    if(window.screen.width < 765){
        for (let i = 0; i < dropdown.length; i++) {
            let subvariation = document.getElementsByClassName('products__type')[i].getElementsByClassName('products__subvariation');
            let variation = document.getElementsByClassName('products__type')[i].getElementsByClassName('products__variation');

            dropdown[i].onclick = () => {
                if(subvariation[0].style.height == 'initial') {
                    for (let j = 0; j < subvariation.length; j++) {
                        subvariation[j].style.height = '0';
                        subvariation[j].style.display = 'none';
                        
                    }
                } else {
                    for (let j = 0; j < subvariation.length; j++) {
                        subvariation[j].style.height = 'initial';
                        subvariation[j].style.display = 'block';
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
})();


var w = 10;
var n = 4;
var val = [50, 30, 30,40];
var wt = [5, 3, 3,4];

var mat = new Array(n + 1);


for (var i = 0; i < mat.length; i++) {
  mat[i] = new Array(w + 1);
}
for (var r = 0; r < w + 1; r++) {
    mat[0][r] = 0;
}
for (var  c = 0; c < n + 1; c++) {
    mat[c][0] = 0;
}

for (var item = 0; item < n; item++) {
    for (var capacity = 1; capacity <= w; capacity++) {
        var maxValWithoutCurr = mat[item][capacity];
        var maxValWithCurr = 0; 
        var weightOfCurr = wt[item];
        if (capacity >= weightOfCurr) {
            maxValWithCurr = val[item];
            var remainingCapacity = capacity - weightOfCurr;
            maxValWithCurr += mat[item][remainingCapacity];
        }
        mat[item+1][capacity] = Math.max(maxValWithoutCurr, maxValWithCurr);
    }
}

console.log(mat[n][w]);
console.log(mat);




