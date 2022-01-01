import ResizableInput from "./ResizableInput.vue";

function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component("v-resizable-input", ResizableInput)
}

const plugin = {
    install
}

let GlobalVue = null

if (typeof window !== "undefined") {
    GlobalVue = window.vue
} else if (typeof global !== "undefined") {
    GlobalVue = global.Vue
}

if (GlobalVue){
    GlobalVue.use(plugin)
}

ResizableInput.install = install

export default ResizableInput