Router.configure({
    layoutTemplate: 'main'
});

AccountsTemplates.configureRoute('signIn', {
    redirect: '/status'
});

var myPostLogout = function(){
    //example redirect after logout
    Router.go('/');
};

AccountsTemplates.configure({
    onLogoutHook: myPostLogout
});
