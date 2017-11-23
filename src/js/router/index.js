import Vue from 'vue'
import Router from 'vue-router'
import All from '../component/All'
import Links from '../component/Links'
import LinkUpdate from '../component/LinkUpdate'
import LinkDetail from '../component/LinkDetail'
import Texts from '../component/Texts'
import TextUpdate from '../component/TextUpdate'
import TextDetail from '../component/TextDetail'
import Images from '../component/Images'
import ImageUpdate from '../component/ImageUpdate'
import ImageDetail from '../component/ImageDetail'
import Videos from '../component/Videos'
import VideoUpdate from '../component/VideoUpdate'
import VideoDetail from '../component/VideoDetail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: {
      // name: 'all'
      name: 'links'
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
    path: '/update/links/:id',
    name: 'updateLink',
    component: LinkUpdate
  }, {
    path: '/links/:id',
    name: 'link',
    component: LinkDetail
  }, {
    path: '/texts',
    name: 'texts',
    component: Texts
  }, {
    path: '/update/texts/:id',
    name: 'updateText',
    component: TextUpdate
  }, {
    path: '/texts/:id',
    name: 'text',
    component: TextDetail
  }, {
    path: '/images',
    name: 'images',
    component: Images
  }, {
    path: '/update/images/:id',
    name: 'updateImage',
    component: ImageUpdate
  }, {
    path: '/images/:id',
    name: 'image',
    component: ImageDetail
  }, {
    path: '/videos',
    name: 'videos',
    component: Videos
  }, {
    path: '/update/videos/:id',
    name: 'updateVideo',
    component: VideoUpdate
  }, {
    path: '/videos/:id',
    name: 'video',
    component: VideoDetail
  }]
})
