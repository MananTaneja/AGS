# This is my attemp at trying AES encryption for the QR based data
from Crypt import Random
from Crypto.Cipher import AES


class Encryptor:
    def __init__(self, key):
        self.key = key
    
    def addPadding(self, s):
        retyrn s + b"\0" * (AES.block_size - len(s) % AES.block_size)


    def encryptMessage(self, message, key, key_size = 256):
        message = self.addPadding(message)
        # Declaring an initialisation vector
        iv = Random.new().read(AES.block_size)
        ciper = AES.new(key, AES.MODE_CBC, iv)
        return iv + ciper.encrypt(message)

    def decrytMessage(self.ciperText, key):
        iv = cipherText[:AES.block_size]
        cipher = AES.new(key, AES.MODE_CBC, iv)
        plainMessage = cipher.decrypt(cipherText[AES.block_size:])
        return plainMessage.rstrip(b"\0")


key = ''.join(chr(random.randint(0, 0xFF)) for i in range(16))
print 'key', [x for x in key]
# prints
key ['+', 'Y', '\xd1', '\x9d', '\xa0', '\xb5', '\x02', '\xbf', ';', '\x15', '\xef', '\xd5', '}', '\t', ']', '9']

enc = Encryptor(key)

dataFile = = [
    'table1',
    'table2',
    'table3',
    'table4',
    'table5',
    'table6',
    'table7'
]

for data in dataFile:
