// I'd For categories, use first and last letters in capital, 0(Not use if more than 9), and then number(IF available categories + 1)
// I'd For categories subCategories, use first and last letters in capital, use first and last letters of main category in capital, 0(Not use if more than 9), and then number(IF available categories + 1)

import React from "react"
import APPlE_IMAGE from "../assets/Images/Products/Fruits/apples-Fruits.jpg"
import BANANA_IMAGE from "../assets/Images/Products/Fruits/banana-Fruits.jpg"
import BREAKFAST_IMAGE from "../assets/Images/Products/Fruits/breakfast-Fruits.jpg"
import ORANGE_IMAGE from "../assets/Images/Products/Fruits/orange-Fruits.jpg"
import PINEAPPLE_IMAGE from "../assets/Images/Products/Fruits/pineapple-Fruits.jpg"
import POMEGRANATE_IMAGE from "../assets/Images/Products/Fruits/pomegranate-Fruits.jpg"

export

    const products = [
        {
            "categoryId": 'FRS01',
            "categoryName": "Fruits",
            "subCategory": [
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "APPlE_IMAGE", "subCatProductImage": APPlE_IMAGE },
                { "subCatProductId": "BAi_FRS02", "subCatProductName": "BANANA_IMAGE", "subCatProductImage": BANANA_IMAGE },
                { "subCatProductId": "BTi_FRS03", "subCatProductName": "BREAKFAST_IMAGE", "subCatProductImage": BREAKFAST_IMAGE },
                { "subCatProductId": "OEi_FRS04", "subCatProductName": "ORANGE_IMAGE", "subCatProductImage": ORANGE_IMAGE },
                { "subCatProductId": "PEi_FRS05", "subCatProductName": "PINEAPPLE_IMAGE", "subCatProductImage": PINEAPPLE_IMAGE },
                { "subCatProductId": "PEi_FRS06", "subCatProductName": "POMEGRANATE_IMAGE", "subCatProductImage": POMEGRANATE_IMAGE },
            ]
        },
        {
            "categoryId": 1,
            "categoryName": "Fruits",
            "subCategory": [
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
            ]
        },
        {
            "categoryId": 1,
            "categoryName": "Fruits",
            "subCategory": [
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
            ]
        },
        {
            "categoryId": 1,
            "categoryName": "Fruits",
            "subCategory": [
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
            ]
        },
        {
            "categoryId": 1,
            "categoryName": "Fruits",
            "subCategory": [
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
            ]
        },
        {
            "categoryId": 1,
            "categoryName": "Fruits",
            "subCategory": [
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
            ]
        },
        {
            "categoryId": 1,
            "categoryName": "Fruits",
            "subCategory": [
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
            ]
        },
        {
            "categoryId": 1,
            "categoryName": "Fruits",
            "subCategory": [
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
            ]
        },
        {
            "categoryId": 1,
            "categoryName": "Fruits",
            "subCategory": [
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
                { "subCatProductId": "ASi_FRS01", "subCatProductName": "sampleProduct", "subCatProductImage": "sampleImage" },
            ]
        }
    ];