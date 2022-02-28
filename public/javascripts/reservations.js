// querySelectors 
const container = document.querySelector('.container');
const table = document.querySelectorAll('.row .seat:not(.occupied)');

const sbRadio = document.getElementById('sb-radio');
const umhlangaRadio = document.getElementById('umhlanga-radio');
const calendar = document.getElementById('calendar');
const peopleCount = document.getElementById('dropdownMenuButton1');

populateUI();





// Save Seat Choice
function setTableChoice(tableIndex, reservationDate) {
    localStorage.setItem('selectedTable', tableIndex);
    localStorage.setItem('selectedDate', reservationDate);
  }





// Update Seat Choice
function updateTableChoice() {
    const selectedTable = document.querySelectorAll('.row .table.selected');
  
    const tableIndex = [...selectedTable].map(seat => [...table].indexOf(table));
  
    localStorage.setItem('selectedTable', JSON.stringify(tableIndex));
  
    // const selectedTable = selectedSeats.length;

    
    setMovieData(movieSelect.selectedIndex, movieSelect.value);
  }