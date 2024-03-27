import {ref} from "vue";

export function usePopup() {

    const isDeliveryTip = ref(false);
    const isBusinessTime = ref(false);

    const showDeliveryTip = () => {
        isDeliveryTip.value = true;
        const app = document.querySelector('#__nuxt');
        app?.classList.add('modal-open-overflow');
    };

    const hideDeliveryTip = () => {
        isDeliveryTip.value = false;
        const app = document.querySelector('#__nuxt');
        app?.classList.remove('modal-open-overflow');
    };

    const showBusinessTime = () => {
        isBusinessTime.value = true;
        const app = document.querySelector('#__nuxt');
        app?.classList.add('modal-open-overflow');
    };

    const hideBusinessTime = () => {
        isBusinessTime.value = false;
        const app = document.querySelector('#__nuxt');
        app?.classList.remove('modal-open-overflow');
    };

    return {
        isDeliveryTip,
        isBusinessTime,
        showDeliveryTip,
        hideDeliveryTip,
        showBusinessTime,
        hideBusinessTime,
    }
}
