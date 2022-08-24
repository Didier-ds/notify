import NotificationsContainer from '../components/NotificationsContainer.vue'
import Notification from '../components/Notification.vue'
import {createApp, h, ref} from "vue";
let target = document.body
const positionList = [
    'top-0 left-0', 'top-0 right-0',
    'bottom-0 left-0', 'bottom-0 right-0'
]

const notifTypes = {
    positive: {
        icon: $q => $q.iconSet.type.positive,
        color: 'positive'
    },

    negative: {
        icon: $q => $q.iconSet.type.negative,
        color: 'negative'
    },

    warning: {
        icon: $q => $q.iconSet.type.warning,
        color: 'warning',
        textColor: 'dark'
    },

    info: {
        icon: $q => $q.iconSet.type.info,
        color: 'info'
    },

    ongoing: {
        group: false,
        timeout: 0,
        spinner: true,
        color: 'grey-8'
    }
}

let notificationList = ref([])


export default {
    notify: (config) => {
        notificationList.value.push(config)
    },
    install: () => {
        console.log('Installing the CommentsOverlay plugin!')
        const el = createGlobalNode('q-notify')
        // @ts-ignore
        const vNode = h(NotificationsContainer, {positionList, notificationList:notificationList.value})
        console.log(Notification)
        createApp(vNode).mount(el)
    }
}

function createGlobalNode (id: string) {
    const el = document.createElement('div')
    if (id !== void 0) {
        el.id = id
    }
    target.appendChild(el)
    return el
}