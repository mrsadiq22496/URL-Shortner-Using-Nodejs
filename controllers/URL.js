import { nanoid } from "nanoid";
import urlmodel from "../Models/Url.js";

export async function generateShortUrl(req, res){
    try{
    const { originalurl } = req.body;
    if(!originalurl)  return res.status(400).sendmessage({message: "Long URL is required"});

    const shortId = nanoid(10);


        //Save it in DB 
        const dataToSave = new urlmodel ({originalurl, shortId});
        await dataToSave.save();

        res
        .status(201)
        .send({ shortUrl: `${req.protocol}://${req.get("host")}/${shortId}` });
}catch(error){
    res.status(500)
    .send({message: "There is some Error. pls comeback later",
    errstring: error.message, 
});
}
}

export async function redirectToUrl(req, res) {
    try{
    const {shortId} = req.params;
    
    //IF THE URL DOES NOT HAVE SHORT ID 
    if(!shortId)  
        return res.status(400).sendmessage({message: "Short ID is required"});

    //FIND THE ORIGINAL URL
    const url = await urlmodel.findOne({ shortId: shortId });

    if(url){
        return res.redirect(url.originalurl);
    }
    else{
        return res.status(404).sendmessage({message: "NO URL FOUND"});
    }
    }
    catch(error){
        return res.status(500).send({
            message: "There is some Error. pls comeback later",
            errstring: error.message, 
});
    }
}
