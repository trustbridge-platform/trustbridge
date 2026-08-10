import multer from "multer";
import { uploadToCloudinary } from "../services/cloudinary.js";

const storage = multer.memoryStorage();

export const uploadSingle = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } }).single("image");

export async function handleImageUpload(req, res, next) {
  if (!req.file) return next();
  try {
    const url = await uploadToCloudinary(req.file.buffer);
    req.body.image = url;
    next();
  } catch (err) {
    console.error("Cloudinary upload failed:", err);
    res.status(500).json({ error: "Image upload failed" });
  }
}