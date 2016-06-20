describe ('User', function() {
  var EC = protractor.ExpectedConditions;
  it('should have a sign up button', function(){
    browser.get('/');
    EC.presenceOf($('$sign-up-btn'));
  })
  it('should have a sign in button', function(){
    browser.get('/');
    EC.presenceOf($('$sign-in-btn'));
  })
  it('should not have a sign out button', function(){
    browser.get('/');
    EC.presenceOf($('$sign-out-btn'));
  })

  it('it should allow a user to sign up', function() {
    browser.get('/');
    $('#sign-up-btn').click();
    $('#email').sendKeys("harry@harry.com");
    $('#password').sendKeys("testing123");
    $('#password-conf').sendKeys("testing123");
    $('#register').click();
    EC.textToBePresentInElement($('body'), "welcome harry@harry.com");
  });

  it('it should not have a sign out button when logged in', function() {
    browser.get('/');
    $('#sign-up-btn').click();
    $('#email').sendKeys("harry@harry.com");
    $('#password').sendKeys("testing123");
    $('#password-conf').sendKeys("testing123");
    $('#register').click();


    
  });
});
