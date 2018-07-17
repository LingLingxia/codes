<div id="app" class="app" v-cloak>
	<div class="nav-tab">
		<nav @click="showNav=true;dropDown=false" :class="{active:showNav&&!dropDown}"><?= $_LANG['lang']['Profile']?></nav><nav
		 @click="showNav=false;dropDown=false" :class="{active:!showNav&&!dropDown}"><?= $_LANG['lang']['Security']?></nav><nav
		 @click="dropDown=!dropDown" :class="{active:dropDown}" class='drop-more'><?= $_LANG['lang']['More']?><i  
			class="icon-icon_arrow-down" v-show="!dropDown"></i> <i class="icon-icon_arrow-up" v-show="dropDown"></i>
		</nav>
	</div>
	<transition name="fade"  >
		<div class="categories-control" v-show="dropDown">
			<ul class="sort" id="sort" style="display: block;">
				<li><a  href="<?=cloudDomain.'/user/dashboard/'?>"> <span><?= $_LANG['lang']['My-Cloud']?></span><i class="icon-icon_arrow-right"></i></a></li>
				<li><a  href="<?=reolinkDomain.'/my-account/orders/'?>"> <span><?= $_LANG['lang']['My-Orders']?></span><i class="icon-icon_arrow-right"></i></a></li>
				<li><a  href="<?=reolinkDomain.'/my-account/edit-address/'?>"> <span><?= $_LANG['lang']['My-Addresses']?></span><i class="icon-icon_arrow-right"></i></a></li>
				<li><a  href="<?=reolinkDomain.'/forum/'?>"> <span><?= $_LANG['lang']['My-Community']?></span><i class="icon-icon_arrow-right"></i></a></li>
				<li><a  href="<?=reolinkDomain.'/my-account/payment-methods/'?>"> <span><?= $_LANG['lang']['My-Payment-Methods']?></span><i class="icon-icon_arrow-right"></i></a></li>  
			</ul>
		</div>
	</transition>
	<div class="black-box pop-box" v-show="dropDown" @click="dropDown=false"></div>
	<div class="usercenter">
		 <div class="profile" v-show="showNav">
		 		<div class="personal-profile editing">
		 			<label for="avatar"><?= $_LANG['lang']['Personal-Profile:']?></label>
		 				
		 			
		 			<div class="edit-wrap">
		 				<div class="previw-size-div cur-avatar" :style="{'backgroundImage': 'url('+ avatarImg +')' } " >
		 					
		 				</div>
			 			<div class="trigger-div">
				 			<span @click="triggerChangeAvatar"  class="ui-link upload-img text" v-show="!processingAvatar"><?= $_LANG['lang']['Upload-an-image']?></span>
				 			
 							<span  class="info img-tips" :class="tipsColor" v-show="!processingAvatar"><?= $_LANG['lang']['(Max-512-KB']?></span>
				 			
				 			<p class="ui-link processing" style="" v-show="processingAvatar"><?= $_LANG['lang']['Processing']?><img src="/processing.gif" alt=""></p>
			 			</div>
		 			</div>
		 			<div class="preview-avatar" v-if='showAvatarPreview&&TmpAvatarImg!=""'>
						<div class="avatar-brother">
							 <h3 class="preview-title pre"><?= $_LANG['lang']['Original-image:']?></h3>
			 				 <div class="origin-size-div avatar-size-wrap" id="newDiv">
								<img :src="TmpAvatarImg"/>
							 </div>
						</div>
						<div class="avatar-brother">
							 <h3 class="preview-title pre"><?= $_LANG['lang']['Preview:']?></h3>
							<div class="previw-size-div avatar-size-wrap " id="preDiv" :style="{'backgroundImage': 'url('+ TmpAvatarImg +')' } ">
							</div>
						</div>

						<div class="button-area">
							<span @click="changeAvatar" class="ui-button primary-button" ><?= $_LANG['lang']['Save']?></span>
			 				<span @click="cancelUploadAvatar" class="ui-button empty-button"><?= $_LANG['lang']['Cancel']?></span>
						</div>
		 			</div>

			<form id="file" method="POST" >
				<input type="hidden" name="key">
				<input type="hidden" name="acl" value="private">
				<input type="hidden" name="success_action_status" value="201">
				<input type="hidden" name="Content-Type">
				<input type="hidden" name="policy">
				<input type="hidden" name="X-amz-credential">
				<input type="hidden" name="X-amz-algorithm">
				<input type="hidden" name="X-amz-date">
				<input type="hidden" name="X-amz-expires">
				<input type="hidden" name="X-amz-signature">
				<input type="file" name='file' @change="previewAvatar" id="avatar-input">
			</form> 

		 		</div>

		 		<div class="display-name" :class="{editing:profileEditing}">
		 			<label for="display-name"><?= $_LANG['lang']['Display-Name:']?><span
			 			 @click="profileEditing=true" class="icon-edit icon-icon_edit" v-show="!profileEditing"></span>
		 			</label>
		 			<div class="edit-wrap">
		 				<div class="show-wrap" v-show="!profileEditing">
			 				<span  class="info">{{user.nickName}}</span>
		 					<span @click="profileEditing=true" class="edit ui-button primary-button icon-icon_edit"><?= $_LANG['lang']['Edit']?></span>
		 				</div>
		 				<div class="hide-wrap" v-show="profileEditing">
			 				<input type="text" class="user-input"   v-model=" user.nickName" placeholder="Display Name" :half-border-radius="invalidName1">
							<span class="error-tips" v-show='invalidName1'><?= $_LANG['lang']['This-field-is']?></span>
							
		 				</div>
			 			<div class="button-area" v-show="profileEditing">
			 				<span @click="modifyProfile('nickName')" class="ui-button primary-button" :disabled="processing1"><?= $_LANG['lang']['Save']?></span>
			 				<span @click="cancelModifyProfile('profileEditing')" class="ui-button empty-button"><?= $_LANG['lang']['Cancel']?></span>
			 			</div>
		 			</div>
		 		</div>

		 		<div class="user-name" :class="{editing:profileEditing2}">
		 			<label for="display-name"><?= $_LANG['lang']['UserName:']?><span @click="profileEditing2=true"
		 				
						  class="icon-edit icon-icon_edit" v-show="!profileEditing2"></span>
		 			</label>
		 			<div class="edit-wrap">
		 				<div class="show-wrap" v-show="!profileEditing2">
			 				<span  class="info">{{user.firstName}} {{user.lastName}}</span>
		 					<span @click="profileEditing2=true"  class="edit ui-button primary-button icon-icon_edit"><?= $_LANG['lang']['Edit']?></span>
		 				</div>
		 				<div class="hide-wrap" v-show="profileEditing2">
				 			<input type="text" class="user-input"  v-model="user.firstName" placeholder="First Name" :half-border-radius="invalidName2">
							<span class="error-tips" v-show="invalidName2" ><?= $_LANG['lang']['This-field-is']?></span>
				 			<input type="text" class="user-input"  v-model="user.lastName" placeholder="Last Name" :half-border-radius="invalidName3" >
				 			<span class="error-tips" v-show="invalidName3" ><?= $_LANG['lang']['This-field-is']?></span>
			 			</div>
			 			<div class="button-area" v-show="profileEditing2">
			 				<span @click="modifyProfile('realName')" class="ui-button primary-button" :disabled="processing2"><?= $_LANG['lang']['Save']?></span>
			 				<span @click="cancelModifyProfile('profileEditing2')" class="ui-button empty-button"><?= $_LANG['lang']['Cancel']?></span>
			 			</div>
		 			</div>
		 		</div>

		 		<div class="user-email" :class="{editing:editingEmail}">
		 			<label for="display-name"><?= $_LANG['lang']['Email:']?><span 
						@click="editingEmail=true"  class="icon-edit icon-icon_edit" v-show="!editingEmail"></span>
		 			</label>

		 			<div class="edit-wrap"  >
						<div class="show-wrap" v-show="!editingEmail">
							<span class="info"> {{email.address }}</span>
							<span  v-if="email.status=='unverified'" class=" err-icon" > <i class="icon-icon_wrong"></i><?= $_LANG['lang']['Unverified']?></span>
				 			<span v-if="email.status=='verified'" class="check-icon"> <i class="icon-icon_have "></i><?= $_LANG['lang']['Verified']?></span>
				 			<span @click="editingEmail=true " class="edit ui-button primary-button icon-icon_edit"><?= $_LANG['lang']['Edit']?></span>
				 			<div v-if="email.status=='unverified'" @click='verifyEamil' class="ui-link first-validation-tips text"><?= $_LANG['lang']['Verify-your-email']?></div>
						</div>
			 			<div class="hide-wrap" v-show="editingEmail">
				 			<div class="email-address">
				 				<input type="text" v-model="email.address" readonly >
				 				<span  v-if="email.status=='unverified'" class=" err-icon" > <i class="icon-icon_wrong"></i><?= $_LANG['lang']['Unverified']?></span>
				 				<span v-if="email.status=='verified'" class="check-icon"> <i class="icon-icon_have "></i><?= $_LANG['lang']['Verified']?></span>
				 			</div>
				 			<div v-if="email.status=='unverified'" @click='verifyEamil' class="ui-link text"><?= $_LANG['lang']['Verify-your-email']?></div>
				 			 <p v-if="!hasPassword" class="info reset-info"><?= $_LANG['lang']['For-security-purposes,']?><span @click="sendResetPasswordEmail" class="ui-link text"><?= $_LANG['lang']['create-an-account']?></span><?= $_LANG['lang']['first.']?></p>
				 			<div class="new-email-address" v-if="hasPassword">
					 			<input type="password" v-model="oldPassword" placeholder="Enter the password to verify this account belongs to you" :half-border-radius="passwordErrorTips">
					 			<span class="error-tips"  v-show='passwordErrorTips'><?= $_LANG['lang']['Incorrect-password']?></span>
			                    <input type="text" placeholder="New email address" v-model="newEmail" :half-border-radius="emailInvalidTips||emailBounded"  >
								<span class="error-tips" v-show='emailInvalidTips'><?= $_LANG['lang']['Invalid-Email-Address']?></span>
								<span class="error-tips" v-show='emailBounded'><?= $_LANG['lang']['This-email-is']?></span>
								
				 			</div>

			 			</div>

			 			<div class="button-area" v-show="editingEmail&&(email.status=='unverified'||!verifyEmailSended)">
			 				<span @click="changeEmail" class="ui-button primary-button" :disabled="processing3" v-if='hasPassword'><?= $_LANG['lang']['Submit']?></span>
			 				<span @click="calcelEditingEmail" class="ui-button empty-button"><?= $_LANG['lang']['Cancel']?></span>
			 			</div>
			 			<p class="email-suc-tips" v-if="emailForChangeEmailSended"><?= $_LANG['lang']['A-verification-message']?></p>

			 			<p class="email-suc-tips" v-show='ce.sendedEmail||verifyEmailSended'><?= $_LANG['lang']['A-verification-message-2']?></p>
		 			</div>
		 		</div>

		 </div>

	      <div class="thirdSystem" v-if="thirdSystemList.length>0" v-show="showNav">
	 		<label for=""><?= $_LANG['lang']['Connect-with:']?></label>	
		   <ul class="edit-wrap">
		   	<li v-for = "(item,index ) in thirdSystemList" class="thirdImg">
	    	   	<img :src="item.logo"  :alt="item.title" :title="item.title" />
	    	   	<span class="third-title"> {{item.title}}</span>
	    	   	<div class="control" >
	    	   		 <p v-if="!item.id" @click="bind(item.key)" class="el-switch unbind ">
						 <span> </span>
	    	   		  </p>
	    	   		  <p  v-if="item.id" @click="conformUnbind(item.id,index,item.title,item.logo)" class="el-switch bind ">
	    	   		  	 <span> </span>
	    	   		  </p>
	    	   		 <p class="third-des">Use your {{item.title}} account to log in</p>
	    	   		 <p class="third-des " v-show='item.unbinding' style="color: #EF7835"><?= $_LANG['lang']['unbinding']?></p>
	    	   	</div>
		   	</li>
		   </ul>
		</div>

		<div class="security" v-show="!showNav ">
			 <div class="security-password">
		  		<label for=""><?= $_LANG['lang']['Password:']?></label>
			  	 <div class="edit-wrap">
			  	 	<div class="show-wrap" v-show="!cp.editing">
			       	 	 <span class="info" style="color: #555"><?= $_LANG['lang']['You-can-change']?></span>
			       	 	 <span @click='changePasswordMethodCheck' class="ui-button primary-button edit" v-show="!cp.editing"><?= $_LANG['lang']['Reset-Password']?></span>
			  	 	</div>
			  	 	<span v-show="cp.modifyTipsSuccess" class="email-suc-tips"><?= $_LANG['lang']['Password-reset-successfully.']?></span>
			  	 	<div class="hide-wrap" v-show="cp.editing">
			       	 	 <p v-if="!hasPassword" class="info reset-info"><?= $_LANG['lang']['For-security-purposes,-2']?><span @click="sendResetPasswordEmail('cp')" class="ui-link text"><?= $_LANG['lang']['create-an-account']?></span><?= $_LANG['lang']['first.']?></p>
			       	 	 <div class="" v-if="hasPassword">
				       	 	 <input type="password" placeholder="Old password" v-model="cp.oldPassword" autocomplete="off" :half-border-radius="cp.oldPasswordTips">
				       	 	  	<span v-show="cp.oldPasswordTips" class="error-tips"><?= $_LANG['lang']['Incorrect-password']?><a href="javascript:void(0)" @click="sendResetPasswordEmail('cp')"><?= $_LANG['lang']['Lost-Your-Password?']?></a></span>
								

				       	 	 <input type="password" placeholder="New password" v-model="cp.newPassword" @keyup='check' autocomplete="off" 
				       	 	 :half-border-radius="cp.newPasswordTips!=''">
								<span  class="error-tips" :class="{validTips:cp.tipsId>0}">{{cp.newPasswordTips}}</span>
								<span v-show='cp.tipsId<2' class='info tips'>The password should be at least eight characters long. To make it stronger, use combinations of numbers, upper &amp; lowercase letters, and symbols like ! " ? $ % ^ &amp;.</span>

				       	 	 <input type="password" placeholder="Confirm new password" v-model="cp.verifyPassword" autocomplete="off" :half-border-radius="cp.verifyPassword!=''&&cp.verifyPassword!=cp.newPassword">
				       	 	 	<span  v-show="cp.verifyPassword!=''&&cp.verifyPassword!=cp.newPassword" class="error-tips"><?= $_LANG['lang']['Two-Passwords-do']?></span>
			       	 	 </div>
			  	 	</div>
			  	 	<div class="button-area" v-show="cp.editing">
			  	 		 <span v-if="hasPassword" @click="verifyOldPassword" class="ui-button primary-button"><?= $_LANG['lang']['Save']?></span>
						 <span  @click="cp.editing=false" class="ui-button empty-button"><?= $_LANG['lang']['Cancel']?></span>
						 
			  	 	</div>
					<p class="email-suc-tips" v-show='cp.sendedEmail'><?= $_LANG['lang']['A-verification-message']?></p>
			  	 </div>
			  </div> 
			  <div class="cloud-service">
					<label for=""><?= $_LANG['lang']['Delete-Account:']?></label>
					<div class="edit-wrap">
						<div class="show-wrap" v-show="!deAc.editing">
							<span class="info" style="color: #555"><?= $_LANG['lang']['You-can-delete']?></span>
			       	 	 	<span @click='deAc.editing=true' class="ui-button primary-button edit" ><?= $_LANG['lang']['I-want-to']?></span>
						</div>
						<div class="hide-wrap" v-show="deAc.editing">
							<div class="" v-if="hasPassword">
								<p class="info" style="color:#555">Please keep in mind that deleting your account will remove your profile and other data you’ve added,<strong><?= $_LANG['lang']['with-no-option']?></strong> 
These data may include, but not limited to, your name, account password, shipping address, posts and photos you posted in Community.
Your product registration information, if you’ve added, will also be removed, and you will not be able to receive our 2-year limited warranty.
Your Reolink Cloud service, if you’ve activated, will also be disabled. All cloud history will be erased in 7 days.</p>
								<input type="password" v-model="deAc.password" placeholder="Enter the password to verify this account belongs to you." >
								<span v-show="deAc.wrongPassword" class="error-tips"><?= $_LANG['lang']['Incorrect-password']?><a href="javascript:void(0)" @click="sendResetPasswordEmail('deAc')"><?= $_LANG['lang']['Lost-Your-Password?']?></a></span>
								<input type="checkbox" id="deleteUser" v-model="deAc.checkbox"> <label for="deleteUser" class="quit-label"><?= $_LANG['lang']['Your-will-be']?></label>
								<span style="color:red" class="info tips" v-if="deAc.requireCheckBox"><?= $_LANG['lang']['The-checkbox-is']?></span>
							</div>
							<p v-if="!hasPassword" class="info reset-info"><?= $_LANG['lang']['If-you-originally']?><span @click="sendResetPasswordEmail('deAc')" class="ui-link text"><?= $_LANG['lang']['create-an-account']?></span><?= $_LANG['lang']['first.']?></p>
						</div>
						<div class="button-area" v-show="deAc.editing&&!deAc.success">
							<span v-if="hasPassword&&!deAc.processing" @click="verifyPassowrdForDeleteAccount" class="ui-button primary-button"><?= $_LANG['lang']['Delete-My-Account']?></span>
							<span  @click="resetDeAt" class="ui-button empty-button" v-show="!deAc.processing"><?= $_LANG['lang']['Cancel']?></span>
							<span v-show="deAc.processing"  class="ui-button empty-button" disabled ><?= $_LANG['lang']['Processing']?></span>
						</div>
						   <p v-if="deAc.success" class="email-suc-tips"><?= $_LANG['lang']['Delete-Successful!-']?><span style="">{{deAc.count}}</span><?= $_LANG['lang']['seconds']?></p>
						   <p v-if="deAc.sendedEmail" class="email-suc-tips"><?= $_LANG['lang']['A-verification-message']?></p>
					</div> 
			  </div>

		</div> 
	</div>

	<div v-if='showBindFail'>
		<pop-box :box='bindFail' v-on:hide='hideBox'></pop-box> 
	</div>
	<div v-if='showUnBindFail'>
		<pop-box :box='unBindFail' v-on:hide='hideBox'></pop-box> 
	</div> 
	<div v-if='showQueryBox'>
		<pop-box :box='queryBox' v-on:hide='hideBox' v-on:unbind="unbind"></pop-box> 
	</div> 

</div>

