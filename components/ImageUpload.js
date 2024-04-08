import React, { useState } from 'react';

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(selectedFile);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-5  ">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className=" ml-[30rem] "
      />

      {image && (
        <div className="-mt-5 h-32 w-32 rounded-full ">
          <img  src={image} alt="Uploaded" className="w-32 h-32 rounded-full -mt-12 " />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;