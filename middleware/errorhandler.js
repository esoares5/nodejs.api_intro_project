export const errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode?res.statusCode:500;
    switch(statusCode){
        case 400:
            res.json({"title":"Validation failed","message":err.message});
            break;
        case 404:
            res.json({"title":"Not found","message":err.message});
            break;
            
    }
};