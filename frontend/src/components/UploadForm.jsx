import React, { useState } from "react";

const UploadForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  return (
    <>
      <label className="block text-gray-700 font-semibold mb-2">
        Profile Picture
      </label>

      <div
        className="relative border-2 border-dashed border-gray-300 rounded-sm p-6 text-center cursor-pointer hover:border-blue-400 transition"
        onClick={() => document.getElementById("imageUpload").click()}
      >
        {selectedImage ? (
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Preview"
            className="object-cover  mx-auto"
          />
        ) : (
          <div className="text-gray-400">
            <svg
              className="w-12 h-12 mx-auto mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16V4m0 0l3 3m-3-3L4 7m13 13h-3m0 0v-6m0 6l-3-3m3 3l3-3"
              />
            </svg>
            <p className="text-sm">Click to upload image</p>
          </div>
        )}
        <input
          id="imageUpload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </div>
    </>
  );
};

export default UploadForm;
