import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useHardwareStore = defineStore('hardware', () => {
    const hardwareLijst = ref([]);
    const reviews = ref({}); // Structuur: { [componentId]: ['Review 1', 'Review 2'] }

    // Async/await actie om de data te fetchen
    const getData = async () => {
        if (hardwareLijst.value.length > 0) return; // Voorkom dubbel laden
        try {
            const response = await fetch('/data/data.json');
            if (!response.ok) throw new Error('Fout bij laden van JSON');
            hardwareLijst.value = await response.json();
        } catch (error) {
            console.error('Store error:', error);
        }
    };

    // Actie om een review toe te voegen
    const voegReviewToe = (componentId, reviewTekst) => {
        if (!reviews.value[componentId]) {
            reviews.value[componentId] = [];
        }
        reviews.value[componentId].push(reviewTekst);
    };

    // Getter-achtige functie om reviews voor een specifiek ID te pakken
    const getReviewsPerComponent = (componentId) => {
        return reviews.value[componentId] || [];
    };

    return {
        hardwareLijst,
        getData,
        voegReviewToe,
        getReviewsPerComponent
    };
});