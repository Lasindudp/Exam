<?php 

$type = $_GET['tp']; 
//if($type=='signup') signup(); 
elseif($type=='login') login(); 
//elseif($type=='feed') feed(); 
//elseif($type=='feedUpdate') feedUpdate(); 
//elseif($type=='feedDelete') feedDelete(); 
function login() 
{ 
       require 'config.php'; 
       $json = json_decode(file_get_contents('php://input'), true); 
       $UserName = $json['UserName']; $Password = $json['Password']; 
       $userData =''; $query = "select * from user where UserName='$UserName' and Password='$Password'"; 
       $result= $db->query($query);
       $rowCount=$result->num_rows;
             
        if($rowCount>0)
        {
            $userData = $result->fetch_object();
            $uId=$userData->uId;
            $userData = json_encode($userData);
            echo '{"userData":'.$userData.'}';

            
        }
        else 
        {
            echo '{"error":"Wrong username and password"}';
        }

    
}



