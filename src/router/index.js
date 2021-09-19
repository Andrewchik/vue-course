import VueRouter from 'vue-router'


import MainPage from '../pages/MainPage'
import AllFilmsPage from '../components/AllFilmsPage'
import NotFound from '../pages/404'
import FilmPage from '../components/FilmPage'
import FilmsLayout from '../pages/FilmsLayout'


export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: MainPage
        },
        {
            path: '/films',
            component: FilmsLayout,
            children: [
                {
                    path: '',
                    component: AllFilmsPage
                },
                {
                    path: ':id',
                    name: 'FilmPage',
                    component: FilmPage
                }
            ]
        },
        
        {
            path: '*',
            component: NotFound
        }
    ]
  })
