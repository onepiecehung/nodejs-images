exports.signup = function (req, res) {
    message = '';
    if (req.method == "POST") {
        var post = req.body;
        var name = post.username;
        var pass = post.pass;
        var email = post.email;


        var sql = "INSERT INTO `users`(`username`,`email`,`pass`) VALUES ('" + name + "','" + email + "','" + pass + "')";

        var query = db.query(sql, function (err, result) {

            message = "You are register successfully!";
            res.render('login/index.ejs', { message: message });
        });

    } else {
        res.render('register/index.ejs');
    }
};