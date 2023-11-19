import { useState } from 'react';

function Form (){
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'photo' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server or perform actions
    console.log('Form Data:', formData);
  };

  return (
    <div className= 'vflex'>
    <form onSubmit={handleSubmit}>
      <div className= 'RHS'>
      <div>
        <label htmlFor="title">Awarded For: </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="description">Details: </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="photo">Photo: </label>
        <input
          type="file"
          id="photo"
          name="photo"
          accept="image/*"
          onChange={handleChange}
        />
      </div>
      </div>

      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default Form;