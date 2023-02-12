const mongoose = require('mongoose');

const {Schema} = mongoose


const dataSchema = new Schema({
    firstname:{
        type:String,
        required:[true,"First name is required"],
    },
    lastname:{
        type:String,
        required:[true,"Last name is required"],
    },
    email:{
        type:String,
        required:[true,"Email is required"],

        unique:true,
    },
    telephone:{
        type:Number,
        required:[true,"Telephone Number is required"],
        unique:true,
    },
    address1:{
        type:String,
        required:[true,"Address1  is required"],
    },
    address2:{
        type:String,
        default:"",
    },
    city:{
        type:String,
        required:[true,"City  is required"],

    },
    postcode:{
        type:Number,
        required:[true,"Post Code  is required"],
    },
    country:{
        type:String,
        required:[true,"Country is required"],
    },
    state:{
        type:String,
        required:[true,"State is required"],

    },
    password:{
        type:String,
        required:[true,"Password is required"],
        min: [6, 'Must be greater than or wqual to 6'],
    },
    emailvarification:{
        type:Boolean,
        default:false,
    },
    terms:{
        type:Boolean,
        required:[true,"Agree width out terms and condition"],
    },
    newslatter:{
        type:Boolean,
        default:false,
    }

})
const User = mongoose.model('User',dataSchema);
module.exports = User;