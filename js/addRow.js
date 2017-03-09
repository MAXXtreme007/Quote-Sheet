$(document).ready(function() {
    /* ==================================================
     Left End Wall
     ================================================== */
    var lew_i = 1;
    $("#add_row_fo_lew1, #add_row_fo_lew2").click(function () {
        $('#addr-fo-lew' + lew_i).html("<div class='col-sm-2 stretch'><table class='table table-bordered table-hover table-responsive' id='fo-lew-qty'><thead class='hidden-sm hidden-md hidden-lg'><tr><th class='text-center'>Quantity</th></tr></thead><tbody><tr><td><input class='form-control' name='Framed Openings LEW Quantity' data-type='number' type='number' placeholder='Qty' /></td></tr></tbody></table></div><div class='col-sm-5 stretch'><table class='table table-bordered table-hover table-responsive' id='fo-lew-w'><thead class='hidden-sm hidden-md hidden-lg'><tr><th class='text-center'>Width</th></tr></thead><tbody><tr><td><div class='input-group'><input class='form-control' name='Framed Openings LEW Width Feet' data-type='number' type='number' placeholder='Feet'><span class='input-group-addon'>ft</span><input class='form-control' name='Framed Openings LEW Width Inches' data-type='number' type='number' placeholder='Inches'><span class='input-group-addon'>in</span></div></td></tr></tbody></table></div><div class='col-sm-5 stretch'><table class='table table-bordered table-hover table-responsive' id='fo-lew-h'><thead class='hidden-sm hidden-md hidden-lg'><tr><th class='text-center'>Height</th></tr></thead><tbody><tr><td><div class='input-group'><input class='form-control' name='Framed Openings LEW Height Feet' data-type='number' type='number' placeholder='Feet'><span class='input-group-addon'>ft</span><input class='form-control' name='Framed Openings LEW Height Inches' data-type='number' type='number' placeholder='Inches'><span class='input-group-addon'>in</span></div></td></tr></tbody></table></div>");

        $('#fo-lew').append('<div class="row separator-line" id="addr-fo-lew' + (lew_i + 1) + '"></div>');
        lew_i++;
    });
    $("#delete_row_fo_lew1, #delete_row_fo_lew2").click(function () {
        if (lew_i > 1) {
            $("#addr-fo-lew" + (lew_i - 1)).html('');
            $("#addr-fo-lew" + (lew_i)).remove();
            lew_i--;
        }
    });
    /* ==================================================
     Right End Wall
     ================================================== */
    var rew_i = 1;
    $("#add_row_fo_rew1, #add_row_fo_rew2").click(function () {
        $('#addr-fo-rew' + rew_i).html("<div class='col-sm-2 stretch'><table class='table table-bordered table-hover table-responsive' id='fo-rew-qty'><thead class='hidden-sm hidden-md hidden-lg'><tr><th class='text-center'>Quantity</th></tr></thead><tbody><tr><td><input class='form-control' name='Framed Openings REW Quantity' data-type='number' type='number' placeholder='Qty' /></td></tr></tbody></table></div><div class='col-sm-5 stretch'><table class='table table-bordered table-hover table-responsive' id='fo-rew-w'><thead class='hidden-sm hidden-md hidden-lg'><tr><th class='text-center'>Width</th></tr></thead><tbody><tr><td><div class='input-group'><input class='form-control' name='Framed Openings REW Width Feet' data-type='number' type='number' placeholder='Feet'><span class='input-group-addon'>ft</span><input class='form-control' name='Framed Openings REW Width Inches' data-type='number' type='number' placeholder='Inches'><span class='input-group-addon'>in</span></div></td></tr></tbody></table></div><div class='col-sm-5 stretch'><table class='table table-bordered table-hover table-responsive' id='fo-rew-h'><thead class='hidden-sm hidden-md hidden-lg'><tr><th class='text-center'>Height</th></tr></thead><tbody><tr><td><div class='input-group'><input class='form-control' name='Framed Openings REW Height Feet' data-type='number' type='number' placeholder='Feet'><span class='input-group-addon'>ft</span><input class='form-control' name='Framed Openings REW Height Inches' data-type='number' type='number' placeholder='Inches'><span class='input-group-addon'>in</span></div></td></tr></tbody></table></div>");

        $('#fo-rew').append('<div class="row separator-line" id="addr-fo-rew' + (rew_i + 1) + '"></div>');
        rew_i++;
    });
    $("#delete_row_fo_rew1, #delete_row_fo_rew2").click(function () {
        if (rew_i > 1) {
            $("#addr-fo-rew" + (rew_i - 1)).html('');
            $("#addr-fo-rew" + (rew_i)).remove();
            rew_i--;
        }
    });
    /* ==================================================
     Front Side Wall
     ================================================== */
    var fsw_i = 1;
    $("#add_row_fo_fsw1, #add_row_fo_fsw2").click(function () {
        $('#addr-fo-fsw' + fsw_i).html("<div class='col-sm-2 stretch'><table class='table table-bordered table-hover table-responsive' id='fo-fsw-qty'><thead class='hidden-sm hidden-md hidden-lg'><tr><th class='text-center'>Quantity</th></tr></thead><tbody><tr><td><input class='form-control' name='Framed Openings FSW Quantity' data-type='number' type='number' placeholder='Qty' /></td></tr></tbody></table></div><div class='col-sm-5 stretch'><table class='table table-bordered table-hover table-responsive' id='fo-fsw-w'><thead class='hidden-sm hidden-md hidden-lg'><tr><th class='text-center'>Width</th></tr></thead><tbody><tr><td><div class='input-group'><input class='form-control' name='Framed Openings FSW Width Feet' data-type='number' type='number' placeholder='Feet'><span class='input-group-addon'>ft</span><input class='form-control' name='Framed Openings FSW Width Inches' data-type='number' type='number' placeholder='Inches'><span class='input-group-addon'>in</span></div></td></tr></tbody></table></div><div class='col-sm-5 stretch'><table class='table table-bordered table-hover table-responsive' id='fo-fsw-h'><thead class='hidden-sm hidden-md hidden-lg'><tr><th class='text-center'>Height</th></tr></thead><tbody><tr><td><div class='input-group'><input class='form-control' name='Framed Openings FSW Height Feet' data-type='number' type='number' placeholder='Feet'><span class='input-group-addon'>ft</span><input class='form-control' name='Framed Openings FSW Height Inches' data-type='number' type='number' placeholder='Inches'><span class='input-group-addon'>in</span></div></td></tr></tbody></table></div>");

        $('#fo-fsw').append('<div class="row separator-line" id="addr-fo-fsw' + (fsw_i + 1) + '"></div>');
        fsw_i++;
    });
    $("#delete_row_fo_fsw1, #delete_row_fo_fsw2").click(function () {
        if (fsw_i > 1) {
            $("#addr-fo-fsw" + (fsw_i - 1)).html('');
            $("#addr-fo-fsw" + (fsw_i)).remove();
            fsw_i--;
        }
    });
    /* ==================================================
     Back Side Wall
     ================================================== */
    var bsw_i = 1;
    $("#add_row_fo_bsw1, #add_row_fo_bsw2").click(function () {
        $('#addr-fo-bsw' + bsw_i).html("<div class='col-sm-2 stretch'><table class='table table-bordered table-hover table-responsive' id='fo-bsw-qty'><thead class='hidden-sm hidden-md hidden-lg'><tr><th class='text-center'>Quantity</th></tr></thead><tbody><tr><td><input class='form-control' name='Framed Openings BSW Quantity' data-type='number' type='number' placeholder='Qty' /></td></tr></tbody></table></div><div class='col-sm-5 stretch'><table class='table table-bordered table-hover table-responsive' id='fo-bsw-w'><thead class='hidden-sm hidden-md hidden-lg'><tr><th class='text-center'>Width</th></tr></thead><tbody><tr><td><div class='input-group'><input class='form-control' name='Framed Openings BSW Width Feet' data-type='number' type='number' placeholder='Feet'><span class='input-group-addon'>ft</span><input class='form-control' name='Framed Openings BSW Width Inches' data-type='number' type='number' placeholder='Inches'><span class='input-group-addon'>in</span></div></td></tr></tbody></table></div><div class='col-sm-5 stretch'><table class='table table-bordered table-hover table-responsive' id='fo-bsw-h'><thead class='hidden-sm hidden-md hidden-lg'><tr><th class='text-center'>Height</th></tr></thead><tbody><tr><td><div class='input-group'><input class='form-control' name='Framed Openings BSW Height Feet' data-type='number' type='number' placeholder='Feet'><span class='input-group-addon'>ft</span><input class='form-control' name='Framed Openings BSW Height Inches' data-type='number' type='number' placeholder='Inches'><span class='input-group-addon'>in</span></div></td></tr></tbody></table></div>");

        $('#fo-bsw').append('<div class="row separator-line" id="addr-fo-bsw' + (bsw_i + 1) + '"></div>');
        bsw_i++;
    });
    $("#delete_row_fo_bsw1, #delete_row_fo_bsw2").click(function () {
        if (bsw_i > 1) {
            $("#addr-fo-bsw" + (bsw_i - 1)).html('');
            $("#addr-fo-bsw" + (bsw_i)).remove();
            bsw_i--;
        }
    });
});