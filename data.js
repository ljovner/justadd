// Catalog Data — edit this file to add/remove products and sections
// Also update data.json if you need the pure JSON version
window.catalogData = {
  "sections": [
    {
      "id": "sauces",
      "titleKey": "section-sauces-title",
      "navLabelKey": "cat-sauces",
      "icon": "🔥",
      "scrollMargin": "scroll-mt-40",
      "products": [
        {
          "id": "s1",
          "name": "Beef Stroganoff",
          "descriptionKey": "s1-desc",
          "price": 18.50,
          "unitKey": "per-unit",
          "dietary": { "veg": false, "df": false, "pf": true },
          "image": "images/beefStroganoff.jpg",
          "about": { "ingredientsKey": "s1-ingredients", "bestWithKey": "s1-bestwith" },
          "nutrition": { "calories": 380, "protein": "28g", "carbs": "8g" },
          "cookingKey": "s1-cook"
        },
        {
          "id": "s2",
          "name": "Classic Bolognaise",
          "descriptionKey": "s2-desc",
          "price": 16.00,
          "unitKey": "per-unit",
          "dietary": { "veg": false, "df": true, "pf": false },
          "image": "images/beefStroganoff.jpg",
          "about": { "ingredientsKey": "s2-ingredients", "bestWithKey": "s2-bestwith" },
          "nutrition": { "calories": 340, "protein": "22g", "carbs": "12g" },
          "cookingKey": "s2-cook"
        },
        {
          "id": "s3",
          "name": "Chicken & Mushroom Cream",
          "descriptionKey": "s3-desc",
          "price": 17.50,
          "unitKey": "per-unit",
          "dietary": { "veg": false, "df": false, "pf": true },
          "image": "images/beefStroganoff.jpg",
          "about": { "ingredientsKey": "s3-ingredients", "bestWithKey": "s3-bestwith" },
          "nutrition": { "calories": 410, "protein": "31g", "carbs": "5g" },
          "cookingKey": "s3-cook"
        },
        {
          "id": "s4",
          "name": "Meatballs in Marinara",
          "descriptionKey": "s4-desc",
          "price": 16.75,
          "unitKey": "per-unit",
          "dietary": { "veg": false, "df": true, "pf": false },
          "image": "images/beefStroganoff.jpg",
          "about": { "ingredientsKey": "s4-ingredients", "bestWithKey": "s4-bestwith" },
          "nutrition": { "calories": 360, "protein": "24g", "carbs": "11g" },
          "cookingKey": "s4-cook"
        },
        {
          "id": "s5",
          "name": "Creamy Four-Cheese & Spinach",
          "descriptionKey": "s5-desc",
          "price": 15.25,
          "unitKey": "per-unit",
          "dietary": { "veg": true, "df": false, "pf": true },
          "image": "images/beefStroganoff.jpg",
          "about": { "ingredientsKey": "s5-ingredients", "bestWithKey": "s5-bestwith" },
          "nutrition": { "calories": 450, "protein": "14g", "carbs": "6g" },
          "cookingKey": "s5-cook"
        },
        {
          "id": "s6",
          "name": "Hunter's Pork Stew Base",
          "descriptionKey": "s6-desc",
          "price": 17.00,
          "unitKey": "per-unit",
          "dietary": { "veg": false, "df": true, "pf": false },
          "image": "images/beefStroganoff.jpg",
          "about": { "ingredientsKey": "s6-ingredients", "bestWithKey": "s6-bestwith" },
          "nutrition": { "calories": 390, "protein": "26g", "carbs": "4g" },
          "cookingKey": "s6-cook"
        },
        {
          "id": "s7",
          "name": "Hungarian Beef Paprikash",
          "descriptionKey": "s7-desc",
          "price": 18.00,
          "unitKey": "per-unit",
          "dietary": { "veg": false, "df": false, "pf": true },
          "image": "images/beefStroganoff.jpg",
          "about": { "ingredientsKey": "s7-ingredients", "bestWithKey": "s7-bestwith" },
          "nutrition": { "calories": 410, "protein": "29g", "carbs": "9g" },
          "cookingKey": "s7-cook"
        },
        {
          "id": "s8",
          "name": "Dill Garlic Lemon Chicken",
          "descriptionKey": "s8-desc",
          "price": 15.75,
          "unitKey": "per-unit",
          "dietary": { "veg": false, "df": true, "pf": true },
          "image": "images/beefStroganoff.jpg",
          "about": { "ingredientsKey": "s8-ingredients", "bestWithKey": "s8-bestwith" },
          "nutrition": { "calories": 320, "protein": "27g", "carbs": "3g" },
          "cookingKey": "s8-cook"
        },
        {
          "id": "s9",
          "name": "Roasted Root Vegetable Mix",
          "descriptionKey": "s9-desc",
          "price": 14.50,
          "unitKey": "per-unit",
          "dietary": { "veg": true, "df": true, "pf": true },
          "image": "images/beefStroganoff.jpg",
          "about": { "ingredientsKey": "s9-ingredients", "bestWithKey": "s9-bestwith" },
          "nutrition": { "calories": 180, "protein": "4g", "carbs": "24g" },
          "cookingKey": "s9-cook"
        },
        {
          "id": "s10",
          "name": "Smoked Bacon Cream & Leek",
          "descriptionKey": "s10-desc",
          "price": 16.50,
          "unitKey": "per-unit",
          "dietary": { "veg": false, "df": true, "pf": false },
          "image": "images/beefStroganoff.jpg",
          "about": { "ingredientsKey": "s10-ingredients", "bestWithKey": "s10-bestwith" },
          "nutrition": { "calories": 420, "protein": "16g", "carbs": "7g" },
          "cookingKey": "s10-cook"
        }
      ]
    },
    {
      "id": "perogies",
      "titleKey": "section-perogies-title",
      "navLabelKey": "cat-perogies",
      "icon": "🥟",
      "scrollMargin": "scroll-mt-40",
      "products": [
        {
          "id": "p1",
          "name": "Potato & Cheddar Cheese",
          "descriptionKey": "p1-desc",
          "price": 12.00,
          "unitKey": "per-dozen",
          "dietary": { "veg": true, "df": false, "pf": true },
          "image": "images/perogies.jpg",
          "about": { "ingredientsKey": "p1-ingredients" },
          "nutrition": { "calories": 290, "protein": "10g", "carbs": "44g" },
          "cookingKey": "p1-cook"
        },
        {
          "id": "p2",
          "name": "Sauerkraut & Field Mushroom",
          "descriptionKey": "p2-desc",
          "price": 13.50,
          "unitKey": "per-dozen",
          "dietary": { "veg": true, "df": true, "pf": true },
          "image": "images/perogies.jpg",
          "about": { "ingredientsKey": "p2-ingredients" },
          "nutrition": { "calories": 240, "protein": "7g", "carbs": "42g" },
          "cookingKey": "p2-cook"
        },
        {
          "id": "p3",
          "name": "Sweet Cinnamon Blueberry",
          "descriptionKey": "p3-desc",
          "price": 14.00,
          "unitKey": "per-dozen",
          "dietary": { "veg": true, "df": true, "pf": true },
          "image": "images/perogies.jpg",
          "about": { "ingredientsKey": "p3-ingredients" },
          "nutrition": { "calories": 260, "protein": "5g", "carbs": "52g" },
          "cookingKey": "p3-cook"
        },
        {
          "id": "p4",
          "name": "Potato, Bacon & Onion",
          "descriptionKey": "p4-desc",
          "price": 13.00,
          "unitKey": "per-dozen",
          "dietary": { "veg": false, "df": true, "pf": false },
          "image": "images/perogies.jpg",
          "about": { "ingredientsKey": "p4-ingredients" },
          "nutrition": { "calories": 310, "protein": "12g", "carbs": "43g" },
          "cookingKey": "p4-cook"
        },
        {
          "id": "p5",
          "name": "Cottage Cheese & Dill",
          "descriptionKey": "p5-desc",
          "price": 12.50,
          "unitKey": "per-dozen",
          "dietary": { "veg": true, "df": false, "pf": true },
          "image": "images/perogies.jpg",
          "about": { "ingredientsKey": "p5-ingredients" },
          "nutrition": { "calories": 270, "protein": "13g", "carbs": "39g" },
          "cookingKey": "p5-cook"
        },
        {
          "id": "p6",
          "name": "Seasoned Minced Beef",
          "descriptionKey": "p6-desc",
          "price": 14.50,
          "unitKey": "per-dozen",
          "dietary": { "veg": false, "df": true, "pf": true },
          "image": "images/perogies.jpg",
          "about": { "ingredientsKey": "p6-ingredients" },
          "nutrition": { "calories": 320, "protein": "16g", "carbs": "41g" },
          "cookingKey": "p6-cook"
        },
        {
          "id": "p7",
          "name": "Roasted Pumpkin & Goat Cheese",
          "descriptionKey": "p7-desc",
          "price": 13.75,
          "unitKey": "per-dozen",
          "dietary": { "veg": true, "df": false, "pf": true },
          "image": "images/perogies.jpg",
          "about": { "ingredientsKey": "p7-ingredients" },
          "nutrition": { "calories": 280, "protein": "9g", "carbs": "45g" },
          "cookingKey": "p7-cook"
        },
        {
          "id": "p8",
          "name": "Pork & Caramelized Cabbage",
          "descriptionKey": "p8-desc",
          "price": 13.25,
          "unitKey": "per-dozen",
          "dietary": { "veg": false, "df": true, "pf": false },
          "image": "images/perogies.jpg",
          "about": { "ingredientsKey": "p8-ingredients" },
          "nutrition": { "calories": 330, "protein": "14g", "carbs": "40g" },
          "cookingKey": "p8-cook"
        },
        {
          "id": "p9",
          "name": "Tart Orchard Sour Cherry",
          "descriptionKey": "p9-desc",
          "price": 14.00,
          "unitKey": "per-dozen",
          "dietary": { "veg": true, "df": true, "pf": true },
          "image": "images/perogies.jpg",
          "about": { "ingredientsKey": "p9-ingredients" },
          "nutrition": { "calories": 250, "protein": "4g", "carbs": "55g" },
          "cookingKey": "p9-cook"
        },
        {
          "id": "p10",
          "name": "Jalapeno Cheddar Popper",
          "descriptionKey": "p10-desc",
          "price": 12.75,
          "unitKey": "per-dozen",
          "dietary": { "veg": true, "df": false, "pf": true },
          "image": "images/perogies.jpg",
          "about": { "ingredientsKey": "p10-ingredients" },
          "nutrition": { "calories": 300, "protein": "11g", "carbs": "44g" },
          "cookingKey": "p10-cook"
        },
        {
          "id": "p11",
          "name": "Spinach, Ricotta & Feta",
          "descriptionKey": "p11-desc",
          "price": 13.50,
          "unitKey": "per-dozen",
          "dietary": { "veg": true, "df": false, "pf": true },
          "image": "images/perogies.jpg",
          "about": { "ingredientsKey": "p11-ingredients" },
          "nutrition": { "calories": 280, "protein": "11g", "carbs": "41g" },
          "cookingKey": "p11-cook"
        },
        {
          "id": "p12",
          "name": "Smoked Salmon & Chive",
          "descriptionKey": "p12-desc",
          "price": 16.00,
          "unitKey": "per-dozen",
          "dietary": { "veg": false, "df": true, "pf": true },
          "image": "images/perogies.jpg",
          "about": { "ingredientsKey": "p12-ingredients" },
          "nutrition": { "calories": 295, "protein": "15g", "carbs": "39g" },
          "cookingKey": "p12-cook"
        }
      ]
    },
    {
      "id": "classics",
      "titleKey": "section-classics-title",
      "navLabelKey": "cat-classics",
      "icon": "🥩",
      "scrollMargin": "scroll-mt-40",
      "products": [
        {
          "id": "c1",
          "name": "Crispy Meat Chebureke",
          "descriptionKey": "c1-desc",
          "price": 15.00,
          "unitKey": "per-4pcs",
          "dietary": { "veg": false, "df": true, "pf": false },
          "image": "images/cheburiki.jpg",
          "about": { "ingredientsKey": "c1-ingredients" },
          "nutrition": { "calories": 380, "protein": "18g", "carbs": "32g" },
          "cookingKey": "c1-cook"
        },
        {
          "id": "c2",
          "name": "Garlic Chicken Kotlete",
          "descriptionKey": "c2-desc",
          "price": 16.50,
          "unitKey": "per-6pcs",
          "dietary": { "veg": false, "df": false, "pf": true },
          "image": "images/cheburiki.jpg",
          "about": { "ingredientsKey": "c2-ingredients" },
          "nutrition": { "calories": 290, "protein": "24g", "carbs": "8g" },
          "cookingKey": "c2-cook"
        },
        {
          "id": "c3",
          "name": "Classic Golubtse",
          "descriptionKey": "c3-desc",
          "price": 16.00,
          "unitKey": "per-4pack",
          "dietary": { "veg": false, "df": true, "pf": false },
          "image": "images/golubtsi.jpg",
          "about": { "ingredientsKey": "c3-ingredients" },
          "nutrition": { "calories": 210, "protein": "14g", "carbs": "19g" },
          "cookingKey": "c3-cook"
        },
        {
          "id": "c4",
          "name": "Vegetarian Cabbage Rolls",
          "descriptionKey": "c4-desc",
          "price": 14.50,
          "unitKey": "per-4pack",
          "dietary": { "veg": true, "df": true, "pf": true },
          "image": "images/golubtsi.jpg",
          "about": { "ingredientsKey": "c4-ingredients" },
          "nutrition": { "calories": 160, "protein": "6g", "carbs": "28g" },
          "cookingKey": "c4-cook"
        },
        {
          "id": "c5",
          "name": "Pork & Herb Pelmeni",
          "descriptionKey": "c5-desc",
          "price": 11.50,
          "unitKey": "per-500gbag",
          "dietary": { "veg": false, "df": true, "pf": false },
          "image": "images/golubtsi.jpg",
          "about": { "ingredientsKey": "c5-ingredients" },
          "nutrition": { "calories": 310, "protein": "15g", "carbs": "35g" },
          "cookingKey": "c5-cook"
        },
        {
          "id": "c6",
          "name": "Cheese Blintzes",
          "descriptionKey": "c6-desc",
          "price": 13.00,
          "unitKey": "per-6pack",
          "dietary": { "veg": true, "df": false, "pf": true },
          "image": "images/golubtsi.jpg",
          "about": { "ingredientsKey": "c6-ingredients" },
          "nutrition": { "calories": 280, "protein": "11g", "carbs": "34g" },
          "cookingKey": "c6-cook"
        }
      ]
    }
  ]
};
