import NotificationsContainer from '../components/NotificationsContainer.vue'
import Notification from '../components/Notification.vue'
import {createApp, h, reactive, ref} from "vue";
let target = document.body
const positionList = [
    'top-left', 'top-right',
    'bottom-left', 'bottom-right'
]
let uid = 0
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

let notificationList = {}
const isObject = (v: any) => {
    return v !== null && typeof v === 'object' && Array.isArray(v) !== true
}

/*
* config = {
* type,
*   message,
* position,
* }
* */

export default {
    notify: (config) => {
        // if(isObje)
        console.log(config)
        Object.assign(config, {uid})
        // @ts-ignore
        notificationList[config.position].value.push(config);
        // notificationList.push(config)
        uid++
    },
    install: () => {
        console.log('Installing the CommentsOverlay plugin!')
        const el = createGlobalNode('q-notify')
        // @ts-ignore
        const vNode = h(NotificationsContainer, {positionList, notificationList})
        positionList.forEach(pos => {
            // @ts-ignore
            notificationList[pos] = ref([])
        })
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