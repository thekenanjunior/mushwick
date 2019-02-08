<?php 
     

     if(isset($_POST['submit']))

     $name = $_POST['name'];
     $mailFrom = $_POST['email'];
     $message = $_POST['message'];

     $mailTo = "contact@mushwick.com";
     $headers = "From: ".$mailFrom;
     $text = "Recieved email from ".$name.".\n\n".$message;

     mail($mailTo, $subject, $text, $headers);
     header("Location: index.html");
     

     ?>