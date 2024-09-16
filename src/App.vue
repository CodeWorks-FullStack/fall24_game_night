<script setup>
import { ref } from 'vue'
import { AppState } from './AppState.js'
// NOTE anything declared in here is referred to as component state

const score = ref(0)

const players = AppState.players

function decreaseScore() {
  if (score.value > 0) {
    score.value--
  }
}
function increaseScore() {
  score.value++
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
        <div v-for="player in players" :key="player.name" class="col-lg-6 mb-3">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex gap-3 align-items-center">
              <img
                src="https://images.unsplash.com/photo-1707765643599-8c60886bf52b?q=80&w=2265&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Dude on the sidewalk" class="img-fluid player-img">
              <h2>{{ player.name }}</h2>
            </div>
            <div class="d-flex align-items-center gap-3">
              <button @click="decreaseScore()" class="btn btn-dark fs-3">-</button>
              <span class="fs-2">{{ score }}</span>
              <button @click="increaseScore()" class="btn btn-dark fs-3">+</button>
            </div>
          </div>
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
