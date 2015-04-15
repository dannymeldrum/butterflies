<?php include 'templates/header.php'; ?>

		<!-- Main wrapper -->
		<div id="main-wrapper">

			<!-- Content -->
			<div id="content">

				<!-- Fluid container -->
				<div class="container-fluid">

					<!-- Page heading -->
					<div id="heading" class="row">
						<div class="col-12">

							

						</div>
					</div>

					<!-- Main content -->
					<div class="row">
						<div class="main-column col-12">
							<div class="inner">

								<div class="row">
									<div class="col-12">
										<h3>Make a booking</h3>
										<p>Please phone, email and or fill the form below and our friendly receptionist will confirm your booking promptly.<br><br>If you would like an appointment on the day or within 48 hours or if you are making a large booking please contact us by phone.<br><br>Please note that any bookings for treatments of &pound;20 and over will require card details to secure.If you have to change or cancel your appointment you can contact us via email or phone. We require 24 hours&rsquo; notice otherwise there will be a full fee payable for the therapist's time.</p>
										<div class="icon-text">
											<i class="fa fa-phone"></i>
											<p>07969600846</p>
										</div>
										<div class="icon-text">
											<i class="fa fa-envelope-o"></i>
											<p><a href="mailto:info@beautybybutterflies">info@beautybybutterflies.co.uk</a></p>
								</div>
										<hr>
										<form id="contact_form" method="post" action="."> <br />

										Label <input type="text" name="name" class="textfield" value="" /> <br />

										Email <input type="text" name="email" class="textfield" value="" /> <br />

										Phone Number <input type="text" name="number" class="textfield" value="" /> <br />

										<p><input type="submit" name="submit" class="button" value="Submit" /></p>

										</form>
									</div>
								</div>

							</div>

						</div>
					</div>

				</div>

			</div>

<?php

if(isset($_POST['submit'])) {

//include validation class

//assign post data to variables

$name = trim($_POST['name']); // Storing username

$email = trim($_POST['email']); // Storing email address

$number= trim($_POST['number']); // storing the phone number

if(empty($name) && empty($number) && empty($email))

{

echo "All fields are compulsory"


}

?>			

<?php include 'templates/footer.php'; ?>
