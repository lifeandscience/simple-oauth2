//
// ### Client (API-style) credentials flow implementation (http://tools.ietf.org/html/rfc6749#section-4.4)
//
module.exports = function(config) {

  var core   = require('./../core')(config);

	//
  // ### Returns the Access Token object.
	//\
  // * `params.scope` - A String that represents the application privileges.
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function getToken(params, callback) {
		params.grant_type = 'client_credentials';
		core.api('POST', config.tokenPath, params, callback);
  }
  function request(method, path, params, callback){
	  core.api(method, path, params, callback)
  }


  return {
    'getToken' : getToken,
    'request': request
  }
};
