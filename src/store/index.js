import { defineStore } from "pinia";
import { ref } from "vue";
export const useBlindDateStore = defineStore("blindDate", () => {
	let a = ref(6);
	return { a };
});
