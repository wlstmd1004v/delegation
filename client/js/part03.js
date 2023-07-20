const data = [
  {
    id: 1,
    src: "visual1.jpg",
    alt: "모던한 테이블과 화분의 조화를 표현한 공간",
  },
  {
    id: 2,
    src: "visual2.jpg",
    alt: "강렬한 의자의 색상과 따뜻한 느낌의 공간",
  },
  {
    id: 3,
    src: "visual3.jpg",
    alt: "호텔 라운지 느낌의 편안한 의자가 있는 공간",
  },
  {
    id: 4,
    src: "visual4.jpg",
    alt: "물방을 모양의 독특한 디자인의 의자들을 나열한 공간",
  },
];

const swiper = new Swiper('.swiper',{
  autoplay: {
    disableOnInteraction: false,
  },
  //autoplay:true,
  loop: true,
  speed:2000,
  parallax:true,
  pagination:{
    el:'.pagination',
    clickable:true,
    bulletClass:'bullet',
    bulletActiveClass:'is-active',
    renderBullet: function(index,className){
      return /* html */`
        <span class="${className}">
          <img src="./assets/part01/${data[index].src}" alt= "" />
        </span>
      `
    }
  }
})

const title = document.querySelector('h3');

swiper.on('slideChange',function(e){
  console.log( e.activeIndex );
  title.classList.remove('is-active');

}).on('slideChangeTransitionEnd',function(e){
  console.log('슬라이드 애니메이션 끝 !');
  title.classList.add('is-active');
})
/* const restartAutoplay = () => {
  swiper.autoplay.start();
};

swiper
  .on("slideChange", function (e) {
    title.classList.remove("is-active");
    clearTimeout(swiper.autoplay.timeout); // 현재 autoplay 타임아웃을 취소
    // 슬라이드가 넘어갈 때 slidechange, title=h3 의 클래스 리스트에서 is-active 를 지워달라.
  })

  .on("slideChangeTransitionEnd", function (e) {
    title.classList.add("is-active");
    setTimeout(restartAutoplay, 3000);
    // 슬라이드가 끝날 때 slideChangeTransitionEnd, title=h3 의 클래스 리스트에서 is-active 를 추가해달라.
  }); */