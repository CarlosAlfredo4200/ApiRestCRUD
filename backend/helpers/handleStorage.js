import multer from "multer";
import { fileURLToPath } from "url";
import { dirname } from "path";

const CURRENT_DIR = dirname(fileURLToPath(import.meta.url));
const MIMETYPES = ["image/jpeg", "image/png"];
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const pathStorage = `${CURRENT_DIR}/../uploads`;
    cb(null, pathStorage);
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split(".").pop();
    const filename = `file-${Date.now()}.${ext}`;
    cb(null, filename);
  },

  fileFilter: (req, file, cb)=> {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(new Error('Formato invalido'));
    }
  },
});

const uploadMiddleware = multer({ storage });

export default uploadMiddleware;
