export const fetchStoreInfo = async () => {
    const common = commonStore();
    const runtimeConfig = useRuntimeConfig()

    try {
        const {data, error} = await useAsyncData('storeInfo', () =>
            $fetch(`${runtimeConfig.public.VITE_API_URL}/v1/store/info`, {
                headers: {
                    authkey: runtimeConfig.public.VITE_AUTH_KEY,
                },
                method: 'post',
                body: {
                    reqToken: common.getToken(),
                },
            })
        );

        if (data.value) return data.value;

    } catch (error) {
        console.log(`storeInfo error`, error);
        throw error;
    }
}


export const fetchStoreMenu = async () => {
    const common = commonStore();
    const runtimeConfig = useRuntimeConfig()

    try {
        const {data, error} = await useAsyncData('storeMenuList', () =>
            $fetch(`${runtimeConfig.public.VITE_API_URL}/v1/store/menu/list`, {
                headers: {
                    authkey: runtimeConfig.public.VITE_AUTH_KEY,
                },
                method: 'post',
                body: {
                    reqToken: common.getToken(),
                    ordTypeCd: '1001',
                },
            })
        );

        if (data.value) return data.value;

    } catch (error) {
        console.log(`storeMenuList error`, error);
        throw error;
    }
}
