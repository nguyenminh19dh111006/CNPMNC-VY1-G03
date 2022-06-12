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
    async function deletePhong(phongID){
        try{
            let pool = await sql.connect(config);
            let deletePhong = await pool.request()
                .input('input_parameter', sql.Int, phongID)
                .query("delete from Phong where IdPhong = @input_parameter")
            return deletePhong.recordsets;
        }
        catch(err){
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

    async function deleteKhachSan(khachsanID){
        try{
            let pool = await sql.connect(config);
            let deleteKhachSan = await pool.request()
                .input('input_parameter', sql.Int, khachsanID)
                .query("delete from KhachSan where IdKhachSan = @input_parameter")
            return deleteKhachSan.recordsets;
        }
        catch(err){
            console.log(err);
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

    async function getKhachSanByDiaDiem(diadiemksID){
        try{
            let room = await sql.connect(config);
            let khachsangetss = await room.request()
            .input('input_parameter', sql.Int, diadiemksID)
            .query("SELECT * from KhachSan where IdDiaDiem = @input_parameter");
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
//KHACH HANG
async function getKhachHangs(){
    try{
        let room = await sql.connect(config);
        let khachhangs = await room.request().query("SELECT * from KhachHang");
        return khachhangs.recordsets;
    }
    catch (error){
        console.log(error);
        }
    }
//PARTNER
async function getPartners(){
    try{
        let room = await sql.connect(config);
        let partners = await room.request().query("SELECT * from Partner");
        return partners.recordsets;
    }
    catch (error){
        console.log(error);
        }
    }
    async function RegisterPartner(partner){
        try{
            let pool = await sql.connect(config);
            let partnerregis = await pool.request()
                .input('IdPartner', sql.Int, partner.IdPartner)
                .input('TenKhachSan', sql.VarChar, partner.TenKhachSan)
                .input('TenPhong', sql.VarChar,partner.TenPhong)
                .input('ThayDoiChinhSach',sql.VarChar,partner.ThayDoiChinhSach)
                .input('TenTaiKhoan', sql.NVarChar,partner.TenTaiKhoan)
                .input('MatKhau', sql.NVarChar,partner.MatKhau)
                .execute('InsertPartner');
            return partnerregis.recordsets;
        }
        catch(err){
            console.log(err);
        }
    }
    async function LoginPartner(partner){
        try{
            let pool = await sql.connect(config);
            let partnerlogin = await pool.request()
                .input('TenTaiKhoan', sql.NVarChar, partner.username)
                .input('MatKhau', sql.NVarChar, partner.password)
                .query("SELECT * FROM Partner WHERE TenTaiKhoan = @TenTaiKhoan AND MatKhau = @MatKhau");
            return partnerlogin.recordsets;
        }
        catch(err){
            console.log(err);
        }
    }
//DAT PHONG
async function getDatPhongs(){
    try{
        let room = await sql.connect(config);
        let datphongs = await room.request().query("SELECT * from DatPhongKhachSan");
        return datphongs.recordsets;
    }
    catch (error){
        console.log(error);
        }
    }
    async function postDatPhongs(datphong){
        try{
            let pool = await sql.connect(config);
            let postdatphongks = await pool.request()
                .input('IdKhachHang', sql.Int, datphong.IdKhachHang)
                .input('IdDiaDiem', sql.Int, datphong.IdDiaDiem)
                .input('IdKhachSan', sql.Int,datphong.IdKhachSan)
                .input('SoDiDong',sql.NVarChar,datphong.SoDiDong)
                .input('TenNguoiLienHe', sql.NVarChar,datphong.TenNguoiLienHe)
                .input('CVV', sql.Decimal,datphong.CVV)
                .input('HieuLuc', sql.DateTime,datphong.HieuLuc)
                .input('SoThe', sql.NVarChar,datphong.SoThe)
                .execute('InsertDatPhong');
            return postdatphongks.recordsets;
        }
        catch(err){
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
    getDiaDiemById : getDiaDiemById,
    deletePhong : deletePhong,
    deleteKhachSan : deleteKhachSan,
    getKhachHangs : getKhachHangs,
    getPartners : getPartners,
    RegisterPartner : RegisterPartner,
    LoginPartner : LoginPartner,
    getDatPhongs : getDatPhongs,
    postDatPhongs : postDatPhongs,
    getKhachSanByDiaDiem : getKhachSanByDiaDiem
}