import Vue from 'vue'
import Vuex from 'vuex'

import housesData from '/src/profiles/profiles.json'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        houses: []
    },
    actions: {
        async bootSmartHouseData(context) {
            const smartHouseDataLS = localStorage.getItem('smartHouseData')
            if (!smartHouseDataLS) {
                localStorage.setItem('smartHouseData', JSON.stringify(housesData))
            }
            context.commit('setHousesData', JSON.parse(localStorage.getItem('smartHouseData')))
        },
        saveHousesData(context) {
            localStorage.setItem('smartHouseData', JSON.stringify(context.state.houses))
        }
    },
    mutations: {
        setHousesData(state, housesData) {
            state.houses = housesData
        },
        addDevice(state, {houseId, newDevice}) {
            const house = state.houses.find(house => house.id === +houseId)
            house.devices.push(newDevice)
        },
        removeDevice(state, {houseId, deviceToRemove}) {
            let house = state.houses.find(house => house.id === +houseId)
            house.devices = house.devices.filter(device => device !== deviceToRemove)
        }
    },
    getters: {
        housesIdNavLinks(state) {
            return state.houses.map(house => ({id: house.id, name: house.name}))
        },
        house: (state) => (houseId) => {
            return state.houses.find(house => house.id === +houseId)
        },
        allHouses(state){
            return state.houses
        }
    },
    modules: {}
})
