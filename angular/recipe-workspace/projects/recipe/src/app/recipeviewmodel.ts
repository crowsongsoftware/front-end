interface Recipe{
    id: string;
    category: string;
    title: string;
    image: string;
    ingredients: Array<string>;
    directions: Array<string>;
};

export class RecipeViewModel{
    /*
        get Recipe(): Recipe{
        return {ingredients: ['Whole Wheat Flour'], directions: ['Measure flour']};
    };
    
    set Recipe(
        { }
        )
    */
};