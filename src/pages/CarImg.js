import React, { useState } from 'react';
import axios from 'axios';
import DefaultLayout from '../components/DefaultLayout';
import { uploadImageToServer } from '../redux/utils/api';
import { fetchCarsImage, uploadCarImage } from '../redux/action/carImageUploadAction';
import { connect } from 'react-redux';
function CarImg({CarImg,fetchCarsImage,uploadCarImage}) {
  const [imageSrc, setImageSrc] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
   
    if(!imageSrc){
        console.error('No Image selected!');
        return;
    }
    try {
        uploadCarImage(imageSrc)
    } catch (error) {
        console.error('Error uploading image',error)
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0]; // Fix the typo here
    console.log(file);

    try {
      const base64Image = await convertToBase64(file);
      setImageSrc(base64Image);
      console.log(imageSrc)
    } catch (error) {
      console.error('Error converting to base64:', error);
    }
  };

  async function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  return (
    <DefaultLayout>
      <form onSubmit={handleSubmit}>
        <img src={imageSrc} alt="Preview" style={{ width: '100px' }} />
        <input
          type="file"
          label="Image"
          name="myFile"
          id="file-upload"
          accept=".jpeg, .png, .jpg"
          onChange={(e) => handleFileUpload(e)}
        />
        <button type="submit">Upload</button>
      </form>
    </DefaultLayout>
  );
}

const mapStateToProps = (state) => ({
    carImageUpload: state.carImageUpload.carImage,
  });
  

const mapDispatchToProps={
    fetchCarsImage,
    uploadCarImage,
};

export default connect(mapStateToProps,mapDispatchToProps)(CarImg)