import MasterPokemonRegister from '../views/MasterPokemonRegister.vue';
import Login from '../views/LoginComponent.vue'

const routes = [
    { path: "/", component: MasterPokemonRegister, name: "root" },
    { path: "/login", component: Login, name: "login" },
];

export default routes;