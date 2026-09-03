const MENU_DATA = [
  {
    "category": "Small Dishes",
    "items": [
      {
        "name": "Spicy Edamame",
        "price": "99,-",
        "desc": "Seasoned edamame beans with Kimchi and limejuice",
        "lines": [
          "Seasoned edamame beans with Kimchi and limejuice"
        ],
        "allergens": "Allergens: Soya, gluten"
      },
      {
        "name": "Edamame with salt",
        "price": "95,-",
        "desc": "Edamame beans with seasalt",
        "lines": [
          "Edamame beans with seasalt"
        ],
        "allergens": "Allergener: Soya"
      },
      {
        "name": "NEW Salmon Tataki",
        "price": "209,-",
        "desc": "Lightly torched salmon, salad mix, yuzu ponzu, spicy kizami wasabi, smoked herring caviar and chives.",
        "lines": [
          "Lightly torched salmon, salad mix, yuzu ponzu, spicy kizami wasabi, smoked herring caviar and chives."
        ],
        "allergens": "Allergener: Fish, soya, sennep"
      },
      {
        "name": "NEW Tuna Tataki",
        "price": "235,-",
        "desc": "Sesame-crusted tuna, yuzu ponzu, sriracha, pickled Japanese takuan and chives.",
        "lines": [
          "Sesame-crusted tuna, yuzu ponzu, sriracha, pickled Japanese takuan and chives."
        ],
        "allergens": "Allergener: Fish, soya, sesam"
      },
      {
        "name": "Seaweed Salad",
        "price": "79,-",
        "desc": "Seaweed salad",
        "lines": [
          "Seaweed salad"
        ],
        "allergens": "Allergener: Soya, sesam, hvete (gluten)"
      },
      {
        "name": "Tempura Starter",
        "price": "149,-",
        "desc": "Fried scampi served with salad mix, cucumber, avokado, seaweed salad, yuzu mayo and teriyaki sauce",
        "lines": [
          "Fried scampi served with salad mix, cucumber, avokado, seaweed salad, yuzu mayo and teriyaki sauce"
        ],
        "allergens": "Allergener: Gluten (hvete), skalldyr, egg, soya, sesam"
      },
      {
        "name": "Scallop Starter",
        "price": "159,-",
        "desc": "Fried scallop served with salad mix, cucumber, avokado, seaweed salad, yuzu mayo, teriyaki sauce, trout roe and spring onion",
        "lines": [
          "Fried scallop served with salad mix, cucumber, avokado, seaweed salad, yuzu mayo, teriyaki sauce, trout roe and spring onion"
        ],
        "allergens": "Allergener: Gluten (hvete), bløtdyr, egg, soya, sesam"
      },
      {
        "name": "Chicken Gyoza (3 stk)",
        "price": "125,-",
        "desc": "Chicken dumplings with yuzu emulsion and crispy onion",
        "lines": [
          "Chicken dumplings with yuzu emulsion and crispy onion"
        ],
        "allergens": "Allergener: Gluten (hvete), soya"
      },
      {
        "name": "Yakitori Sticks (3 stk)",
        "price": "129,-",
        "desc": "Chicken skewer with salad mix, seaweed salad, teriyaki sauce, japanese pepper and sesame",
        "lines": [
          "Chicken skewer with salad mix, seaweed salad, teriyaki sauce, japanese pepper and sesame"
        ],
        "allergens": "Allergener: Gluten (hvete), soya, sesam"
      },
      {
        "name": "Vegetarian Spring Rolls (2 stk)",
        "price": "99,-",
        "desc": "Vegetarian spring rolls",
        "lines": [
          "Vegetarian spring rolls"
        ],
        "allergens": "Allergener: Gluten (hvete), egg"
      },
      {
        "name": "Chicken Spring Rolls (2 stk)",
        "price": "119,-",
        "desc": "Spring rolls with chicken",
        "lines": [
          "Spring rolls with chicken"
        ],
        "allergens": "Allergener: Gluten (hvete), egg"
      }
    ]
  },
  {
    "category": "Poke Bowl",
    "items": [
      {
        "name": "Vegetar",
        "price": "235,-",
        "desc": "Sushi rice, salad mix, seaweed salad, pickled daikon radish, edamame, strawberry, avocado, cucumber, wasabi mayo and teriyaki sauce",
        "lines": [
          "Sushi rice, salad mix, seaweed salad, pickled daikon radish, edamame, strawberry, avocado, cucumber, wasabi mayo and teriyaki sauce"
        ],
        "allergens": "Allergens: Gluten, egg, soya, sesam, sennep"
      },
      {
        "name": "Salmon",
        "price": "255,-",
        "desc": "Sushi rice, salad mix, cucumber, avokado, seaweed salad, edamame, ponzu sauce, chili mayo and teriyaki sauce",
        "lines": [
          "Sushi rice, salad mix, cucumber, avokado, seaweed salad, edamame, ponzu sauce, chili mayo and teriyaki sauce"
        ],
        "allergens": "Allergens: fish, egg, soya, sesam, gluten"
      },
      {
        "name": "Tempura",
        "price": "249,-",
        "desc": "Sushi rice, salad mix, cucumber, avocado, seaweed salad, edamame, tempura scampi, chili mayo and teriyaki sauce",
        "lines": [
          "Sushi rice, salad mix, cucumber, avocado, seaweed salad, edamame, tempura scampi, chili mayo and teriyaki sauce"
        ],
        "allergens": "Allergens: Gluten, shellfish, egg, soya, sesam"
      },
      {
        "name": "Mix",
        "price": "269,-",
        "desc": "Sushi rice, salad mix, cucumber, avocado, seaweed salad, edamame, salmon, tuna, hamachi, ponzu sauce, chili mayo and teriyaki sauce",
        "lines": [
          "Sushi rice, salad mix, cucumber, avocado, seaweed salad, edamame, salmon, tuna, hamachi, ponzu sauce, chili mayo and teriyaki sauce"
        ],
        "allergens": "Allergens: fish, egg, soya, sesam"
      }
    ]
  },
  {
    "category": "Signature Sashimi / 6 slices",
    "items": [
      {
        "name": "Salmon",
        "price": "199,-",
        "desc": "Salmon with jalapeño sauce and trout roe",
        "lines": [
          "Salmon with jalapeño sauce and trout roe"
        ],
        "allergens": "Allergens: fish"
      },
      {
        "name": "Hamachi",
        "price": "239,-",
        "desc": "Hamachi with ponzu, kizami wasabi, togarashi and chives",
        "lines": [
          "Hamachi with ponzu, kizami wasabi, togarashi and chives"
        ],
        "allergens": "Allergens: fish, sennep, soya"
      },
      {
        "name": "Tuna",
        "price": "219,-",
        "desc": "Tuna with seaweed salad, truffle-ponzu, crispy onion and spring onion",
        "lines": [
          "Tuna with seaweed salad, truffle-ponzu, crispy onion and spring onion"
        ],
        "allergens": "Allergens: fish, soya, gluten, sesam"
      },
      {
        "name": "Scallop",
        "price": "229,-",
        "desc": "Scallop with seaweed salad, yuzu-ponzu, furikake, chives and smoked herring caviar",
        "lines": [
          "Scallop with seaweed salad, yuzu-ponzu, furikake, chives and smoked herring caviar"
        ],
        "allergens": "Allergens: molluscs, soya, gluten, sesam"
      }
    ]
  },
  {
    "category": "Nigiri / 2 Pieces",
    "items": [
      {
        "name": "Salmon",
        "price": "79,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergens: fish, soya, gluten"
      },
      {
        "name": "Tuna",
        "price": "89,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergens: fish, soya, gluten"
      },
      {
        "name": "Hamachi",
        "price": "95,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergens: fish, soya, gluten"
      },
      {
        "name": "Ebi",
        "price": "79,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergens: shellfish, soya, gluten"
      },
      {
        "name": "Scallop",
        "price": "89,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergens: molluscs, soya, gluten"
      }
    ]
  },
  {
    "category": "Flambéed Nigiri / 2 pieces",
    "items": [
      {
        "name": "Salmon",
        "price": "85,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergens: fish, soya"
      },
      {
        "name": "Scallop",
        "price": "95,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergens: molluscs, egg, soya"
      },
      {
        "name": "Hamachi",
        "price": "115,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergens: fish, soya"
      }
    ]
  },
  {
    "category": "Futo Rolls (6 pieces)",
    "items": [
      {
        "name": "Softshell Maki",
        "price": "185,-",
        "desc": "deep fried soft shell crab, cucumber, avocado, tobiko and chili mayo",
        "lines": [
          "deep fried soft shell crab, cucumber, avocado, tobiko and chili mayo"
        ],
        "allergens": "Allergens: shellfish, soya, sesam, gluten"
      },
      {
        "name": "Hot Roll",
        "price": "185,-",
        "desc": "Salmon with cucumber, spring onion, sriracha, spicy mayo and chives",
        "lines": [
          "Salmon with cucumber, spring onion, sriracha, spicy mayo and chives"
        ],
        "allergens": "Allergens: fish, gluten, egg, soya, sesam"
      },
      {
        "name": "Vulcano Salmon",
        "price": "219,-",
        "desc": "Salmon tartar with seaweed salad, spicy mayo, togarashi, trout roe and chives",
        "lines": [
          "Salmon tartar with seaweed salad, spicy mayo, togarashi, trout roe and chives"
        ],
        "allergens": "Allergens: gluten, fish, egg, sesam, soya"
      },
      {
        "name": "Vulcano Shrimp",
        "price": "219,-",
        "desc": "Shrimp tartar with tobiko, spicy mayo, togarashi, teriyaki sauce and chives",
        "lines": [
          "Shrimp tartar with tobiko, spicy mayo, togarashi, teriyaki sauce and chives"
        ],
        "allergens": "Allergens: gluten, shellfish, egg, sesam, soya, fish"
      }
    ]
  },
  {
    "category": "Classic Rolls (8 pieces)",
    "items": [
      {
        "name": "Vegan",
        "price": "129,-",
        "desc": "avocado, cucumber, bell pepper and yuzu emulsion",
        "lines": [
          "avocado, cucumber, bell pepper and yuzu emulsion"
        ],
        "allergens": "Allergens: sesam"
      },
      {
        "name": "Tempura Roll",
        "price": "179,-",
        "desc": "Tempura scampi with avocado",
        "lines": [
          "Tempura scampi with avocado"
        ],
        "allergens": "Allergens: Gluten, shellfish, egg, sesam"
      },
      {
        "name": "Spicy Hamachi",
        "price": "195,-",
        "desc": "Hamachi, spring onion, sriracha and cherry tomatoes",
        "lines": [
          "Hamachi, spring onion, sriracha and cherry tomatoes"
        ],
        "allergens": "Allergens: fish"
      },
      {
        "name": "Spicy Tuna",
        "price": "195,-",
        "desc": "Tuna, spring onion, chili mayo",
        "lines": [
          "Tuna, spring onion, chili mayo"
        ],
        "allergens": "Allergens: fish, egg, sesam"
      },
      {
        "name": "Spicy Salmon",
        "price": "185,-",
        "desc": "Salmon, spring onion, chili mayo",
        "lines": [
          "Salmon, spring onion, chili mayo"
        ],
        "allergens": "Allergens: fish, egg, sesam"
      },
      {
        "name": "Spicy Scallop",
        "price": "195,-",
        "desc": "Scallop, chili mayo, spring onion",
        "lines": [
          "Scallop, chili mayo, spring onion"
        ],
        "allergens": "Allergens: molluscs, egg, sesam"
      },
      {
        "name": "California Roll",
        "price": "175,-",
        "desc": "Ebi scampi, cucumber, avocado, wasabi mayo, tobiko",
        "lines": [
          "Ebi scampi, cucumber, avocado, wasabi mayo, tobiko"
        ],
        "allergens": "Allergens: shellfish, egg, sesam, soya, sennep, gluten"
      },
      {
        "name": "Rainbow Roll",
        "price": "199,-",
        "desc": "Ebi scampi, cucumber, avocado, , topped with salmon, tuna and hamachi, wasabi mayo and chives",
        "lines": [
          "Ebi scampi, cucumber, avocado, , topped with salmon, tuna and hamachi, wasabi mayo and chives"
        ],
        "allergens": "Allergens: shellfish, fish, egg, sesam"
      },
      {
        "name": "Fried Salmon",
        "price": "169,-",
        "desc": "Fried salmon, spring onion, spicy mayo and teriyaki sauce",
        "lines": [
          "Fried salmon, spring onion, spicy mayo and teriyaki sauce"
        ],
        "allergens": "Allergens: fish, soya, sesam, gluten, egg"
      }
    ]
  },
  {
    "category": "Special Rolls (8 Pieces)",
    "items": [
      {
        "name": "Vegetar Special",
        "price": "185,-",
        "desc": "Cucumber, avocado, bell pepper, cream cheese, strawberry, wasabi mayo, teriyaki sauce",
        "lines": [
          "Cucumber, avocado, bell pepper, cream cheese, strawberry, wasabi mayo, teriyaki sauce"
        ],
        "allergens": "Allergens: dairy, egg, soya, sesam"
      },
      {
        "name": "Tempura Special",
        "price": "219,-",
        "desc": "Tempura scampi, avocado, torched salmon on top, yuzu mayo and teriyaki sauce",
        "lines": [
          "Tempura scampi, avocado, torched salmon on top, yuzu mayo and teriyaki sauce"
        ],
        "allergens": "Allergens: shellfish, fish, gluten, egg, soya, sesam"
      },
      {
        "name": "Tempura Strawberry",
        "price": "209,-",
        "desc": "Tempura scampi, avocado, strawberry, cream cheese, wasabi mayo, teriyaki sauce",
        "lines": [
          "Tempura scampi, avocado, strawberry, cream cheese, wasabi mayo, teriyaki sauce"
        ],
        "allergens": "Allergens: shellfish, gluten, dairy, egg, soya, sesam, sennep"
      },
      {
        "name": "Salmon Strawberry",
        "price": "209,-",
        "desc": "Salmon, avocado, cream cheese, strawberry, wasabi mayo, teriyaki sauce",
        "lines": [
          "Salmon, avocado, cream cheese, strawberry, wasabi mayo, teriyaki sauce"
        ],
        "allergens": "Allergens: fish, dairy, egg, soya, sesam, sennep"
      },
      {
        "name": "Crunchy Roll",
        "price": "215,-",
        "desc": "Fried scallop and torched salmon, yuzu mayo and teriyaki sauce",
        "lines": [
          "Fried scallop and torched salmon, yuzu mayo and teriyaki sauce"
        ],
        "allergens": "Allergens: molluscs, gluten, egg, soya, sesam, fish"
      },
      {
        "name": "Crunchy Tuna",
        "price": "195,-",
        "desc": "Tuna, pickled radish (daikon), sriracha and masago arare",
        "lines": [
          "Tuna, pickled radish (daikon), sriracha and masago arare"
        ],
        "allergens": "Allergies: fish, sesam"
      },
      {
        "name": "Special Tuna",
        "price": "219,-",
        "desc": "Tempura scampi, seaweed salad, tuna, wasabi mayo and sriracha",
        "lines": [
          "Tempura scampi, seaweed salad, tuna, wasabi mayo and sriracha"
        ],
        "allergens": "Allergens: shellfish, fish, gluten, egg, sesam, sennep"
      },
      {
        "name": "Philadelphia Roll",
        "price": "195,-",
        "desc": "Salmon, spring onion and cream cheese",
        "lines": [
          "Salmon, spring onion and cream cheese"
        ],
        "allergens": "Allergens: fish, dairy, sesam"
      },
      {
        "name": "Duck Maki",
        "price": "209,-",
        "desc": "Deep fried duck, avocado, cream cheese, mango, wasabi mayo, teriyaki saus",
        "lines": [
          "Deep fried duck, avocado, cream cheese, mango, wasabi mayo, teriyaki saus"
        ],
        "allergens": "Allergens: Gluten, dairy, egg, soya, sesam, sennep"
      },
      {
        "name": "Dragon Maki",
        "price": "209,-",
        "desc": "Tempura scampi, cream cheese, cucumber and avocado, topped with teriyaki sauce.",
        "lines": [
          "Tempura scampi, cream cheese, cucumber and avocado, topped with teriyaki sauce."
        ],
        "allergens": "Allergens: shellfish, wheat, dairy, egg, soya, sesam"
      }
    ]
  },
  {
    "category": "Set menu",
    "items": [
      {
        "name": "Salmon delux",
        "price": "429,-",
        "desc": "4 SLICES SASHIMI SALMON 4 PIECES NIGIRI SALMON (2 torched, 2 normal) 1 PIECES SALMON MAKI",
        "lines": [
          "4 SLICES SASHIMI SALMON",
          "4 PIECES NIGIRI SALMON (2 torched, 2 normal)",
          "1 PIECES SALMON MAKI"
        ],
        "allergens": ""
      },
      {
        "name": "Sushi roll mix",
        "price": "549,-",
        "desc": "6 SLICES SASHIMI (CHEF’S CHOICE) 4 PIECES NIGIRI (CHEF’S CHOICE) 1 PIECES MAKI (CHEF’S CHOICE)",
        "lines": [
          "6 SLICES SASHIMI (CHEF’S CHOICE)",
          "4 PIECES NIGIRI (CHEF’S CHOICE)",
          "1 PIECES MAKI (CHEF’S CHOICE)"
        ],
        "allergens": ""
      },
      {
        "name": "Maki Set 32 pieces",
        "price": "759,-",
        "desc": "SPICY TUNA SPICY SALMON TEMPURA SPECIAL TEMPURA STRAWBERRY",
        "lines": [
          "SPICY TUNA",
          "SPICY SALMON",
          "TEMPURA SPECIAL",
          "TEMPURA STRAWBERRY"
        ],
        "allergens": ""
      },
      {
        "name": "Maki Set 46 pieces",
        "price": "1099,-",
        "desc": "HOT ROLL SPICY TUNA SPICY SALMON TEMPURA SPECIAL TEMPURA STRAWBERRY FRIED SALMON",
        "lines": [
          "HOT ROLL",
          "SPICY TUNA",
          "SPICY SALMON",
          "TEMPURA SPECIAL",
          "TEMPURA STRAWBERRY",
          "FRIED SALMON"
        ],
        "allergens": ""
      },
      {
        "name": "Maki Set 54 pieces",
        "price": "1299,-",
        "desc": "HOT ROLL SPICY SALMON SPICY TUNA FRIED SALMON CRUNCHY ROLL TEMPURA SPECIAL TEMPURA STRAWBERRY",
        "lines": [
          "HOT ROLL",
          "SPICY SALMON",
          "SPICY TUNA",
          "FRIED SALMON",
          "CRUNCHY ROLL",
          "TEMPURA SPECIAL",
          "TEMPURA STRAWBERRY"
        ],
        "allergens": ""
      },
      {
        "name": "Special set for 2 personer",
        "price": "1225,-",
        "desc": "APPETIZER: TEMPURA SALAD 6 SLICES SASHIMI (CHEF’S CHOICE) 6 PIECES NIGIRI (CHEF’S CHOICE) 24 PIECES MAKI (CHEF’S CHOICE)",
        "lines": [
          "APPETIZER: TEMPURA SALAD",
          "6 SLICES SASHIMI (CHEF’S CHOICE)",
          "6 PIECES NIGIRI (CHEF’S CHOICE)",
          "24 PIECES MAKI (CHEF’S CHOICE)"
        ],
        "allergens": ""
      },
      {
        "name": "Special set for 3 personer",
        "price": "1449,-",
        "desc": "APPETIZER: TEMPURA SALAD 9 SLICES SASHIMI (CHEF’S CHOICE) 6 PIECES NIGIRI (CHEF’S CHOICE) 30 PIECES MAKI (CHEF’S CHOICE)",
        "lines": [
          "APPETIZER: TEMPURA SALAD",
          "9 SLICES SASHIMI (CHEF’S CHOICE)",
          "6 PIECES NIGIRI (CHEF’S CHOICE)",
          "30 PIECES MAKI (CHEF’S CHOICE)"
        ],
        "allergens": ""
      }
    ]
  },
  {
    "category": "Dessert",
    "items": [
      {
        "name": "Sakura Bliss Roll",
        "price": "159,-",
        "desc": "Dessert roll with soy paper, sweet cream cheese, banana, kiwi, strawberries, chocolate sauce and crispy masago arare.",
        "lines": [
          "Dessert roll with soy paper, sweet cream cheese, banana, kiwi, strawberries, chocolate sauce and crispy masago arare."
        ],
        "allergens": "Allergens: Soya, dairy"
      },
      {
        "name": "Dagens is",
        "price": "105,-",
        "desc": "",
        "lines": [],
        "allergens": ""
      }
    ]
  },
  {
    "category": "Sauces",
    "items": [
      {
        "name": "Teriyaki Sauce",
        "price": "40,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergies: Soya"
      },
      {
        "name": "Chili Mayo",
        "price": "35,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergies: egg, sesam"
      },
      {
        "name": "Spicy Mayo",
        "price": "40,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergies: Egg, soya, fish, gluten"
      },
      {
        "name": "Jalapeño Sauce",
        "price": "40,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergies: Ingen kjente allergener"
      },
      {
        "name": "Ponzu Sauce",
        "price": "35,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergies: Soya"
      },
      {
        "name": "Yuzu Ponzu",
        "price": "40,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergies: Soya"
      },
      {
        "name": "Sweet Truffle Ponzu",
        "price": "40,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergies: Soya"
      },
      {
        "name": "Yuzu Mayo",
        "price": "40,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergies: Egg, soya"
      },
      {
        "name": "Wasabi Mayo",
        "price": "35,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergies: egg, sennep"
      },
      {
        "name": "Onion Yuzu Dressing",
        "price": "40,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergies: Ingen kjente allergener"
      },
      {
        "name": "Yuzu Emulsion (Vegan)",
        "price": "40,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergies: Ingen kjente allergener"
      },
      {
        "name": "Sweet Chili Sauce",
        "price": "35,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergies: : Ingen kjente allergener"
      },
      {
        "name": "Soya Sauce",
        "price": "30,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergies: Soya"
      }
    ]
  }
];
