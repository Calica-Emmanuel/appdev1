exports.homepage = (req, res) => {
    res.render('index'); 
};

exports.about = (req, res) => {
    res.render('about'); 
};

exports.contact = (req, res) => {
    res.render('contact'); 
};

exports.services = (req, res) => {
    res.render('services'); 
};

exports.faq = (req, res) => {
    res.render('faq'); 
};

exports.testimonials = (req, res) => {
    res.render('testimonials'); 
};

exports.portfolio = (req, res) => {
    res.render('portfolio');
};

exports.profile = (req, res) => {
    const username = req.params.username;
    res.render('profile', { username }); 
};
