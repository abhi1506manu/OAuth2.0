import passport from "passport";

const login = (req, res) => {
  res.send(`<a href="http://localhost:5000/auth/google">Login with google</a>`);
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
    res.send("redirected to login");
  });
};

const googleAuth = passport.authenticate("google", {
  scope: ["profile", "email"],
});

const googleAuthCallBack = passport.authenticate("google", {
  failureRedirect: "/login",
  successRedirect: "/",
});

export { googleAuth, googleAuthCallBack, login, logout };
