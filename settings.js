const fs = require('fs')
const chalk = require('chalk')

global.premium = ['6285892832640']
global.packname = ''
global.author = 'Wa : 0858-9283-2640\nYT : KATANA MODS×\nIG : ryarllh_01\nGH : TurDeck\nTT : polosan_whatsapp'
global.sessionName = 'TURU DEK'
global.namabotnya = 'RIK BOTz'
global.namaownernya = 'Turu Deck'
global.dapkey = 'Kirbotz123'
global.lolkey = 'Atakbotz'
global.kirkey = 'KirBotz'
global.wame = 'https://wa.me/6285892832640'
global.gckirbotz = 'https://chat.whatsapp.com/KJZDS3AGHg5Ly7l4ccZsZM'
global.ownerNumber = ["6285892832640@s.whatsapp.net"]
global.email = 'rickytewolan02@gmail.com'
global.yt = 'https://www.youtube.com/c/katanamods'
global.webkir = 'https://bit.ly/3yk3gOo'
global.githubkir = 'https://bit.ly/3FqVBj8'
global.region = 'Indonesia'
global.prefa = ['','!','.','#','-','•']
global.mess = {
    success: 'Success 💯',
    admin: 'Fitur Khusus Admin Group!!!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!!!',
    owner: 'Fitur Khusus Owner Bot!!!',
    group: 'Fitur Digunakan Hanya Untuk Group!!!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!!!',
    bot: 'Fitur Khusus Pengguna Nomor Bot!!!',
    error: 'Error Kak Silahkan Chat Owner',
    wait: '❗Waittt...',
    noPetualang: 'Itssss Kamu Belum Jadi Member Petualang, Silahkan Ketik .joinrpg <namamu>',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    premium: 'Maaf Sebelumya Kamu Belum Premium, Silahkan Pencet Di Bawah Untuk Beli Premium',
    wrongFormat: 'Format salah, coba liat lagi di menu',
}


global.limitawal = {
    premium: "Infinity",
    free: 5
}

global.creator = JSON.parse(fs.readFileSync('./Database/owner.json'))

global.thumb = fs.readFileSync('./Image/kirbotz.jpg')
global.thumbdm = fs.readFileSync('./Image/diamond.jpg')
global.thumbrpg = fs.readFileSync('./Image/kirbotzrpg.jpg')
global.imgjoinrpg = fs.readFileSync('./Image/joinrpg.jpg')
global.imgmining = fs.readFileSync('./Image/mining.jpg')
global.sticknya = fs.readFileSync('./Kir/JANGANDIUBAH/fuck.webp')

global.imgdevil = fs.readFileSync('./Image/img/devil.jpg')
global.imgslime = fs.readFileSync('./Image/img/slime.jpg')
global.imgdemon = fs.readFileSync('./Image/img/demon.jpg')
global.imggoblin = fs.readFileSync('./Image/img/goblin.jpg')
global.imgdemonking = fs.readFileSync('./Image/img/demonking.jpg')
global.imgbehemoth = fs.readFileSync('./Image/img/behemoth.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
