// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const colors = Object.freeze({
    YELLOW: 'Yellow',
    PINK: 'Pink',
    WHITE: 'White',
    PURPLE: 'Purple',
    BLUE: 'Blue',
    BLACK: 'Black',
    GREY: 'Grey'
})

const cities = Object.freeze({
    jkt: 'Jakarta',
    tng: 'Tangerang',
    bgr: 'Bogor',
    sby: 'Surabaya'
})

const removeDuplicates = (array) => ([...new Set(array)])

const firstUser = {
    name: 'Monica',
    gender: 0,
    age: 17,
    email: 'monica@dingdong.com',
    favoriteColor: [colors.YELLOW, colors.PINK, colors.WHITE, colors.PURPLE],
    isHavePet: true,
    education: [
        { name: 'SD 01', city: cities.jkt, graduate: 2016 },
        { name: 'SMP 02', city: cities.jkt, graduate: 2019 },
        { name: 'SMA 03', city: cities.tng },
    ],
    favoriteRestaurant: removeDuplicates(['Bento', 'Sushi', 'Pancake', 'Eggy', 'Tempura', 'Bento', 'Eggy', 'Padang', 'Tteok', 'Sushi', 'Sushi']),
};

const secondUser = {
    name: 'Wendy',
    gender: 1,
    age: 23,
    email: 'monica@dingdong.com',
    favoriteColor: [colors.BLUE, colors.BLACK, colors.GREY],
    isHavePet: false,
    education: [
        { name: 'SD 02', city: cities.jkt, graduate: 2010 },
        { name: 'SMP 03', city: cities.bgr, graduate: 2013 },
        { name: 'SMA 01', city: cities.sby, graduate: 2016 },
        { name: 'Universitas Maju', city: cities.tng },
    ],
    favoriteRestaurant: removeDuplicates(['Tempura', 'Bento', 'Sushi', 'Pancake', 'Padang', 'Katsu', 'Geprek', 'Pancake', 'Eggy'])
};


// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};
