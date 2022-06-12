class Phong{
    constructor(IdPhong, TenPhong, ThoiGianNhanPhong, ThoiGianTraPhong, SoDem,SoLuongNguoi,LoaiPhong, IdKhachSan, IdDiaDiem){
        this.IdPhong = IdPhong;
        this.TenPhong = TenPhong;
        this.ThoiGianNhanPhong = ThoiGianNhanPhong;
        this.ThoiGianTraPhong = ThoiGianTraPhong;
        this.SoDem = SoDem;
        this.SoLuongNguoi = SoLuongNguoi;
        this.LoaiPhong = LoaiPhong;
        this.IdKhachSan = IdKhachSan;
        this.IdDiaDiem = IdDiaDiem;
    }
}
module.exports = Phong;