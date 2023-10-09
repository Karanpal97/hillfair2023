class crudRepository{
  constructor(model){
   this.model=model;
  }

  async create(data){
try{const responce= await this.model.create(data);
   return responce}
   catch(error){
    throw error
   }
 }

 async findOne(id){
   const find=await this.model.findById(id);
   return find;

 }
 async destroy(id){
  const responce =await this.model.findByIdAndDelete(id);
  return responce
 }






 async findAll(){
   const findAll = await this.model.find();
  
   return findAll;
 }

 async findbyName(text){
try{const name=await this.model.find({
  text:text
})
return name}
catch(error){
  console.log(error);
  throw error

}
 }

async bulkCreate(data){
  const responce=await this.model.insertMany(data);
  return responce
}

}



module.exports=crudRepository;