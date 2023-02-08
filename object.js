const nayok = {
    name: 'Sabbir Sarker',
    id: 556040,
    address: 'mirpur',
    isSingle: true,
    friends:['Saymoon', 'Usman', 'Emon'],
    movies: [{name: 'no. 1', year: 2015}, {name: 'king khan, year:2018'}],
    act: function(){
        console.log('acting like Sakiv khan')
    },
    car: {
        brand: 'tesla',
        price: 5000,
        made: 2022,
        manufacturer: {
            name: 'tasla',
            ceo: 'Elon Mask',
        }
    }
}

// console.log(student.movies);
nayok.act();