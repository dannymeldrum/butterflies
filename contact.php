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
										<form id="contact-form" action="send.php" method="post">
											<div class="form-group">
												<label for="firstname">Name <span class="form-required" title="This field is required.">*</span></label>
												<input type="text" name="firstname" class="form-control half" id="firstname" required>
											</div>
											<div class="form-group">
												<label for="lastname">Phone<span class="form-required" title="This field is required.">*</span></label>
												<input type="text" name="lastname" class="form-control half" id="lastname" required>
											</div>
											<div class="form-group">
												<label for="email">E-mail <span class="form-required" title="This field is required.">*</span></label>
												<input type="email" name="email" class="form-control half" id="email" required>
											</div>
											<div class="form-group">
												<label for="subject">Date and Time You Prefer</label>
												<input type="text" name="subject" class="form-control half" id="subject">
											</div>
											<div class="form-group">
												<label for="message">Treatment(s) You Would Like<span class="form-required" title="This field is required.">*</span></label>
												<textarea name="message" class="form-control" rows="4" id="message" required></textarea>
											</div>
											<button type="submit" class="btn btn-color">Send</button>
										</form>
									</div>
								</div>

							</div>

						</div>
					</div>

				</div>

			</div>

<?php include 'templates/footer.php'; ?>
