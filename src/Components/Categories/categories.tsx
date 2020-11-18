import React from 'react';

export type CategoriesType = {
    id: number;
    text: string;
    isActive: boolean
}

export const Categories: CategoriesType[] = [
    {
        id: 0,
        text: 'Wolf',
        isActive: false, 
    },
    {
        id: 1,
        text: 'Bear',
        isActive: false, 
    },
    {
        id: 2,
        text: 'Fox',
        isActive: false, 
    },
    {
        id: 3,
        text: 'Squirrel',
        isActive: false, 
    },
    {
        id: 4,
        text: 'Rabbit',
        isActive: false, 
    },
    {
        id: 5,
        text: 'Boar',
        isActive: false, 
    },
]