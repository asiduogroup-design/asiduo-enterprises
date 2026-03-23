import nodemailer from "nodemailer";
import Enquiry from "../models/Enquiry.js";

export const submitContact = async (req, res, next) => {
  try {
    const { name, company, email, phone, interest, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Name, email, and message are required.",
      });
    }

    const record = await Enquiry.create({
      name,
      company,
      email,
      phone,
      interest,
      subject,
      message,
    });

    const smtpDisabled =
      String(process.env.SMTP_DISABLED || "").toLowerCase() === "true";

    if (!smtpDisabled && process.env.SMTP_HOST && process.env.SMTP_USER) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const notifyTo = process.env.NOTIFY_EMAIL || process.env.SMTP_USER;
      await transporter.sendMail({
        from: process.env.SMTP_FROM || `Asiduo <${process.env.SMTP_USER}>`,
        to: notifyTo,
        subject: subject || "New enquiry from website",
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "-"}\nCompany: ${
          company || "-"
        }\nInterest: ${interest || "-"}\nSubject: ${subject || "-"}\n\nMessage:\n${message}`,
      });
    }

    return res.status(201).json({
      message: "Thanks! We received your enquiry.",
      id: record._id,
    });
  } catch (err) {
    return next(err);
  }
};
