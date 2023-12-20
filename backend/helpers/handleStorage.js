const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
<<<<<<< HEAD
    const pathStorage = `${__dirname}/../uploads`;
=======
    const pathStorage = `${__dirname}/../storage`;
>>>>>>> a90c92cb67c4af1095a5a487678c6a44a1fb0cb9
    cb(null, pathStorage);
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split(".").pop();
    const filename = `file-${Date.now()}.${ext}`;
    cb(null, filename);
  },
});

const uploadMiddleware = multer({ storage });

module.exports = uploadMiddleware;
