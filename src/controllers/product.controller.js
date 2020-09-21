import Product from '../models/Product';

export async function getProducts(req, res){
    try{
        const products = await Product.findAll({
            attributes: ['id', 'business_id', 'name', 'description', 'price', 'category', 'note', 'image'],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            data: products
        });
    } catch(e){
        console.log(e);
    }
}

export async function getProductsByBusiness(req, res){
    try{
        const { business_id } = req.params;
        const products = await Product.findAll({
            attributes: ['id', 'business_id', 'name', 'description', 'price', 'category', 'note', 'image'],
            where: { business_id }
        });
        res.json({
            data: products
        });
    } catch(e){
        console.log(e);
    }
}