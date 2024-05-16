// Layouts.

import Home from '~/pages/Home';
import Products from '~/pages/Products';
import ProductDetails from '~/pages/ProductDetails';
import ShoppingCart from '~/pages/ShoppingCart';

// Public routes.
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/productDetails', component: ProductDetails },
    { path: '/shoppingCart', component: ShoppingCart },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
