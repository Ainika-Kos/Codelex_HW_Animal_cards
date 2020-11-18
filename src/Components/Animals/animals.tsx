import React from 'react';

export type AnimalsType = {
    id: number;
    isActive: boolean;
    name: string;
    category: string;
    description: string;
    img: string;
}

export const Animals: AnimalsType[] = [
    {
        id: 0,
        isActive: false,
        name: 'Grey wolf',
        category: 'Wolf',
        description: 'Gray wolf or grey wolf, is a large canine native to Eurasia and North America. In Latvia, gray wolves began to live after the end of the ice age.',
        img: 'https://thepawreport.files.wordpress.com/2018/01/600px-gray_wolf_28558475909129.jpg?w=600',
    },
    {
        id: 1,
        isActive: false,
        name: 'Brown bear',
        category: 'Bear',
        description: 'The brown bear is a large bear species found across Eurasia and North America, also in Latvia. The populations of brown bears are called grizzly bears. Mass: 80 – 600 kg, Height: 70 – 150 cm, Lifespan: 20 – 35 years.',
        img: 'https://b.rgbimg.com/users/k/kr/krappweis/600/nVIuw1O.jpg',
    },
    {
        id: 2,
        isActive: false,
        name: 'Red fox',
        category: 'Fox',
        description: 'The red fox (Vulpes vulpes) is the largest of the true foxes and one of the most widely distributed members of the order Carnivora. Lifespan: 2 – 5 years (in the wild), Mass: 2.2 – 14 kg, Tail length: 30 – 56 cm. ',
        img: 'https://lh3.googleusercontent.com/proxy/sAqqO9yIoxKUDHmm6i3Q2ZwJvclEos0uLKeaPG7h7BZz3l_DOJ72M-gWr2z2tenfgWf7d0nDdUU2GhaWeQPQ-DKMI_nT2ss',
    },
    {
        id: 3,
        isActive: false,
        name: 'Squirrel',
        category: 'Squirrel',
        description: 'Squirrels are members of the family Sciuridae, a family that includes small or medium-size rodents. There are two species of the squirrel family in Latvia: the common squirrel (Sciurus vulgaris) and the squirrel (Pteromys volans). Lifespan: 6-10 years, Mass: 400-600 g, Length: 20cm (average).',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Golden-mantled_Ground_Squirrel_%2814881748598%29.jpg/600px-Golden-mantled_Ground_Squirrel_%2814881748598%29.jpg',
    },
    {
        id: 4,
        isActive: false,
        name: 'Rabbit',
        category: 'Rabbit',
        description: 'The European hare, also known as the brown hare, is a species of hare native to Europe and parts of Asia. The gray hare is also a newcomer in Latvia. It came slowly from the south in the 17th century and is now found throughout the country, but unevenly. Its total population in Latvia is 20,000 individuals. Mass: 3.8 kg, Length: 53 cm, Lifespan: 4-8 years.',
        img: 'https://render.fineartamerica.com/images/rendered/default/poster/8/8/break/images-medium-5/grand-canyon-wildlife-rabbit-square-shawn-obrien.jpg',
    },
    {
        id: 5,
        isActive: false,
        name: 'Boar',
        category: 'Boar',
        description: 'The wild boar, also known as the "wild swine", "common wild pig", or simply "wild pig", is a suid native to much of Eurasia and North Africa. According to statistical data from 2002, there are about 30,400 wild boars in Latvia. Height: 55-120 cm, Tail length: 15-40 cm, Mass: 75-100 kg (male), 60-80 kg (female). Lifespan: 10-12 years',
        img: 'https://pyxis.nymag.com/v1/imgs/1d9/d03/a8708fcdfd5541fc04f0619c3d1032ffc1-30-wild-boar-europe.rsquare.w700.jpg',
    },
    // {
    //     id: 6,
    //     isActive: false,
    //     name: 'Boar',
    //     category: 'Boar',
    //     description: 'The wild boar, also known as the "wild swine", "common wild pig", or simply "wild pig", is a suid native to much of Eurasia and North Africa. According to statistical data from 2002, there are about 30,400 wild boars in Latvia. Height: 55-120 cm, Tail length: 15-40 cm, Mass: 75-100 kg (male), 60-80 kg (female). Lifespan: 10-12 years',
    //     img: 'https://pyxis.nymag.com/v1/imgs/1d9/d03/a8708fcdfd5541fc04f0619c3d1032ffc1-30-wild-boar-europe.rsquare.w700.jpg',
    // },
]