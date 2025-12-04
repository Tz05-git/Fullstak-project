import { useCreatPoductMutation } from "./ProductApiSlice";
import { useState } from "react";
import { AutoComplete } from 'primereact/autocomplete';

const AdminAdd = ()=>{
const [formData,setfomeData]= useState ({
    name: "",
    price:"",
    category:"",
    count:""
})
const [value, setVlue]= useState ('');
const [items ,setItems]=useState([]);

const search = (event) => {
    setItems([...Array(10).keys()].map(item => event.query + '-' + item));
}
const [addnewProduct,{isError,error,data}]=useCreatPoductMutation()
const handleChange =(e)=>{
    const {name,value}=e.target
    setfomeData({
        ...formData,
        [name]:value
    })
}
 const handleSubmit =(e)=>{
   e.preventDefault();
   debugger
    addnewProduct(formData)
  setfomeData({
    name: "",
    price:"",
    category:""
  })
 }
return(
    <div className="add-product-container">
      <h2 className="form-title">Add a New Product</h2>
            <form className="add-product-form" onSubmit={(e)=>handleSubmit(e)}>
             <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required onChange={(e)=>handleChange(e)}/>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" required onChange={(e)=>handleChange(e)}/>
        </div>
        <div className="form-group">
          <label htmlFor="price">count:</label>
          <input type="number" id="count" name="count" required onChange={(e)=>handleChange(e)}/>
        </div>
         
            <div className="form-group">
          <label htmlFor="category">Caregory:</label>
          <textarea id="category" name="category" required onChange={(e)=>handleChange(e)}></textarea>
        </div>
        <div>
            <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) =>setVlue(e.value)}  />
        </div>
        <button type="submit" className="submit-btn">Add Product</button>
      </form>
     </div> 
  )
};
export default AdminAdd;

