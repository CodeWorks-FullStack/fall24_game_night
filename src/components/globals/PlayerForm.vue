<script setup>
import { ref } from 'vue';

const editablePlayerData = ref({
  name: '',
  imgUrl: ''
})
</script>


<template>
  <form>
    <div class="form-floating mb-3">
      <input v-model="editablePlayerData.name" type="text" class="form-control" id="name" placeholder="Player Name..."
        required maxlength="20">
      <label for="name">Player Name</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editablePlayerData.imgUrl" type="url" class="form-control" id="imgUrl"
        placeholder="Player Image..." required maxlength="1000">
      <label for="imgUrl">Player Image</label>
    </div>
    <button class="btn btn-success w-100">Add Player</button>
  </form>
</template>


<style lang="scss" scoped></style>