import { create } from 'zustand';
import axios from 'axios';

const partsStore = create((set) => ({
  // State variables for part details
  partType: '',
  modelName: '',
  brandName: '',
  price: '',
  image: null,

  // Setters for updating state variables
  setPartType: (partType) => set({ partType }),
  setModelName: (modelName) => set({ modelName }),
  setBrandName: (brandName) => set({ brandName }),
  setPrice: (price) => set({ price }),
  setImage: (image) => set({ image }),
  handleSubmit: async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('partType', partsStore.getState().partType);
    formData.append('modelName', partsStore.getState().modelName);
    formData.append('brandName', partsStore.getState().brandName);
    formData.append('price', partsStore.getState().price);
    formData.append('image', partsStore.getState().image);

    try {
      const response = await axios.post('/parts', formData);
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  },
}));

export default partsStore;
