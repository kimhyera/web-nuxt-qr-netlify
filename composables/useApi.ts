export function useApi() {
    const runtimeConfig = useRuntimeConfig()

    async function request(name: string, url: any, params = {}) {
        const headers :any = {
            Authorization: runtimeConfig.public.VITE_AUTH_KEY,
            'Content-Type': 'application/json',
        }

        const cookieToken = useCookie('token');

        const body = {
            reqToken: cookieToken.value,
            ...params,
        }

        const {data, error} = await useAsyncData(name, () =>
            $fetch(url, {
                headers,
                method: 'post',
                body,
            })
        )


        if (data.value) {
            return data.value
        } else {
            console.error('API request error:', name, error)
            return null
        }
    }

    return {
        request,
    }
}
