class Phong{
    constructor(IdPhong, TenPhong, ThoiGianNhanPhong, ThoiGianTraPhong, SoDem,SoLuongNguoi,LoaiPhong, IdKhachSan, IdDiaDiem){
        this.IdPhong = IdPhong;
        this.IdKhachSan = IdKhachSan;
        this.IdDiaDiem = IdDiaDiem;
        this.TenPhong = TenPhong;
        this.ThoiGianNhanPhong = ThoiGianNhanPhong;
        this.ThoiGianTraPhong = ThoiGianTraPhong;
        this.SoDem = SoDem;
        this.SoLuongNguoi = SoLuongNguoi;
        this.LoaiPhong = LoaiPhong
    }
}
module.exports = Phong;