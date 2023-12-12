import { Router } from 'express';
import multer from 'multer';
import { UpdateCategorysContriller } from '../modules/cars/useCases/uploadCategory/UpdateCategoryControllers';

const uploadFileRouter =  Router();

const updateCategoryController = new UpdateCategorysContriller()
const upload = multer({
  dest: "./tmp"
})

const file = upload.single("file")

uploadFileRouter.post("/", updateCategoryController.handle)


export { uploadFileRouter }