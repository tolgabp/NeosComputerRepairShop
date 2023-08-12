const Part = require('../models/part');
const multer = require('multer')

//multer
const path = require('path');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'imageUploads/')
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + '_' + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage });


//Defined API endpoint to create parts
exports.postAPart = [upload.single('image'), async (req, res, next) => {
    const partType = req.body.partType;
    const modelName = req.body.modelName;
    const brandName = req.body.brandName;
    const price = req.body.price;
    const image = req.file.path; // this will be the path where your image got stored

    const part = new Part({
        partType,
        modelName,
        brandName,
        price,
        image
    });

    try {
        await part.save();
        return res.status(200).json({
            message: 'Part added successfully',
            data: part
        });
    } catch (error) {
        console.error(error);
        res.status(400).send('An error occurred while trying to create the part.');
    }
}]; 