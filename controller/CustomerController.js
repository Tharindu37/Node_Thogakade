const Customer = require('../model/CustomerSchema');

const saveCustomer=(req,resp)=>{
    const customerDto = new Customer({
        id: req.body.id,
        name: req.body.name,
        address: req.body.address,
        salary: req.body.salary
    });
    customerDto.save().then(result=>{
        resp.status(201).json(result);
    }).catch(error=>{
        resp.status(500).json(error);
    });
}
const updateCustomer=(req,resp)=>{
    Customer.updateOne({id: req.body.id},{
        name: req.body.name,
        address: req.body.address,
        salary: req.body.salary
    }).then(result=>{
        resp.status(201).json(result);
    }).catch(error=>{
        resp.status(500).json(error);
    });
}
const getCustomer=(req,resp)=>{

}
const deleteCustomer=(req,resp)=>{

}
const getAllCustomers=(req,resp)=>{

}

module.exports = {
    saveCustomer,
    updateCustomer,
    deleteCustomer,
    getCustomer,
    getAllCustomers
}