import Vue from 'vue'
import Router from 'vue-router'
import All from '../component/All'
import Links from '../component/Links'
import LinkDetail from '../component/LinkDetail'
import Texts from '../component/Texts'
import TextDetail from '../component/TextDetail'
import Images from '../component/Images'
import ImageDetail from '../component/ImageDetail'
import Videos from '../component/Videos'
import VideoDetail from '../component/VideoDetail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: {
      name: 'all'
    }
  }, {
    path: '/all',
    name: 'all',
    component: All
  }, {
    path: '/links',
    name: 'links',
    component: Links
  }, {
    path: '/links/:id',
    name: 'link',
    component: LinkDetail
  }, {
    path: '/texts',
    name: 'texts',
    component: Texts
  }, {
    path: '/texts/:id',
    name: 'text',
    component: TextDetail
  }, {
    path: '/images',
    name: 'images',
    component: Images
  }, {
    path: '/images/:id',
    name: 'image',
    component: ImageDetail
  }, {
    path: '/videos',
    name: 'videos',
    component: Videos
  }, {
    path: '/videos/:id',
    name: 'video',
    component: VideoDetail
  }]
})
