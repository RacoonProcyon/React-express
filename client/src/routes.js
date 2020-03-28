import Home from "./views/user/home";
import RestaurantHome from "./views/user/unauthome/restaurantHome";
import Restaurants from "./views/user/unauthome";
import Order from "./components/user/authorize";
import Offer from "./components/user/authorize/offers";
import Favourites from "./components/user/authorize/Favourites";
import Payments from "./components/user/authorize/Payments";
import Address from "./components/user/authorize/Address";

export default [
    {
        key: "1",
        path: "/",
        exact: true,
        component: Home
    },
    {
        key: "2",
        path: "/restaurants",
        component: Restaurants
    },
    {
        key: "3",
        path: "/restaurant",
        component: RestaurantHome
    },
    {
        key:'4',
        path:'/orders',
        component:Order
    },
    {
        key:'5',
        path:'/offers',
        component:Offer
    },
    {
        key:'6',
        path:'/favourites',
        component:Favourites
    },
    {
        key:'7',
        path:'/payments',
        component:Payments
    },
    {
        key:'8',
        path:'/address',
        component:Address
    }
]