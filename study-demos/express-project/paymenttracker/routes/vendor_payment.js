const express = require("express");
const router = express.Router();
const VendorPayment = require("../modules/vendorPayment.js");

// Create a new Invoice for Vendor
router.post("/",async (req,res)=>{
    try{
        const vendorPayment = new VendorPayment(req.body);
        const savePayment = await vendorPayment.save();
        res.json(savePayment);
    }catch(error){
        res.status(400).json({message:error.message});
    }
})
router.get("/", async(req,res)=>{
    try {
        const vendorPayments = await VendorPayment.find();
        res.json(vendorPayments);
    }catch(error){
        res.status(500).json({message:error.message});
    }
})

router.get("/payment/:payment_status",async(req,res)=>{
    try{
        const vendorPayments = await VendorPayment.find({payment_status:req.params.payment_status})
        res.json(vendorPayments);
    }catch(err){
        res.status(500).json({message:error.message})
    }
})
router.get("/vendor/:vendor_id",async (req,res)=>{
    try {
        const vendorPayments = await VendorPayment.find({vendor_id:req.params.vendor_id});
        res.json(vendorPayments)
    }catch(error){
        res.status(500).json({message:error.message})
    }
})
router.put("/:transaction_id",async (req,res)=>{
    try{
        const transaction = await VendorPayment.findOne({transaction_id: req.params.transaction_id })
        if(transaction){
          //  const vendorPayment = new VendorPayment(req.body);
           const updatedFields = {};
            updatedFields.balance_amount  = transaction.balance_amount - req.body.amount;
            updatedFields.payment_status = updatedFields.balance_amount<=0? "Fully Paid": "Partially Paid"
            updatedFields.payment_date = new Date();
            const savedPayment = await VendorPayment.updateOne({
                transaction_id:req.params.transaction_id
            },updatedFields)
            res.json(savedPayment)
        }else{
            res.status(400).json({message:"No such transaction found"})
        }
    }catch(error){
        console.log(error);
        res.status(400).json({message:error.message})
    }
})

router.delete("/:transaction_id",async (req,res)=>{
    try{
        const savedPayment = await VendorPayment.deleteOne({ transaction_id:req.params.transaction_id})
        console.log(savedPayment);
        res.json({message:"Vendor Payment deleted successfully"});
    }catch(error){
        res.status(500).json({message:error.message});
    }
});

module.exports = router;