var express = require('express');

var routes = function(Material){

    var materialRouter = express.Router();

materialRouter.route('/materials')
        .get(function(req, res){
            //var responseJson = {hello :"testing this api"};

            var query = {};

            if(req.query.code){
                query.code = req.query.code;
            }

            Material.find(query,function(err, materials){
                if(err){
                    res.status(500).send(err);
                    console.log(err);
                }else{
                   res.json(materials);
                }
            });

            //res.json(responseJson);
        }); 

materialRouter.route('/material/:materialId')
        .get(function(req, res){

            
        console.log(req.params.materialId);
            Material.findById(req.params.materialId,function(err, materials){
                if(err){
                    res.status(500).send(err);
                    console.log(err);
                }else{
                   res.json(materials);
                }
            });
    
    });
        
//add
materialRouter.route('/material/add')
        .post(function(req, res){
            var material = new Material(req.body);
           //save material
            material.save();
        // console.log(material);
        
        //material created
        res.status(201).send(material);
        }); 

//update
materialRouter.route('/material/:materialId/update')
        .put(function(req, res){

            Material.findById(req.params.materialId,function(err, material){
                if(err){
                    res.status(500).send(err);
                    console.log(err);
                }else{
                    material.code = req.body.code;
                    material.name = req.body.name;
                    material.unit_price = req.body.unit_price;
                    material.stock_level = req.body.stock_level;

                    material.save();
                    res.json(material);
                }
            });
        }); 


        //del
materialRouter.route('/material/:materialId/delete')
.delete(function(req, res){

    Material.findById(req.params.materialId,function(err, material){
        if(err){
            res.status(500).send(err);
            console.log(err);
        }else{
            material.remove(function(err){
                if(err){
                    res.status(500).send(err);
                }else{
                    res.status(204).send("Removed");
                }
            });
            
        }
    });
}); 

        return materialRouter;
};


module.exports = routes;