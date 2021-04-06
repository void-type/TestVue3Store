<template>
  <div>
    <button @click="newRecipe()">Create</button>
    <ul>
      <li v-for="recipe in recipes" :key="recipe.name">{{recipe.name}}</li>
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
      return recipeStore.state.recentRecipes;
    },
  },
  methods: {
    newRecipe() {
      recipeStore.addToRecent({
        name: String(this.current),
        description: 'hi',
      });
      this.current += 1;
    },
  },
});
</script>

<style scoped lang="scss">

</style>
