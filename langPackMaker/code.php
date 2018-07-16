<div id="app" class="app" v-cloak>
	<div class="nav-tab">
		<nav ><?= $_LANG['lang']['Profile']?></nav><nav
		 ><?= $_LANG['lang']['Security']?></nav><nav
		><?= $_LANG['lang']['More']?><i  class="icon-icon_arrow-down" ></i> <i class="icon-icon_arrow-up" ></i>
			
		</nav>
	</div>
	<transition name="fade"  >
		<div class="categories-control" >
			<ul class="sort" id="sort" style="display: block;">
				<li><a  href=""> <span><?= $_LANG['lang']['My-Cloud']?></span><i class="icon-icon_arrow-right"></i></a></li>
				<li><a  href=""> <span><?= $_LANG['lang']['My-Orders']?></span><i class="icon-icon_arrow-right"></i></a></li>
				<li><a  href=""> <span><?= $_LANG['lang']['My-Addresses']?></span><i class="icon-icon_arrow-right"></i></a></li>
			</ul>
		</div>
	</transition>

	<label ><?= $_LANG['lang']['Personal-Profile:']?></label>
		<span ><?= $_LANG['lang']['This-field-is']?></span>
		<span ><?= $_LANG['lang']['This-field-is']?></span>
		<div >
		<span ><?= $_LANG['lang']['Cancel']?></span>
		<p ><?= $_LANG['lang']['A-verification-message']?></p>
		<p ><?= $_LANG['lang']['A-verification-message-2']?></p>
		<p  class="email-suc-tips"><?= $_LANG['lang']['Delete-Successful!-']?><span style="">{{deAc.count}}</span><?= $_LANG['lang']['seconds']?></p>
		<p  class="email-suc-tips"><?= $_LANG['lang']['A-verification-message']?></p>
</div>
