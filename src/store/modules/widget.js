import { ADD_WIDGET, REMOVE_WIDGET, LOAD_WIDGET, DELETE_WIDGET } from '../../actions/widget';
import api from '../../utils/api';

const state =   { 
                    all:[] || '',
                    widget: {
                        title: '',
                        url: '',
                        hotspot: [],
                    },
                }

const getters = {
    allWidgets: state => state.all
}

const API =  "http://192.168.0.16:3000/";
const actions = {
    getAllWidgets({ commit }){
        api.getWidgets( widgets => {
            commit(LOAD_WIDGET, widgets)
        })
    },
    addWidgetToList({ commit, dispatch}, widget){
        return new Promise((resolve, reject) => {
            axios({url: API + "widgets", data: widget, method: 'POST' })
            .then(res => {
                commit(ADD_WIDGET, res)
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
        })
    }
}

const mutations = {
    LOAD_WIDGET: (state, widgets) => { state.all = widgets },
    ADD_WIDGET: (state, widget) => { state.all.push(widget) }
}
export default {
    state,
    getters,
    actions,
    mutations
}
