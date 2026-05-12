const multer=require('multer');
const path=require('path');
const storage=multer.diskStorage({

  destination: function(req, file, cb) {
    cb(null, 'Uploads/')
  },
  filename: function (req, file, cb) {
          const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1000)
          cb(null, uniqueName + path.extname(file.originalname))
      }
});
const fileUpload=multer({storage});
const AttachFile=fileUpload.single('attachedFile');

module.exports=AttachFile
