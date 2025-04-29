import React, { useState } from 'react';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
      setPreview(null);
      // Optionally, show an error message to the user
      alert('Por favor, selecciona un archivo de imagen válido.');
    }
  };

  // TODO: Add function to handle the actual upload to a server or storage
  // const handleUpload = async () => { ... };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Sube tu Imagen</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="block w-full text-sm text-gray-500
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0
                   file:text-sm file:font-semibold
                   file:bg-blue-50 file:text-blue-700
                   hover:file:bg-blue-100 mb-4"
      />
      {preview && (
        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2">Vista Previa:</h3>
          <img src={preview} alt="Vista previa de la imagen seleccionada" className="max-w-xs max-h-xs border rounded" />
        </div>
      )}
      {/* Add upload button later */}
      {/* {selectedImage && (
        <button
          onClick={handleUpload}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Confirmar Subida
        </button>
      )} */}
    </div>
  );
};

export default ImageUpload;

