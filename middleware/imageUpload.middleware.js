const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { v4: uuidv4 } = require("uuid");

cloudinary.config({
  cloud_name: "mirerse",
  api_key: "435694658535759",
  api_secret: "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",
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "Mirerse_uploads",
    public_id: (request, file) => uuidv4(),
  },
});

const fileFilter = (request, file, callback) => {
  const acceptedFileTypes = ["image/jpeg", "image/png"];
  return acceptedFileTypes.includes(file.mimetype)
    ? callback(null, true)
    : callback(null, false);
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 1000 * 1000 * 10 }, // 10 MB
});

module.exports = upload;
