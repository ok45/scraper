const scraper = require("../browser/scraper.js")

exports.getResults = async (req, res) =>{
    try{
        let data = await scraper(req.body.text)
        let dat = JSON.stringify(data)
        res.json(data)
    }catch{res.json({err:"chyba"})} 
}
