const {Router} = require('express')
const path = require('path')
const fs = require('fs')

const router = Router()

router.get(
    '/', 
    async (req, res) => {
        try {
            let {start, end} = req.query
            start = Number(start)
            end = Number(end)
            const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'groups.json')))
            if (end < data.length) {
                res.status(200).json({ data: data.slice(start, end), result:0 })
            } else {
                res.status(200).json({data: data.slice(start, data.length), result:1 })
            }
            
        } catch (e) {
            res.status(400).json({ result: 0 })
        }
        
    }
)

module.exports = router