class Users::SessionsController < Devise::SessionsController
  prepend_before_action :require_no_authentication, only: [:new, :create]
  prepend_before_action :allow_params_authentication!, only: :create
  prepend_before_action :verify_signed_out_user, only: :destroy

  # GET /resource/sign_in
    def new
      self.resource = resource_class.new(sign_in_params)
      clean_up_passwords(resource)
      yield resource if block_given?
      respond_with(resource, serialize_options(resource))
    end

  # POST /resource/sign_in
    def create
      self.resource = warden.authenticate!(auth_options)
      #set_flash_message!(:notice, :signed_in)
      sign_in(resource_name, resource)
      yield resource if block_given?
      respond_with resource, location: selfprofile_path
    end

  # DELETE /resource/sign_out
    def destroy
      signed_out = (Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name))
      yield if block_given?
      respond_to_on_destroy
    end

    protected

  # You can put the params you want to permit in the empty array.
    def configure_sign_in_params
      devise_parameter_sanitizer.for(:sign_in) << :attribute
    end

    private

    def verify_signed_out_user
    if all_signed_out?

      respond_to_on_destroy
    end
    end

    def all_signed_out?
      users = Devise.mappings.keys.map { |s| warden.user(scope: s, run_callbacks: false) }

      users.all?(&:blank?)
    end

    def respond_to_on_destroy
      # We actually need to hardcode this as Rails default responder doesn't
      # support returning empty response on GET request
      respond_to do |format|
        format.all { head :no_content }
        format.any(*navigational_formats) { redirect_to after_sign_out_path_for(resource_name) }
      end
    end
end
