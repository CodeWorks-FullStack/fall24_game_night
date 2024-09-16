<script setup>
import { computed, ref } from 'vue'
import { AppState } from './AppState.js'
import { playersService } from './services/PlayersService.js';
import PlayerForm from './components/globals/PlayerForm.vue';
// NOTE anything declared in here is referred to as component state

// const score = ref(0)

// NOTE we will use computeds to bring in values from the AppState when dealing with APIs
const players = AppState.players

// NOTE a computed must return a value
const topScore = computed(() => {
  let highestScore = 0
  players.forEach(player => {
    if (player.score > highestScore) {
      highestScore = player.score
    }
  })
  return highestScore
})

function decreaseScore(player) {
  playersService.decreaseScore(player)
}
function increaseScore(player) {
  console.log('increasing score for', player);
  playersService.increaseScore(player)
}
</script>

<template>
  <main>
    <div class="container">
      <section class="row">
        <div class="col-12">
          <div class="text-center">
            <h1>Game Night</h1>
          </div>
        </div>
      </section>
      <section class="row">
        <!-- NOTE generates a col-lg-6 for each player in our players array. Also creates a scoped player variable that is only accessible in the HTML that is being iterated over -->
        <!-- NOTE the key attribute should be a unique value from the items that are being iterated over  -->
        <div v-for="player in players" :key="player.name" class="col-lg-6 mb-3">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex gap-3 align-items-center">
              <!-- v-bind:src="player.imgUrl" is equivalent to :src="player.imgUrl" -->
              <!-- NOTE single colon in front of an attribute allows us to bind javascript values to HTML attributes -->
              <img :src="player.imgUrl" :alt="'A picture of ' + player.name" class="img-fluid player-img">
              <!-- NOTE double curlies {{}} allows us to bind HTML text content to javascript values -->
              <h2>
                {{ player.name }}
                <i v-if="player.score == topScore" class="mdi mdi-crown"></i>
              </h2>
            </div>
            <div class="d-flex align-items-center gap-3">
              <!-- v-on:click="decreaseScore()" is equivalent to @click="decreaseScore()" -->
              <button @click="decreaseScore(player)" :disabled="player.score < 1" class="btn btn-dark fs-3">-</button>
              <span class="fs-2" :class="{ 'text-success': player.score == topScore && player.score != 0 }">
                {{ player.score }}
              </span>
              <button @click="increaseScore(player)" class="btn btn-dark fs-3">+</button>
            </div>
          </div>
        </div>
      </section>
      <section class="row">
        <div class="col-12">
          <!-- NOTE all logic from PlayerForm is injected right here into the HTML -->
          <PlayerForm />
        </div>
      </section>
    </div>
  </main>
</template>

<style lang="scss">
// NOTE leave this import here or bootstrap will not work!
@import url(./assets/scss/main.scss);

.player-img {
  height: 170px;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 50%;
}
</style>
