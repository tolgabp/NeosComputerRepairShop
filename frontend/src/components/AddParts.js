import React from 'react';
import axios from 'axios';
import  partsStore from '../stores/partsStore';

const AddParts = () => {
  // Retrieve state variables and functions from partsStore
  const [partType, setPartType] = partsStore((state) => [state.partType, state.setPartType]);
  const [modelName, setModelName] = partsStore((state) => [state.modelName, state.setModelName]);
  const [brandName, setBrandName] = partsStore((state) => [state.brandName, state.setBrandName]);
  const [price, setPrice] = partsStore((state) => [state.price, state.setPrice]);
  const [image, setImage] = partsStore((state) => [state.image, state.setImage]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('partType', partType);
    formData.append('modelName', modelName);
    formData.append('brandName', brandName);
    formData.append('price', price);
    formData.append('image', image);

    try {
      const response = await axios.post('/parts', formData);
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={partType} onChange={(e) => setPartType(e.target.value)}>
        <option value="">Select part type</option>
        <option value="memory">Memory</option>
        <option value="storage">Storage</option>
        <option value="gpu">GPU</option>
        <option value="cpu">CPU</option>
        <option value="motherboard">Motherboard</option>
        <option value="other">Other</option>
      </select>
      <input
        type="text"
        value={modelName}
        onChange={(e) => setModelName(e.target.value)}
        placeholder="Model name"
      />
      <input
        type="text"
        value={brandName}
        onChange={(e) => setBrandName(e.target.value)}
        placeholder="Brand name"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button type="submit">Add part</button>
    </form>
  );
};

export default AddParts;
