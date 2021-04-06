import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    packages: null,
    package: null
  },
  getters: {
    getPackages: s => s.packages,
    getPackage: s => s.package
  },
  mutations: {
    setPackages(state, list) {
      state.packages = list
    },
    setPackage(state, item) {
      state.package = item
    },
    dropPackage(state) {
      state.package = null
    }
  },
  actions: {
    async fetchMostPopularPackages({commit}) {
      try {
        const res = await Vue.axios.get('https://data.jsdelivr.com/v1/stats/packages')
        const packages = res.data.filter(p => p.type === 'npm');
        commit('setPackages', packages)
      } catch (error) {
        Vue.$toast.error('Ошибка! Не удалось получить список пакетов!');
      }
    },
    async fetchSomePackage({ commit }, packageObj) {
      try {
        const versionRes = await Vue.axios.get(`https://data.jsdelivr.com/v1/package/npm/${packageObj.name}`)
        const latestVersion = versionRes.data.tags.latest;
        const statsRes = await Vue.axios.get(`https://data.jsdelivr.com/v1/package/npm/${packageObj.name}@${latestVersion}/stats`)
        const filesRes = await Vue.axios.get(`https://data.jsdelivr.com/v1/package/npm/${packageObj.name}@${latestVersion}`)

        const pack = {
          hits: packageObj.hits,
          name: packageObj.name,
          type: packageObj.type,
          tags: versionRes.data.tags,
          versions: versionRes.data.versions,
          files: filesRes.data.files,
          defaultFile: filesRes.data.default,
          stats: {
            total: statsRes.data.total
          }
        }

        commit('setPackage', pack)
      } catch (error) {
        console.log(error);
        Vue.$toast.error('Ошибка! Не удалось получить данные о пакете! Попробуйте еще раз!');
      }
    }
  }
})

export default store;