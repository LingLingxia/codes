<div id="app" class="app" v-cloak>
	<div class="nav-tab">
		<nav >Profile</nav><nav
		 >Security</nav><nav
		>More<i  class="icon-icon_arrow-down" ></i> <i class="icon-icon_arrow-up" ></i>
			
		</nav>
	</div>
	<transition name="fade"  >
		<div class="categories-control" >
			<ul class="sort" id="sort" style="display: block;">
				<li><a  href=""> <span>My Cloud</span><i class="icon-icon_arrow-right"></i></a></li>
				<li><a  href=""> <span>My Orders</span><i class="icon-icon_arrow-right"></i></a></li>
				<li><a  href=""> <span>My Addresses</span><i class="icon-icon_arrow-right"></i></a></li>
			</ul>
		</div>
	</transition>

	<label >Personal Profile:</label>
		<span >This field is required and limited to 32 characters.</span>
		<span >This field is required and limited to 32 characters.</span>
		<div >
		<span >Cancel</span>
		<p > A verification message has been sent to your new email address. Please follow the link in your email to finish the verification.</p>
		<p > A verification message has been sent to your current email address. Please follow the link in your email to finish the verification.</p>
		<p  class="email-suc-tips">Delete Successful!  Redirect to login page in <span style="">{{deAc.count}}</span> seconds</p>
		<p  class="email-suc-tips">A verification message has been sent to your current email address. Please follow the link in your email to finish the verification. </p>
</div>
