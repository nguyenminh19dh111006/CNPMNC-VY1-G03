const config = {
    driver:"msnodesqlv8",
    user:'sa',
    password:'loveTRINH2l',
    server:'157.245.207.242',
    database:'phongkhachsan',
    options: {
        trustedconnection:true,
        enableArithAbort:true,
        instancename :'157.245.207.242',
        trustServerCertificate: true
    },
    port : 1433
}
module.exports=config;