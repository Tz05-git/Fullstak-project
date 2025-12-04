const res = require("express/lib/response")
const Basket =require("../moduls/basket")
const { default: mongoose } = require("mongoose")



const add= async (req,res)=>{
    const {productId} =req .body
   
  if(!productId ||! mongoose.Types.ObjectId.isValid(productId)){
   return res.status(400).json({massage:"Invalid or missing productId"})
  }


   let basket = await Basket.findOne({userId:req.user.userId})
   if(!basket){
   basket = new Basket({
      userId: req.user.userId,
      items: [{ productId, quantity:1 }]
    });
  } else {
    const index = basket.items.findIndex(
      item => item.productId.toString() === productId
    );

    if (index > -1) {
      basket.items[index].quantity += 1;
    } else {
      basket.items.push({
        productId: mongoose.Types.ObjectId(productId),
        quantity:1
      });
    }
  }

  await basket.save(); 
  res.status(200).json({ message: "עודכן בהצלחה", basket });
};


const getAll= async (req,res)=>{
    if(!basket){
       return res.status(400).json({massage:"You have no items in your Basket "})
    }
 const basket = await Basket.findOne({userId: req.user.userId}).populate("items.productId")
 res.json(basket)
}

const upbasket = async (req,res)=>{
   const {productId,quantity} = req.body
  
  const basket = await Basket.findOne({ userId: req.user.userId });

  if (!basket) return res.status(404).json({ message: "Basket not found" });

  
   if(!productId || !mongoose.Types.ObjectId(productId)){
    return res.status(400).json({massage:"Invalid productId" })
   }
 if(!quantity<=0){
     return res.status(400).json({massage:"Quantity must be greater than 0" }) 
 }
 const items = basket.items.find(i=>i.productId.toString()==productId)
 if(items){
     items.quantity=quantity
     await Basket.save()
     res.json(basket)
    }
    else{
        return res.status(400).json({massage:"Product not found in basket"  })
    }

}

const deletitems = async (req,res)=>{
const basket = await Basket.findOne({ userId: req.user.userId });
 if (!basket){
   return res.status(404).json({ message: "Basket not found" });
  } 
  const { productId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(productId)) {
  return res.status(400).json({ message: "Invalid productId" });
}
basket.items=basket.items.filter(i=>i.productId.toString()==productId)
  await basket.save()
  res.json(basket)
}





module.exports={add, getAll,upbasket,deletitems}