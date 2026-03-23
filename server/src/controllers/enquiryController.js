import Enquiry from "../models/Enquiry.js";

export const listEnquiries = async (req, res, next) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    return res.json(enquiries);
  } catch (err) {
    return next(err);
  }
};
