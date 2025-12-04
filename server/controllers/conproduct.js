
const productmoduls = require("../moduls/productmoduls");


const getAll = async (req, res) => {
    const All = await productmoduls.find()
    if (!All?.length) {
        return res.status(400).json({ message: 'No tasks found' })
    }
    res.json(All)
}

const creatproduct = async (req, res) => {
    const { name, price, catgory, count,image } = req.body
    if (!name || !price) {
        console.log(name, price);
        return res.status(400).json({ massage: 'name is required' })
    }
    const p = await productmoduls.create({ name, price, catgory, count,image })
    res.json(p)
}

const updatep = async (req, res) => {
    const { name, price, id,image } = req.body
    if (!id) {  
        return res.status(400).json({ message: "fields are required" })
    }
    const up = await productmoduls.findById(id)
    if (!up) {
        return res.status(400).json({ message: 'name not found' })
    }
    up.image =image
    up.name = name
    up.price = price
    const updateProduct = await up.save()
    res.status(200).json(updateProduct);
}

const deletep = async (req, res) => {
    const { id } = req.params
    const de = await productmoduls.findById(id)
    if (!de) {
        return res.status(400).json({ message: 'name not found' })
    }
    const resualt = await de.deleteOne()

    const reply = ` NAME '${resualt.name}' ID ${resualt._id} deleted`
    res.json(reply)
}



module.exports = { creatproduct, getAll, updatep, deletep }