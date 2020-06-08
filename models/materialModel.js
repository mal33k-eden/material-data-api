var mongoose = require('mongoose'),
    Float = require('mongoose-float').loadType(mongoose),
    Schema = mongoose.Schema;


var materialModel = new Schema({
    code:{type:String},
    name:{type:String},
    unit_price:{type:Float},
    stock_level:{type:Float}
});

module.exports = mongoose.model('Material',materialModel);