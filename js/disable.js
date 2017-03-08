$(document).ready(function() {

    /* ==================================================
    Bay Spacing
    ================================================== */

    $(function() {
        $("#bay-spacing-note").click(function() {
            $("#bay-spacing-note-p").fadeOut(function() {
                $("#bay-spacing-note-p").text(($("#bay-spacing-note-p").text() == 'Fold it') ? 'Expand it' : 'Fold it').fadeIn();
            })
        });
    });

    /* ==================================================
    Overhang
    ================================================== */

    // Disable input for overhang
    $('#overhang-no').on('click', function() {
        $(this).addClass('active');
        if ($(this).hasClass('active')) {
            $('#overhang-all').addClass('hide');
            if ($(!this.checked)) {
                $('#overhang-walls').addClass('hide');
            }
        }
    });

    // Enable input for overhang
    $('#overhang-yes').on('click', function() {
        $(this).addClass('active');
        if ($(this).hasClass('active')) {
            $('#overhang-all').removeClass('hide');
            if ($(!this.checked)) {
                $('#overhang-walls').removeClass('hide');
            }
        }
    });
    // Disable soffit for all walls until overhang length is specified
    $('#soffit-all').prop('disabled',true);
    $('#overhang-all-ft, #overhang-all-in').on('input', function(){
        if($('#overhang-all-ft').val() || $('#overhang-all-in').val())
            $('#soffit-all').attr('disabled', false);
        else
            $('#soffit-all').attr('disabled',true);
    });

    // Apply to all walls
    $('#overhang-walls-toggle').change(function() {
        if( $('#overhang-walls').css('display') == 'none') {
            $('#overhang-walls').css('display', 'table');
        } else {
            $('#overhang-walls').css('display', 'none');
        }
        $('#overhang-all-ft').attr('disabled', !this.checked);
        $('#overhang-all-in').attr('disabled', !this.checked);
        if(($('#overhang-all-ft').val() || $('#overhang-all-in').val()) && this.checked)
            $('#soffit-all').attr('disabled', false);
        else
            $('#soffit-all').attr('disabled',true);
    });

    // Disable soffit for specific walls until overhang length is specified
    $('#soffit-lew').prop('disabled',true);
    $('#soffit-rew').prop('disabled',true);
    $('#soffit-fsw').prop('disabled',true);
    $('#soffit-bsw').prop('disabled',true);
    $('#overhang-lew-ft, #overhang-lew-in').on('input', function(){
        if($('#overhang-lew-ft').val() || $('#overhang-lew-in').val())
            $('#soffit-lew').attr('disabled', false);
        else
            $('#soffit-lew').attr('disabled',true);
    });
    $('#overhang-rew-ft, #overhang-rew-in').on('input', function(){
        if($('#overhang-rew-ft').val() || $('#overhang-rew-in').val())
            $('#soffit-rew').attr('disabled', false);
        else
            $('#soffit-rew').attr('disabled',true);
    });
    $('#overhang-fsw-ft, #overhang-fsw-in').on('input', function(){
        if($('#overhang-fsw-ft').val() || $('#overhang-fsw-in').val())
            $('#soffit-fsw').attr('disabled', false);
        else
            $('#soffit-fsw').attr('disabled',true);
    });
    $('#overhang-bsw-ft, #overhang-bsw-in').on('input', function(){
        if($('#overhang-bsw-ft').val() || $('#overhang-bsw-in').val())
            $('#soffit-bsw').attr('disabled', false);
        else
            $('#soffit-bsw').attr('disabled',true);
    });

    /* ==================================================
    Wainscot
    ================================================== */

    $('#wainscot-walls-toggle').change(function() {
        if( $("#wainscot-walls").css('display') == 'none') {
            $('#wainscot-walls').css('display', 'table');
        } else {
            $('#wainscot-walls').css('display', 'none');
        }
        $('#wainscot-all-ft').attr('disabled', !this.checked);
        $('#wainscot-all-in').attr('disabled', !this.checked);
    });

    $('#wainscot-no').on('click', function() {
        $(this).addClass('active');
        if ($(this).hasClass('active')) {
            $('#wainscot-all').addClass('hide');
            if ($(!this.checked)) {
                $('#wainscot-walls').addClass('hide');
            }
        }
    });
    $('#wainscot-yes').on('click', function() {
        $(this).addClass('active');
        if ($(this).hasClass('active')) {
            $('#wainscot-all').removeClass('hide');
            if ($(!this.checked)) {
                $('#wainscot-walls').removeClass('hide');
            }
        }
    });

    /* ==================================================
       Liner
    ================================================== */

    $('#liner-walls-toggle').change(function() {
        if( $("#liner-walls").css('display') == 'none') {
            $('#liner-walls').css('display', 'table');
        } else {
            $('#liner-walls').css('display', 'none');
        }
        $('#liner-all-ft').attr('disabled', !this.checked);
        $('#liner-all-in').attr('disabled', !this.checked);
        $('#liner-full-height-toggle').prop("disabled", !this.checked);
    });

    $('#liner-panel-no').on('click', function() {
        $(this).addClass('active');
        if ($(this).hasClass('active')) {
            $('#liner-walls-all').addClass('hide');
            if ($(!this.checked)) {
                $('#liner-walls').addClass('hide');
            }
        }
    });
    $('#liner-panel-mloc').on('click', function() {
        $(this).addClass('active');
        if ($(this).hasClass('active')) {
            $('#liner-walls-all').removeClass('hide');
            if ($(!this.checked)) {
                $('#liner-walls').removeClass('hide');
            }
        }
    });
    $('#liner-panel-ploc').on('click', function() {
        $(this).addClass('active');
        if ($(this).hasClass('active')) {
            $('#liner-walls-all').removeClass('hide');
            if ($(!this.checked)) {
                $('#liner-walls').removeClass('hide');
            }
        }
    });
    $('#liner-panel-rloc').on('click', function() {
        $(this).addClass('active');
        if ($(this).hasClass('active')) {
            $('#liner-walls-all').removeClass('hide');
            if ($(!this.checked)) {
                $('#liner-walls').removeClass('hide');
            }
        }
    });

    /* ==================================================
    Insulation
    ================================================== */

    $('#insulation-none').on('click', function() {
        $(this).addClass('active');
        if ($(this).hasClass('active')) {
            $('#insulation-walls').addClass('hide');
        }
    });
    $('#insulation-fiberglass').on('click', function() {
        $(this).addClass('active');
        if ($(this).hasClass('active')) {
            $('#insulation-walls').removeClass('hide');
            $('#heated').removeClass('col-sm-12');
            $('#heated').addClass('col-sm-8');
            $('#insulation-provided').removeClass('hidden');
        }
    });
    $('#insulation-foam').on('click', function() {
        $(this).addClass('active');
        if ($(this).hasClass('active')) {
            $('#insulation-walls').removeClass('hide');
            $('#heated').removeClass('col-sm-8');
            $('#heated').addClass('col-sm-12');
            $('#insulation-provided').addClass('hidden');
        } else {
            $('#insulation-provided').removeClass('hidden');
        }
    });
});
