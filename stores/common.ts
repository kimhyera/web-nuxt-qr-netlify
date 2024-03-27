import {defineStore} from "pinia";
export const commonStore = defineStore(
    'common',
    () => {
        // useApi modules
        const api = useApi()
        const runtimeConfig = useRuntimeConfig();

        const token = ref<any>(null);
        const accessToken = ref<any>(null);
        const info = ref<any>(null);
        // const themeName = ref<any>(null)

        const cookieToken = useCookie('token');
        const cookieTheme = useCookie('theme');

        const themes = [
            {
                code: "1001",
                name: "mannashop",
            },
            {
                code: "1069",
                name: "pickorder",
            },
        ];
        // todo: qr(신규생성), 픽오더, 프랜차이즈

        function makeToken(str: string) {
            str = str.replace(/\s/g, '+');
            if (encodeURIComponent(decodeURIComponent(str)) === str) {
                str = decodeURIComponent(str);
            }
            return str;
        }

        function setToken(data: string) {
            token.value = data
            cookieToken.value = data
        }

        function saveThemeCode(data: any) {
            // console.log('data = ', data);
            // console.log('data.ordPathCd = ', data.ordPathCd);
            // console.log('data = ', JSON.parse(JSON.stringify(data)));
            console.log('themes = ', themes);

            const ordPathCd = data.ordPathCd;
            console.log('ordPathCd = //',  ordPathCd + '//');


            const res = themes.find(row => row.code === ordPathCd.trim());
            console.log('res = ', res);

            cookieTheme.value = JSON.stringify(res);
        }

        function getToken() {
            return cookieToken.value;
        }

        function getTheme() {
            return cookieTheme.value || themes[0];
        }

        async function save(str) {
            setToken(makeToken(str));
            await fetchToken2Data();
            // saveThemeCode();
        }


        async function fetchToken2Data() {

            console.log(12, `${runtimeConfig.public.VITE_API_URL}/user/reqInfo`)

            const {data, error} = await useAsyncData('reqInfo', () =>
                $fetch(`${runtimeConfig.public.VITE_API_URL}/user/reqInfo`, {
                    headers: {
                        Authorization: runtimeConfig.public.VITE_AUTH_KEY,
                    },
                    method: 'post',
                    body: {
                        reqToken: cookieToken.value,
                    },
                })
            );

            const res: any = data.value;

            if (data.value) {
                console.log('data.value = ', data.value)
                if (res.resCode == '0000' && res.data !== null) {
                    info.value = res.data[0];
                    console.log('res.data[0]=', res.data[0].ordPathCd);
                    saveThemeCode(res.data[0]);
                }
            } else {
                console.log('common 스토어 ', error);
            }
        }

        function getInfoData() {
            if (info.value === null) return

            const infoData: any = {
                appType: info.value.appType ?? '',
                ordPathCd: info.value.ordPathCd ?? '',
                stCode: info.value.stCode ?? '',
                onlineShopType: info.value.onlineShopType ?? '',
                cuNo: info.value.cuNo ?? '',
                userId: info.value.userId ?? '',
                cuTel: info.value.cuTel ?? '',
                paramType: info.value.paramType ?? '',
                paramValue: info.value.paramValue ?? '',
                lastPwdModDate: info.value.lastPwdModDate ?? '',
            }

            return infoData
        }

        return {
            token,
            accessToken,
            info,
            getTheme,
            makeToken,
            setToken,
            save,
            getToken,
            fetchToken2Data,
            getInfoData,
        }
    },
    {
        persist: {
            storage: persistedState.sessionStorage,
        },
    }
)
