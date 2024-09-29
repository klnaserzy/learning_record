import { defineStore } from "pinia";
import { ref } from "vue";
import { works } from "@/utils/image";

export const useWorksStore = defineStore('worksStore', () => {
  const id = ref(0);

  const chooseId = (selectedId) => {
    id.value = selectedId;
  }

  return {id, chooseId}
})