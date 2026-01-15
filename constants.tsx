
import { MenuItem } from './types';

export const RESTAURANT_NAME = "Too Hot Too Spicy";
export const RESTAURANT_PHONE = "03054319696";
export const LOCATION_DETAILS = {
  address: "Service Rd, Shahdara Town, Lahore, 54000, Pakistan",
  plusCode: "J7FQ+9G Lahore, Pakistan",
  coords: "31.62351922729357, 74.28883317021581",
  status: "Open · Closes 2 AM"
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'p1',
    name: 'Malai Tikka Pizza',
    description: 'Creamy malai chunks with onions, bell peppers and special white sauce.',
    price: 1250,
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 's1',
    name: 'Zinger Shawarma',
    description: 'Crispy zinger strips wrapped with fresh pickles and spicy mayo.',
    price: 350,
    category: 'Shawarma',
    image: 'https://images.unsplash.com/photo-1561651823-34fed0225304?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'p2',
    name: 'Too Hot Too Spicy Special Pizza',
    description: 'Our signature spicy pizza loaded with pepperoni, jalapeños, and extra chili oil.',
    price: 1550,
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd723b593e?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'b1',
    name: 'Zinger Burger',
    description: 'Giant crispy chicken fillet with lettuce and signature spice sauce.',
    price: 550,
    category: 'Burger',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'b2',
    name: 'Pizza Burger',
    description: 'The ultimate hybrid: A juicy burger stuffed with pizza cheese and toppings.',
    price: 650,
    category: 'Burger',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'p3',
    name: 'Kababish Pizza',
    description: 'Topped with authentic Pakistani kabab chunks and local spices.',
    price: 1350,
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'p4',
    name: 'Kabab Crust Pizza',
    description: 'Signature pizza where the crust itself is filled with soft kababs.',
    price: 1650,
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'c1',
    name: 'Wings and Pizza',
    description: 'A combo platter of 6 spicy wings and a medium pizza of your choice.',
    price: 1850,
    category: 'Combo',
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'p5',
    name: 'Pizza Fajitas',
    description: 'Mexican style fajita chicken with capsicum, tomatoes and salsa.',
    price: 1250,
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'p6',
    name: 'Pizza Funghi',
    description: 'A mushroom lover\'s dream with white mushrooms and mozzarella.',
    price: 1100,
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1593246049226-ded77bf50326?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'p7',
    name: 'Pizza Paratha',
    description: 'Desi paratha style base topped with chicken tikka and mint raita.',
    price: 450,
    category: 'Fusion',
    image: 'https://images.unsplash.com/photo-1626082866744-322b3e0400aa?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'p8',
    name: 'Fajita Pizza',
    description: 'Traditional fajita pizza with black olives and sweet corn.',
    price: 1200,
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1511688868353-3a3f7346317f?q=80&w=2000&auto=format&fit=crop'
  }
];
