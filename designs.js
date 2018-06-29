// Listen for form submit
$('#sizePicker').on('submit', (gridevent) => {
    // Prevent form submit from reloading
    gridevent.preventDefault();
    
    // Retrieves user input for grid 
    const row = $('#inputHeight').val();
    const col = $('#inputWidth').val();
    makeGrid(row, col);
});
// Listen for clicks to fillup colour
$('#pixelCanvas').on('click', 'td', function() {
    // retrieves colour
    const colour = $('#colorPicker').val();
 // inputs colour
    $(this).css('background-color', colour);
});
// creates pixelcanvas grid 
function makeGrid(w, h) {
    let html = '';
    for(var i = 1; i <= h; i++) {
        html += '<tr>';
        for(var j = 1; j <= w; j++) {
            html += '<td></td>';
        }
        html += '</tr>';
    }
   $('#pixelCanvas').html(html);
}
