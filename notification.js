// notificationService.js

import nodemailer from "nodemailer";

// Create a transporter using your email service provider's configuration
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "adenirandaniel565@gmail.com",
    pass: "kqbn wksr kdtz tgdr",
  },
});

export const sendTaskNotification = async (
  assignerEmail,
  assignedUserEmail
) => {
  try {
    // Compose the email message
    const mailOptions = {
      from: assignerEmail,
      to: assignedUserEmail,
      subject: "Task Notification",
      text: `Dear ${assignedUserEmail}, you have a new task, kindly log in to your app to view. Best regards, ${assignerEmail}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("Task notification sent successfully");
  } catch (error) {
    console.error("Error sending task notification:", error);
  }
};

export const sendReminderTaskNotification = async (
  assignerEmail,
  assignedUserEmail
) => {
  try {
    // Compose the email message
    const mailOptions = {
      from: assignerEmail,
      to: assignedUserEmail,
      subject: "Task Status Reminder",
      text: `Dear ${assignedUserEmail}, Kindly Complete your unfinished task.
       Best regards,
       ${assignerEmail}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("Task notification sent successfully");
  } catch (error) {
    console.error("Error sending task notification:", error);
  }
};
