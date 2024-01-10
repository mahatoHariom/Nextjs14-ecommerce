
const handleImageUploadFunction= async (imageFile:any) => {
    const formdata = new FormData();
    formdata.append("file", imageFile);
    formdata.append("upload_preset", "gv3rra7z");
    formdata.append("cloud_name", "daheobzzn");
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/daheobzzn/image/upload",
        {
          method: "POST",
          body: formdata,
        }
      );
      const data = await response.json();
      console.log(data)
      return data ;
  };
  
  export default handleImageUploadFunction;
  