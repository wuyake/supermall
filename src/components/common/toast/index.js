import Toast from './toast.vue'
const to = {}
to.install= function(vue){
    const plugin = vue.extend(Toast)
    const toast = new plugin()
    toast.$mount(document.createElement('div'))
    document.body.appendChild(toast.$el)
    vue.prototype.$toast = toast

}
export default to