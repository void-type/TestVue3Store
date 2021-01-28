import StoreAbstract from './StoreAbstract';
import Recipe from './Recipe';

interface RecipeStoreModel extends Object {
  recipes: Array<Recipe>;
  recentRecipes: Array<Recipe>;
  recentRecipesLimit: number;
}

class RecipeStore extends StoreAbstract<RecipeStoreModel> {
  /* eslint-disable class-methods-use-this */
  protected data(): RecipeStoreModel {
    return {
      recipes: [],
      recentRecipes: [],
      recentRecipesLimit: 6,
    };
  }
  /* eslint-enable class-methods-use-this */

  setRecipes(recipes: Array<Recipe>) {
    this.state.recipes = recipes;
  }

  addToRecent(recipe: Recipe) {
    const recentRecipes = this.state.recentRecipes.slice();
    const limit = this.state.recentRecipesLimit;

    recentRecipes.unshift(recipe);
    this.state.recentRecipes = recentRecipes.slice(0, limit);
  }
}

const recipeStore: RecipeStore = new RecipeStore();

export default recipeStore;
