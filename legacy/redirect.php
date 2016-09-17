<?php
  $address = htmlspecialchars($_POST['address']);

  header( 'Location: https://pseudologiserver.appspot.com/' . $address ) ;
  
 ?>