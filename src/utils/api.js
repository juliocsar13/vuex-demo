import axios from 'axios';

const _widgets = [
    { title: 'Todo A', url: 'http://3khydo49kwpm1lldag1rnzh1.wpengine.netdna-cdn.com/wp-content/uploads/sites/12/2017/05/anllela-sagra-2.png'},
    { title: 'Todo B', url: 'https://i.pinimg.com/564x/99/0c/3f/990c3f76670850c8b7d024257c0eebe3.jpg'},
    { title: 'Todo C', url: 'http://3khydo49kwpm1lldag1rnzh1.wpengine.netdna-cdn.com/wp-content/uploads/sites/12/2017/05/anllela-sagra-2.png'},
    { title: 'Todo D', url: 'http://3khydo49kwpm1lldag1rnzh1.wpengine.netdna-cdn.com/wp-content/uploads/sites/12/2017/05/anllela-sagra-5.png'}
]
const API =  "http://192.168.0.16:3000/";
export default {
    getWidgets(cb) {
        console.log("A",cb)
        axios({
            method:'GET',
            url:API+'widgets',
            header: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            proxy: {
                host: '192.168.0.16',
                port: 3000
            }
        })
        .then((res) => {
            console.log(res);
            return res.data;
        })
    },
    addWidget(cb,widget) {
        //console.log("ADD_WIDGET",widget+ a+cb)
        axios({
            method: 'POST',
            url: API + 'widgets',
            data:widget

        }).then(res => {
            cb = res.data;
        })
    },
    editWidget(cb) {

    },
    deleteWidget(cb) {

    },
    buyProducts (products, cb, errorCb) {
    setTimeout(() => {
        ( Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1 )
            ? cb()
            : errorCb()
        }, 100)
    }
}