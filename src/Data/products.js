// I'd For categories, use first and last letters in capital, 0(Not use if more than 9), and then number(IF available categories + 1)
// I'd For categories subCategories, use first and last letters in capital, use first and last letters of main category in capital, 0(Not use if more than 9), and then number(IF available categories + 1)

// import React from "react"

//Fruits
// import APPlE_IMAGE from "../assets/Images/Products/Fruits/apples-Fruits.jpg"
import APPlE_IMAGE from "../assets/Images/Products/Fruits/fruit-3860991_1920.jpg"
import BANANA_IMAGE from "../assets/Images/Products/Fruits/banana-Fruits.jpg"
import BREAKFAST_IMAGE from "../assets/Images/Products/Fruits/breakfast-Fruits.jpg"
import CHERRIES_IMAGE from "../assets/Images/Products/Fruits/cherries-Fruits.jpg"
// import ORANGE_IMAGE from "../assets/Images/Products/Fruits/orange-Fruits.jpg"
import ORANGE_IMAGE from "../assets/Images/Products/Fruits/oranges-1995056_1920.jpg"
import PINEAPPLE_IMAGE from "../assets/Images/Products/Fruits/pineapple-Fruits.jpg"
import POMEGRANATE_IMAGE from "../assets/Images/Products/Fruits/pomegranate-Fruits.jpg"

//Vegetables
import ONION_IMAGE from "../assets/Images/Products/Vegetables/onion-Vegetables.jpg";
// import CUCUMBER_IMAGE from "../assets/Images/Products/Vegetables/cucumber-Vegetables.jpg";
import CUCUMBER_IMAGE from "../assets/Images/Products/Vegetables/cucumber-78789_1920.jpg";
import DRUMSTICK_IMAGE from "../assets/Images/Products/Vegetables/drumstick-Vegetables.jpg";
import FLOWER_IMAGE from "../assets/Images/Products/Vegetables/flower-Vegetables.jpg";
import POTATOES_IMAGE from "../assets/Images/Products/Vegetables/potatoes-Vegetables.jpg";
import RED_ONIONS_IMAGE from "../assets/Images/Products/Vegetables/red-onions-Vegetable-.jpg";
import SERRANO_PEPPERS_IMAGE from "../assets/Images/Products/Vegetables/serrano-peppers-Vegetables.jpg";
import TEXTURES_IMAGE from "../assets/Images/Products/Vegetables/textures-Vegetables.jpg";
// import TOMATOES_IMAGE from "../assets/Images/Products/Vegetables/tomatoes-Vegetables.jpg";
import TOMATOES_IMAGE from "../assets/Images/Products/Vegetables/tomatoes-2559809_1920.jpg";
// import WHITE_CABBAGE_IMAGE from "../assets/Images/Products/Vegetables/white-cabbage-Vegetables.jpg";
import WHITE_CABBAGE_IMAGE from "../assets/Images/Products/Vegetables/cabbage-3722517_1920.jpg";

//Masalas
import CHILLIPOWDER_IMAGE from "../assets/Images/Products/Masalas/chilliPowder-Masalas.jpg";
import CINNAMON_IMAGE from "../assets/Images/Products/Masalas/cinnamon-Masalas.jpg";
import SPICES_IMAGE from "../assets/Images/Products/Masalas/spices-Masalas.jpg";
import TURMARIC_IMAGE from "../assets/Images/Products/Masalas/turmaric-Masalas.jpg";

//Dry Fruits
import ALMONDS_IMAGE from "../assets/Images/Products/DryFruits/almonds-DryFruits.jpg";
import CHSHEW_IMAGE from "../assets/Images/Products/DryFruits/chshew-DryFruits.jpg";
import MIXDRY_IMAGE from "../assets/Images/Products/DryFruits/mixDry-Fruits.jpg";
import RAISINS_IMAGE from "../assets/Images/Products/DryFruits/raisins-DryFruits.jpg";
import WALNUTS_IMAGE from "../assets/Images/Products/DryFruits/walnuts-DryFruits.jpg";

export const products = [
    {
        "categoryId": 'FRS01',
        "categoryName": "Fruits",
        "categoryImage": BREAKFAST_IMAGE,
        "subCategory": [
            { "subCatProductId": "ASi_FRS101", "subCatProductName": "Apple", "subCatProductImage": APPlE_IMAGE },
            { "subCatProductId": "BAi_FRS102", "subCatProductName": "Banana", "subCatProductImage": BANANA_IMAGE },
            { "subCatProductId": "BTi_FRS103", "subCatProductName": "KiWi", "subCatProductImage": BREAKFAST_IMAGE },
            { "subCatProductId": "CSi_FRS104", "subCatProductName": "Cherries", "subCatProductImage": CHERRIES_IMAGE },
            { "subCatProductId": "OEi_FRS105", "subCatProductName": "Orange", "subCatProductImage": ORANGE_IMAGE },
            { "subCatProductId": "PEi_FRS106", "subCatProductName": "Pineapple", "subCatProductImage": PINEAPPLE_IMAGE },
            { "subCatProductId": "PGi_FRS107", "subCatProductName": "Pomegranate", "subCatProductImage": POMEGRANATE_IMAGE },
        ]
    },
    {
        "categoryId": 'VEG02',
        "categoryName": "Vegetables",
        "categoryImage": ONION_IMAGE,
        "subCategory": [
            { "subCatProductId": "ONi_VEG201", "subCatProductName": "Onion", "subCatProductImage": ONION_IMAGE },
            { "subCatProductId": "CRi_VEG202", "subCatProductName": "Cucumber", "subCatProductImage": CUCUMBER_IMAGE },
            { "subCatProductId": "DKi_VEG203", "subCatProductName": "Drumstick", "subCatProductImage": DRUMSTICK_IMAGE },
            { "subCatProductId": "FRi_VEG204", "subCatProductName": "Flower", "subCatProductImage": FLOWER_IMAGE },
            { "subCatProductId": "PSi_VEG205", "subCatProductName": "Potatoes", "subCatProductImage": POTATOES_IMAGE },
            { "subCatProductId": "RSi_VEG206", "subCatProductName": "Red Onions", "subCatProductImage": RED_ONIONS_IMAGE },
            { "subCatProductId": "SSi_VEG207", "subCatProductName": "Serrano Peppers", "subCatProductImage": SERRANO_PEPPERS_IMAGE },
            { "subCatProductId": "TSi_VEG208", "subCatProductName": "Textures", "subCatProductImage": TEXTURES_IMAGE },
            { "subCatProductId": "TMi_VEG209", "subCatProductName": "Tomatoes", "subCatProductImage": TOMATOES_IMAGE },
            { "subCatProductId": "WCi_VEG210", "subCatProductName": "White Cabbage", "subCatProductImage": WHITE_CABBAGE_IMAGE },
        ]
    },
    {
        "categoryId": 'SPI03',
        "categoryName": "Spices",
        "categoryImage": CINNAMON_IMAGE,
        "subCategory": [
            { "subCatProductId": "CRi_SPI301", "subCatProductName": "Chilli Powder", "subCatProductImage": CHILLIPOWDER_IMAGE },
            { "subCatProductId": "CNi_SPI302", "subCatProductName": "Cinnamon", "subCatProductImage": CINNAMON_IMAGE },
            { "subCatProductId": "SSi_SPI303", "subCatProductName": "Spices", "subCatProductImage": SPICES_IMAGE },
            { "subCatProductId": "TCi_SPI304", "subCatProductName": "Turmaric", "subCatProductImage": TURMARIC_IMAGE },
        ]
    },
    {
        "categoryId": 'DRYFRU04',
        "categoryName": "Dry Fruits",
        "categoryImage": ALMONDS_IMAGE,
        "subCategory": [
            { "subCatProductId": "ASi_DRYFRU401", "subCatProductName": "Almonds", "subCatProductImage": ALMONDS_IMAGE },
            { "subCatProductId": "CWi_DRYFRU402", "subCatProductName": "Chshew", "subCatProductImage": CHSHEW_IMAGE },
            { "subCatProductId": "MYi_DRYFRU403", "subCatProductName": "Mix Dry Fruits", "subCatProductImage": MIXDRY_IMAGE },
            { "subCatProductId": "RSi_DRYFRU404", "subCatProductName": "Raisins", "subCatProductImage": RAISINS_IMAGE },
            { "subCatProductId": "WS_DRYFRU405", "subCatProductName": "Walnuts", "subCatProductImage": WALNUTS_IMAGE },
        ]
    },
    // {
    //     "categoryId": 1,
    //     "categoryName": "Fruits",
    //     "subCategory": [
    //         { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
    //         { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
    //         { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
    //         { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
    //         { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
    //     ]
    // },
    // {
    //     "categoryId": 1,
    //     "categoryName": "Fruits",
    //     "subCategory": [
    //         { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
    //         { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
    //         { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
    //         { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
    //         { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
    //     ]
    // },
    // {
    //     "categoryId": 1,
    //     "categoryName": "Fruits",
    //     "subCategory": [
    //         { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
    //         { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
    //         { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
    //         { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
    //         { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
    //     ]
    // },
    // {
    //     "categoryId": 1,
    //     "categoryName": "Fruits",
    //     "subCategory": [
    //         { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
    //         { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
    //         { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
    //         { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
    //         { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
    //     ]
    // },
    // {
    //     "categoryId": 1,
    //     "categoryName": "Fruits",
    //     "subCategory": [
    //         { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
    //         { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
    //         { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
    //         { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
    //         { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
    //     ]
    // }
];