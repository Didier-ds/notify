import {createApp} from "vue";
const globalConfig = {}
let target = document.body
export function createChildApp (appCfg, parentApp) {
    const app = createApp(appCfg)

    app.config.globalProperties = parentApp.config.globalProperties

    const { reload, ...appContext } = parentApp._context
    Object.assign(app._context, appContext)
    const el = createGlobalNode('q-notify')
    return app
}

function createGlobalNode (id) {
    const el = document.createElement('div')

    if (id !== void 0) {
        el.id = id
    }
/*
    if (globalConfig.globalNodes !== void 0) {
        const cls = globalConfig.globalNodes.class
        if (cls !== void 0) {
            el.className = cls
        }
    }
*/

    target.appendChild(el)
    return el
}