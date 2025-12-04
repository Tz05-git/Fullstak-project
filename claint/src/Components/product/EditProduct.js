import { useParams, useNavigate } from "react-router-dom";
import { useGetProductQuery, useUpProductMutation } from "./ProductApiSlice";
import { useState, useEffect } from "react";

const EditProduct = ({id,visible,setVisible}) => {
  // const { id } = useParams();
  const navigate = useNavigate();
  const { data: product, isSuccess } = useGetProductQuery(id);
  const [updateProduct] = useUpProductMutation();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    id: id
  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(() => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(id);
    await updateProduct(formData);
    setVisible(false)
    //navigate("/admin"); // חזרה לעמוד ניהול אחרי העדכון
  };

  return (
    
    <form onSubmit={handleSubmit} visible={visible}>
      <h2>עריכת מוצר</h2>
      <label>שם:</label>
      <input name="name" value={formData.name} onChange={handleChange} />
      <label>מחיר:</label>
      <input name="price" value={formData.price} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>שמור שינויים</button>
    </form>
  );
};

export default EditProduct;