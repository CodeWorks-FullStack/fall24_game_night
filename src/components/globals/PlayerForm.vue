<script setup>
import { playersService } from '@/services/PlayersService.js';
import { ref } from 'vue';

// NOTE placeholder object to store data from form
const editablePlayerData = ref({
  name: '', // bound to first input
  imgUrl: '' // bound to second input
})

function createPlayer() {
  console.log('creating player! Player data:', editablePlayerData.value);
  // NOTE .value is what is stored inside of the watchable ref object
  playersService.createPlayer(editablePlayerData.value)
  // NOTE if the value changes in the javascript, it immediately changes in the input 
  editablePlayerData.value = {
    name: '',
    imgUrl: ''
  }
}
</script>


<template>
  <!-- NOTE .prevent will call event.preventDefault() -->
  <form @submit.prevent="createPlayer()">
    <div class="form-floating mb-3">
      <!-- NOTE v-model sets up 2-way data-binding between the the value in the input field and a javascript value -->
      <!-- if the value changes in the input, the value immediately changes in the javascript -->
      <input v-model="editablePlayerData.name" type="text" class="form-control" id="name" placeholder="Player Name..."
        required maxlength="20">
      <label for="name">Player Name</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editablePlayerData.imgUrl" type="url" class="form-control" id="imgUrl"
        placeholder="Player Image..." required maxlength="1000">
      <label for="imgUrl">Player Image</label>
    </div>
    <button class="btn btn-success w-100" type="submit">Add Player</button>
  </form>
</template>


<style lang="scss" scoped></style>