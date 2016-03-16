Router.configure({
    layoutTemplate: 'main'
});

AccountsTemplates.configureRoute('signIn', {
    redirect: '/events',
    
});

var myPostLogout = function(){
    //example redirect after logout
    Router.go('/');
};

AccountsTemplates.configure({
    onLogoutHook: myPostLogout
});
