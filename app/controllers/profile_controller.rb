class ProfileController < ApplicationController
	before_action :authenticate_user!

	def show
		@userid = current_user.id
		@username = current_user.username
		@userip = current_user.current_sign_in_ip
		@userlastip = current_user.last_sign_in_ip
		@userlastsignint = current_user.last_sign_in_at
	end


end
