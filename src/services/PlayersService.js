class PlayersService {
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