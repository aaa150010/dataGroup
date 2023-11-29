import { defineStore } from 'pinia'
export const useStore = defineStore('count', {
    state: () => {
        return {
            // 侧边宽度
            asideWidth: "250px",
        }
    },
    actions: {
        handleAsideMenu() {
            this.asideWidth = this.asideWidth == "250px" ? "64px" : "250px"
        },
    },
    getters:{
    },
})