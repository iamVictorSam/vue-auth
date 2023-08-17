import { createApp } from 'vue'
import { OktaAuth } from '@okta/okta-auth-js'
import OktaVue from '@okta/okta-vue'
import App from './App.vue'
import router from './router'


const oktaAuth = new OktaAuth({
  clientId: '0oa5uopvzs8AgxjfI5d7',
  issuer: 'https://dev-23240032.okta.com/oauth2/default',
  redirectUri: `${window.location.origin}/login/callback`,
  scopes: ['openid', 'profile', 'email']
})




createApp(App)
  .use(router)
  .use(OktaVue, { oktaAuth })
  .mount('#app')
