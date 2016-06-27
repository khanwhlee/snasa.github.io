class ProfileController < ApplicationController
	before_action :authenticate_user!


	def index
	end

	def show
		@userid = current_user.id
		if @userid < 10 
			@useridstr = "00" + @userid.to_s
		elsif @userid < 100 && @userid >=10
			@useridstr = "0" + @userid.to_s
		else
			@useridstr = @userid.to_s
		end
		@username = current_user.username
		@usertarget = current_user.target
		@usermission = current_user.mission
		@userschedule = current_user.schedule
		@userip = current_user.current_sign_in_ip
		@userlastip = current_user.last_sign_in_ip
		@userlastsignint = current_user.last_sign_in_at

	end

	def edit
		#@usermission
		@user = current_user
		@userid = current_user.id
		@username = current_user.username
		@usertarget = current_user.target
		@usermission = current_user.mission
		@userschedule = current_user.schedule

	end

	def update
		@user = current_user
		@user.update_attributes(user_params)

		redirect_to root_path
	end

	def terminal

	end

	protected

	def user_params
		params.require(:user).permit(:username, :mission, :schedule, :target)
  	end
end
