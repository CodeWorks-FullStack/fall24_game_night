import { AppState } from "@/AppState.js"
import { Player } from "@/models/Player.js"

class PlayersService {
  createPlayer(playerData) {
    const players = AppState.players
    const player = new Player(playerData)
    players.push(player)
  }
  decreaseScore(player) {
    if (player.score < 1) {
      return
    }
    player.score--
  }
  increaseScore(player) {
    player.score++
  }
}

export const playersService = new PlayersService()