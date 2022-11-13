import { HomePage, ProductPage, NewProductPage, SellingPage, SalePage, BlogPage, ContactPage, LoginPage, RegisterPage, SearchPage } from '../pages';

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/new-products', component: NewProductPage },
    { path: '/products', component: ProductPage },
    { path: '/selling', component: SellingPage },
    { path: '/sale', component: SalePage },
    { path: '/blog', component: BlogPage },
    { path: '/contact', component: ContactPage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/search', component: SearchPage }
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
