// notificationService.js

<<<<<<< HEAD
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
  assignedUserEmail,
  taskStatus
) => {
=======
import nodemailer from 'nodemailer';

// Create a transporter using your email service provider's configuration
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'adenirandaniel565@gmail.com',
    pass: 'kqbn wksr kdtz tgdr',
  },
});

export const sendTaskNotification = async (assignerEmail, assignedUserEmail, taskStatus) => {
>>>>>>> a8dd7a29ab277762836b193efc192d7aa2b15ad1
  try {
    // Compose the email message
    const mailOptions = {
      from: assignerEmail,
      to: assignedUserEmail,
<<<<<<< HEAD
      subject: "Task Status Notification",
=======
      subject: 'Task Status Notification',
>>>>>>> a8dd7a29ab277762836b193efc192d7aa2b15ad1
      text: `Dear ${assignedUserEmail}, Your task is currently in the "${taskStatus}" status.
       Best regards,
       ${assignerEmail}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
<<<<<<< HEAD
    console.log("Task notification sent successfully");
  } catch (error) {
    console.error("Error sending task notification:", error);
  }
};

export const sendReminderTaskNotification = async (
  assignerEmail,
  assignedUserEmail,
  taskStatus
) => {
=======
    console.log('Task notification sent successfully');
  } catch (error) {
    console.error('Error sending task notification:', error);
  }
};

export const sendReminderTaskNotification = async (assignerEmail, assignedUserEmail, taskStatus) => {
>>>>>>> a8dd7a29ab277762836b193efc192d7aa2b15ad1
  try {
    // Compose the email message
    const mailOptions = {
      from: assignerEmail,
      to: assignedUserEmail,
<<<<<<< HEAD
      subject: "Task Status Reminder",
=======
      subject: 'Task Status Reminder',
>>>>>>> a8dd7a29ab277762836b193efc192d7aa2b15ad1
      text: `Dear ${assignedUserEmail}, Kindly Complete your unfinished task.
       Best regards,
       ${assignerEmail}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
<<<<<<< HEAD
    console.log("Task notification sent successfully");
  } catch (error) {
    console.error("Error sending task notification:", error);
=======
    console.log('Task notification sent successfully');
  } catch (error) {
    console.error('Error sending task notification:', error);
>>>>>>> a8dd7a29ab277762836b193efc192d7aa2b15ad1
  }
};
