var photo_data = [{
    url: 'https://i.imgur.com/Izcd991.png'
}, {
    url: 'https://i.imgur.com/69OSmOS.jpg'
}, {
    url: 'https://i.imgur.com/xS2oQlB.png'
}, {
    url: 'https://i.imgur.com/NE1XP2V.png'
}]

var vm_photo = new Vue({
    el: '#media_photo',
    data: {
        photos: photo_data
    }
})

var event_data = [{
    url: '',
    img: 'https://i.imgur.com/Izcd991.png',
    eventTitle: '週日敬拜',
    eventConent: '這是文字這是文字這是文字這是文字這是文字這是文字<br>這是文字這是文字這是文字這是文字這是文字這是文字。<br>這是文字這是文字這是文字這是文字這是文字這是文字這是文字這是文字。',
    eventTime: '每週日13:30',
    eventLocation: '大學路80號'
}, {
    url: '',
    img: 'https://i.imgur.com/69OSmOS.jpg',
    eventTitle: '咖啡青。旅行',
    eventConent: '這是文字這是文字這是文字這是文字這是文字這是文字<br>這是文字這是文字這是文字這是文字這是文字這是文字。<br>這是文字這是文字這是文字這是文字這是文字這是文字這是文字這是文字。',
    eventTime: '這個時間',
    eventLocation: '這個地點',
    signUp: '點我報名'
}, {
    url: '',
    img: 'https://i.imgur.com/xS2oQlB.png',
    eventTitle: '迎新晚會',
    eventConent: '這是文字這是文字這是文字這是文字這是文字這是文字<br>這是文字這是文字這是文字這是文字這是文字這是文字。<br>這是文字這是文字這是文字這是文字這是文字這是文字這是文字這是文字。',
    eventTime: '那個時間',
    eventLocation: '那個地點',
    signUp: '點我報名'
}, {
    url: '',
    img: 'https://i.imgur.com/NE1XP2V.png',
    eventTitle: '跨越！多益860',
    eventConent: '這是文字這是文字這是文字這是文字這是文字這是文字<br>這是文字這是文字這是文字這是文字這是文字這是文字<br>這是文字這是文字這是文字這是文字這是文字這是文字。',
    eventTime: '幾點幾點',
    eventLocation: '這裡這裡',
    signUp: '點我報名'
}, {
    url: '',
    img: 'https://i.imgur.com/Izcd991.png',
    eventTitle: '週日敬拜',
    eventConent: '這是文字這是文字這是文字這是文字這是文字這是文字<br>這是文字這是文字這是文字這是文字這是文字這是文字。<br>這是文字這是文字這是文字這是文字這是文字這是文字這是文字這是文字。',
    eventTime: '每週日13:30',
    eventLocation: '大學路80號'
}, {
    url: '',
    img: 'https://i.imgur.com/69OSmOS.jpg',
    eventTitle: '咖啡青。旅行',
    eventConent: '這是文字這是文字這是文字這是文字這是文字這是文字<br>這是文字這是文字這是文字這是文字這是文字這是文字。<br>這是文字這是文字這是文字這是文字這是文字這是文字這是文字這是文字。',
    eventTime: '這個時間',
    eventLocation: '這個地點',
    signUp: '點我報名'
}, {
    url: '',
    img: 'https://i.imgur.com/xS2oQlB.png',
    eventTitle: '迎新晚會',
    eventConent: '這是文字這是文字這是文字這是文字這是文字這是文字<br>這是文字這是文字這是文字這是文字這是文字這是文字。<br>這是文字這是文字這是文字這是文字這是文字這是文字這是文字這是文字。',
    eventTime: '那個時間',
    eventLocation: '那個地點',
    signUp: '點我報名'
}, {
    url: '',
    img: 'https://i.imgur.com/NE1XP2V.png',
    eventTitle: '跨越！多益860',
    eventConent: '這是文字這是文字這是文字這是文字這是文字這是文字<br>這是文字這是文字這是文字這是文字這是文字這是文字<br>這是文字這是文字這是文字這是文字這是文字這是文字。',
    eventTime: '幾點幾點',
    eventLocation: '這裡這裡',
    signUp: '點我報名'
}]

var vm_events = new Vue({
    el: '#event',
    data: {
        events: event_data
    }
})
var mySwiper = new Swiper(".swiper-container", {
    autoplay: {
        delay: 1000,
    },
    loop: true,
    autoplayDisableOnInteraction: false,
    pagination: {
        el: '.swiper-pagination',
    },
    paginationClickable: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    // Default parameters
    spaceBetween: 40,
    // Responsive breakpoints
    breakpoints: {
        // when window width is <= 320px
        320: {
            slidesPerView: 1,
            spaceBetweenSlides: 0
        },
        // when window width is <= 480px
        480: {
            slidesPerView: 1.5,
            spaceBetweenSlides: 0
        },
        // when window width is <= 640px
        640: {
            slidesPerView: 2,
            spaceBetweenSlides: 0
        }
    },
    centeredSlides: true,
    onAutoplayStop: function(swiper) {
        if (!swiper.support.transitions) { //IE7、IE8
            swiper.startAutoplay()
        }
    }

})