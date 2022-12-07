const express = require('express');
const Teklif = require('../models/Post');
const router = express.Router();
router.get('/', async (req,res) => {
    try{
       const posts = await Teklif.find();
       res.json(posts);
       console.log(posts)
    }catch(err){
        res.json({message:err})
    }
})

router.post('/', async (req,res) => {
   const post = new Teklif({
       ad:req.body.ad,
       soyad:req.body.soyad,
       email:req.body.email,
       desc:req.body.desc
   });
   try{
   const savedPost =  await post.save();
   res.json(savedPost);
   }catch(err){
    res.json({message:err});
   }

})
router.get('/:postId', async (req,res)=> {
    try{
       const post = await Teklif.findById(req.params.postId);
    res.json(post); 
    }catch(err){
        res.json({message:err})
    }
    
})
router.delete('/:postId',async (req,res) => {
    try{
      const deletedPost = await Teklif.remove({_id:req.params.postId});
      res.json(deletedPost);
    }catch(err){
        res.json({message:err});
    }
})
router.patch('/:postId',async (req,res) => {
    try {
       updatedPost = await Teklif.updateOne({_id:req.params.postId},{$set:{ad:req.body.ad}});
       res.json(updatedPost);
    }catch(err){
        res.json({message:err});
    }
})
module.exports = router;