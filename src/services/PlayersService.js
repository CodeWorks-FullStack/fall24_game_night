class PlayersService {
  increaseScore(player) {
    player.score++
  }
}

export const playersService = new PlayersService()