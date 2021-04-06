import StoreAbstract from './StoreAbstract';
import Recipe from './Recipe';

interface RecipeState extends Object {
  recipes: Array<Recipe>;
  recentRecipes: Array<Recipe>;
  recentRecipesLimit: number;
}

class RecipeStore extends StoreAbstract<RecipeState> {
  setRecipes(recipes: Array<Recipe>) {
    this.internalState.recipes = recipes;
  }

  addToRecent(recipe: Recipe) {
    const recentRecipes = this.internalState.recentRecipes.slice();
    const limit = this.internalState.recentRecipesLimit;

    recentRecipes.unshift(recipe);
    this.internalState.recentRecipes = recentRecipes.slice(0, limit);
  }
}

const recipeStore: RecipeStore = new RecipeStore({
  recipes: [],
  recentRecipes: [],
  recentRecipesLimit: 3,
});

export default recipeStore;
