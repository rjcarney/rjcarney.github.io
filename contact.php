<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $service = $_POST['service'] . " - Job Inquiry";
  $description = $_POST['description'];
  $outreach = $_POST['outreach'];

  $message = $description . "\n" . $name . "\n" . $email . "\n" . $outreach;

  mail("rcarney.rcweb@gmail.com", $service, $message);

  header("Location: http://www.rcweb.studio/index.php?sent=true");
?>
