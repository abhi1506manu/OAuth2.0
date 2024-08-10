import passport from "passport";

const login = (req, res) => {
  res.render("login");
};

// const home = (req, res) => {
//   if (req.isAuthenticated()) {
//     return home(req, res);
//   }
//   res.redirect("/login");
// };

const logout = (req, res) => {
  req.logout((err) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.redirect("/login");
  });
};

const googleAuth = passport.authenticate("google", {
  scope: ["profile", "email"],
});

// **** this is another way to handle google auth callback******

// const googleAuthCallBack = passport.authenticate("google", {
//   failureRedirect: "/login",
//   successRedirect: "/",
// });


const googleAuthCallBack  = (req, res)=>{
  if (req.user) {
    res.render("Home")
  } else {
    res.redirect("/login");
    console.log("Authentication failed",req.user);
   
  }

}

export { googleAuth, googleAuthCallBack, login, logout };
