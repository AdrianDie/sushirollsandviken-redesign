const MENU_DATA = [
  {
    "category": "Small Dishes",
    "items": [
      {
        "name": "Spicy Edamame",
        "price": "99,-",
        "desc": "Seasoned edamame beans with kimchi and lime juice",
        "lines": [
          "Seasoned edamame beans with kimchi and lime juice"
        ],
        "allergens": "Allergens: soy, gluten"
      },
      {
        "name": "Edamame with salt",
        "price": "95,-",
        "desc": "Edamame beans with sea salt",
        "lines": [
          "Edamame beans with sea salt"
        ],
        "allergens": "Allergens: soy"
      },
      {
        "name": "NEW Salmon Tataki",
        "price": "209,-",
        "desc": "Lightly torched salmon, salad mix, yuzu ponzu, spicy kizami wasabi, smoked herring caviar and chives.",
        "lines": [
          "Lightly torched salmon, salad mix, yuzu ponzu, spicy kizami wasabi, smoked herring caviar and chives."
        ],
        "allergens": "Allergens: fish, soy, mustard"
      },
      {
        "name": "NEW Tuna Tataki",
        "price": "235,-",
        "desc": "Sesame-crusted tuna, yuzu ponzu, sriracha, pickled Japanese takuan and chives.",
        "lines": [
          "Sesame-crusted tuna, yuzu ponzu, sriracha, pickled Japanese takuan and chives."
        ],
        "allergens": "Allergens: fish, soy, sesame"
      },
      {
        "name": "Seaweed Salad",
        "price": "79,-",
        "desc": "Seaweed salad",
        "lines": [
          "Seaweed salad"
        ],
        "allergens": "Allergens: soy, sesame, wheat (gluten)"
      },
      {
        "name": "Tempura Starter",
        "price": "149,-",
        "desc": "Fried scampi served with salad mix, cucumber, avocado, seaweed salad, yuzu mayo and teriyaki sauce",
        "lines": [
          "Fried scampi served with salad mix, cucumber, avocado, seaweed salad, yuzu mayo and teriyaki sauce"
        ],
        "allergens": "Allergens: gluten (wheat), shellfish, egg, soy, sesame"
      },
      {
        "name": "Scallop Starter",
        "price": "159,-",
        "desc": "Fried scallop served with salad mix, cucumber, avocado, seaweed salad, yuzu mayo, teriyaki sauce, trout roe and spring onion",
        "lines": [
          "Fried scallop served with salad mix, cucumber, avocado, seaweed salad, yuzu mayo, teriyaki sauce, trout roe and spring onion"
        ],
        "allergens": "Allergens: gluten (wheat), molluscs, egg, soy, sesame"
      },
      {
        "name": "Chicken Gyoza (3 pcs)",
        "price": "125,-",
        "desc": "Chicken dumplings with yuzu emulsion and crispy onion",
        "lines": [
          "Chicken dumplings with yuzu emulsion and crispy onion"
        ],
        "allergens": "Allergens: gluten (wheat), soy"
      },
      {
        "name": "Yakitori Sticks (3 pcs)",
        "price": "129,-",
        "desc": "Chicken skewer with salad mix, seaweed salad, teriyaki sauce, Japanese pepper and sesame",
        "lines": [
          "Chicken skewer with salad mix, seaweed salad, teriyaki sauce, Japanese pepper and sesame"
        ],
        "allergens": "Allergens: gluten (wheat), soy, sesame"
      },
      {
        "name": "Vegetarian Spring Rolls (2 pcs)",
        "price": "99,-",
        "desc": "Vegetarian spring rolls",
        "lines": [
          "Vegetarian spring rolls"
        ],
        "allergens": "Allergens: gluten (wheat), egg"
      },
      {
        "name": "Chicken Spring Rolls (2 pcs)",
        "price": "119,-",
        "desc": "Spring rolls with chicken",
        "lines": [
          "Spring rolls with chicken"
        ],
        "allergens": "Allergens: gluten (wheat), egg"
      }
    ]
  },
  {
    "category": "Poke Bowl",
    "items": [
      {
        "name": "Vegetarian",
        "price": "235,-",
        "desc": "Sushi rice, salad mix, seaweed salad, pickled daikon radish, edamame, strawberry, avocado, cucumber, wasabi mayo and teriyaki sauce",
        "lines": [
          "Sushi rice, salad mix, seaweed salad, pickled daikon radish, edamame, strawberry, avocado, cucumber, wasabi mayo and teriyaki sauce"
        ],
        "allergens": "Allergens: gluten, egg, soy, sesame, mustard"
      },
      {
        "name": "Salmon",
        "price": "255,-",
        "desc": "Sushi rice, salad mix, cucumber, avocado, seaweed salad, edamame, ponzu sauce, chili mayo and teriyaki sauce",
        "lines": [
          "Sushi rice, salad mix, cucumber, avocado, seaweed salad, edamame, ponzu sauce, chili mayo and teriyaki sauce"
        ],
        "allergens": "Allergens: fish, egg, soy, sesame, gluten"
      },
      {
        "name": "Tempura",
        "price": "249,-",
        "desc": "Sushi rice, salad mix, cucumber, avocado, seaweed salad, edamame, tempura scampi, chili mayo and teriyaki sauce",
        "lines": [
          "Sushi rice, salad mix, cucumber, avocado, seaweed salad, edamame, tempura scampi, chili mayo and teriyaki sauce"
        ],
        "allergens": "Allergens: gluten, shellfish, egg, soy, sesame"
      },
      {
        "name": "Mix",
        "price": "269,-",
        "desc": "Sushi rice, salad mix, cucumber, avocado, seaweed salad, edamame, salmon, tuna, hamachi, ponzu sauce, chili mayo and teriyaki sauce",
        "lines": [
          "Sushi rice, salad mix, cucumber, avocado, seaweed salad, edamame, salmon, tuna, hamachi, ponzu sauce, chili mayo and teriyaki sauce"
        ],
        "allergens": "Allergens: fish, egg, soy, sesame"
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
        "allergens": "Allergens: fish, mustard, soy"
      },
      {
        "name": "Tuna",
        "price": "219,-",
        "desc": "Tuna with seaweed salad, truffle-ponzu, crispy onion and spring onion",
        "lines": [
          "Tuna with seaweed salad, truffle-ponzu, crispy onion and spring onion"
        ],
        "allergens": "Allergens: fish, soy, gluten, sesame"
      },
      {
        "name": "Scallop",
        "price": "229,-",
        "desc": "Scallop with seaweed salad, yuzu-ponzu, furikake, chives and smoked herring caviar",
        "lines": [
          "Scallop with seaweed salad, yuzu-ponzu, furikake, chives and smoked herring caviar"
        ],
        "allergens": "Allergens: molluscs, soy, gluten, sesame"
      }
    ]
  },
  {
    "category": "Nigiri / 2 pieces",
    "items": [
      {
        "name": "Salmon",
        "price": "79,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergens: fish, soy, gluten"
      },
      {
        "name": "Tuna",
        "price": "89,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergens: fish, soy, gluten"
      },
      {
        "name": "Hamachi",
        "price": "95,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergens: fish, soy, gluten"
      },
      {
        "name": "Ebi",
        "price": "79,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergens: shellfish, soy, gluten"
      },
      {
        "name": "Scallop",
        "price": "89,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergens: molluscs, soy, gluten"
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
        "allergens": "Allergens: fish, soy"
      },
      {
        "name": "Scallop",
        "price": "95,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergens: molluscs, egg, soy"
      },
      {
        "name": "Hamachi",
        "price": "115,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergens: fish, soy"
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
        "allergens": "Allergens: shellfish, soy, sesame, gluten"
      },
      {
        "name": "Hot Roll",
        "price": "185,-",
        "desc": "Salmon with cucumber, spring onion, sriracha, spicy mayo and chives",
        "lines": [
          "Salmon with cucumber, spring onion, sriracha, spicy mayo and chives"
        ],
        "allergens": "Allergens: fish, gluten, egg, soy, sesame"
      },
      {
        "name": "Vulcano Salmon",
        "price": "219,-",
        "desc": "Salmon tartare with seaweed salad, spicy mayo, togarashi, trout roe and chives",
        "lines": [
          "Salmon tartare with seaweed salad, spicy mayo, togarashi, trout roe and chives"
        ],
        "allergens": "Allergens: gluten, fish, egg, sesame, soy"
      },
      {
        "name": "Vulcano Shrimp",
        "price": "219,-",
        "desc": "Shrimp tartare with tobiko, spicy mayo, togarashi, teriyaki sauce and chives",
        "lines": [
          "Shrimp tartare with tobiko, spicy mayo, togarashi, teriyaki sauce and chives"
        ],
        "allergens": "Allergens: gluten, shellfish, egg, sesame, soy, fish"
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
        "allergens": "Allergens: sesame"
      },
      {
        "name": "Tempura Roll",
        "price": "179,-",
        "desc": "Tempura scampi with avocado",
        "lines": [
          "Tempura scampi with avocado"
        ],
        "allergens": "Allergens: gluten, shellfish, egg, sesame"
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
        "allergens": "Allergens: fish, egg, sesame"
      },
      {
        "name": "Spicy Salmon",
        "price": "185,-",
        "desc": "Salmon, spring onion, chili mayo",
        "lines": [
          "Salmon, spring onion, chili mayo"
        ],
        "allergens": "Allergens: fish, egg, sesame"
      },
      {
        "name": "Spicy Scallop",
        "price": "195,-",
        "desc": "Scallop, chili mayo, spring onion",
        "lines": [
          "Scallop, chili mayo, spring onion"
        ],
        "allergens": "Allergens: molluscs, egg, sesame"
      },
      {
        "name": "California Roll",
        "price": "175,-",
        "desc": "Ebi scampi, cucumber, avocado, wasabi mayo, tobiko",
        "lines": [
          "Ebi scampi, cucumber, avocado, wasabi mayo, tobiko"
        ],
        "allergens": "Allergens: shellfish, egg, sesame, soy, mustard, gluten"
      },
      {
        "name": "Rainbow Roll",
        "price": "199,-",
        "desc": "Ebi scampi, cucumber, avocado, topped with salmon, tuna and hamachi, wasabi mayo and chives",
        "lines": [
          "Ebi scampi, cucumber, avocado, topped with salmon, tuna and hamachi, wasabi mayo and chives"
        ],
        "allergens": "Allergens: shellfish, fish, egg, sesame"
      },
      {
        "name": "Fried Salmon",
        "price": "169,-",
        "desc": "Fried salmon, spring onion, spicy mayo and teriyaki sauce",
        "lines": [
          "Fried salmon, spring onion, spicy mayo and teriyaki sauce"
        ],
        "allergens": "Allergens: fish, soy, sesame, gluten, egg"
      }
    ]
  },
  {
    "category": "Special Rolls (8 pieces)",
    "items": [
      {
        "name": "Vegetarian Special",
        "price": "185,-",
        "desc": "Cucumber, avocado, bell pepper, cream cheese, strawberry, wasabi mayo, teriyaki sauce",
        "lines": [
          "Cucumber, avocado, bell pepper, cream cheese, strawberry, wasabi mayo, teriyaki sauce"
        ],
        "allergens": "Allergens: dairy, egg, soy, sesame"
      },
      {
        "name": "Tempura Special",
        "price": "219,-",
        "desc": "Tempura scampi, avocado, torched salmon on top, yuzu mayo and teriyaki sauce",
        "lines": [
          "Tempura scampi, avocado, torched salmon on top, yuzu mayo and teriyaki sauce"
        ],
        "allergens": "Allergens: shellfish, fish, gluten, egg, soy, sesame"
      },
      {
        "name": "Tempura Strawberry",
        "price": "209,-",
        "desc": "Tempura scampi, avocado, strawberry, cream cheese, wasabi mayo, teriyaki sauce",
        "lines": [
          "Tempura scampi, avocado, strawberry, cream cheese, wasabi mayo, teriyaki sauce"
        ],
        "allergens": "Allergens: shellfish, gluten, dairy, egg, soy, sesame, mustard"
      },
      {
        "name": "Salmon Strawberry",
        "price": "209,-",
        "desc": "Salmon, avocado, cream cheese, strawberry, wasabi mayo, teriyaki sauce",
        "lines": [
          "Salmon, avocado, cream cheese, strawberry, wasabi mayo, teriyaki sauce"
        ],
        "allergens": "Allergens: fish, dairy, egg, soy, sesame, mustard"
      },
      {
        "name": "Crunchy Roll",
        "price": "215,-",
        "desc": "Fried scallop and torched salmon, yuzu mayo and teriyaki sauce",
        "lines": [
          "Fried scallop and torched salmon, yuzu mayo and teriyaki sauce"
        ],
        "allergens": "Allergens: molluscs, gluten, egg, soy, sesame, fish"
      },
      {
        "name": "Crunchy Tuna",
        "price": "195,-",
        "desc": "Tuna, pickled radish (daikon), sriracha and masago arare",
        "lines": [
          "Tuna, pickled radish (daikon), sriracha and masago arare"
        ],
        "allergens": "Allergens: fish, sesame"
      },
      {
        "name": "Special Tuna",
        "price": "219,-",
        "desc": "Tempura scampi, seaweed salad, tuna, wasabi mayo and sriracha",
        "lines": [
          "Tempura scampi, seaweed salad, tuna, wasabi mayo and sriracha"
        ],
        "allergens": "Allergens: shellfish, fish, gluten, egg, sesame, mustard"
      },
      {
        "name": "Philadelphia Roll",
        "price": "195,-",
        "desc": "Salmon, spring onion and cream cheese",
        "lines": [
          "Salmon, spring onion and cream cheese"
        ],
        "allergens": "Allergens: fish, dairy, sesame"
      },
      {
        "name": "Duck Maki",
        "price": "209,-",
        "desc": "Deep fried duck, avocado, cream cheese, mango, wasabi mayo, teriyaki sauce",
        "lines": [
          "Deep fried duck, avocado, cream cheese, mango, wasabi mayo, teriyaki sauce"
        ],
        "allergens": "Allergens: gluten, dairy, egg, soy, sesame, mustard"
      },
      {
        "name": "Dragon Maki",
        "price": "209,-",
        "desc": "Tempura scampi, cream cheese, cucumber and avocado, topped with teriyaki sauce.",
        "lines": [
          "Tempura scampi, cream cheese, cucumber and avocado, topped with teriyaki sauce."
        ],
        "allergens": "Allergens: shellfish, wheat, dairy, egg, soy, sesame"
      }
    ]
  },
  {
    "category": "Set Menu",
    "items": [
      {
        "name": "Salmon Deluxe",
        "price": "429,-",
        "desc": "4 slices salmon sashimi, 4 pieces salmon nigiri (2 torched, 2 regular), 1 salmon maki",
        "lines": [
          "4 slices salmon sashimi",
          "4 pieces salmon nigiri (2 torched, 2 regular)",
          "1 salmon maki"
        ],
        "allergens": ""
      },
      {
        "name": "Sushi Roll Mix",
        "price": "549,-",
        "desc": "6 slices sashimi (chef's choice), 4 pieces nigiri (chef's choice), 1 maki (chef's choice)",
        "lines": [
          "6 slices sashimi (chef's choice)",
          "4 pieces nigiri (chef's choice)",
          "1 maki (chef's choice)"
        ],
        "allergens": ""
      },
      {
        "name": "Maki Set 32 pieces",
        "price": "759,-",
        "desc": "Spicy tuna, Spicy salmon, Tempura special, Tempura strawberry",
        "lines": [
          "Spicy tuna",
          "Spicy salmon",
          "Tempura special",
          "Tempura strawberry"
        ],
        "allergens": ""
      },
      {
        "name": "Maki Set 46 pieces",
        "price": "1099,-",
        "desc": "Hot roll, Spicy tuna, Spicy salmon, Tempura special, Tempura strawberry, Fried salmon",
        "lines": [
          "Hot roll",
          "Spicy tuna",
          "Spicy salmon",
          "Tempura special",
          "Tempura strawberry",
          "Fried salmon"
        ],
        "allergens": ""
      },
      {
        "name": "Maki Set 54 pieces",
        "price": "1299,-",
        "desc": "Hot roll, Spicy salmon, Spicy tuna, Fried salmon, Crunchy roll, Tempura special, Tempura strawberry",
        "lines": [
          "Hot roll",
          "Spicy salmon",
          "Spicy tuna",
          "Fried salmon",
          "Crunchy roll",
          "Tempura special",
          "Tempura strawberry"
        ],
        "allergens": ""
      },
      {
        "name": "Special set for 2 people",
        "price": "1225,-",
        "desc": "Starter: tempura salad, 6 slices sashimi (chef's choice), 6 pieces nigiri (chef's choice), 24 pieces maki (chef's choice)",
        "lines": [
          "Starter: tempura salad",
          "6 slices sashimi (chef's choice)",
          "6 pieces nigiri (chef's choice)",
          "24 pieces maki (chef's choice)"
        ],
        "allergens": ""
      },
      {
        "name": "Special set for 3 people",
        "price": "1449,-",
        "desc": "Starter: tempura salad, 9 slices sashimi (chef's choice), 6 pieces nigiri (chef's choice), 30 pieces maki (chef's choice)",
        "lines": [
          "Starter: tempura salad",
          "9 slices sashimi (chef's choice)",
          "6 pieces nigiri (chef's choice)",
          "30 pieces maki (chef's choice)"
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
        "allergens": "Allergens: soy, dairy"
      },
      {
        "name": "Ice cream of the day",
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
        "allergens": "Allergens: soy"
      },
      {
        "name": "Chili Mayo",
        "price": "35,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergens: egg, sesame"
      },
      {
        "name": "Spicy Mayo",
        "price": "40,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergens: egg, soy, fish, gluten"
      },
      {
        "name": "Jalapeño Sauce",
        "price": "40,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergens: no known allergens"
      },
      {
        "name": "Ponzu Sauce",
        "price": "35,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergens: soy"
      },
      {
        "name": "Yuzu Ponzu",
        "price": "40,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergens: soy"
      },
      {
        "name": "Sweet Truffle Ponzu",
        "price": "40,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergens: soy"
      },
      {
        "name": "Yuzu Mayo",
        "price": "40,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergens: egg, soy"
      },
      {
        "name": "Wasabi Mayo",
        "price": "35,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergens: egg, mustard"
      },
      {
        "name": "Onion Yuzu Dressing",
        "price": "40,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergens: no known allergens"
      },
      {
        "name": "Yuzu Emulsion (Vegan)",
        "price": "40,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergens: no known allergens"
      },
      {
        "name": "Sweet Chili Sauce",
        "price": "35,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergens: no known allergens"
      },
      {
        "name": "Soya Sauce",
        "price": "30,-",
        "desc": "",
        "lines": [],
        "allergens": "Allergens: soy"
      }
    ]
  }
];
