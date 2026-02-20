export interface Product {
    id: string;
    nameKey: string;
    categoryKey: string;
    image: string;
    descriptionKey: string;
    [key: string]: any;
}

export const freshProducts: Product[] = [
    {
        id: 'mango',
        nameKey: 'Products.fresh.mango.name',
        originKey: 'Products.fresh.mango.origin',
        image: '/products/mango.jpg',
        varietiesKey: 'Products.fresh.mango.varieties',
        seasonKey: 'Products.fresh.mango.season',
        specsKey: 'Products.fresh.mango.specs',
        capacityKey: 'Products.fresh.mango.capacity',
        categoryKey: 'Products.categories.fresh',
    },
    {
        id: 'papaya',
        nameKey: 'Products.fresh.papaya.name',
        originKey: 'Products.fresh.papaya.origin',
        image: '/products/papaya.jpg',
        varietiesKey: 'Products.fresh.papaya.varieties',
        seasonKey: 'Products.fresh.papaya.season',
        specsKey: 'Products.fresh.papaya.specs',
        capacityKey: 'Products.fresh.papaya.capacity',
        categoryKey: 'Products.categories.fresh',
    },
    {
        id: 'passion-fruit',
        nameKey: 'Products.fresh.passion-fruit.name',
        originKey: 'Products.fresh.passion-fruit.origin',
        image: '/products/passion-fruit.jpg',
        varietiesKey: 'Products.fresh.passion-fruit.varieties',
        seasonKey: 'Products.fresh.passion-fruit.season',
        specsKey: 'Products.fresh.passion-fruit.specs',
        capacityKey: 'Products.fresh.passion-fruit.capacity',
        categoryKey: 'Products.categories.fresh',
    },
    {
        id: 'avocado',
        nameKey: 'Products.fresh.avocado.name',
        originKey: 'Products.fresh.avocado.origin',
        image: '/products/avocado.jpg',
        varietiesKey: 'Products.fresh.avocado.varieties',
        seasonKey: 'Products.fresh.avocado.season',
        specsKey: 'Products.fresh.avocado.specs',
        capacityKey: 'Products.fresh.avocado.capacity',
        categoryKey: 'Products.categories.fresh',
    },
    {
        id: 'pineapple',
        nameKey: 'Products.fresh.pineapple.name',
        originKey: 'Products.fresh.pineapple.origin',
        image: '/products/pineapple.jpg',
        varietiesKey: 'Products.fresh.pineapple.varieties',
        seasonKey: 'Products.fresh.pineapple.season',
        specsKey: 'Products.fresh.pineapple.specs',
        capacityKey: 'Products.fresh.pineapple.capacity',
        categoryKey: 'Products.categories.fresh',
    },
    {
        id: 'cocoa',
        nameKey: 'Products.fresh.cocoa.name',
        originKey: 'Products.fresh.cocoa.origin',
        image: '/products/cocoa.jpg',
        varietiesKey: 'Products.fresh.cocoa.varieties',
        seasonKey: 'Products.fresh.cocoa.season',
        specsKey: 'Products.fresh.cocoa.specs',
        capacityKey: 'Products.fresh.cocoa.capacity',
        categoryKey: 'Products.categories.fresh',
    },
    {
        id: 'cashew',
        nameKey: 'Products.fresh.cashew.name',
        originKey: 'Products.fresh.cashew.origin',
        image: '/products/cashew.jpg',
        varietiesKey: 'Products.fresh.cashew.varieties',
        seasonKey: 'Products.fresh.cashew.season',
        specsKey: 'Products.fresh.cashew.specs',
        capacityKey: 'Products.fresh.cashew.capacity',
        categoryKey: 'Products.categories.fresh',
    },
];

export const driedProducts: Product[] = [
    {
        id: 'fusion-fruit',
        nameKey: 'Products.dried.fusion.name',
        categoryKey: 'Products.categories.dried',
        image: '/products/dried-fusion.jpg',
        descriptionKey: 'Products.dried.fusion.description',
        sizesKey: 'Products.dried.fusion.sizes',
        certificationsKey: 'Products.dried.fusion.certifications',
    },
];

export const snackProducts: Product[] = [
    {
        id: 'fruit-bars',
        nameKey: 'Products.snacks.bars.name',
        categoryKey: 'Products.categories.snacks',
        image: '/products/fruit-bars.jpg',
        descriptionKey: 'Products.snacks.bars.description',
        sizesKey: 'Products.snacks.bars.sizes',
        whiteLabel: true,
        variantsKey: 'Products.snacks.bars.variants',
    },
    {
        id: 'fruit-balls',
        nameKey: 'Products.snacks.balls.name',
        categoryKey: 'Products.categories.snacks',
        image: '/products/fruit-balls.jpg',
        descriptionKey: 'Products.snacks.balls.description',
        sizesKey: 'Products.snacks.balls.sizes',
        whiteLabel: true,
        variantsKey: 'Products.snacks.balls.variants',
    },
    {
        id: 'fruit-rolls',
        nameKey: 'Products.snacks.rolls.name',
        categoryKey: 'Products.categories.snacks',
        image: '/products/fruit-rolls.jpg',
        descriptionKey: 'Products.snacks.rolls.description',
        sizesKey: 'Products.snacks.rolls.sizes',
        whiteLabel: true,
        variantsKey: 'Products.snacks.rolls.variants',
    },
    {
        id: 'fruit-cubes',
        nameKey: 'Products.snacks.cubes.name',
        categoryKey: 'Products.categories.snacks',
        image: '/products/fruit-cubes.jpg',
        descriptionKey: 'Products.snacks.cubes.description',
        sizesKey: 'Products.snacks.cubes.sizes',
        whiteLabel: true,
        variantsKey: 'Products.snacks.cubes.variants',
    },
];
