var config = require('./db.config');
const sql = require('mssql');

//PHONG
async function getPhongs(){
    try{
        let room = await sql.connect(config);
        let phongkhachsan = await room.request().query("SELECT * from Phong");
        return phongkhachsan.recordsets;
    }
    catch (error){
        console.log(error);
        }
    }
    async function getPhong(phongID){
        try{
            let room = await sql.connect(config);
            let phongkhachsans = await room.request()
            .input('input_parameter', sql.Int, phongID)
            .query("SELECT * from Phong where IdPhong = @input_parameter");
            return phongkhachsans.recordsets;
        }
        catch (error){
            console.log(error);
        }
    }
    async function postPhong(phong){
        try{
            let room = await sql.connect(config);
            let insertPhong = await room.request()
            .input('IdPhong', sql.Int, phong.IdPhong)
            .input('TenPhong', sql.VarChar, phong.TenPhong)
            .input('LoaiPhong', sql.VarChar, phong.LoaiPhong)
            .input('ThoiGianNhanPhong', sql.DateTime, phong.ThoiGianNhanPhong)
            .input('ThoiGianTraPhong', sql.DateTime, phong.ThoiGianTraPhong)
            .input('SoDem', sql.Int, phong.SoDem)
            .input('SoLuongNguoi', sql.Int, phong.SoLuongNguoi)
            .execute('InsertPhong');
            return insertPhong.recordsets;
        }
        catch (err){
            console.log(err);
        }
    }
//DAT PHONG
async function postDatPhong(datphong){
    try{
        let room = await sql.connect(config);
        let postdatp = await room.request()
        .input('IdPhong', sql.Int, datphong.IdPhong)
        .input('ChiTietGia', sql.Char, datphong.ChiTietGia)
        .input('ChinhSachDatPhong', sql.VarChar, datphong.ChinhSachDatPhong)
        .input('ChinhSachHuyPhong', sql.VarChar, datphong.ChinhSachHuyPhong)
        .input('TuyChonTienNghi', sql.VarChar, datphong.TuyChonTienNghi)
        .input('LoaiHinhCuTru', sql.VarChar, datphong.LoaiHinhCuTru)
        .input('YeuCauDacBiet', sql.VarChar, datphong.YeuCauDacBiet)
        .execute('InsertDatPhong');
        return postdatp.recordsets;
    }
    catch (err){
        console.log(err);
    }
}
//DIA DIEM

async function getDiaDiems(){
    try{
        let room = await sql.connect(config);
        let diadiemget = await room.request().query("SELECT * from DiaDiem");
        return diadiemget.recordsets;
    }
    catch (error){
        console.log(error);
        }
    }
    async function getDiaDiem(diadiemID){
        try{
            let room = await sql.connect(config);
            let diadiemgets = await room.request()
            .input('input_parameter', sql.Int, diadiemID)
            .query("SELECT * from DiaDiem where IdDiaDiem = @input_parameter");
            return diadiemgets.recordsets;
        }
        catch (error){
            console.log(error);
        }
    }
    async function getDiaDiemById(diadiemID){
        try{
            let room = await sql.connect(config);
            let diadiemgetss = await room.request()
            .input('input_parameter', sql.Int, diadiemID)
            .query("SELECT * from DiaDiem where IdDiaDiem = @input_parameter");
            return diadiemgetss.recordsets;
        }
        catch (error){
            console.log(error);
        }
    }

//KHACH SAN

async function getKhachSans(){
    try{
        let room = await sql.connect(config);
        let khachsanget = await room.request().query("SELECT * from KhachSan");
        return khachsanget.recordsets;
    }
    catch (error){
        console.log(error);
        }
    }
    async function getKhachSan(khachsanID){
        try{
            let room = await sql.connect(config);
            let khachsangets = await room.request()
            .input('input_parameter', sql.Int, khachsanID)
            .query("SELECT * from KhachSan where IdKhachSan = @input_parameter");
            return khachsangets.recordsets;
        }
        catch (error){
            console.log(error);
        }
    }

    async function getKhachSanByHangSao(khachsanID){
        try{
            let room = await sql.connect(config);
            let khachsangetss = await room.request()
            .input('input_parameter', sql.Int, khachsanID)
            .query("SELECT * from KhachSan where HangSao = @input_parameter");
            return khachsangetss.recordsets;
        }
        catch (error){
            console.log(error);
        }
    }

    async function postKhachSan(khachsan){
        try{
            let room = await sql.connect(config);
            let khachsanpost = await room.request()
            .input('IdKhachSan', sql.Int, khachsan.IdKhachSan)
            .input('TenKhachSan', sql.VarChar, khachsan.TenKhachSan)
            .input('HangSao', sql.Int, khachsan.HangSao)
            .input('KhoangGia', sql.Decimal, khachsan.KhoangGia)
            .input('IdPhong', sql.Int, khachsan.IdPhong)
            .input('IdDiaDiem', sql.Int, khachsan.IdDiaDiem)
            .execute('InsertKhachSan');
            return khachsanpost.recordsets;
        }
        catch (err){
            console.log(err);
        }
    }

module.exports ={
    getPhongs : getPhongs,
    getPhong : getPhong,
    postPhong : postPhong,
    postDatPhong : postDatPhong,
    getKhachSans : getKhachSans,
    getKhachSan : getKhachSan,
    postKhachSan : postKhachSan,
    getKhachSanByHangSao : getKhachSanByHangSao,
    getDiaDiem : getDiaDiem,
    getDiaDiems : getDiaDiems,
    getDiaDiemById : getDiaDiemById
}