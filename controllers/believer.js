

module.exports.homepage = (req, res, next)=>{
    res.render('index',{path:'/'});
}

module.exports.about = (req, res, next)=>{
    res.render('about', {path:'/about'})
}

module.exports.contact = (req, res)=>{
    res.render('contact', {path:'/contact'})
}