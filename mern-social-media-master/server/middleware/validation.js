import mongoose from "mongoose";

/**
 * Middleware to validate MongoDB ObjectId
 * @param {string} paramName - The name of the parameter in req.params to validate.
 */
export const validateId = (paramName) => (req, res, next) => {
  const id = req.params[paramName];
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: `${paramName} is not a valid ID` });
  }
  next();
};
