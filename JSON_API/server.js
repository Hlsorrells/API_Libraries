// ==============================================================================
// Dependencies
// Series of npm packages that we will use to give our server useful functionality
// =============================================================
const express = require("express");
const recipes = require("../JSON_API/data/recipes.json");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Define middleware here
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// ================================================================================
// require("./routes/apiRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================
app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log(`Server listening on PORT " + ${PORT}`);
  });

app.get('/', (req, res) => {
    res.send('Welcome to the JSON API Server!');
});

// Build a GET route that returns all recipe names.
app.get('/recipes', (req, res) => {
    let recipeNames = [];
    recipes.forEach(recipe => {
        recipeNames.push(recipe.name)
    });
    res.json({ recipeNames });
});

// Build a GET route that takes a recipe name as a string param. Return the ingredients and the number of steps in the recipe as JSON
app.get('/recipes/details/:name', (req, res) => {
    const { name } = req.params;
    recipes.forEach(recipe => {
        if (name === recipe.name) {
            let listIngredients = recipe.ingredients;
            let numSteps = recipe.instructions.length;
            res.json({ details: { listIngredients, numSteps }})
        } 
    });
    res.json({});
})

// Add a POST route that can add additional recipes in the existing format to the backend with support for the above routes.
// Error response
app.post('/recipes', (req, res) => {
    const { name, ingredients, instructions } = req.body;
    let recipeNames = [];
    recipes.forEach(recipe => {
        recipeNames.push(recipe.name)
    });
    if ( recipeNames.includes(name) ) {
        res.json({"error": "Recipe already exists"})
        res.sendStatus(401);
    } else {
        recipes.push({ name, ingredients, instructions });
        res.sendStatus(201);
    }
});

// Add a PUT route that can update existing recipes.
// Error response
app.put('/recipes', (req, res) => {
    const { name, ingredients, instructions } = req.body;
    if (recipes[name]) {
        
    }
})
