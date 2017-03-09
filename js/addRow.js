$(document).ready(function() {
/* ==================================================
   Left End Wall
================================================== */

    var lew_i = 1;
    $('#fo-lew-counter0').append("<h4 id='fo-lew-counter'>" + lew_i + "</h4>");
    $("#add_row_fo_lew1, #add_row_fo_lew2").click(function() {
        $('#addr-fo-lew' + lew_i).html("<div class='col-sm-1 stretch'><table class='table table-bordered table-hover table-responsive'><thead class='hidden-sm hidden-md hidden-lg'><tr><th class='text-center'>FO #</th></tr></thead><tbody><tr id='fo-lew-counter-countainer'><td id='fo-lew-counter'></td></tr></tbody></table></div><div class='col-sm-3 stretch'><table class='table table-bordered table-hover table-responsive' id='fo-lew-qty'><thead class='hidden-sm hidden-md hidden-lg'><tr><th class='text-center'>Quantity</th></tr></thead><tbody><tr><td><input class='form-control' name='Framed Openings LEW Quantity' data-type='number' type='number' placeholder='Qty' /></td></tr></tbody></table></div><div class='col-sm-4 stretch'><table class='table table-bordered table-hover table-responsive' id='fo-lew-w'><thead class='hidden-sm hidden-md hidden-lg'><tr><th class='text-center'>Width</th></tr></thead><tbody><tr><td><div class='input-group'><input class='form-control' name='Framed Openings LEW Width Feet' data-type='number' type='number' placeholder='Feet'><span class='input-group-addon'>ft</span><input class='form-control' name='Framed Openings LEW Width Inches' data-type='number' type='number' placeholder='Inches'><span class='input-group-addon'>in</span></div></td></tr></tbody></table></div><div class='col-sm-4 stretch'><table class='table table-bordered table-hover table-responsive' id='fo-lew-h'><thead class='hidden-sm hidden-md hidden-lg'><tr><th class='text-center'>Height</th></tr></thead><tbody><tr><td><div class='input-group'><input class='form-control' name='Framed Openings LEW Height Feet' data-type='number' type='number' placeholder='Feet'><span class='input-group-addon'>ft</span><input class='form-control' name='Framed Openings LEW Height Inches' data-type='number' type='number' placeholder='Inches'><span class='input-group-addon'>in</span></div></td></tr></tbody></table></div>");
        $('#fo-lew-counter' + lew_i).html('<h4>' + (lew_i) + '</h4>');

        $('#fo-lew').append('<div id="addr-fo-lew' + (lew_i + 1) + '"></div>');
        lew_i++;
    });
    $("#delete_row_fo_lew1, #delete_row_fo_lew2").click(function() {
        if (lew_i > 1) {
            $("#addr-fo-lew" + (lew_i - 1)).html('');
            lew_i--;
        }
    });

/* ==================================================
   Right End Wall
================================================== */
    var rew_i = 1;
    $("#add_row_fo_rew").click(function() {
        $('#addr-fo-rew-qty' + rew_i).html("<td><input class='form-control' name='Framed Openings REW Quantity' data-type='number' type='number' placeholder='Qty' /></td>");
        $('#addr-fo-rew-w' + rew_i).html("<td><div class='input-group'><input class='form-control' name='Framed Openings REW Width Feet' data-type='number' type='number' placeholder='Feet'><span class='input-group-addon'>ft</span><input class='form-control' name='Framed Openings REW Width Inches' data-type='number' type='number' placeholder='Inches'><span class='input-group-addon'>in</span></div></td>");
        $('#addr-fo-rew-h' + rew_i).html("<td><div class='input-group'><input class='form-control' name='Framed Openings REW Height Feet' data-type='number' type='number' placeholder='Feet'><span class='input-group-addon'>ft</span><input class='form-control' name='Framed Openings REW Height Inches' data-type='number' type='number' placeholder='Inches'><span class='input-group-addon'>in</span></div></td>");

        $('#fo-rew-qty').append('<tr id="addr-fo-rew-qty' + (rew_i + 1) + '"></tr>');
        $('#fo-rew-w').append('<tr id="addr-fo-rew-w' + (rew_i + 1) + '"></tr>');
        $('#fo-rew-h').append('<tr id="addr-fo-rew-h' + (rew_i + 1) + '"></tr>');
        rew_i++;
    });
    $("#delete_row_fo_rew").click(function() {
        if (rew_i > 1) {
            $("#addr-fo-rew-qty" + (rew_i - 1)).html('');
            $("#addr-fo-rew-w" + (rew_i - 1)).html('');
            $("#addr-fo-rew-h" + (rew_i - 1)).html('');
            rew_i--;
        }
    });
/* ==================================================
   Front Side Wall
================================================== */
    var fsw_i = 1;
    $("#add_row_fo_fsw").click(function() {
        $('#addr-fo-fsw-qty' + fsw_i).html("<td><input class='form-control' name='Framed Openings FSW Quantity' data-type='number' type='number' placeholder='Qty' /></td>");
        $('#addr-fo-fsw-w' + fsw_i).html("<td><div class='input-group'><input class='form-control' name='Framed Openings FSW Width Feet' data-type='number' type='number' placeholder='Feet'><span class='input-group-addon'>ft</span><input class='form-control' name='Framed Openings FSW Width Inches' data-type='number' type='number' placeholder='Inches'><span class='input-group-addon'>in</span></div></td>");
        $('#addr-fo-fsw-h' + fsw_i).html("<td><div class='input-group'><input class='form-control' name='Framed Openings FSW Height Feet' data-type='number' type='number' placeholder='Feet'><span class='input-group-addon'>ft</span><input class='form-control' name='Framed Openings FSW Height Inches' data-type='number' type='number' placeholder='Inches'><span class='input-group-addon'>in</span></div></td>");

        $('#fo-fsw-qty').append('<tr id="addr-fo-fsw-qty' + (fsw_i + 1) + '"></tr>');
        $('#fo-fsw-w').append('<tr id="addr-fo-fsw-w' + (fsw_i + 1) + '"></tr>');
        $('#fo-fsw-h').append('<tr id="addr-fo-fsw-h' + (fsw_i + 1) + '"></tr>');
        fsw_i++;
    });
    $("#delete_row_fo_fsw").click(function() {
        if (fsw_i > 1) {
            $("#addr-fo-fsw-qty" + (fsw_i - 1)).html('');
            $("#addr-fo-fsw-w" + (fsw_i - 1)).html('');
            $("#addr-fo-fsw-h" + (fsw_i - 1)).html('');
            fsw_i--;
        }
    });
/* ==================================================
   Back Side Wall
================================================== */
    var bsw_i = 1;
    $("#add_row_fo_bsw").click(function() {
        $('#addr-fo-bsw-qty' + bsw_i).html("<td><input class='form-control' name='Framed Openings BSW Quantity' data-type='number' type='number' placeholder='Qty' /></td>");
        $('#addr-fo-bsw-w' + bsw_i).html("<td><div class='input-group'><input class='form-control' name='Framed Openings BSW Width Feet' data-type='number' type='number' placeholder='Feet'><span class='input-group-addon'>ft</span><input class='form-control' name='Framed Openings BSW Width Inches' data-type='number' type='number' placeholder='Inches'><span class='input-group-addon'>in</span></div></td>");
        $('#addr-fo-bsw-h' + bsw_i).html("<td><div class='input-group'><input class='form-control' name='Framed Openings BSW Height Feet' data-type='number' type='number' placeholder='Feet'><span class='input-group-addon'>ft</span><input class='form-control' name='Framed Openings BSW Height Inches' data-type='number' type='number' placeholder='Inches'><span class='input-group-addon'>in</span></div></td>");

        $('#fo-bsw-qty').append('<tr id="addr-fo-bsw-qty' + (bsw_i + 1) + '"></tr>');
        $('#fo-bsw-w').append('<tr id="addr-fo-bsw-w' + (bsw_i + 1) + '"></tr>');
        $('#fo-bsw-h').append('<tr id="addr-fo-bsw-h' + (bsw_i + 1) + '"></tr>');
        bsw_i++;
    });
    $("#delete_row_fo_bsw").click(function() {
        if (bsw_i > 1) {
            $("#addr-fo-bsw-qty" + (bsw_i - 1)).html('');
            $("#addr-fo-bsw-w" + (bsw_i - 1)).html('');
            $("#addr-fo-bsw-h" + (bsw_i - 1)).html('');
            bsw_i--;
        }
    });
});
