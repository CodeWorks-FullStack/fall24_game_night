import { reactive } from 'vue'
import { Player } from './models/Player.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  players: [
    new Player({ name: 'Dude', imgUrl: 'https://images.unsplash.com/photo-1707765643599-8c60886bf52b?q=80&w=2265&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }),
    new Player({ name: 'Mick', imgUrl: 'https://images.unsplash.com/photo-1552656504-5fd2ed591222?q=80&w=2254&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }),
    new Player({ name: 'Jake', imgUrl: 'https://images.unsplash.com/photo-1472785316312-26b92b2fccdd?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' })
  ]
})

