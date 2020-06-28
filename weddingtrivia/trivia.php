<?php

class ContactForm
{

	var $mysql = null;

	function ContactForm()
	{
		$this->mysql = mysqli_connect("localhost", "andre", "andre", "contact");
		if(!$this->mysql){
				die("Error Connecting to the Database");
		}
	}

	function GenInterface()
	{
		if(isset($_POST["name"]))
		{
			print("form is being posted");

			// collect the fields
			// validate
			// build the query



			// save

			// output a successful response
		}
		else
		{
			$contents = file_get_contents("form_template.html");
			print $contents;
		}

	}

	

	function ListContact()
	{


	}

	// save the contact form from ajax
	function SaveContact(&$json)
	{
		// collect fields
		
		
		$json->mynameis='Andre';
		$this->mysql->Query("insert into contacts (contact_id,contact_name) values(1,'Andre');");
	}

};

?>
