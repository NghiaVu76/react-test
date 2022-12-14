const menuItems = [
  {
    class: "fas fa-database",
    title: "Danh sách sản phẩm",
    path: "/products",
  },
  {
    class: "fas fa-users",
    title: "Khách hàng",
    path: "/customers",
  },
  {
    class: "fa-solid fa-cart-flatbed",
    title: "Đơn hàng",
    path: "/carts",
  },
];

const customerItems = [
  {
    img: "https://kenh14cdn.com/2019/2/15/8-15502075818842118741287.jpg",
    username: "Nguyễn Văn A",
    email: "nguyenvana@gmail.com",
  },
  {
    img: "https://kenh14cdn.com/2019/2/15/7-15502075818791603462215.jpg",
    username: "Nguyễn Văn B",
    email: "nguyenvanb@gmail.com",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStagzptJQeek_NnbS3ECqsaMrZHPRqmuWqZXFV5eWpCjvxvNM2CVq0NsGQmdwejvO0wZQ&usqp=CAU",
    username: "Nguyễn Văn C",
    email: "nguyenvanc@gmail.com",
  },
  {
    img: "https://cdn.tgdd.vn/Files/2022/02/21/1416573/bill-gates-la-ai_1280x860-800-resize.jpg",
    username: "Nguyễn Văn D",
    email: "nguyenvand@gmail.com",
  },
  {
    img: "https://www.shashindo.de/wp-content/uploads/2020/05/20200421-MichaelSimonsen-8313-682x1024.jpg",
    username: "Nguyễn Văn E",
    email: "nguyenvane@gmail.com",
  },
  {
    img: "https://kenh14cdn.com/2019/4/15/rose-bp-1555308347518704359300.jpg",
    username: "Nguyễn Văn F",
    email: "nguyenvanf@gmail.com",
  },

  {
    img: "https://vnn-imgs-a1.vgcloud.vn/photo-cms-tpo.zadn.vn/w645/Uploaded/2022/zaugtn/2022_03_18/lisa2-7289.jpeg",
    username: "Nguyễn Văn Lía",
    email: "nguyenvanf@gmail.com",
  },

  {
    img: "https://us.123rf.com/450wm/warrengoldswain/warrengoldswain1107/warrengoldswain110700253/9967753-junger-mann-gesicht-eine-hohe-ausf%C3%BChrliches-portr%C3%A4t.jpg",
    username: "Nguyễn Văn F",
    email: "nguyenvanf@gmail.com",
  },

  {
    img: "https://us.123rf.com/450wm/warrengoldswain/warrengoldswain1107/warrengoldswain110700253/9967753-junger-mann-gesicht-eine-hohe-ausf%C3%BChrliches-portr%C3%A4t.jpg",
    username: "Nguyễn Văn F",
    email: "nguyenvanf@gmail.com",
  },
];

const productItems = [
  {
    productName: "Bàn chơi game",
    productId: "Mã SP: 0123456",
    sales: 70,
    class: "dashboard-tactics-products-content-item",
  },
  {
    productName: "Ghế công thái học",
    productId: "Mã SP: 0123456",
    sales: 54,
    class: "dashboard-tactics-products-content-item",
  },
  {
    productName: "Bàn phím cơ",
    productId: "Mã SP: 0123456",
    sales: 47,
    class: "dashboard-tactics-products-content-item",
  },
  {
    productName: "Tay cầm chơi game",
    productId: "Mã SP: 0123456",
    sales: 43,
    class: "dashboard-tactics-products-content-item",
  },
  {
    productName: "Chuột gaming",
    productId: "Mã SP: 0123456",
    sales: 38,
    class: "dashboard-tactics-products-content-item",
  },
  {
    productName: "Tai nghe không dây",
    productId: "Mã SP: 0123456",
    sales: 22,
    class: "dashboard-tactics-products-content-item",
  },
  {
    productName: "Tay cầm chơi game",
    productId: "Mã SP: 0123456",
    sales: 20,
    class: "dashboard-tactics-products-content-item",
  },
  {
    productName: "Chuột gaming",
    productId: "Mã SP: 0123456",
    sales: 20,
    class: "dashboard-tactics-products-content-item",
  },
  {
    productName: "Bàn phím cơ",
    productId: "Mã SP: 0123456",
    sales: 17,
    class: "dashboard-tactics-products-content-item",
  },
];

const chartLabels = [
  "01 June",
  "02 June",
  "03 June",
  "04 June",
  "05 June",
  "06 June",
  "07 June",
];

const chartData = [880, 1020, 790, 900, 850, 1170, 1250];

const tableData = [
  {
    customerName: "Nguyễn Văn A",
    time: "Jun 23, 2022",
    totalPrice: "2.300.00 VNĐ",
    status: "Hoàn thành",
    statusClass: "done",
  },
  {
    customerName: "Nguyễn Văn B",
    time: "Jun 23, 2022",
    totalPrice: "2.300.00 VNĐ",
    status: "Hoàn thành",
    statusClass: "done",
  },
  {
    customerName: "Nguyễn Văn C",
    time: "Jun 23, 2022",
    totalPrice: "2.300.00 VNĐ",
    status: "Đã hủy",
    statusClass: "canceled",
  },
  {
    customerName: "Nguyễn Văn E",
    time: "Jun 23, 2022",
    totalPrice: "2.300.00 VNĐ",
    status: "Đang giao",
    statusClass: "pending",
  },
  {
    customerName: "Nguyễn Văn F",
    time: "Jun 23, 2022",
    totalPrice: "2.300.00 VNĐ",
    status: "Đã hủy",
    statusClass: "canceled",
  },
  {
    customerName: "Nguyễn Văn G",
    time: "Jun 23, 2022",
    totalPrice: "2.300.00 VNĐ",
    status: "Đang giao",
    statusClass: "pending",
  },
  {
    customerName: "Nguyễn Văn A",
    time: "Jun 23, 2022",
    totalPrice: "2.300.00 VNĐ",
    status: "Hoàn thành",
    statusClass: "done",
  },
  {
    customerName: "Nguyễn Văn A",
    time: "Jun 23, 2022",
    totalPrice: "2.300.00 VNĐ",
    status: "Hoàn thành",
    statusClass: "done",
  },
];

const socialIcons = [
  {
    name: "fa-brand fa-facebook-f",
  },
  {
    name: "fa-brand fa-twitter",
  },
  {
    name: "fa-brand fa-instagram",
  },
  {
    name: "fa-brand fa-weibo",
  },
];

const productList = [
  {
    productName: "Chuột máy tính",
    category: "Chuột",
    createdAt: "2022-06-23",
    quantity: 100,
    price: "2.300.000 VNĐ",
    status: "Còn hàng",
    statusClass: "stocking",
  },
  {
    productName: "Bàn làm việc",
    category: "Bàn",
    createdAt: "2022-06-23",
    quantity: 100,
    price: "6.700.000 VNĐ",
    status: "Còn hàng",
    statusClass: "stocking",
  },
  {
    productName: "Ghế công thái học",
    category: "Ghế",
    createdAt: "2022-06-18",
    quantity: 0,
    price: "2.340.000 VNĐ",
    status: "Hết hàng",
    statusClass: "out-of-stock",
  },
  {
    productName: "Tay cầm chơi game",
    category: "Đồ gaming",
    createdAt: "2022-06-15",
    quantity: 0,
    price: "5.000.000 VNĐ",
    status: "Hết hàng",
    statusClass: "out-of-stock",
  },
  {
    productName: "Chuột gaming",
    category: "Chuột",
    createdAt: "2022-06-15",
    quantity: 0,
    price: "2.300.000 VNĐ",
    status: "Hết hàng",
    statusClass: "out-of-stock",
  },
  {
    productName: "Tai nghe không dây",
    category: "Tai nghe",
    createdAt: "2022-06-11",
    quantity: 100,
    price: "2.800.000 VNĐ",
    status: "Còn hàng",
    statusClass: "stocking",
  },
  {
    productName: "Bàn phím cơ",
    category: "Bàn phím",
    createdAt: "2022-06-10",
    quantity: 100,
    price: "2.300.000 VNĐ",
    status: "Còn hàng",
    statusClass: "stocking",
  },
  {
    productName: "Bàn phím văn phòng",
    category: "Bàn phím",
    createdAt: "2022-06-10",
    quantity: 100,
    price: "2.300.000 VNĐ",
    status: "Còn hàng",
    statusClass: "stocking",
  },
  {
    productName: "Lót chuột bình thường",
    category: "Lót chuột",
    createdAt: "2022-06-10",
    quantity: 50,
    price: "300.000 VNĐ",
    status: "Còn hàng",
    statusClass: "stocking",
  },
  {
    productName: "Lót chuột RGB",
    category: "Lót chuột",
    createdAt: "2022-06-09",
    quantity: 60,
    price: "500.000 VNĐ",
    status: "Còn hàng",
    statusClass: "stocking",
  },
  {
    productName: "Chuột máy tính",
    category: "Chuột",
    createdAt: "2022-06-23",
    quantity: 100,
    price: "2.300.000 VNĐ",
    status: "Còn hàng",
    statusClass: "stocking",
  },
  {
    productName: "Bàn làm việc",
    category: "Bàn",
    createdAt: "2022-06-23",
    quantity: 100,
    price: "6.700.000 VNĐ",
    status: "Còn hàng",
    statusClass: "stocking",
  },
  {
    productName: "Ghế công thái học",
    category: "Ghế",
    createdAt: "2022-06-18",
    quantity: 0,
    price: "2.340.000 VNĐ",
    status: "Hết hàng",
    statusClass: "out-of-stock",
  },
  {
    productName: "Tay cầm chơi game",
    category: "Đồ gaming",
    createdAt: "2022-06-15",
    quantity: 0,
    price: "5.000.000 VNĐ",
    status: "Hết hàng",
    statusClass: "out-of-stock",
  },
  {
    productName: "Chuột gaming",
    category: "Chuột",
    createdAt: "2022-06-15",
    quantity: 0,
    price: "2.300.000 VNĐ",
    status: "Hết hàng",
    statusClass: "out-of-stock",
  },
  {
    productName: "Tai nghe không dây",
    category: "Tai nghe",
    createdAt: "2022-06-11",
    quantity: 100,
    price: "2.800.000 VNĐ",
    status: "Còn hàng",
    statusClass: "stocking",
  },
  {
    productName: "Bàn phím cơ",
    category: "Bàn phím",
    createdAt: "2022-06-10",
    quantity: 100,
    price: "2.300.000 VNĐ",
    status: "Còn hàng",
    statusClass: "stocking",
  },
  {
    productName: "Bàn phím văn phòng",
    category: "Bàn phím",
    createdAt: "2022-06-10",
    quantity: 100,
    price: "2.300.000 VNĐ",
    status: "Còn hàng",
    statusClass: "stocking",
  },
  {
    productName: "Lót chuột bình thường",
    category: "Lót chuột",
    createdAt: "2022-06-10",
    quantity: 50,
    price: "300.000 VNĐ",
    status: "Còn hàng",
    statusClass: "stocking",
  },
  {
    productName: "Lót chuột RGB",
    category: "Lót chuột",
    createdAt: "2022-06-09",
    quantity: 60,
    price: "500.000 VNĐ",
    status: "Còn hàng",
    statusClass: "stocking",
  },
];

const customerList = [
  {
    customerName: "Nguyễn Văn Anh",
    customerPhoneNumber: "0337893202",
    customerDOB: "1999-07-03",
    customerAddress: "Quận Hà Đông, Thành phố Hà Nội",
    customerEmail: "nguyenvana@gmail.com",
  },
  {
    customerName: "Nguyễn Văn Bắc",
    customerPhoneNumber: "0912772127",
    customerDOB: "2001-05-23",
    customerAddress: "Quận Cầu Giấy, Thành phố Hà Nội",
    customerEmail: "nguyenvanb@gmail.com",
  },
  {
    customerName: "Nguyễn Văn Châu",
    customerPhoneNumber: "0898788987",
    customerDOB: "1987-12-26",
    customerAddress: "Quận Hoàn Kiếm, Thành phố Hà Nội",
    customerEmail: "nguyenvanc@gmail.com",
  },
  {
    customerName: "Nguyễn Văn Dương",
    customerPhoneNumber: "0337893202",
    customerDOB: "1989-02-06",
    customerAddress: "Quận Liên Chiểu, Thành phố Đà Nẵng",
    customerEmail: "nguyenvand@gmail.com",
  },
  {
    customerName: "Nguyễn Văn Én",
    customerPhoneNumber: "0328244511",
    customerDOB: "2004-10-13",
    customerAddress: "Quận 2, Thành phố Hồ Chí Minh",
    customerEmail: "nguyenvane@gmail.com",
  },
  {
    customerName: "Nguyễn Văn Fim",
    customerPhoneNumber: "0702802902",
    customerDOB: "1997-07-07",
    customerAddress: "Quận Tây Hồ, Thành phố Hà Nội",
    customerEmail: "nguyenvanf@gmail.com",
  },
  {
    customerName: "Nguyễn Văn Giáp",
    customerPhoneNumber: "0540890760",
    customerDOB: "1998-11-11",
    customerAddress: "Quận Hồng Bàng, Thành phố Hải Phòng",
    customerEmail: "nguyenvang@gmail.com",
  },
  {
    customerName: "Nguyễn Văn Hoàng",
    customerPhoneNumber: "0868888868",
    customerDOB: "1986-06-08",
    customerAddress: "Quận Ba Đình, Thành phố Hà Nội",
    customerEmail: "nguyenvanh@gmail.com",
  },
  {
    customerName: "Nguyễn Văn Ỉn",
    customerPhoneNumber: "0789789789",
    customerDOB: "2002-02-20",
    customerAddress: "Quận Bình Thạnh, Thành phố Hồ Chí Minh",
    customerEmail: "nguyenvani@gmail.com",
  },
  {
    customerName: "Nguyễn Thanh Tùng",
    customerPhoneNumber: "0916161662",
    customerDOB: "1994-07-05",
    customerAddress: "Quận Nam Từ Liêm, Thành phố Hà Nội",
    customerEmail: "nguyenvanj@gmail.com",
  },
  {
    customerName: "Nguyễn Văn An",
    customerPhoneNumber: "0337893202",
    customerDOB: "1999-07-03",
    customerAddress: "Quận Hà Đông, Thành phố Hà Nội",
    customerEmail: "nguyenvana@gmail.com",
  },
  {
    customerName: "Nguyễn Văn Bình",
    customerPhoneNumber: "0912772127",
    customerDOB: "2001-05-23",
    customerAddress: "Quận Cầu Giấy, Thành phố Hà Nội",
    customerEmail: "nguyenvanb@gmail.com",
  },
  {
    customerName: "Nguyễn Văn Cảnh",
    customerPhoneNumber: "0898788987",
    customerDOB: "1987-12-26",
    customerAddress: "Quận Hoàn Kiếm, Thành phố Hà Nội",
    customerEmail: "nguyenvanc@gmail.com",
  },
  {
    customerName: "Nguyễn Văn Duy",
    customerPhoneNumber: "0337893202",
    customerDOB: "1989-02-06",
    customerAddress: "Quận Liên Chiểu, Thành phố Đà Nẵng",
    customerEmail: "nguyenvand@gmail.com",
  },
  {
    customerName: "Nguyễn Văn Em",
    customerPhoneNumber: "0328244511",
    customerDOB: "2004-10-13",
    customerAddress: "Quận 2, Thành phố Hồ Chí Minh",
    customerEmail: "nguyenvane@gmail.com",
  },
  {
    customerName: "Nguyễn Văn Fương",
    customerPhoneNumber: "0702802902",
    customerDOB: "1997-07-07",
    customerAddress: "Quận Tây Hồ, Thành phố Hà Nội",
    customerEmail: "nguyenvanf@gmail.com",
  },
  {
    customerName: "Nguyễn Văn Giang",
    customerPhoneNumber: "0540890760",
    customerDOB: "1998-11-11",
    customerAddress: "Quận Hồng Bàng, Thành phố Hải Phòng",
    customerEmail: "nguyenvang@gmail.com",
  },
  {
    customerName: "Nguyễn Văn Huy",
    customerPhoneNumber: "0868888868",
    customerDOB: "1986-06-08",
    customerAddress: "Quận Ba Đình, Thành phố Hà Nội",
    customerEmail: "nguyenvanh@gmail.com",
  },
  {
    customerName: "Nguyễn Văn Ích",
    customerPhoneNumber: "0789789789",
    customerDOB: "2002-02-20",
    customerAddress: "Quận Bình Chánh, Thành phố Hồ Chí Minh",
    customerEmail: "nguyenvani@gmail.com",
  },
  {
    customerName: "Nguyễn Thanh Tùng",
    customerPhoneNumber: "0916161662",
    customerDOB: "1994-07-05",
    customerAddress: "Quận Nam Từ Liêm, Thành phố Hà Nội",
    customerEmail: "nguyenvanj@gmail.com",
  },
];

const data = [
  {
    label: "Eugenia",
    value: "Eugenia",
  },
  {
    label: "Kariane",
    value: "Kariane",
  },
  {
    label: "Louisa",
    value: "Louisa",
  },
  {
    label: "Marty",
    value: "Marty",
  },
  {
    label: "Kenya",
    value: "Kenya",
  },
  {
    label: "Hal",
    value: "Hal",
  },
  {
    label: "Julius",
    value: "Julius",
  },
  {
    label: "Travon",
    value: "Travon",
  },
  {
    label: "Vincenza",
    value: "Vincenza",
  },
  {
    label: "Dominic",
    value: "Dominic",
  },
  {
    label: "Pearlie",
    value: "Pearlie",
  },
  {
    label: "Tyrel",
    value: "Tyrel",
  },
  {
    label: "Jaylen",
    value: "Jaylen",
  },
  {
    label: "Rogelio",
    value: "Rogelio",
  },
];

const fakeData = [
  {
    "id": 1,
    "avartar": "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=E",
    "city": "New Amieshire",
    "email": "Leora13@yahoo.com",
    "firstName": "Red Wacky League AntlezBroketheStereoNeon Kitching Josh Bennett Evolution Dreams 红色古怪联盟丹尼尔梅斯马修",
    "lastName": "Schuppe",
    "street": "Ratke Port",
    "zipCode": "17026-3154",
    "date": "2016-09-23T07:57:40.195Z",
    "bs": "global drive functionalities",
    "catchPhrase": "Intuitive impactful software",
    "companyName": "Lebsack - Nicolas",
    "words": "saepe et omnis",
    "sentence": "Quos aut sunt id nihil qui.",
    "stars": 820,
    "followers": 70
  },
  {
    "id": 2,
    "avartar": "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=J",
    "city": "New Gust",
    "email": "Mose_Gerhold51@yahoo.com",
    "firstName": "Janis",
    "lastName": "Vandervort",
    "street": "Dickinson Keys",
    "zipCode": "43767",
    "date": "2017-03-06T09:59:12.551Z",
    "bs": "e-business maximize bandwidth",
    "catchPhrase": "De-engineered discrete secured line",
    "companyName": "Glover - Hermiston",
    "words": "deleniti dolor nihil",
    "sentence": "Illo quidem libero corporis laborum.",
    "stars": 1200,
    "followers": 170
  },
  {
    "id": 3,
    "avartar": "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=M",
    "city": "Lefflerstad",
    "email": "Frieda.Sauer61@gmail.com",
    "firstName": "Makenzie",
    "lastName": "Bode",
    "street": "Legros Divide",
    "zipCode": "54812",
    "date": "2016-12-08T13:44:26.557Z",
    "bs": "plug-and-play e-enable content",
    "catchPhrase": "Ergonomic 6th generation challenge",
    "companyName": "Williamson - Kassulke",
    "words": "quidem earum magnam",
    "sentence": "Nam qui perferendis ut rem vitae saepe.",
    "stars": 610,
    "followers": 170
  },
  {
    "id": 4,
    "avartar": "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=C",
    "city": "East Catalina",
    "email": "Eloisa.OHara@hotmail.com",
    "firstName": "Ciara",
    "lastName": "Towne",
    "street": "Schimmel Ramp",
    "zipCode": "76315-2246",
    "date": "2016-07-19T12:54:30.994Z",
    "bs": "extensible innovate e-business",
    "catchPhrase": "Upgradable local model",
    "companyName": "Hilpert, Eichmann and Brown",
    "words": "exercitationem rerum sit",
    "sentence": "Qui rerum ipsa atque qui.",
    "stars": 5322,
    "followers": 170
  },
  {
    "id": 5,
    "avartar": "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=S",
    "city": "Ritchieborough",
    "email": "Brisa46@hotmail.com",
    "firstName": "Suzanne",
    "lastName": "Wolff",
    "street": "Lemuel Radial",
    "zipCode": "88870-3897",
    "date": "2017-02-23T17:11:53.875Z",
    "bs": "back-end orchestrate networks",
    "catchPhrase": "Exclusive human-resource knowledge base",
    "companyName": "Mayer - Considine",
    "words": "voluptatum tempore at",
    "sentence": "Enim quia deleniti molestiae aut.",
    "stars": 852,
    "followers": 770
  },
  {
    "id": 6,
    "avartar": "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=A",
    "city": "Lake Emery",
    "email": "Cody.Schultz56@gmail.com",
    "firstName": "Alessandra",
    "lastName": "Feeney",
    "street": "Mosciski Estate",
    "zipCode": "81514",
    "date": "2016-06-30T05:23:18.734Z",
    "bs": "sexy evolve technologies",
    "catchPhrase": "Virtual hybrid throughput",
    "companyName": "Nikolaus and Sons",
    "words": "alias minus repudiandae",
    "sentence": "Sed qui eius excepturi sunt voluptates.",
    "stars": 3209,
    "followers": 2780
  },
  {
    "id": 7,
    "avartar": "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=M",
    "city": "East Dejuan",
    "email": "Enrico_Beer@yahoo.com",
    "firstName": "Margret",
    "lastName": "Heller",
    "street": "Gunner Drive",
    "zipCode": "17423-9317",
    "date": "2017-03-13T21:09:47.253Z",
    "bs": "wireless morph synergies",
    "catchPhrase": "Profit-focused radical help-desk",
    "companyName": "Corwin, Maggio and Wintheiser",
    "words": "temporibus possimus neque",
    "sentence": "Eum amet ea non natus qui assumenda illo officia qui.",
    "stars": 9920,
    "followers": 570
  },
  {
    "id": 8,
    "avartar": "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=E",
    "city": "Schummtown",
    "email": "Mitchel.Herman@yahoo.com",
    "firstName": "Emiliano",
    "lastName": "Moore",
    "street": "Maria Junctions",
    "zipCode": "33930-7081",
    "date": "2016-03-27T07:26:57.345Z",
    "bs": "customized integrate e-tailers",
    "catchPhrase": "Total system-worthy contingency",
    "companyName": "Gulgowski - Botsford",
    "words": "deleniti ipsa hic",
    "sentence": "Ducimus id quaerat neque.",
    "stars": 3820,
    "followers": 880
  },
  {
    "id": 9,
    "avartar": "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=A",
    "city": "Gilberthaven",
    "email": "Gaylord_Reichel16@yahoo.com",
    "firstName": "Alessandra",
    "lastName": "Smith",
    "street": "Kali Spurs",
    "zipCode": "01370",
    "date": "2017-01-24T22:11:53.835Z",
    "bs": "extensible repurpose action-items",
    "catchPhrase": "Virtual dedicated definition",
    "companyName": "Maggio LLC",
    "words": "libero unde est",
    "sentence": "Non adipisci hic laboriosam et qui laudantium aspernatur.",
    "stars": 330,
    "followers": 590
  },
  {
    "id": 10,
    "avartar": "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=E",
    "city": "Felicitychester",
    "email": "Eileen48@gmail.com",
    "firstName": "Eldridge",
    "lastName": "Bins",
    "street": "Casper Squares",
    "zipCode": "80025-1552",
    "date": "2016-07-20T05:59:45.630Z",
    "bs": "cutting-edge expedite partnerships",
    "catchPhrase": "Organic user-facing functionalities",
    "companyName": "Leffler, Cummerata and Price",
    "words": "sed exercitationem quas",
    "sentence": "Voluptas dolorem quasi aspernatur.",
    "stars": 923,
    "followers": 704
  },
  {
    "id": 11,
    "avartar": "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=C",
    "city": "Caleighhaven",
    "email": "Rico_Nolan@hotmail.com",
    "firstName": "Claude",
    "lastName": "Hermiston",
    "street": "Bode Pine",
    "zipCode": "76773",
    "date": "2017-03-13T08:02:41.211Z",
    "bs": "back-end innovate infomediaries",
    "catchPhrase": "Stand-alone global customer loyalty",
    "companyName": "Heller, Rosenbaum and Lockman",
    "words": "ut quia ut",
    "sentence": "Eos consequatur magni incidunt.",
    "stars": 421,
    "followers": 403
  },
  {
    "id": 12,
    "avartar": "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=C",
    "city": "Herzogmouth",
    "email": "Dawn_Metz@yahoo.com",
    "firstName": "Clarabelle",
    "lastName": "Ankunding",
    "street": "Nolan Summit",
    "zipCode": "04355",
    "date": "2016-07-09T09:07:34.744Z",
    "bs": "granular deliver relationships",
    "catchPhrase": "Multi-lateral zero defect analyzer",
    "companyName": "Mante, Oberbrunner and Collins",
    "words": "eos fuga repellat",
    "sentence": "Cum corporis molestias quia.",
    "stars": 8203,
    "followers": 704
  },
  {
    "id": 13,
    "avartar": "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=H",
    "city": "Eulaliabury",
    "email": "Ron.Franecki@gmail.com",
    "firstName": "Hubert",
    "lastName": "Boehm",
    "street": "Anastacio Springs",
    "zipCode": "91444",
    "date": "2016-04-22T16:37:24.331Z",
    "bs": "one-to-one transition methodologies",
    "catchPhrase": "Switchable asymmetric function",
    "companyName": "Greenholt, Homenick and Considine",
    "words": "sed incidunt quo",
    "sentence": "Sed adipisci aliquam ut eius ut ipsa consequatur.",
    "stars": 8209,
    "followers": 909
  },
  {
    "id": 14,
    "avartar": "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=V",
    "city": "East Alice",
    "email": "Hayley52@yahoo.com",
    "firstName": "Vladimir",
    "lastName": "Breitenberg",
    "street": "Lula Port",
    "zipCode": "04635",
    "date": "2016-09-26T01:25:23.057Z",
    "bs": "virtual monetize communities",
    "catchPhrase": "Mandatory user-facing methodology",
    "companyName": "Kshlerin - Pfeffer",
    "words": "eaque enim unde",
    "sentence": "Sed voluptas fugiat nihil delectus architecto et voluptatibus quis voluptas.",
    "stars": 8251,
    "followers": 178
  },
  {
    "id": 15,
    "avartar": "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=H",
    "city": "East Frankie",
    "email": "Duane.Rempel@hotmail.com",
    "firstName": "Haylee",
    "lastName": "Purdy",
    "street": "Dena Walk",
    "zipCode": "94111-0802",
    "date": "2016-11-26T16:36:38.472Z",
    "bs": "enterprise drive users",
    "catchPhrase": "Customizable non-volatile paradigm",
    "companyName": "Lemke, Mitchell and Harber",
    "words": "dolores ipsum earum",
    "sentence": "Nemo molestiae ad sit cupiditate neque.",
    "stars": 3099,
    "followers": 707
  },
  {
    "id": 16,
    "avartar": "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=H",
    "city": "New Kendall",
    "email": "Eddie_Bartell@hotmail.com",
    "firstName": "Herminia",
    "lastName": "Altenwerth",
    "street": "Kshlerin Cape",
    "zipCode": "86614-9727",
    "date": "2016-09-28T19:50:18.308Z",
    "bs": "cutting-edge target models",
    "catchPhrase": "Triple-buffered fault-tolerant concept",
    "companyName": "Gislason - Nicolas",
    "words": "perferendis magnam minima",
    "sentence": "Fuga in dolorem vel eligendi deserunt voluptatem.",
    "stars": 8491,
    "followers": 463
  },
  {
    "id": 17,
    "avartar": "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=E",
    "city": "Port Whitney",
    "email": "Josephine_Legros@yahoo.com",
    "firstName": "Erick",
    "lastName": "Klein",
    "street": "Megane Cliffs",
    "zipCode": "42168",
    "date": "2016-04-02T05:03:42.377Z",
    "bs": "user-centric leverage experiences",
    "catchPhrase": "Centralized systematic parallelism",
    "companyName": "Olson and Sons",
    "words": "facere est in",
    "sentence": "Ducimus aliquid ut.",
    "stars": 9820,
    "followers": 670
  },
  {
    "id": 18,
    "avartar": "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=L",
    "city": "West Meda",
    "email": "Jared.Hudson@hotmail.com",
    "firstName": "Lisandro",
    "lastName": "Barton",
    "street": "Torrance Union",
    "zipCode": "19477",
    "date": "2016-08-01T14:24:45.209Z",
    "bs": "open-source exploit markets",
    "catchPhrase": "Open-source impactful framework",
    "companyName": "Volkman and Sons",
    "words": "a tempore hic",
    "sentence": "Quod veniam nemo impedit mollitia.",
    "stars": 1220,
    "followers": 708
  },
  {
    "id": 19,
    "avartar": "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=A",
    "city": "Darrenport",
    "email": "Delpha.Tromp9@yahoo.com",
    "firstName": "Ashton",
    "lastName": "Daugherty",
    "street": "Hermann Port",
    "zipCode": "25133-9181",
    "date": "2016-07-29T09:49:39.424Z",
    "bs": "wireless optimize deliverables",
    "catchPhrase": "Ergonomic human-resource algorithm",
    "companyName": "Grady LLC",
    "words": "libero ut repellat",
    "sentence": "Vel quod ullam.",
    "stars": 420,
    "followers": 30
  },
  {
    "id": 20,
    "avartar": "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=C",
    "city": "Janiyahaven",
    "email": "Ariel.Maggio9@yahoo.com",
    "firstName": "Cassandra",
    "lastName": "Schmitt",
    "street": "Windler Lodge",
    "zipCode": "87582-2944",
    "date": "2017-01-21T12:35:27.741Z",
    "bs": "holistic cultivate relationships",
    "catchPhrase": "Enterprise-wide system-worthy data-warehouse",
    "companyName": "Ankunding Group",
    "words": "blanditiis voluptates repellat",
    "sentence": "Non quis non dignissimos sit rerum voluptatem culpa quibusdam.",
    "stars": 20,
    "followers": 188
  }
]

export {
  menuItems,
  customerItems,
  productItems,
  chartLabels,
  chartData,
  tableData,
  socialIcons,
  productList,
  customerList,
  data,
  fakeData
};
