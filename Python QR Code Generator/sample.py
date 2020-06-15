import qrcode

tables = [
    'table1',
    'table2',
    'table3',
    'table4',
    'table5',
    'table6',
    'table7'
]

# need to use aes algorithm to encode information such as table number, etc into the qrcode

# later on nodejs side will have to decrypt this information to be able to access the table number 

for table in tables:
    qr = qrcode.QRCode(
    version=12,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=2,
    border=8)
    qr.add_data('https://localhost:5000/generate/mcdonalds/' + table)
    qr.make()
    img = qr.make_image()
    img.save(table+'.png')