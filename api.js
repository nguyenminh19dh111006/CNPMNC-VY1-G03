const dboperations = require('./dboperations');
var Db = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const { response } = require('express');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request,response,next)=>{
    console.log('middleware');
    next();
})
//PHONG
router.route('/phong').get((request,response)=>{
    dboperations.getPhongs().then(result =>{
        response.json(result[0]);
    })
})

router.route('/phong/:id').get((request,response)=>{
    dboperations.getPhong(request.params.id).then(result =>{
        response.json(result[0]);
    })
})

router.route('/phong').post((request,response)=>{
    let phong = {...request.body}
    dboperations.postPhong(phong).then(result =>{
        response.status(201).json(phong);
    })
})

router.route('/phong/:id').delete((request,response)=>{
    dboperations.deletePhong(request.params.id).then(result =>{
        response.status(202).send(result);
    })
})
//DATPHONG

router.route('/dskh').post((request,response)=>{
    let datphong = {...request.body}
    dboperations.postDatPhong(datphong).then(result=>{
        response.status(201).json(datphong);
    })
})

//KHACH HANG

router.route('/khachhang').get((request,response)=>{
    dboperations.getKhachHangs().then(result =>{
        response.json(result[0]);
    })
})

//DIA DIEM

router.route('/diadiem').get((request,response)=>{
    dboperations.getDiaDiems().then(result =>{
        response.json(result[0]);
    })
})

router.route('/diadiem/:id').get((request,response)=>{
    dboperations.getDiaDiem(request.params.id).then(result =>{
        response.json(result[0]);
    })
})

router.route('/diadiem/getDiaDiem/:id').get((request,response)=>{
    dboperations.getDiaDiemById(request.params.id).then(result =>{
        response.json(result[0]);
    })
})
//PARTNER

router.route('/partner').get((request,response)=>{
    dboperations.getPartners().then(result =>{
        response.json(result[0]);
    })
})

router.post("/partner", (req, res)=>{
    let order = {...req.body}

    dboperations.RegisterPartner(order).then(result =>{
        res.status(201).send(result);
    })
})

router.post("/partner-login", (req, res)=>{
    let order = {...req.body}

    dboperations.LoginPartner(order).then(result =>{
        res.status(203).send(result[0][0]);
    })
})
//DAT PHONG

router.route('/datphong').get((request,response)=>{
    dboperations.getDatPhongs().then(result =>{
        response.json(result[0]);
    })
})

router.post("/datphong", (req, res)=>{
    let order = {...req.body}

    dboperations.postDatPhongs(order).then(result =>{
        res.status(201).send(result);
    })
})
//KHACHSAN

router.route('/khachsan').get((request,response)=>{
    dboperations.getKhachSans().then(result =>{
        response.json(result[0]);
    })
})

router.route('/khachsan/:id').get((request,response)=>{
    dboperations.getKhachSan(request.params.id).then(result =>{
        response.json(result[0]);
    })
})
router.route('/khachsan/getHangSao/:id').get((request,response)=>{
    dboperations.getKhachSanByHangSao(request.params.id).then(result =>{
        response.json(result[0]);
    })
})
router.route('/khachsan/getDiaDiem/:id').get((request,response)=>{
    dboperations.getKhachSanByDiaDiem(request.params.id).then(result =>{
        response.json(result[0]);
    })
})

router.route('/khachsan').post((request,response)=>{
    let khachsan = {...request.body}
    dboperations.postKhachSan(khachsan).then(result =>{
        response.status(201).json(khachsan);
    })
})

var port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is running at ' + port);