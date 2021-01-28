<template>
  <div>
    <button @click="newRec()">Create</button>
    <ul>
      <li v-for="rec in recipes" :key="rec.name">{{rec.name}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import recipeStore from '../store/RecipeStore';

export default defineComponent({
  name: 'HelloWorld',
  data() {
    return {
      current: 1,
    };
  },
  computed: {
    recipes() {
      return recipeStore.getState().recentRecipes;
    },
  },
  methods: {
    newRec() {
      recipeStore.addToRecent({
        name: String(this.current),
        description: 'hi',
      });
      console.log(this.current);
      this.current += 1;
    },
  },
});
</script>

<style scoped lang="scss">

</style>
