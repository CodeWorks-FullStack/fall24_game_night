import { AppState } from "@/AppState.js"
import { Player } from "@/models/Player.js"

// REVIEW not much has changed here!
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