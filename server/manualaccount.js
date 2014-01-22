//Was having issue with setting my twitter account after a failed try, this fixed it
Meteor.startup(function() {
  Accounts.loginServiceConfiguration.remove({
    service: "twitter"
  });
  Accounts.loginServiceConfiguration.insert({
    service: "twitter",
    consumerKey: "dWv3a46yUYHLyH8stz2mA",
    secret: "J7R8NHbqa1cPgXvl5l7Ju1hExTmh93oI6AIXf03FFc"
  });
});