class HomeController{
    index(req, res){
        res.json(200).json({
            tudoCerto: true,
        })
    }
}

export default new HomeController()