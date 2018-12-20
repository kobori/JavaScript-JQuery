var hotel = {
  name: 'Park',
  rooms: 120,
  books: 77,
  checkAvailability: function() {
    return this.rooms - this.books;
  }
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();