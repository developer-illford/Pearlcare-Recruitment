<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $to = "info@pearlcarerecruitment.co.uk"; 
    $subject = "NEW ENQUIRY";
    $headers = "From: $email";

    $email_body = "You have received a new message from \n".
                   "Full Name : $name \n".
                  "Email address: $email\n".
                  "Mobile Number: $phone\n".
                  "Message:\n $message";

    // mail() function to send the email
    if (mail($to, $subject, $email_body, $headers)) {
        // Send thank-you email to the responder
        $responder_subject = "Thank you for contacting us!";
        $responder_message = "Dear $name,\n\nThank you for contacting us. We have received your message and will get back to you shortly.\n\nBest regards,\nThe PearlCare Team";

        $responder_headers = "From: info@pearlcarerecruitment.co.uk"; // Change this to your sender email

        mail($email, $responder_subject, $responder_message, $responder_headers);

        // Display success popup using JavaScript
        echo '<script> window.location.href = "https://pearlcarerecruitment.co.uk/contact.html";alert("Thank you for your message. Press OK to return");</script>';
        
    } else {
        // Redirect to index page and display error alert
        echo '<script>alert("oops.!! something went wrong. Press OK to return"); window.location.href = "https://pearlcarerecruitment.co.uk/contact.html";</script>';
    }
}
?>