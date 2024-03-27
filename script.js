const hotel = [
  {
    id: 1,
    name: "Khách Sạn Mường Thanh",
    image: "https://muongthanh.com/images/brands/2019/10/11/original/luxury-nhat-le_1570769504.jpg",
    price: "800.000 ~ 10.000.000",
    madeIn: "Đà Nẵng,Việt Nam",
  },
  {
    id: 2,
    name: "Khách Sạn Mường Thanh",
    image: "https://muongthanh.com/images/brands/2019/10/11/original/luxury-nhat-le_1570769504.jpg",
    price: "800.000 ~ 10.000.000",
    madeIn: "Đà Nẵng,Việt Nam",
  },
  {
    id: 3,
    name: "Khách Sạn Mường Thanh",
    image: "https://muongthanh.com/images/brands/2019/10/11/original/luxury-nhat-le_1570769504.jpg",
    price: "800.000 ~ 10.000.000",
    madeIn: "Đà Nẵng,Việt Nam",
  },
  
];

function showHotel() {
  var html = "";
  var d = 0;
  for (var i = 0; i < hotel.length; i++) {
    d++;
    html + "<tr>";
    html += "<td>" + d + "</td>";
    html += "<input type='hidden' value='" + i + "' id='editIndex'>";
    html += "<td>" + hotel[i].name + "</td>";
    html +=
      "<td><img src=" + hotel[i].image + " style=height:100px;width:100px></td>";
    html += "<td>" + hotel[i].madeIn + "</td>";
    html += "<td>" + hotel[i].price + "</td>";
    html +=
      "<td><input type='button' value='Sửa' onclick='editHotel(" +
      i +
      ")' /> <input type='button' value='Xoá' onclick='deleteHotel(" +
      i +
      ")' /></td>";
    html += "</tr>";
  }
  document.getElementById("tbl").innerHTML = html;
}

function createHotel() {
  var n = hotel.length;
  n++;
  var hotelName = document.getElementById("hotelName").value;
  var hotelImage = document.getElementById("hotelImage").value;
  var hotelPrice = document.getElementById("hotelPrice").value;
  var hotelMadeIn = document.getElementById("hotelMadeIn").value;

  var newHotel = {
    id: n,
    name: hotelName,
    image: hotelImage,
    price: hotelPrice,
    madeIn: hotelMadeIn,
  };
  hotel.push(newHotel);
  showHotel();
}

function deleteContent() {
  document.getElementById("hotelName").value = "";
  document.getElementById("hotelPrice").value = "";
  document.getElementById("hotelMadeIn").value = "";
  document.getElementById("hotelImage").value = "";
}

function editHotel(index) {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("editForm").style.display = "block";

  document.getElementById("editIndex").value = index;
  document.getElementById("editHotelName").value = hotel[index].name;
  document.getElementById("editHotelImage").value = hotel[index].image;
  document.getElementById("editHotelMadeIn").value = hotel[index].madeIn;
  document.getElementById("editHotelPrice").value = hotel[index].price;

  document.getElementById("editForm").style.display = "block";
}

function closeEditForm() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("editForm").style.display = "none";
}

function updateHotel() {
  var indexToUpdate = parseInt(document.getElementById("editIndex").value);
  var newName = document.getElementById("editHotelName").value;
  var newImage = document.getElementById("editHotelImage").value;
  var madeIn = document.getElementById("editHotelMadeIn").value;
  var newPrice = document.getElementById("editHotelPrice").value;

  hotel[indexToUpdate].name = newName;
  hotel[indexToUpdate].image = newImage;
  hotel[indexToUpdate].madeIn = madeIn;
  hotel[indexToUpdate].price = newPrice;
  document.getElementById("overlay").style.display = "none";
  document.getElementById("editForm").style.display = "none";
  showHotel(hotel);
}

function deleteHotel(index) {
  hotel.splice(index, 1);
  showHotel();
}
