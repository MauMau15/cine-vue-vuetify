import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  theme: {
    primary: '#5568f1',
    secondary: '#e4e4e4',
    accent: '#f8f8f8',
    error: '#',
    info: '#c0c3c8',
    success: '#81f1b2',
    warning: '#00cece'
  },
  options: {
    customProperties: true
  },
  iconfont: 'md',
})
