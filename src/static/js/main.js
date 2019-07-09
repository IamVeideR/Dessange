(function (){
let currentPage = document.getElementsByTagName('body')[0].className;

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

$(".slider__slides").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 800,
});

if(screen.width > 768){
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
}

if(currentPage =='main') {
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
    
    // const changeScale = () => {
    //     let slide = document.getElementsByClassName('products__list').getElementsByClassName('slick-slide');
    //     let nav = document.getElementsByClassName('products__nav');
    //     let current = document.getElementsByClassName('products__current');
        
    //     if(slide.length >= 10) {
    //         all.innerHTML = image.length;
    //     } else {
    //         all.innerHTML = "0"+image.length;  
    //     }    
    //     for(let i = 0; i<slide.length; i++) {

    //         function workOnClassAdd() {
    //             if(i >= 9) {
    //                 current.innerHTML = i+1;
    //             } else {
    //                 current.innerHTML = `0${i+1}`;  
    //             } 
    //             scale.style.width = `${Math.ceil(100/image.length*(i+1))}%`;
    //         }
    //         let classWatcher = new ClassWatcher(slide[i], 'slick-active', workOnClassAdd)
    //     }
    //     };
    // changeScale();
}

// $(".products__slider").slick({
//     slidesToShow: 4,
//     slidesToScroll: 2,
//     asNavFor: '.products__pages'
// });
// $('.products__pages').slick({
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     asNavFor: '.products__slider',
//     arrows: true,
//     centerMode: true,
//     focusOnSelect: true
// });
})();




