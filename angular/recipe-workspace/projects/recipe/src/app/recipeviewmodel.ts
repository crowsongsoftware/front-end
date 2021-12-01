interface Recipe{
    ingredients: Array<string>;
    directions: Array<string>;
};

export class RecipeViewModel{
    get Recipe(): Recipe{
        return {ingredients: ['Whole Wheat Flour'], directions: ['Measure flour']};
    };

    set Recipe(
        { }
        )
};