//Fruits
// import APPlE_IMAGE from "../assets/Images/Products/Fruits/apples-Fruits.jpg"
import MIX_FRUITS_IMAGE from "../assets/Images/Products/Fruits/Mix-Fruits.jpg"
import APPlE_IMAGE from "../assets/Images/Products/Fruits/fruit-3860991_1920.jpg"
import BANANA_IMAGE from "../assets/Images/Products/Fruits/banana-Fruits.jpg"
import BREAKFAST_IMAGE from "../assets/Images/Products/Fruits/breakfast-Fruits.jpg"
import CHERRIES_IMAGE from "../assets/Images/Products/Fruits/cherries-Fruits.jpg"
// import ORANGE_IMAGE from "../assets/Images/Products/Fruits/orange-Fruits.jpg"
import ORANGE_IMAGE from "../assets/Images/Products/Fruits/oranges-1995056_1920.jpg"
import PINEAPPLE_IMAGE from "../assets/Images/Products/Fruits/pineapple-Fruits.jpg"
import POMEGRANATE_IMAGE from "../assets/Images/Products/Fruits/pomegranate-Fruits.jpg"
import STRAWBERRY_IMAGE from "../assets/Images/Products/Fruits/strawberries-Fruits.jpg"

//Vegetables
import MIX_VEGETABLES_IMAGE from "../assets/Images/Products/mix-vegetable.jpg";
import ONION_IMAGE from "../assets/Images/Products/Vegetables/onion-Vegetables.jpg";
// import CUCUMBER_IMAGE from "../assets/Images/Products/Vegetables/cucumber-Vegetables.jpg";
import CUCUMBER_IMAGE from "../assets/Images/Products/Vegetables/cucumber-78789_1920.jpg";
import DRUMSTICK_IMAGE from "../assets/Images/Products/Vegetables/drumstick-Vegetables.jpg";
import FLOWER_IMAGE from "../assets/Images/Products/Vegetables/flower-Vegetables.jpg";
import POTATOES_IMAGE from "../assets/Images/Products/Vegetables/potatoes-Vegetables.jpg";
import LEMONS_IMAGE from "../assets/Images/Products/Vegetables/lemons-Vegetables.jpg";
import SERRANO_PEPPERS_IMAGE from "../assets/Images/Products/Vegetables/serrano-peppers-Vegetables.jpg";
import TEXTURES_IMAGE from "../assets/Images/Products/Vegetables/textures-Vegetables.jpg";
// import TOMATOES_IMAGE from "../assets/Images/Products/Vegetables/tomatoes-Vegetables.jpg";
import TOMATOES_IMAGE from "../assets/Images/Products/Vegetables/tomatoes-2559809_1920.jpg";
// import WHITE_CABBAGE_IMAGE from "../assets/Images/Products/Vegetables/white-cabbage-Vegetables.jpg";
import WHITE_CABBAGE_IMAGE from "../assets/Images/Products/Vegetables/cabbage-3722517_1920.jpg";

//Spices
import SPICES_IMAGE from "../assets/Images/Products/spices.jpg";
import CHILLIPOWDER_IMAGE from "../assets/Images/Products/Masalas/chilliPowder-Masalas.jpg";
import CINNAMON_IMAGE from "../assets/Images/Products/Masalas/cinnamon-Masalas.jpg";
import SPICES_MASALA_IMAGE from "../assets/Images/Products/Masalas/spices-Masalas.jpg";
import TURMARIC_IMAGE from "../assets/Images/Products/Masalas/turmaric-Masalas.jpg";

//Dry Fruits
// import ALMONDS_IMAGE from "../assets/Images/Products/DryFruits/almonds-DryFruits.jpg";
import MIX_DRY_FRUITS_IMAGE from "../assets/Images/Products/DryFruits/nuts-mixFruits.jpg";
import ALMONDS_IMAGE from "../assets/Images/Products/DryFruits/almond-3849414_1920.jpg";
import CASHEW_IMAGE from "../assets/Images/Products/DryFruits/cashew-DryFruits.jpg";
import MIXDRY_IMAGE from "../assets/Images/Products/DryFruits/mixDry-Fruits.jpg";
import RAISINS_IMAGE from "../assets/Images/Products/DryFruits/raisins-DryFruits.jpg";
import WALNUTS_IMAGE from "../assets/Images/Products/DryFruits/walnuts-DryFruits.jpg";
import FIGS_IMAGE from "../assets/Images/Products/DryFruits/figs-DryFruits.jpg";
import GROUND_NUTS_IMAGE from "../assets/Images/Products/DryFruits/groundNuts.jpg";
import PISTACHIO_IMAGE from "../assets/Images/Products/DryFruits/pistachio-Fruits.jpg";

//Other Product
import OTHER_IMAGE from "../assets/Images/OtherProduct.jpg"

export const products = [
    {
        "categoryId": 'FRS01',
        "categoryName": "Fruits",
        "categoryImage": MIX_FRUITS_IMAGE,
        "subCategory": [
            { "subCatProductId": "0808.10.00", "subCatProductName": "Apple", "subCatProductImage": APPlE_IMAGE },
            { "subCatProductId": "0803 90 10", "subCatProductName": "Banana", "subCatProductImage": BANANA_IMAGE },
            { "subCatProductId": "0810.50.00", "subCatProductName": "KiWi", "subCatProductImage": BREAKFAST_IMAGE },
            { "subCatProductId": "0810.21.00", "subCatProductName": "Cherries", "subCatProductImage": CHERRIES_IMAGE },
            { "subCatProductId": "2008.30.10", "subCatProductName": "Orange", "subCatProductImage": ORANGE_IMAGE },
            { "subCatProductId": "2008.20.00", "subCatProductName": "Pineapple", "subCatProductImage": PINEAPPLE_IMAGE },
            { "subCatProductId": "0810.90.10", "subCatProductName": "Pomegranate", "subCatProductImage": POMEGRANATE_IMAGE },
            { "subCatProductId": "0810.10.00", "subCatProductName": "Strawberries", "subCatProductImage": STRAWBERRY_IMAGE },
        ]
    },
    {
        "categoryId": 'VEG02',
        "categoryName": "Vegetables",
        "categoryImage": MIX_VEGETABLES_IMAGE,
        "subCategory": [
            { "subCatProductId": "0703.10.10", "subCatProductName": "Onion", "subCatProductImage": ONION_IMAGE },
            { "subCatProductId": "CRi_VEG202", "subCatProductName": "Cucumber", "subCatProductImage": CUCUMBER_IMAGE },
            { "subCatProductId": "DKi_VEG203", "subCatProductName": "Drumstick", "subCatProductImage": DRUMSTICK_IMAGE },
            { "subCatProductId": "FRi_VEG204", "subCatProductName": "Flower", "subCatProductImage": FLOWER_IMAGE },
            { "subCatProductId": "PSi_VEG205", "subCatProductName": "Potatoes", "subCatProductImage": POTATOES_IMAGE },
            { "subCatProductId": "0805.50.00", "subCatProductName": "Lemons", "subCatProductImage": LEMONS_IMAGE },
            { "subCatProductId": "SSi_VEG207", "subCatProductName": "Serrano Peppers", "subCatProductImage": SERRANO_PEPPERS_IMAGE },
            { "subCatProductId": "TSi_VEG208", "subCatProductName": "Textures", "subCatProductImage": TEXTURES_IMAGE },
            { "subCatProductId": "TMi_VEG209", "subCatProductName": "Tomatoes", "subCatProductImage": TOMATOES_IMAGE },
            { "subCatProductId": "WCi_VEG210", "subCatProductName": "White Cabbage", "subCatProductImage": WHITE_CABBAGE_IMAGE },
        ]
    },
    {
        "categoryId": 'SPI03',
        "categoryName": "Spices",
        "categoryImage": SPICES_IMAGE,
        "subCategory": [
            { "subCatProductId": "CRi_SPI301", "subCatProductName": "Chilli Powder", "subCatProductImage": CHILLIPOWDER_IMAGE },
            { "subCatProductId": "0906.11.10", "subCatProductName": "Cinnamon", "subCatProductImage": CINNAMON_IMAGE },
            { "subCatProductId": "SMi_SPI303", "subCatProductName": "Spices", "subCatProductImage": SPICES_MASALA_IMAGE },
            { "subCatProductId": "0910.30", "subCatProductName": "Turmaric", "subCatProductImage": TURMARIC_IMAGE },
        ]
    },
    {
        "categoryId": 'DRYFRU04',
        "categoryName": "Dry Fruits",
        "categoryImage": MIX_DRY_FRUITS_IMAGE,
        "subCategory": [
            { "subCatProductId": "0802.1", "subCatProductName": "Almonds", "subCatProductImage": ALMONDS_IMAGE },
            { "subCatProductId": "0801.22.00", "subCatProductName": "Cashew", "subCatProductImage": CASHEW_IMAGE },
            { "subCatProductId": "MYi_DRYFRU403", "subCatProductName": "Mix Dry Fruits", "subCatProductImage": MIXDRY_IMAGE },
            { "subCatProductId": "0806.20.10", "subCatProductName": "Raisins", "subCatProductImage": RAISINS_IMAGE },
            { "subCatProductId": "0802.32.00", "subCatProductName": "Walnuts", "subCatProductImage": WALNUTS_IMAGE },
            { "subCatProductId": "2305.00.10", "subCatProductName": "Ground Nuts", "subCatProductImage": GROUND_NUTS_IMAGE },
            { "subCatProductId": "POi_DRYFRU407", "subCatProductName": "Pistachio", "subCatProductImage": PISTACHIO_IMAGE },
            { "subCatProductId": "0804.20", "subCatProductName": "Figs", "subCatProductImage": FIGS_IMAGE },
        ]
    },
    {
        "categoryId": 'USR05',
        "categoryName": "Enter Your Own Product",
        "categoryImage": OTHER_IMAGE,
    }
];