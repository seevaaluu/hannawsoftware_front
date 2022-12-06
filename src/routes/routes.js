import MasterPokemonRegister from '../views/MasterPokemonRegister.vue';
import Login from '../views/LoginComponent.vue'
import Home from '../views/HomeComponent.vue'
import TrainersList from '../views/TrainersListComponent.vue'
import Settings from '../views/SettingsComponent.vue'

const routes = [
    { path: "/", component: MasterPokemonRegister, name: "root" },
    { path: "/login", component: Login, name: "login" },
    { path: "/home", component: Home, name: "home" },
    { path: "/entrenadores", component: TrainersList, name: "entrenadores" },
    { path: "/configuraciones", component: Settings, name: "configuraciones" },
];

export default routes;