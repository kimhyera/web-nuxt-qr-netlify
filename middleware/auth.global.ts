// 뒤로가기 클릭 시 초기 페이지인 gateway로의 접근을 막는다
export default defineNuxtRouteMiddleware((to, from) => {
    // console.log("뒤로가기")

    if (to.name === 'gateway' && from.name !== 'gateway') {
        console.log('뒤로 가기 불가');
        // todo: 상단(앱)에 특정 함수 호출하줘야한다
        return abortNavigation();
    }
    // if (to.params.id === '1') {
    //     return abortNavigation()
    // }
    // if (to.path !== '/') {
    //     return navigateTo('/')
    // }
})
