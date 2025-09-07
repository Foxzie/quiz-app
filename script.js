document.addEventListener("DOMContentLoaded", () => {
    const startPage = document.getElementById("start-page");
    const quizPage = document.getElementById("quiz-page");
    const startButton = document.getElementById("start-btn");

    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");
    const stopButton = document.getElementById("stop-btn");
    const currentScoreElement = document.getElementById("current-score");

    const correctSound = document.getElementById("correctSound");
    const incorrectSound = document.getElementById("incorrectSound");

    let currentQuestionIndex = 0;
    let score = 0;
    

    const questions = [
        {
            question: "Siapakah pencipta Facebook?",
            answers: [
                { text: "Elon Musk", correct: false },
                { text: "Mark Zuckerberg", correct: true },
                { text: "Bill Gates", correct: false },
                { text: "Steve Jobs", correct: false }
            ]
        },
         {
        question: "Siapa penemu lampu pijar?",
        answers: [
            { text: "Thomas Edison", correct: true },
            { text: "Nikola Tesla", correct: false },
            { text: "Alexander Graham Bell", correct: false },
            { text: "Albert Einstein", correct: false },
        ],
    },
    {
        question: "Berapa banyak benua di dunia?",
        answers: [
            { text: "5", correct: false },
            { text: "6", correct: false },
            { text: "7", correct: true },
            { text: "8", correct: false },
        ],
    },
    {
        question: "Apa nama planet terbesar di tata surya?",
        answers: [
            { text: "Bumi", correct: false },
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturnus", correct: false },
        ],
    },
    {
        question: "Siapakah pencipta Facebook?",
        answers: [
            { text: "Elon Musk", correct: false },
            { text: "Mark Zuckerberg", correct: true },
            { text: "Bill Gates", correct: false },
            { text: "Steve Jobs", correct: false }
        ]
    },
    {
        question: "Berapa jumlah hari dalam satu tahun kabisat?",
        answers: [
            { text: "365", correct: false },
            { text: "366", correct: true },
            { text: "364", correct: false },
            { text: "367", correct: false }
        ]
    },
    {
        question: "Apa nama planet terbesar di tata surya?",
        answers: [
            { text: "Bumi", correct: false },
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturnus", correct: false }
        ]
    },
    {
        question: "Berapa banyak benua di dunia?",
        answers: [
            { text: "5", correct: false },
            { text: "6", correct: false },
            { text: "7", correct: true },
            { text: "8", correct: false }
        ]
    },
    {
        question: "Siapa penulis buku 'Laskar Pelangi'?",
        answers: [
            { text: "Tere Liye", correct: false },
            { text: "Ahmad Fuadi", correct: false },
            { text: "Andrea Hirata", correct: true },
            { text: "Pramoedya Ananta Toer", correct: false }
        ]
    },
    {
        question: "Apa ibukota Jepang?",
        answers: [
            { text: "Kyoto", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Osaka", correct: false },
            { text: "Hiroshima", correct: false }
        ]
    },
    {
        question: "Apa nama alat musik tradisional dari Jawa Barat yang terbuat dari bambu?",
        answers: [
            { text: "Gamelan", correct: false },
            { text: "Angklung", correct: true },
            { text: "Suling", correct: false },
            { text: "Gendang", correct: false }
        ]
    },
    {
        question: "Berapa hasil dari 9 x 9?",
        answers: [
            { text: "72", correct: false },
            { text: "81", correct: true },
            { text: "90", correct: false },
            { text: "64", correct: false }
        ]
    },
    {
        question: "Sungai terpanjang di dunia adalah...",
        answers: [
            { text: "Sungai Amazon", correct: false },
            { text: "Sungai Nil", correct: true },
            { text: "Sungai Mississippi", correct: false },
            { text: "Sungai Yangtze", correct: false }
        ]
    },
    {
        question: "Apa unsur kimia dengan simbol 'O'?",
        answers: [
            { text: "Emas", correct: false },
            { text: "Oksigen", correct: true },
            { text: "Besi", correct: false },
            { text: "Perak", correct: false }
        ]
    },
    {
        question: "Siapa penemu telepon?",
        answers: [
            { text: "Thomas Edison", correct: false },
            { text: "Alexander Graham Bell", correct: true },
            { text: "Nikola Tesla", correct: false },
            { text: "Albert Einstein", correct: false }
        ]
    },
    {
        question: "Ibu kota Australia adalah...",
        answers: [
            { text: "Sydney", correct: false },
            { text: "Melbourne", correct: false },
            { text: "Canberra", correct: true },
            { text: "Brisbane", correct: false }
        ]
    },
    {
        question: "Apa nama mata uang Inggris?",
        answers: [
            { text: "Euro", correct: false },
            { text: "Dolar", correct: false },
            { text: "Pound Sterling", correct: true },
            { text: "Yen", correct: false }
        ]
    },
    {
        question: "Siapa pelukis terkenal Mona Lisa?",
        answers: [
            { text: "Pablo Picasso", correct: false },
            { text: "Vincent van Gogh", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Michelangelo", correct: false }
        ]
    },
    {
        question: "Sistem pernapasan manusia menggunakan organ utama...",
        answers: [
            { text: "Jantung", correct: false },
            { text: "Paru-paru", correct: true },
            { text: "Ginjal", correct: false },
            { text: "Hati", correct: false }
        ]
    },
    {
        question: "Berapa jumlah sisi pada sebuah heksagon?",
        answers: [
            { text: "5", correct: false },
            { text: "6", correct: true },
            { text: "7", correct: false },
            { text: "8", correct: false }
        ]
    },
    {
        question: "Apa nama benua terdingin di dunia?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Antartika", correct: true },
            { text: "Eropa", correct: false },
            { text: "Afrika", correct: false }
        ]
    },
    {
        question: "Apa nama ibukota Thailand?",
        answers: [
            { text: "Hanoi", correct: false },
            { text: "Bangkok", correct: true },
            { text: "Kuala Lumpur", correct: false },
            { text: "Manila", correct: false }
        ]
    },
    {
        question: "Gunung tertinggi di dunia adalah...",
        answers: [
            { text: "Gunung Fuji", correct: false },
            { text: "Gunung Everest", correct: true },
            { text: "Gunung Kilimanjaro", correct: false },
            { text: "Gunung Jayawijaya", correct: false }
        ]
    },
    {
        question: "Siapa pendiri Microsoft?",
        answers: [
            { text: "Mark Zuckerberg", correct: false },
            { text: "Steve Jobs", correct: false },
            { text: "Bill Gates", correct: true },
            { text: "Larry Page", correct: false }
        ]
    },
    {
        question: "Apa nama hewan tercepat di darat?",
        answers: [
            { text: "Singa", correct: false },
            { text: "Harimau", correct: false },
            { text: "Cheetah", correct: true },
            { text: "Kuda", correct: false }
        ]
    },
    {
        question: "Apa ibukota Kanada?",
        answers: [
            { text: "Toronto", correct: false },
            { text: "Vancouver", correct: false },
            { text: "Ottawa", correct: true },
            { text: "Montreal", correct: false }
        ]
    },
    {
        question: "Sistem bilangan yang digunakan komputer adalah...",
        answers: [
            { text: "Desimal", correct: false },
            { text: "Biner", correct: true },
            { text: "Oktal", correct: false },
            { text: "Heksadesimal", correct: false }
        ]
    },
    {
        question: "Tahun berapa Indonesia merdeka?",
        answers: [
            { text: "1942", correct: false },
            { text: "1945", correct: true },
            { text: "1948", correct: false },
            { text: "1950", correct: false }
        ]
    },
    {
        question: "Siapa penulis 'Harry Potter'?",
        answers: [
            { text: "Stephen King", correct: false },
            { text: "J.K. Rowling", correct: true },
            { text: "George R.R. Martin", correct: false },
            { text: "Suzanne Collins", correct: false }
        ]
    },
    {
        question: "Apa nama mata uang Tiongkok?",
        answers: [
            { text: "Won", correct: false },
            { text: "Yen", correct: false },
            { text: "Yuan", correct: true },
            { text: "Dolar", correct: false }
        ]
    },
    {
        question: "Apa nama benda langit yang memiliki cincin?",
        answers: [
            { text: "Jupiter", correct: false },
            { text: "Mars", correct: false },
            { text: "Saturnus", correct: true },
            { text: "Uranus", correct: false }
        ]
    },
    {
        question: "Berapa jumlah pemain dalam satu tim sepak bola?",
        answers: [
            { text: "9", correct: false },
            { text: "10", correct: false },
            { text: "11", correct: true },
            { text: "12", correct: false }
        ]
    },
    {
        question: "Apa nama benda cair yang paling melimpah di Bumi?",
        answers: [
            { text: "Minyak", correct: false },
            { text: "Alkohol", correct: false },
            { text: "Air", correct: true },
            { text: "Raksa", correct: false }
        ]
    },
    {
        question: "Apa unsur kimia dengan simbol 'Au'?",
        answers: [
            { text: "Perak", correct: false },
            { text: "Emas", correct: true },
            { text: "Besi", correct: false },
            { text: "Tembaga", correct: false }
        ]
    },
    {
        question: "Siapa presiden pertama Amerika Serikat?",
        answers: [
            { text: "Thomas Jefferson", correct: false },
            { text: "George Washington", correct: true },
            { text: "Abraham Lincoln", correct: false },
            { text: "Franklin D. Roosevelt", correct: false }
        ]
    },
    {
        question: "Apa nama ibukota Mesir?",
        answers: [
            { text: "Alexandria", correct: false },
            { text: "Kairo", correct: true },
            { text: "Luxor", correct: false },
            { text: "Giza", correct: false }
        ]
    },
    {
        question: "Apa nama samudra terbesar di dunia?",
        answers: [
            { text: "Samudra Atlantik", correct: false },
            { text: "Samudra Hindia", correct: false },
            { text: "Samudra Arktik", correct: false },
            { text: "Samudra Pasifik", correct: true }
        ]
    },
    {
        question: "Apa jenis hewan yang termasuk mamalia laut?",
        answers: [
            { text: "Hiu", correct: false },
            { text: "Paus", correct: true },
            { text: "Gurita", correct: false },
            { text: "Kura-kura", correct: false }
        ]
    },
    {
        question: "Apa nama mata uang Korea Selatan?",
        answers: [
            { text: "Yen", correct: false },
            { text: "Won", correct: true },
            { text: "Yuan", correct: false },
            { text: "Ringgit", correct: false }
        ]
    },
    {
        question: "Berapa jumlah warna dasar (primer) dalam teori warna?",
        answers: [
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false },
            { text: "5", correct: false }
        ]
    },
    {
        question: "Apa nama benua terluas di dunia?",
        answers: [
            { text: "Afrika", correct: false },
            { text: "Eropa", correct: false },
            { text: "Asia", correct: true },
            { text: "Amerika", correct: false }
        ]
    },
    {
        question: "Apa nama gunung tertinggi di Indonesia?",
        answers: [
            { text: "Gunung Merapi", correct: false },
            { text: "Gunung Rinjani", correct: false },
            { text: "Gunung Kerinci", correct: false },
            { text: "Puncak Jaya", correct: true }
        ]
    },
    {
        question: "Siapa penulis 'Romeo and Juliet'?",
        answers: [
            { text: "Charles Dickens", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Jane Austen", correct: false },
            { text: "Leo Tolstoy", correct: false }
        ]
    },
    {
        question: "Apa nama benda cair yang digunakan untuk mengisi termometer?",
        answers: [
            { text: "Air", correct: false },
            { text: "Minyak", correct: false },
            { text: "Raksa", correct: true },
            { text: "Alkohol", correct: false }
        ]
    },
    {
        question: "Apa ibukota Spanyol?",
        answers: [
            { text: "Barcelona", correct: false },
            { text: "Madrid", correct: true },
            { text: "Lisbon", correct: false },
            { text: "Roma", correct: false }
        ]
    },
    {
        question: "Apa nama proses di mana tumbuhan membuat makanan sendiri?",
        answers: [
            { text: "Respirasi", correct: false },
            { text: "Fotosintesis", correct: true },
            { text: "Transpirasi", correct: false },
            { text: "Metabolisme", correct: false }
        ]
    },
    {
        question: "Siapa penemu gravitasi?",
        answers: [
            { text: "Albert Einstein", correct: false },
            { text: "Isaac Newton", correct: true },
            { text: "Galileo Galilei", correct: false },
            { text: "Stephen Hawking", correct: false }
        ]
    },
    {
        question: "Berapa jumlah planet di tata surya?",
        answers: [
            { text: "7", correct: false },
            { text: "8", correct: true },
            { text: "9", correct: false },
            { text: "10", correct: false }
        ]
    },
    {
        question: "Apa nama mata uang Thailand?",
        answers: [
            { text: "Ringgit", correct: false },
            { text: "Baht", correct: true },
            { text: "Kyat", correct: false },
            { text: "Peso", correct: false }
        ]
    },
    {
        question: "Apa nama lautan yang memisahkan Asia dan Amerika?",
        answers: [
            { text: "Samudra Atlantik", correct: false },
            { text: "Samudra Hindia", correct: false },
            { text: "Samudra Pasifik", correct: true },
            { text: "Samudra Arktik", correct: false }
        ]
    },
    {
        question: "Apa nama hewan yang dikenal memiliki leher terpanjang?",
        answers: [
            { text: "Jerapah", correct: true },
            { text: "Unta", correct: false },
            { text: "Gajah", correct: false },
            { text: "Zebra", correct: false }
        ]
    },
    {
        question: "Siapa presiden Indonesia yang pertama?",
        answers: [
            { text: "Soeharto", correct: false },
            { text: "B.J. Habibie", correct: false },
            { text: "Soekarno", correct: true },
            { text: "Joko Widodo", correct: false }
        ]
    },
    {
        question: "Apa nama instrumen untuk mengukur suhu?",
        answers: [
            { text: "Barometer", correct: false },
            { text: "Termometer", correct: true },
            { text: "Seismograf", correct: false },
            { text: "Higrometer", correct: false }
        ]
    },
    {
        question: "Ibu kota Jerman adalah...",
        answers: [
            { text: "Munich", correct: false },
            { text: "Frankfurt", correct: false },
            { text: "Berlin", correct: true },
            { text: "Hamburg", correct: false }
        ]
    },
    {
        question: "Apa nama olahraga yang dimainkan dengan tongkat dan bola kecil?",
        answers: [
            { text: "Tenis", correct: false },
            { text: "Golf", correct: true },
            { text: "Baseball", correct: false },
            { text: "Bulutangkis", correct: false }
        ]
    },
    {
        question: "Berapa jumlah pemain dalam satu tim basket?",
        answers: [
            { text: "4", correct: false },
            { text: "5", correct: true },
            { text: "6", correct: false },
            { text: "7", correct: false }
        ]
    },
    {
        question: "Apa nama planet terdekat dengan matahari?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Merkurius", correct: true },
            { text: "Bumi", correct: false },
            { text: "Mars", correct: false }
        ]
    },
    {
        question: "Apa nama gunung berapi yang meletus di Pompeii, Italia?",
        answers: [
            { text: "Gunung Fuji", correct: false },
            { text: "Gunung Vesuvius", correct: true },
            { text: "Gunung Merapi", correct: false },
            { text: "Gunung Kilimanjaro", correct: false }
        ]
    },
    {
        question: "Apa nama mata uang India?",
        answers: [
            { text: "Rupee", correct: true },
            { text: "Ringgit", correct: false },
            { text: "Yuan", correct: false },
            { text: "Baht", correct: false }
        ]
    },
    {
        question: "Siapa penulis novel 'Ayat-Ayat Cinta'?",
        answers: [
            { text: "Raditya Dika", correct: false },
            { text: "Tere Liye", correct: false },
            { text: "Asma Nadia", correct: false },
            { text: "Habiburrahman El Shirazy", correct: true }
        ]
    },
    {
        question: "Apa ibukota Vietnam?",
        answers: [
            { text: "Hanoi", correct: true },
            { text: "Ho Chi Minh City", correct: false },
            { text: "Da Nang", correct: false },
            { text: "Hoi An", correct: false }
        ]
    },
    {
        question: "Apa nama alat musik gesek yang paling besar?",
        answers: [
            { text: "Biola", correct: false },
            { text: "Cello", correct: false },
            { text: "Kontrabas", correct: true },
            { text: "Gitar", correct: false }
        ]
    },
    {
        question: "Apa nama planet yang dijuluki 'Planet Merah'?",
        answers: [
            { text: "Bumi", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturnus", correct: false }
        ]
    },
    {
        question: "Berapa banyak negara yang ada di dunia?",
        answers: [
            { text: "150", correct: false },
            { text: "195", correct: true },
            { text: "200", correct: false },
            { text: "210", correct: false }
        ]
    },
    {
        question: "Apa nama sungai terpanjang di Indonesia?",
        answers: [
            { text: "Sungai Mahakam", correct: false },
            { text: "Sungai Musi", correct: false },
            { text: "Sungai Kapuas", correct: true },
            { text: "Sungai Barito", correct: false }
        ]
    },
    {
        question: "Apa nama zat yang memberikan warna hijau pada tumbuhan?",
        answers: [
            { text: "Hemoglobin", correct: false },
            { text: "Klorofil", correct: true },
            { text: "Melanin", correct: false },
            { text: "Karoten", correct: false }
        ]
    },
    {
        question: "Siapa penemu radio?",
        answers: [
            { text: "Albert Einstein", correct: false },
            { text: "Thomas Edison", correct: false },
            { text: "Guglielmo Marconi", correct: true },
            { text: "James Clerk Maxwell", correct: false }
        ]
    },
    {
        question: "Ibu kota Italia adalah...",
        answers: [
            { text: "Milan", correct: false },
            { text: "Roma", correct: true },
            { text: "Venesia", correct: false },
            { text: "Florence", correct: false }
        ]
    },
    {
        question: "Apa nama organ yang berfungsi memompa darah ke seluruh tubuh?",
        answers: [
            { text: "Paru-paru", correct: false },
            { text: "Hati", correct: false },
            { text: "Jantung", correct: true },
            { text: "Ginjal", correct: false }
        ]
    },
    {
        question: "Berapa jumlah kaki laba-laba?",
        answers: [
            { text: "6", correct: false },
            { text: "8", correct: true },
            { text: "10", correct: false },
            { text: "12", correct: false }
        ]
    },
    {
        question: "Apa nama negara terbesar di dunia berdasarkan luas wilayah?",
        answers: [
            { text: "Tiongkok", correct: false },
            { text: "Kanada", correct: false },
            { text: "Rusia", correct: true },
            { text: "Amerika Serikat", correct: false }
        ]
    },
    {
        question: "Apa ibukota Mesir kuno?",
        answers: [
            { text: "Giza", correct: false },
            { text: "Thebes", correct: false },
            { text: "Memphis", correct: true },
            { text: "Alexandria", correct: false }
        ]
    },
    {
        question: "Siapa penulis 'The Lord of the Rings'?",
        answers: [
            { text: "C.S. Lewis", correct: false },
            { text: "J.R.R. Tolkien", correct: true },
            { text: "George R.R. Martin", correct: false },
            { text: "J.K. Rowling", correct: false }
        ]
    },
    {
        question: "Apa nama mata uang Brasil?",
        answers: [
            { text: "Peso", correct: false },
            { text: "Real", correct: true },
            { text: "Dolar", correct: false },
            { text: "Euro", correct: false }
        ]
    },
    {
        question: "Apa nama lautan terkecil di dunia?",
        answers: [
            { text: "Samudra Hindia", correct: false },
            { text: "Samudra Atlantik", correct: false },
            { text: "Samudra Arktik", correct: true },
            { text: "Samudra Pasifik", correct: false }
        ]
    },
    {
        question: "Siapa penemu listrik?",
        answers: [
            { text: "Thomas Edison", correct: false },
            { text: "Nikola Tesla", correct: false },
            { text: "Benjamin Franklin", correct: true },
            { text: "Alessandro Volta", correct: false }
        ]
    },
    {
        question: "Berapa hasil dari 12 x 12?",
        answers: [
            { text: "121", correct: false },
            { text: "144", correct: true },
            { text: "169", correct: false },
            { text: "100", correct: false }
        ]
    },
    {
        question: "Apa nama gas yang paling banyak di atmosfer Bumi?",
        answers: [
            { text: "Oksigen", correct: false },
            { text: "Karbon dioksida", correct: false },
            { text: "Nitrogen", correct: true },
            { text: "Argon", correct: false }
        ]
    },
    {
        question: "Apa nama burung nasional Indonesia?",
        answers: [
            { text: "Burung Elang Jawa", correct: false },
            { text: "Burung Garuda", correct: true },
            { text: "Burung Merpati", correct: false },
            { text: "Burung Hantu", correct: false }
        ]
    },
    {
        question: "Ibu kota Mesir adalah...",
        answers: [
            { text: "Alexandria", correct: false },
            { text: "Kairo", correct: true },
            { text: "Giza", correct: false },
            { text: "Luxor", correct: false }
        ]
    },
    {
        question: "Apa nama benua terpadat penduduknya?",
        answers: [
            { text: "Afrika", correct: false },
            { text: "Eropa", correct: false },
            { text: "Asia", correct: true },
            { text: "Amerika", correct: false }
        ]
    },
    {
        question: "Berapa jumlah rasi bintang zodiak?",
        answers: [
            { text: "10", correct: false },
            { text: "11", correct: false },
            { text: "12", correct: true },
            { text: "13", correct: false }
        ]
    },
    {
        question: "Apa nama mata uang Turki?",
        answers: [
            { text: "Dinar", correct: false },
            { text: "Lira", correct: true },
            { text: "Euro", correct: false },
            { text: "Riyal", correct: false }
        ]
    },
    {
        question: "Apa nama mata uang Uni Eropa?",
        answers: [
            { text: "Pound Sterling", correct: false },
            { text: "Euro", correct: true },
            { text: "Dolar", correct: false },
            { text: "Yen", correct: false }
        ]
    },
    {
        question: "Siapa penulis novel 'Dilan'?",
        answers: [
            { text: "Raditya Dika", correct: false },
            { text: "Pidi Baiq", correct: true },
            { text: "Tere Liye", correct: false },
            { text: "Joko Pinurbo", correct: false }
        ]
    },
    {
        question: "Apa nama organ yang berfungsi membersihkan darah dari racun?",
        answers: [
            { text: "Ginjal", correct: false },
            { text: "Hati", correct: true },
            { text: "Paru-paru", correct: false },
            { text: "Jantung", correct: false }
        ]
    },
    {
        question: "Berapa banyak negara bagian di Amerika Serikat?",
        answers: [
            { text: "48", correct: false },
            { text: "50", correct: true },
            { text: "52", correct: false },
            { text: "55", correct: false }
        ]
    },
    {
        question: "Apa nama ibu kota Argentina?",
        answers: [
            { text: "Buenos Aires", correct: true },
            { text: "Santiago", correct: false },
            { text: "Rio de Janeiro", correct: false },
            { text: "Lima", correct: false }
        ]
    },
    {
        question: "Siapa penemu bola lampu?",
        answers: [
            { text: "Thomas Edison", correct: true },
            { text: "Nikola Tesla", correct: false },
            { text: "Alessandro Volta", correct: false },
            { text: "Benjamin Franklin", correct: false }
        ]
    },
    {
        question: "Apa nama zat yang memberikan warna merah pada darah?",
        answers: [
            { text: "Klorofil", correct: false },
            { text: "Melanin", correct: false },
            { text: "Hemoglobin", correct: true },
            { text: "Karoten", correct: false }
        ]
    },
    {
        question: "Ibu kota Rusia adalah...",
        answers: [
            { text: "St. Petersburg", correct: false },
            { text: "Kiev", correct: false },
            { text: "Moskow", correct: true },
            { text: "Minsk", correct: false }
        ]
    },
    {
        question: "Apa nama olahraga yang dimainkan dengan shuttlecock?",
        answers: [
            { text: "Tenis Meja", correct: false },
            { text: "Tenis", correct: false },
            { text: "Badminton", correct: true },
            { text: "Bulutangkis", correct: false }
        ]
    },
    {
        question: "Berapa jumlah planet kerdil di tata surya?",
        answers: [
            { text: "3", correct: false },
            { text: "4", correct: false },
            { text: "5", correct: true },
            { text: "6", correct: false }
        ]
    },
    {
        question: "Apa nama galaksi tempat Bumi berada?",
        answers: [
            { text: "Andromeda", correct: false },
            { text: "Bima Sakti", correct: true },
            { text: "Triangulum", correct: false },
            { text: "Centaurus A", correct: false }
        ]
    },
    {
        question: "Apa ibukota Swedia?",
        answers: [
            { text: "Oslo", correct: false },
            { text: "Helsinki", correct: false },
            { text: "Kopenhagen", correct: false },
            { text: "Stockholm", correct: true }
        ]
    },
    {
        question: "Apa nama mata uang Australia?",
        answers: [
            { text: "Dolar Amerika", correct: false },
            { text: "Dolar Australia", correct: true },
            { text: "Pound Sterling", correct: false },
            { text: "Euro", correct: false }
        ]
    },
    {
        question: "Siapa penulis 'Anna Karenina'?",
        answers: [
            { text: "Fyodor Dostoevsky", correct: false },
            { text: "Leo Tolstoy", correct: true },
            { text: "Anton Chekhov", correct: false },
            { text: "Ivan Turgenev", correct: false }
        ]
    },
    {
        question: "Apa nama organ yang berfungsi untuk mencerna makanan?",
        answers: [
            { text: "Jantung", correct: false },
            { text: "Paru-paru", correct: false },
            { text: "Lambung", correct: true },
            { text: "Ginjal", correct: false }
        ]
    },
    {
        question: "Berapa hasil dari 15 x 3?",
        answers: [
            { text: "30", correct: false },
            { text: "45", correct: true },
            { text: "50", correct: false },
            { text: "60", correct: false }
        ]
    },
    {
        question: "Apa nama hewan yang bisa hidup di darat dan di air?",
        answers: [
            { text: "Reptil", correct: false },
            { text: "Amfibi", correct: true },
            { text: "Mamalia", correct: false },
            { text: "Ikan", correct: false }
        ]
    },
    {
        question: "Siapa presiden Indonesia yang menjabat saat ini?",
        answers: [
            { text: "Joko Widodo", correct: true },
            { text: "Susilo Bambang Yudhoyono", correct: false },
            { text: "Megawati Soekarnoputri", correct: false },
            { text: "B.J. Habibie", correct: false }
        ]
    },
    {
        question: "Apa nama monumen terkenal di Paris, Prancis?",
        answers: [
            { text: "Menara Pisa", correct: false },
            { text: "Menara Eiffel", correct: true },
            { text: "Tembok Besar Cina", correct: false },
            { text: "Patung Liberty", correct: false }
        ]
    },
    {
        question: "Apa nama mata uang Vietnam?",
        answers: [
            { text: "Dong", correct: true },
            { text: "Yen", correct: false },
            { text: "Baht", correct: false },
            { text: "Riel", correct: false }
        ]
    },
    {
        question: "Siapa pencipta teori relativitas?",
        answers: [
            { text: "Isaac Newton", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Stephen Hawking", correct: false },
            { text: "Galileo Galilei", correct: false }
        ]
    },
    {
        question: "Berapa jumlah benua di dunia?",
        answers: [
            { text: "5", correct: false },
            { text: "6", correct: false },
            { text: "7", correct: true },
            { text: "8", correct: false }
        ]
    },
    {
        question: "Apa nama lautan yang berada di antara Eropa dan Amerika?",
        answers: [
            { text: "Samudra Hindia", correct: false },
            { text: "Samudra Pasifik", correct: false },
            { text: "Samudra Atlantik", correct: true },
            { text: "Samudra Arktik", correct: false }
        ]
    },
    {
        question: "Apa nama buah yang dikenal memiliki banyak mata?",
        answers: [
            { text: "Apel", correct: false },
            { text: "Nanas", correct: true },
            { text: "Pisang", correct: false },
            { text: "Jeruk", correct: false }
        ]
    },
    {
        question: "Ibu kota Filipina adalah...",
        answers: [
            { text: "Manila", correct: true },
            { text: "Cebu", correct: false },
            { text: "Davao", correct: false },
            { text: "Quezon City", correct: false }
        ]
    },
    {
        question: "Apa nama mata uang Tiongkok?",
        answers: [
            { text: "Yen", correct: false },
            { text: "Yuan", correct: true },
            { text: "Won", correct: false },
            { text: "Baht", correct: false }
        ]
    },
    {
        question: "Siapa presiden pertama Amerika Serikat?",
        answers: [
            { text: "Thomas Jefferson", correct: false },
            { text: "George Washington", correct: true },
            { text: "Abraham Lincoln", correct: false },
            { text: "Franklin D. Roosevelt", correct: false }
        ]
    },
    {
        question: "Apa nama hewan yang terkenal dengan kantungnya?",
        answers: [
            { text: "Kucing", correct: false },
            { text: "Kelinci", correct: false },
            { text: "Kangguru", correct: true },
            { text: "Beruang", correct: false }
        ]
    },
    {
        question: "Apa nama organ yang berfungsi untuk mencerna makanan?",
        answers: [
            { text: "Jantung", correct: false },
            { text: "Paru-paru", correct: false },
            { text: "Lambung", correct: true },
            { text: "Ginjal", correct: false }
        ]
    },
    {
        question: "Berapa banyak negara yang ada di dunia?",
        answers: [
            { text: "150", correct: false },
            { text: "195", correct: true },
            { text: "200", correct: false },
            { text: "210", correct: false }
        ]
    },
    {
        question: "Apa nama sungai terpanjang di Indonesia?",
        answers: [
            { text: "Sungai Mahakam", correct: false },
            { text: "Sungai Musi", correct: false },
            { text: "Sungai Kapuas", correct: true },
            { text: "Sungai Barito", correct: false }
        ]
    },
    {
        question: "Apa nama zat yang memberikan warna hijau pada tumbuhan?",
        answers: [
            { text: "Hemoglobin", correct: false },
            { text: "Klorofil", correct: true },
            { text: "Melanin", correct: false },
            { text: "Karoten", correct: false }
        ]
    },
    {
        question: "Siapa penemu radio?",
        answers: [
            { text: "Albert Einstein", correct: false },
            { text: "Thomas Edison", correct: false },
            { text: "Guglielmo Marconi", correct: true },
            { text: "James Clerk Maxwell", correct: false }
        ]
    },
    {
        question: "Ibu kota Italia adalah...",
        answers: [
            { text: "Milan", correct: false },
            { text: "Roma", correct: true },
            { text: "Venesia", correct: false },
            { text: "Florence", correct: false }
        ]
    },
    {
        question: "Apa nama organ yang berfungsi memompa darah ke seluruh tubuh?",
        answers: [
            { text: "Paru-paru", correct: false },
            { text: "Hati", correct: false },
            { text: "Jantung", correct: true },
            { text: "Ginjal", correct: false }
        ]
    },
    {
        question: "Berapa jumlah kaki laba-laba?",
        answers: [
            { text: "6", correct: false },
            { text: "8", correct: true },
            { text: "10", correct: false },
            { text: "12", correct: false }
        ]
    },
    {
        question: "Apa nama negara terbesar di dunia berdasarkan luas wilayah?",
        answers: [
            { text: "Tiongkok", correct: false },
            { text: "Kanada", correct: false },
            { text: "Rusia", correct: true },
            { text: "Amerika Serikat", correct: false }
        ]
    },
    {
        question: "Apa ibukota Mesir kuno?",
        answers: [
            { text: "Giza", correct: false },
            { text: "Thebes", correct: false },
            { text: "Memphis", correct: true },
            { text: "Alexandria", correct: false }
        ]
    },
    {
        question: "Siapa penulis 'The Lord of the Rings'?",
        answers: [
            { text: "C.S. Lewis", correct: false },
            { text: "J.R.R. Tolkien", correct: true },
            { text: "George R.R. Martin", correct: false },
            { text: "J.K. Rowling", correct: false }
        ]
    },
    {
        question: "Apa nama mata uang Brasil?",
        answers: [
            { text: "Peso", correct: false },
            { text: "Real", correct: true },
            { text: "Dolar", correct: false },
            { text: "Euro", correct: false }
        ]
    },
    {
        question: "Apa nama lautan terkecil di dunia?",
        answers: [
            { text: "Samudra Hindia", correct: false },
            { text: "Samudra Atlantik", correct: false },
            { text: "Samudra Arktik", correct: true },
            { text: "Samudra Pasifik", correct: false }
        ]
    },
    {
        question: "Siapa penemu listrik?",
        answers: [
            { text: "Thomas Edison", correct: false },
            { text: "Nikola Tesla", correct: false },
            { text: "Benjamin Franklin", correct: true },
            { text: "Alessandro Volta", correct: false }
        ]
    },
    {
        question: "Berapa hasil dari 12 x 12?",
        answers: [
            { text: "121", correct: false },
            { text: "144", correct: true },
            { text: "169", correct: false },
            { text: "100", correct: false }
        ]
    },
    {
        question: "Apa nama gas yang paling banyak di atmosfer Bumi?",
        answers: [
            { text: "Oksigen", correct: false },
            { text: "Karbon dioksida", correct: false },
            { text: "Nitrogen", correct: true },
            { text: "Argon", correct: false }
        ]
    },
    {
        question: "Apa nama burung nasional Indonesia?",
        answers: [
            { text: "Burung Elang Jawa", correct: false },
            { text: "Burung Garuda", correct: true },
            { text: "Burung Merpati", correct: false },
            { text: "Burung Hantu", correct: false }
        ]
    },
    {
        question: "Ibu kota Mesir adalah...",
        answers: [
            { text: "Alexandria", correct: false },
            { text: "Kairo", correct: true },
            { text: "Giza", correct: false },
            { text: "Luxor", correct: false }
        ]
    },
    {
        question: "Apa nama benua terpadat penduduknya?",
        answers: [
            { text: "Afrika", correct: false },
            { text: "Eropa", correct: false },
            { text: "Asia", correct: true },
            { text: "Amerika", correct: false }
        ]
    },
    {
        question: "Berapa jumlah rasi bintang zodiak?",
        answers: [
            { text: "10", correct: false },
            { text: "11", correct: false },
            { text: "12", correct: true },
            { text: "13", correct: false }
        ]
    },
    {
        question: "Apa nama mata uang Turki?",
        answers: [
            { text: "Dinar", correct: false },
            { text: "Lira", correct: true },
            { text: "Euro", correct: false },
            { text: "Riyal", correct: false }
        ]
    },
    {
        question: "Apa nama mata uang Uni Eropa?",
        answers: [
            { text: "Pound Sterling", correct: false },
            { text: "Euro", correct: true },
            { text: "Dolar", correct: false },
            { text: "Yen", correct: false }
        ]
    },
    {
        question: "Siapa penulis novel 'Dilan'?",
        answers: [
            { text: "Raditya Dika", correct: false },
            { text: "Pidi Baiq", correct: true },
            { text: "Tere Liye", correct: false },
            { text: "Joko Pinurbo", correct: false }
        ]
    },
    {
        question: "Apa nama organ yang berfungsi membersihkan darah dari racun?",
        answers: [
            { text: "Ginjal", correct: false },
            { text: "Hati", correct: true },
            { text: "Paru-paru", correct: false },
            { text: "Jantung", correct: false }
        ]
    },
    {
        question: "Berapa banyak negara bagian di Amerika Serikat?",
        answers: [
            { text: "48", correct: false },
            { text: "50", correct: true },
            { text: "52", correct: false },
            { text: "55", correct: false }
        ]
    },
    {
        question: "Apa nama ibu kota Argentina?",
        answers: [
            { text: "Buenos Aires", correct: true },
            { text: "Santiago", correct: false },
            { text: "Rio de Janeiro", correct: false },
            { text: "Lima", correct: false }
        ]
    },
    {
        question: "Siapa penemu bola lampu?",
        answers: [
            { text: "Thomas Edison", correct: true },
            { text: "Nikola Tesla", correct: false },
            { text: "Alessandro Volta", correct: false },
            { text: "Benjamin Franklin", correct: false }
        ]
    },
    {
        question: "Apa nama zat yang memberikan warna merah pada darah?",
        answers: [
            { text: "Klorofil", correct: false },
            { text: "Melanin", correct: false },
            { text: "Hemoglobin", correct: true },
            { text: "Karoten", correct: false }
        ]
    },
    {
        question: "Ibu kota Rusia adalah...",
        answers: [
            { text: "St. Petersburg", correct: false },
            { text: "Kiev", correct: false },
            { text: "Moskow", correct: true },
            { text: "Minsk", correct: false }
        ]
    },
    {
        question: "Apa nama olahraga yang dimainkan dengan shuttlecock?",
        answers: [
            { text: "Tenis Meja", correct: false },
            { text: "Tenis", correct: false },
            { text: "Badminton", correct: true },
            { text: "Bulutangkis", correct: false }
        ]
    },
    {
        question: "Berapa jumlah planet kerdil di tata surya?",
        answers: [
            { text: "3", correct: false },
            { text: "4", correct: false },
            { text: "5", correct: true },
            { text: "6", correct: false }
        ]
    },
    {
        question: "Apa nama galaksi tempat Bumi berada?",
        answers: [
            { text: "Andromeda", correct: false },
            { text: "Bima Sakti", correct: true },
            { text: "Triangulum", correct: false },
            { text: "Centaurus A", correct: false }
        ]
    },
    {
        question: "Apa ibukota Swedia?",
        answers: [
            { text: "Oslo", correct: false },
            { text: "Helsinki", correct: false },
            { text: "Kopenhagen", correct: false },
            { text: "Stockholm", correct: true }
        ]
    },
    {
        question: "Apa nama mata uang Australia?",
        answers: [
            { text: "Dolar Amerika", correct: false },
            { text: "Dolar Australia", correct: true },
            { text: "Pound Sterling", correct: false },
            { text: "Euro", correct: false }
        ]
    },
    {
        question: "Siapa penulis 'Anna Karenina'?",
        answers: [
            { text: "Fyodor Dostoevsky", correct: false },
            { text: "Leo Tolstoy", correct: true },
            { text: "Anton Chekhov", correct: false },
            { text: "Ivan Turgenev", correct: false }
        ]
    },
    {
        question: "Apa nama organ yang berfungsi untuk mencerna makanan?",
        answers: [
            { text: "Jantung", correct: false },
            { text: "Paru-paru", correct: false },
            { text: "Lambung", correct: true },
            { text: "Ginjal", correct: false }
        ]
    },
    {
        question: "Berapa hasil dari 15 x 3?",
        answers: [
            { text: "30", correct: false },
            { text: "45", correct: true },
            { text: "50", correct: false },
            { text: "60", correct: false }
        ]
    },
    {
        question: "Apa nama hewan yang bisa hidup di darat dan di air?",
        answers: [
            { text: "Reptil", correct: false },
            { text: "Amfibi", correct: true },
            { text: "Mamalia", correct: false },
            { text: "Ikan", correct: false }
        ]
    },
    {
        question: "Siapa presiden Indonesia yang menjabat saat ini?",
        answers: [
            { text: "Joko Widodo", correct: true },
            { text: "Susilo Bambang Yudhoyono", correct: false },
            { text: "Megawati Soekarnoputri", correct: false },
            { text: "B.J. Habibie", correct: false }
        ]
    },
    {
        question: "Apa nama monumen terkenal di Paris, Prancis?",
        answers: [
            { text: "Menara Pisa", correct: false },
            { text: "Menara Eiffel", correct: true },
            { text: "Tembok Besar Cina", correct: false },
            { text: "Patung Liberty", correct: false }
        ]
    },
    {
        question: "Apa nama mata uang Vietnam?",
        answers: [
            { text: "Dong", correct: true },
            { text: "Yen", correct: false },
            { text: "Baht", correct: false },
            { text: "Riel", correct: false }
        ]
    },
    {
        question: "Siapa pencipta teori relativitas?",
        answers: [
            { text: "Isaac Newton", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Stephen Hawking", correct: false },
            { text: "Galileo Galilei", correct: false }
        ]
    }
    ];

    startButton.addEventListener("click", () => {
        startPage.classList.add("hidden");
        quizPage.classList.remove("hidden");
        startQuiz();
    });

    stopButton.addEventListener("click", () => {
        showScore();
    });

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        currentScoreElement.innerHTML = score;
        nextButton.innerHTML = "Selanjutnya";
        nextButton.classList.add("hidden");
        stopButton.classList.remove("hidden");
        questions.sort(() => Math.random() - 0.5);
        showQuestion();
    }

    function showQuestion() {
        while(answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
        }
        nextButton.classList.add("hidden");
        
        questionElement.classList.remove('show');
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

        setTimeout(() => {
            questionElement.classList.add('show');
        }, 50);

        currentQuestion.answers.forEach((answer, index) => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            button.dataset.correct = answer.correct;
            answerButtons.appendChild(button);
            button.addEventListener("click", selectAnswer);
            
            setTimeout(() => {
                button.classList.add('show');
            }, 100 * (index + 1));
        });
    }

    function selectAnswer(e) {
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";

        if(isCorrect) {
            selectedBtn.classList.add("correct");
            score++;
            currentScoreElement.innerHTML = score;
            correctSound.play();
        } else {
            selectedBtn.classList.add("incorrect");
            incorrectSound.play();
        }
        
        Array.from(answerButtons.children).forEach(button => {
            if(button.dataset.correct === "true") {
                button.classList.add("correct");
            }
            button.disabled = true;
        });

        nextButton.classList.remove("hidden");
    }

    function showScore() {
        while(answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
        }
        nextButton.classList.add("hidden");
        stopButton.classList.add("hidden");

        questionElement.classList.remove('show');
        setTimeout(() => {
            let message = "";
            if (score >= questions.length * 0.8) {
                message = `Luar biasa! Kamu berhasil menjawab ${score} dari ${questions.length} pertanyaan. Kamu ahli kuis!`;
            } else if (score >= questions.length * 0.5) {
                message = `Kerja bagus! Kamu berhasil menjawab ${score} dari ${questions.length} pertanyaan. Terus tingkatkan!`;
            } else {
                message = `Jangan menyerah! Kamu berhasil menjawab ${score} dari ${questions.length} pertanyaan. Coba lagi untuk hasil yang lebih baik.`;
            }
            questionElement.innerHTML = message;
            questionElement.classList.add('show');
            nextButton.innerHTML = "Main Lagi";
            nextButton.classList.remove("hidden");
        }, 50);
    }

    function handleNextButton() {
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
    }

    nextButton.addEventListener("click", () => {
        if(nextButton.innerHTML === "Main Lagi") {
            quizPage.classList.add("hidden");
            startPage.classList.remove("hidden");
        } else {
            handleNextButton();
        }
    });
});