<?php
  $current_page = basename($_SERVER['PHP_SELF']);
?>
					<!-- Collapsible sidebar -->
					<div id="sidebar">

						<!-- Widget Area -->
						<div id="widgets">

							<!-- Main menu -->
							<nav id="mainmenu">
								<ul>
		              				<li><a class="<?php if ($current_page == "index.php"){ echo "active "; }?>" href="/">Home</a></li>
		              				<li><a class="<?php if ($current_page == "treatments.php"){ echo "active "; }?>" href="treatments">Treatments</a></li>
		              				<li><a class="<?php if ($current_page == "offers.php"){ echo "active "; }?>" href="offers">Offers</a></li>
		              				<li><a class="<?php if ($current_page == "gallery.php"){ echo "active "; }?>" href="gallery">Gallery</a></li>
		              				<li><a class="<?php if ($current_page == "location-times.php"){ echo "active "; }?>" href="location-times">Location + Times</a></li>
									<li><a class="<?php if ($current_page == "contact.php"){ echo "active "; }?>" href="contact">Make a booking</a></li>
								</ul>
							</nav>

						</div>

					</div>

				</div>

				<!-- JavaScripts -->
				<script type="text/javascript" src="js/jquery.min.js"></script>
				<script type="text/javascript" src="js/bootstrap.min.js"></script>
				<script type="text/javascript" src="js/idangerous.swiper.min.js"></script>
				<script type="text/javascript" src="js/masonry.pkgd.min.js"></script>
				<script type="text/javascript" src="js/jquery.isotope.min.js"></script>
				<script type="text/javascript" src="js/custom.js"></script>

			
		</body></html>