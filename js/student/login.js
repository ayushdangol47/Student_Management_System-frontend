var loginClass = function(){
    var model = {
		requireLogin : false
    };
    var root = this;
	this.submitform = function(e,form){	
		e.preventDefault();		
		$(form).validate();
		if($(form).valid()){
			var data = {
				username: $("input[name='Username']").val(), 
				password: $("input[name='Password']").val()
			};
			axios.post('public/login',data).then(function(response){
				var result = response.data
				localStorage.setItem(root.constant.STUDENT_INFO, JSON.stringify(result))
				window.location.href = '/index.html'
			})
		}
	};
    this.construct = function(){
        root = $.extend(root , new baseClass(model));
    };
	
    this.construct(); 
};
 
 
var page = new loginClass();
