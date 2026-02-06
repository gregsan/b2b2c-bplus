export interface Hotel {
  id: string
  name: string
  location: string
  city: string
  price: number
  premiumPrice: number
  rating: number
  lat: number
  lng: number
  amenities: string[]
  rooms: {
    type: string
    price: number
    premiumPrice: number
  }[]
  reviews: {
    author: string
    rating: number
    text: string
    date: string
  }[]
}

export const hotels: Hotel[] = [
  {
    id: '1',
    name: 'Premier Palace Hotel Kyiv',
    location: 'Київ, Україна',
    city: 'Київ',
    price: 4500,
    premiumPrice: 3600,
    rating: 4.8,
    lat: 50.4501,
    lng: 30.5234,
    amenities: ['Wi-Fi', 'Сніданок', 'Спа', 'Басейн', 'Ресторан', 'Парковка', 'Тренажерний зал', 'Трансфер'],
    rooms: [
      { type: 'Standard', price: 4500, premiumPrice: 3600 },
      { type: 'Deluxe', price: 6000, premiumPrice: 4800 },
      { type: 'Suite', price: 9000, premiumPrice: 7200 },
    ],
    reviews: [
      { author: 'Олена К.', rating: 5, text: 'Чудовий готель в самому центрі Києва. Обслуговування на вищому рівні!', date: '15.01.2026' },
      { author: 'Михайло П.', rating: 4.5, text: 'Дуже сподобались номери та сніданки. Рекомендую!', date: '10.01.2026' },
      { author: 'Ірина В.', rating: 5, text: 'Ідеальне місце для бізнес-поїздки. Все на найвищому рівні.', date: '05.01.2026' },
    ],
  },
  {
    id: '2',
    name: 'Nobilis Hotel Lviv',
    location: 'Львів, Україна',
    city: 'Львів',
    price: 3200,
    premiumPrice: 2560,
    rating: 4.7,
    lat: 49.8419,
    lng: 24.0315,
    amenities: ['Wi-Fi', 'Сніданок', 'Ресторан', 'Парковка', 'Камін', 'Бібліотека'],
    rooms: [
      { type: 'Standard', price: 3200, premiumPrice: 2560 },
      { type: 'Deluxe', price: 4500, premiumPrice: 3600 },
      { type: 'Suite', price: 6500, premiumPrice: 5200 },
    ],
    reviews: [
      { author: 'Андрій С.', rating: 5, text: 'Атмосферне місце в центрі Львова. Дуже затишно!', date: '18.01.2026' },
      { author: 'Наталія Д.', rating: 4.5, text: 'Чудовий готель, смачні сніданки, привітний персонал.', date: '12.01.2026' },
      { author: 'Петро М.', rating: 4.8, text: 'Ідеальне розташування для прогулянок містом.', date: '08.01.2026' },
    ],
  },
  {
    id: '3',
    name: 'Hotel Paris Rivoli',
    location: 'Париж, Франція',
    city: 'Париж',
    price: 8500,
    premiumPrice: 6800,
    rating: 4.6,
    lat: 48.8566,
    lng: 2.3522,
    amenities: ['Wi-Fi', 'Сніданок', 'Консьєрж', 'Ресторан', 'Бар', 'Трансфер'],
    rooms: [
      { type: 'Standard', price: 8500, premiumPrice: 6800 },
      { type: 'Deluxe', price: 11000, premiumPrice: 8800 },
      { type: 'Suite', price: 15000, premiumPrice: 12000 },
    ],
    reviews: [
      { author: 'Софія К.', rating: 4.5, text: 'Чудове розташування біля Лувру. Класичний паризький стиль.', date: '20.01.2026' },
      { author: 'Максим Л.', rating: 4.8, text: 'Відмінний сервіс, смачні сніданки, близько до визначних місць.', date: '14.01.2026' },
      { author: 'Юлія Р.', rating: 4.5, text: 'Романтична атмосфера, ввічливий персонал.', date: '09.01.2026' },
    ],
  },
  {
    id: '4',
    name: 'Barcelona Cathedral Suites',
    location: 'Барселона, Іспанія',
    city: 'Барселона',
    price: 7200,
    premiumPrice: 5760,
    rating: 4.9,
    lat: 41.3851,
    lng: 2.1734,
    amenities: ['Wi-Fi', 'Сніданок', 'Басейн на даху', 'Спа', 'Бар', 'Тренажерний зал'],
    rooms: [
      { type: 'Standard', price: 7200, premiumPrice: 5760 },
      { type: 'Deluxe', price: 9500, premiumPrice: 7600 },
      { type: 'Suite', price: 13500, premiumPrice: 10800 },
    ],
    reviews: [
      { author: 'Дмитро Б.', rating: 5, text: 'Неймовірний вид з тераси! Найкращий готель в Барселоні.', date: '22.01.2026' },
      { author: 'Катерина Н.', rating: 4.9, text: 'Сучасний дизайн, чудове розташування, відмінний сервіс.', date: '16.01.2026' },
      { author: 'Олег В.', rating: 4.8, text: 'Басейн на даху - це щось неймовірне! Рекомендую.', date: '11.01.2026' },
    ],
  },
  {
    id: '5',
    name: 'Rome Cavalieri Waldorf Astoria',
    location: 'Рим, Італія',
    city: 'Рим',
    price: 9500,
    premiumPrice: 7600,
    rating: 4.8,
    lat: 41.9028,
    lng: 12.4964,
    amenities: ['Wi-Fi', 'Сніданок', 'Спа', 'Басейн', 'Ресторан Мішлен', 'Парковка', 'Трансфер', 'Консьєрж'],
    rooms: [
      { type: 'Standard', price: 9500, premiumPrice: 7600 },
      { type: 'Deluxe', price: 12500, premiumPrice: 10000 },
      { type: 'Suite', price: 18000, premiumPrice: 14400 },
    ],
    reviews: [
      { author: 'Марина Г.', rating: 5, text: 'Розкішний готель з неймовірним видом на Рим. Варто кожної гривні!', date: '19.01.2026' },
      { author: 'Сергій Т.', rating: 4.8, text: 'Ресторан - просто фантастика! Обслуговування на найвищому рівні.', date: '13.01.2026' },
      { author: 'Олександра М.', rating: 4.7, text: 'Чудовий спа-центр, затишні номери, привітний персонал.', date: '07.01.2026' },
    ],
  },
  {
    id: '6',
    name: 'Odesa Londonskaya Hotel',
    location: 'Одеса, Україна',
    city: 'Одеса',
    price: 3800,
    premiumPrice: 3040,
    rating: 4.5,
    lat: 46.4825,
    lng: 30.7233,
    amenities: ['Wi-Fi', 'Сніданок', 'Ресторан', 'Бар', 'Парковка', 'Вид на море'],
    rooms: [
      { type: 'Standard', price: 3800, premiumPrice: 3040 },
      { type: 'Deluxe', price: 5200, premiumPrice: 4160 },
      { type: 'Suite', price: 7500, premiumPrice: 6000 },
    ],
    reviews: [
      { author: 'Віктор Ж.', rating: 4.5, text: 'Історичний готель з чудовим видом на море. Дуже романтично!', date: '21.01.2026' },
      { author: 'Тетяна П.', rating: 4.6, text: 'Чудове місце для відпочинку. Смачна кухня, привітний персонал.', date: '15.01.2026' },
      { author: 'Ігор К.', rating: 4.4, text: 'Класичний стиль, хороше розташування в центрі Одеси.', date: '10.01.2026' },
    ],
  },
  {
    id: '7',
    name: 'Fairmont Grand Hotel Kyiv',
    location: 'Київ, Україна',
    city: 'Київ',
    price: 5500,
    premiumPrice: 4400,
    rating: 4.9,
    lat: 50.4462,
    lng: 30.5172,
    amenities: ['Wi-Fi', 'Сніданок', 'Спа', 'Басейн', 'Ресторан', 'Парковка', 'Тренажерний зал', 'Конференц-зали'],
    rooms: [
      { type: 'Standard', price: 5500, premiumPrice: 4400 },
      { type: 'Deluxe', price: 7500, premiumPrice: 6000 },
      { type: 'Suite', price: 11000, premiumPrice: 8800 },
    ],
    reviews: [
      { author: 'Валентина С.', rating: 5, text: 'Найкращий готель в Києві! Все на найвищому рівні.', date: '23.01.2026' },
      { author: 'Роман Ч.', rating: 4.9, text: 'Відмінний сервіс, сучасні номери, чудове розташування.', date: '17.01.2026' },
      { author: 'Людмила Б.', rating: 4.8, text: 'Спа-центр просто неймовірний! Рекомендую для відпочинку.', date: '12.01.2026' },
    ],
  },
  {
    id: '8',
    name: 'Lviv Opera Hotel',
    location: 'Львів, Україна',
    city: 'Львів',
    price: 2800,
    premiumPrice: 2240,
    rating: 4.4,
    lat: 49.8438,
    lng: 24.0297,
    amenities: ['Wi-Fi', 'Сніданок', 'Ресторан', 'Парковка', 'Лобі-бар'],
    rooms: [
      { type: 'Standard', price: 2800, premiumPrice: 2240 },
      { type: 'Deluxe', price: 3900, premiumPrice: 3120 },
      { type: 'Suite', price: 5500, premiumPrice: 4400 },
    ],
    reviews: [
      { author: 'Богдан Р.', rating: 4.5, text: 'Чудове розташування біля Оперного театру. Затишні номери.', date: '20.01.2026' },
      { author: 'Оксана Ф.', rating: 4.4, text: 'Гарний готель за свою ціну. Смачні сніданки.', date: '14.01.2026' },
      { author: 'Василь Г.', rating: 4.3, text: 'Хороший сервіс, ввічливий персонал, чисті номери.', date: '09.01.2026' },
    ],
  },
  {
    id: '9',
    name: 'Le Meurice Paris',
    location: 'Париж, Франція',
    city: 'Париж',
    price: 12000,
    premiumPrice: 9600,
    rating: 4.9,
    lat: 48.8651,
    lng: 2.3282,
    amenities: ['Wi-Fi', 'Сніданок', 'Спа', 'Ресторан Мішлен', 'Бар', 'Консьєрж', 'Трансфер'],
    rooms: [
      { type: 'Standard', price: 12000, premiumPrice: 9600 },
      { type: 'Deluxe', price: 16000, premiumPrice: 12800 },
      { type: 'Suite', price: 25000, premiumPrice: 20000 },
    ],
    reviews: [
      { author: 'Анастасія Л.', rating: 5, text: 'Розкішний готель в палацовому стилі. Неймовірний досвід!', date: '24.01.2026' },
      { author: 'Денис К.', rating: 4.9, text: 'Ресторан Alain Ducasse - це мрія гурмана! Все ідеально.', date: '18.01.2026' },
      { author: 'Вікторія П.', rating: 4.8, text: 'Найелегантніший готель Парижа. Варто своїх грошей.', date: '13.01.2026' },
    ],
  },
  {
    id: '10',
    name: 'Hotel Arts Barcelona',
    location: 'Барселона, Іспанія',
    city: 'Барселона',
    price: 10500,
    premiumPrice: 8400,
    rating: 4.8,
    lat: 41.3879,
    lng: 2.1950,
    amenities: ['Wi-Fi', 'Сніданок', 'Басейн', 'Спа', 'Пляж', 'Ресторан', 'Тренажерний зал', 'Парковка'],
    rooms: [
      { type: 'Standard', price: 10500, premiumPrice: 8400 },
      { type: 'Deluxe', price: 14000, premiumPrice: 11200 },
      { type: 'Suite', price: 20000, premiumPrice: 16000 },
    ],
    reviews: [
      { author: 'Ярослав Н.', rating: 5, text: 'Готель біля моря з неймовірним басейном. Ідеально для відпочинку!', date: '22.01.2026' },
      { author: 'Світлана Ш.', rating: 4.8, text: 'Сучасний розкішний готель. Все на найвищому рівні.', date: '16.01.2026' },
      { author: 'Тарас Д.', rating: 4.7, text: 'Чудовий спа, смачна кухня, прекрасний вид на море.', date: '11.01.2026' },
    ],
  },
  {
    id: '11',
    name: 'Hotel de Russie Rome',
    location: 'Рим, Італія',
    city: 'Рим',
    price: 8800,
    premiumPrice: 7040,
    rating: 4.7,
    lat: 41.9076,
    lng: 12.4779,
    amenities: ['Wi-Fi', 'Сніданок', 'Спа', 'Сад', 'Ресторан', 'Бар', 'Тренажерний зал'],
    rooms: [
      { type: 'Standard', price: 8800, premiumPrice: 7040 },
      { type: 'Deluxe', price: 11500, premiumPrice: 9200 },
      { type: 'Suite', price: 16500, premiumPrice: 13200 },
    ],
    reviews: [
      { author: 'Альона Ц.', rating: 4.8, text: 'Чудовий сад в центрі Рима. Затишне місце для відпочинку.', date: '19.01.2026' },
      { author: 'Володимир Х.', rating: 4.7, text: 'Елегантний готель з відмінним рестораном. Рекомендую!', date: '14.01.2026' },
      { author: 'Галина З.', rating: 4.6, text: 'Хороше розташування, привітний персонал, смачні сніданки.', date: '08.01.2026' },
    ],
  },
  {
    id: '12',
    name: 'Radisson Blu Hotel Kyiv',
    location: 'Київ, Україна',
    city: 'Київ',
    price: 4200,
    premiumPrice: 3360,
    rating: 4.6,
    lat: 50.4421,
    lng: 30.5197,
    amenities: ['Wi-Fi', 'Сніданок', 'Басейн', 'Спа', 'Ресторан', 'Парковка', 'Тренажерний зал'],
    rooms: [
      { type: 'Standard', price: 4200, premiumPrice: 3360 },
      { type: 'Deluxe', price: 5800, premiumPrice: 4640 },
      { type: 'Suite', price: 8500, premiumPrice: 6800 },
    ],
    reviews: [
      { author: 'Павло У.', rating: 4.7, text: 'Сучасний готель з хорошим сервісом. Зручне розташування.', date: '21.01.2026' },
      { author: 'Христина Й.', rating: 4.6, text: 'Чисті номери, смачні сніданки, привітний персонал.', date: '15.01.2026' },
      { author: 'Євген Щ.', rating: 4.5, text: 'Гарний готель для бізнесу та відпочинку. Рекомендую.', date: '10.01.2026' },
    ],
  },
]
