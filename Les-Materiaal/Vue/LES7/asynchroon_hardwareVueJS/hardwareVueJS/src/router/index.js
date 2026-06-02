import { createRouter, createWebHistory } from 'vue-router';
import HardwareView from '../views/HardwareView.vue';
import HardwareReviewView from '../views/HardwareReviewView.vue';

const routes = [
    {
        path: '/',
        redirect: '/hardware'
    },
    {
        path: '/hardware',
        name: 'HardwareOverzicht',
        component: HardwareView
    },
    {
        path: '/hardware-reviews',
        name: 'HardwareReviews',
        component: HardwareReviewView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;