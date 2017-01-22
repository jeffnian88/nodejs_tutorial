# install meteor
curl https://install.meteor.com/ | sh

# create project
meteor create project1
cd project1
meteor
["{\"msg\":\"sub\",\"id\":\"wh6Brpar4AD6xrizt\",\"name\":\"meteor_autoupdate_clientVersions\",\"params\":[]}"]
https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=106841027693-f4tf4fiaqcnfr42189hp8iftnll131a5.apps.googleusercontent.com&scope=email+profile&redirect_uri=http://localhost:3000/_oauth/google&state=eyJsb2dpblN0eWxlIjoicG9wdXAiLCJjcmVkZW50aWFsVG9rZW4iOiJoajZiVEctNUNPNHk5bENIcFJxbG9PdFduMEhKdVZPaDZYY19ZNW1kWmVUIiwiaXNDb3Jkb3ZhIjpmYWxzZX0=&access_type=online&approval_prompt=auto
["{\"msg\":\"method\",\"method\":\"login\",\"params\":[{\"resume\":\"LEwVun8coX0VXMj_wjQyqqcAI27Z4r9LKJC729XgPcK\"}],\"id\":\"1\"}"]
# remove insecure,autopublish
meteor remove insecure
meteor remove autopublish

# add pkg
meteor add tomi:upload-server
meteor add tomi:upload-jquery

accounts-password accounts-ui {{> loginButtons}}
meteor add accounts-google
