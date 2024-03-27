<script setup lang="ts">

// 메뉴리스트
const scrollTop = ref(0);
const thisIdx = ref(0);
const isClicked = ref(false);

const setMenuList = () => {
  const slideItem = document.querySelectorAll('.menu-group-slide li');
  slideItem.forEach((item, index) => {
    if (index === 0) {
      item.classList.add('on');
    }
  });
};

const onScrollTo = (idx: number, event: any) => {
  event.preventDefault();
  isClicked.value = true;

  setTimeout(() => {
    isClicked.value = false;
  }, 500);
  const target = event.currentTarget;
  thisIdx.value = idx;
  const targetA = event.target;
  moveScrollLeft(target, idx);
  moveScrollTop(targetA);
};

const moveScrollTop = (target: any) => {
  const targetHash = target.hash;
  console.log('targetHash',targetHash);

  if (targetHash) {
    const targetLink = document.querySelector(targetHash);
    const elementPosition = targetLink.getBoundingClientRect().top;
    const groupSlide: HTMLUListElement  | null  = document.querySelector('.menu-group-slide');
    if (groupSlide === null) return
    const grpH = groupSlide.getBoundingClientRect().height;
    const offsetPosition = elementPosition + window.pageYOffset - (grpH - 1);
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

const moveScrollLeft = (target: any, idx: number) => {
  const thisLi = target;
  const thiLiW = thisLi.getBoundingClientRect().width;
  const groupSlide : HTMLUListElement  | null  = document.querySelector('.menu-group-slide');
  const groupItem = document.querySelectorAll('.menu-group-list > li');
  const slideItem = document.querySelectorAll('.menu-group-slide li');
  const centerX = window.innerWidth / 2;
  let clickIdx = idx;
  let prevTotalW = 0;
  slideItem.forEach((item, i) => {
    if (i < clickIdx) {
      prevTotalW += item.getBoundingClientRect().width;
    }
  });
  if (centerX > prevTotalW + thiLiW) {
    prevTotalW = 0;
  } else {
    prevTotalW = prevTotalW - centerX + thiLiW / 2;
  }
  if (isClicked.value === true) {
    if (groupSlide === null) return
    groupSlide.scrollTo({
      left: prevTotalW,
    });
  } else {
    if (groupSlide === null) return
    groupSlide.scrollTo({
      left: prevTotalW,
      behavior: 'smooth',
    });
  }
  if (isClicked.value) {
    slideItem.forEach((item, index) => {
      if (thisIdx.value !== index) {
        item.classList.remove('on');
      }
    });
    slideItem[thisIdx.value].classList.add('on');

  }
};

const scrollLoopY = () => {
  const grpItem = document.querySelectorAll('.menu-group-list > li');
  const groupSlide: HTMLElement | null  = document.querySelector('.menu-group-slide');
  if (groupSlide === null)
    return;
  const grpH = groupSlide.getBoundingClientRect().height;
  const spaceTop = grpH;
  const slideItem = document.querySelectorAll('.menu-group-slide li');
  grpItem.forEach((item :any) => {
    const elem = item;
    const elemT = elem.offsetTop - spaceTop;
    const elemH = elem.getBoundingClientRect().height;
    if (isClicked.value)
      return;
    if (scrollTop.value >= elemT && scrollTop.value < elemT + elemH) {

      // 윈도우 스크롤 위치가 현재 컨텐츠 스크롤보다 크거나 같고,
      // 윈도우 스크롤의 위치가 컨텐츠의 끝보다 작을때
      const nodes = [...item.parentElement.children];
      // 스크롤 위치 업데이트
      thisIdx.value = nodes.indexOf(item);
      slideItem[thisIdx.value].classList.add('on');
    } else {
      slideItem.forEach((item, index) => {
        if (thisIdx.value !== index) {
          item.classList.remove('on');
        }
      });
    }
  });
  moveScrollLeft(slideItem[thisIdx.value], thisIdx.value);
};

const scrollFixed = () => {
  const menuList : HTMLElement | null= document.querySelector('.menu-list-section');
  const groupSlide : HTMLElement | null = document.querySelector('.menu-group-slide');
  if (menuList === null)
    return;
  const groupSlideOffsetTop = menuList.getBoundingClientRect().top + window.scrollY;
  if (groupSlide === null)
    return;
  if (scrollTop.value > groupSlideOffsetTop) {
    groupSlide.classList.add('fixed');
  } else {
    groupSlide.classList.remove('fixed');
  }
};

const toggleMenu = (event:any) => {
  let targetH = null;
  let currentTarget = event.currentTarget;
  if (event.tagName === 'BUTTON') {
    let targetButton = event;
    let target = targetButton.nextElementSibling;
    targetButton.parentElement.classList.remove('hidden');
    target.style.height = 'auto';
    return;
  }
  if (currentTarget === null)
    return;
  let target = currentTarget.nextElementSibling;
  if (0 === target.offsetHeight) {
    currentTarget.parentElement.classList.remove('hidden');
    target.style.height = 'auto';
    targetH = target.offsetHeight;
    target.style.height = 0;
    void target.offsetHeight;
    target.style.height = `${targetH}px`;
  } else {
    currentTarget.parentElement.classList.add('hidden');
    target.style.height = 'auto';
    targetH = target.offsetHeight;
    target.style.height = `${targetH}px`;
    void target.offsetHeight;
    target.style.height = 0;
  }
};

onMounted(() => {
  setMenuList();
  window.addEventListener('scroll', () => {
    scrollTop.value = window.scrollY;
    scrollLoopY();
    scrollFixed();
  });
});

</script>

<template>
  <section class="menu-list-section">
    <!-- 스크롤 도달시 클래스 fixed -->
    <ul class="menu-group-slide">

      <li data-id="#grp_best3" @click="onScrollTo(0, $event)">
        <a class="btn-smooth" href="#grp_best3">인기메뉴</a>
      </li>

      <li data-id="#grp_100" @click="onScrollTo(1, $event)">
        <a class="btn-smooth" href="#grp_100">대표메뉴</a>
      </li>

      <li data-id="#grp_101" @click="onScrollTo(2, $event)">
        <a class="btn-smooth" href="#grp_101">신메뉴</a>
      </li>

      <li data-id="#grp_102" @click="onScrollTo(3, $event)">
        <a class="btn-smooth" href="#grp_102">추천메뉴</a>
      </li>

      <li data-id="#grp_103" @click="onScrollTo(4, $event)">
        <a class="btn-smooth" href="#grp_103">콜드부르</a>
      </li>

      <li data-id="#grp_104" @click="onScrollTo(5, $event)">
        <a class="btn-smooth" href="#grp_104">홀케이크</a>
      </li>

      <li data-id="#grp_105" @click="onScrollTo(6, $event)">
        <a class="btn-smooth" href="#grp_105">티</a>
      </li>

    </ul>
    <!-- menu-group-slide fixed 여백 조정 -->
    <div class="menu-group-slide-fixed-fake-area"></div>

    <!-- 메뉴 리스트  -->
    <ul class="menu-group-list">
      <li class="li-best3">
        <!-- 인기메뉴 -->
        <div id="grp_best3" class="best3-menu">
          <p class="grp-title">인기메뉴</p>
          <ul class="best-goods-list">
            <li>
              <router-link to="pb/path" class="btn-link">
                <div class="info-wrap">
                  <span class="name">아이스 디카페인 카페라떼</span>
                  <span class="price"><em>12,000</em>원</span>

                  <div class="sale-value">
                    <span>월 평균 판매량</span>
                    <span> 126개 </span>
                  </div>
                </div>
                <div class="position-relative">
                  <div class="img-wrap col-auto img-ratio-menu-list">
                    <!-- 이미지가 없는경우 디폴트 이미지 노출 -->
                    <img src="@/assets/common/images/default/icon_food_default@2x.png" alt=""/>
                  </div>
                  <i class="icon_best_30"></i>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="pb/path" class="btn-link">
                <div class="info-wrap">
                  <span class="name">블루베리 쿠키 치즈 케이크</span>
                  <span class="price"><em>12,000</em>원</span>

                  <div class="sale-value">
                    <span>월 평균 판매량</span>
                    <span> 100개 </span>
                  </div>
                </div>
                <div class="position-relative">
                  <div class="img-wrap img-ratio-menu-list">
                    <img src="@/assets/common/images/default/img_smaple_03@2x.jpg" alt=""/>
                  </div>
                  <i class="icon_best_30"></i>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
        <!-- 인기메뉴 // -->
      </li>
      <!-- 토글 클래스 hidden -->
      <li id="grp_100" class="">
        <button class="btn-grp-title" @click="toggleMenu">
          대표메뉴 <i class="icon_arrow"></i>
        </button>
        <ul class="goods-list">
          <li>
            <router-link to="pb/path" class="btn-link">
              <div class="info-wrap">
                <div class="badges">
                  <span class="badge">인기</span>
                  <span class="badge">재주문 많음</span>
                </div>
                <span class="name">블루베리 쿠키 치즈 케이크</span>
                <span class="desc">
											고소한 쿠키와 크림치즈를 듬뿍 넣어 만든
											케이크 위에 달콤 상큼한 블루베리가 올라가
											있는 치즈 케이크 메뉴 설명 입력 최대
											두줄입력 두줄까지 입력
										</span>
                <span class="price"> <em>12,000</em>원 </span>
              </div>
              <div class="img-wrap ratio">
                <img src="@/assets/common/images/default/img_smaple_03@2x.jpg" alt=""/>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="pb/path" class="btn-link">
              <div class="info-wrap">
                <span class="name">아이스 디카페인 카페라떼</span>
                <span class="desc">메뉴 설명 입력 최대 두줄입력 두줄까지 입력
										</span>
                <span class="price"> <em>6,000</em>원 </span>
              </div>
              <div class="img-wrap ratio">
                <img src="@/assets/common/images/default/img_smaple_02@2x.jpg" alt=""/>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="pb/path" class="btn-link">
              <div class="info-wrap">
                <div class="badges">
                  <span class="badge">인기</span>
                  <span class="badge">재주문 많음</span>
                </div>
                <span class="name">스페셜 햄 치즈 토스트</span>
                <span class="price"> <em>18,800</em>원 </span>
              </div>
              <div class="img-wrap ratio">
                <img src="@/assets/common/images/default/img_smaple_01@2x.jpg" alt=""/>
              </div>
            </router-link>
          </li>
        </ul>
      </li>
      <li id="grp_101" class="">
        <button class="btn-grp-title" @click="toggleMenu">
          신메뉴<i class="icon_arrow"></i>
        </button>
        <ul class="goods-list">
          <li>
            <router-link to="pb/path" class="btn-link">
              <div class="info-wrap">
                <span class="name">블루베리 쿠키 치즈 케이크</span>
                <span class="desc">
											고소한 쿠키와 크림치즈를 듬뿍 넣어 만든
											케이크 위에 달콤 상큼한 블루베리가 올라가
											있는 치즈 케이크 메뉴 설명 입력 최대
											두줄입력 두줄까지 입력
										</span>
                <span class="price"> <em>12,000</em>원 </span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="pb/path" class="btn-link">
              <div class="info-wrap">
                <span class="name">아이스 디카페인 카페라떼</span>
                <span class="price"> <em>6,000</em>원 </span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="pb/path" class="btn-link">
              <div class="info-wrap">
                <span class="name">스페셜 햄 치즈 토스트</span>
                <span class="price"> <em>18,800</em>원 </span>
              </div>
            </router-link>
          </li>
        </ul>
      </li>

      <li id="grp_102" class="">
        <button class="btn-grp-title" @click="toggleMenu">
          추천메뉴<i class="icon_arrow"></i>
        </button>
        <ul class="goods-list">
          <li>
            <router-link to="pb/path" class="btn-link">
              <div class="info-wrap">
                <span class="name">블루베리 쿠키 치즈 케이크</span>
                <span class="desc">
											고소한 쿠키와 크림치즈를 듬뿍 넣어 만든
											케이크 위에 달콤 상큼한 블루베리가 올라가
											있는 치즈 케이크 메뉴 설명 입력 최대
											두줄입력 두줄까지 입력
										</span>
                <span class="price"> <em>12,000</em>원 </span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="pb/path" class="btn-link">
              <div class="info-wrap">
                <span class="name">아이스 디카페인 카페라떼</span>
                <span class="price"> <em>6,000</em>원 </span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="pb/path" class="btn-link">
              <div class="info-wrap">
                <span class="name">스페셜 햄 치즈 토스트</span>
                <span class="price"> <em>18,800</em>원 </span>
              </div>
            </router-link>
          </li>
        </ul>
      </li>
      <li id="grp_103" class="hidden">
        <button class="btn-grp-title" @click="toggleMenu">
          콜드부르<i class="icon_arrow"></i>
        </button>
        <ul class="goods-list">
          <li>
            <router-link to="pb/path" class="btn-link">
              <div class="info-wrap">
                <span class="name">블루베리 쿠키 치즈 케이크</span>
                <span class="desc">
											고소한 쿠키와 크림치즈를 듬뿍 넣어 만든
											케이크 위에 달콤 상큼한 블루베리가 올라가
											있는 치즈 케이크 메뉴 설명 입력 최대
											두줄입력 두줄까지 입력
										</span>
                <span class="price"> <em>12,000</em>원 </span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="pb/path" class="btn-link">
              <div class="info-wrap">
                <span class="name">아이스 디카페인 카페라떼</span>
                <span class="price"> <em>6,000</em>원 </span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="pb/path" class="btn-link">
              <div class="info-wrap">
                <span class="name">스페셜 햄 치즈 토스트</span>
                <span class="price"> <em>18,800</em>원 </span>
              </div>
            </router-link>
          </li>
        </ul>
      </li>

      <li id="grp_104" class="hidden">
        <button class="btn-grp-title" @click="toggleMenu">
          홀케이크<i class="icon_arrow"></i>
        </button>
        <ul class="goods-list">
          <li>
            <router-link to="pb/path" class="btn-link">
              <div class="info-wrap">
                <span class="name">블루베리 쿠키 치즈 케이크</span>
                <span class="desc">
											고소한 쿠키와 크림치즈를 듬뿍 넣어 만든
											케이크 위에 달콤 상큼한 블루베리가 올라가
											있는 치즈 케이크 메뉴 설명 입력 최대
											두줄입력 두줄까지 입력
										</span>
                <span class="price"> <em>12,000</em>원 </span>
              </div>
            </router-link>
          </li>
        </ul>
      </li>
      <li id="grp_105" class="hidden">
        <button class="btn-grp-title" @click="toggleMenu">
          티<i class="icon_arrow"></i>
        </button>
        <ul class="goods-list">
          <li>
            <router-link to="pb/path" class="btn-link">
              <div class="info-wrap">
                <span class="name">카모마일 티</span>
                <span class="desc"> 숙면에 좋은 티 </span>
                <span class="price"> <em>6,000</em>원 </span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="pb/path" class="btn-link">
              <div class="info-wrap">
                <span class="name">페퍼민트 티</span>
                <span class="price"> <em>6,000</em>원 </span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="pb/path" class="btn-link">
              <div class="info-wrap">
                <span class="name">페퍼민트 티</span>
                <span class="price"> <em>6,000</em>원 </span>
              </div>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
    <!-- 메뉴 리스트 // -->
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/default/scss/components/order/menuList';
</style>
