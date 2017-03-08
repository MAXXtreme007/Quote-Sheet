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
            $('#soffit-all').attr('disabled', true);
    });

    // Disable soffit for specific walls until overhang length is specified
    $('#soffit-lew, #soffit-rew, #soffit-fsw, #soffit-bsw').prop('disabled',true);
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
     Liner
     ================================================== */

    // Disable input for liner
    $('#liner-panel-no').on('click', function() {
        $(this).addClass('active');
        if ($(this).hasClass('active')) {
            $('#liner-walls-all').addClass('hide');
            if ($(!this.checked)) {
                $('#liner-walls').addClass('hide');
            }
        }
    });

    // Enable input for liner
    $('#liner-panel-mloc').on('click', function() {
        $(this).addClass('active');
        if ($(this).hasClass('active')) {
            $('#liner-walls-all').removeClass('hide');
            if ($(!this.checked)) {
                $('#liner-walls').removeClass('hide');
            }
        }
    });

    // Enable input for liner
    $('#liner-panel-ploc').on('click', function() {
        $(this).addClass('active');
        if ($(this).hasClass('active')) {
            $('#liner-walls-all').removeClass('hide');
            if ($(!this.checked)) {
                $('#liner-walls').removeClass('hide');
            }
        }
    });

    // Enable input for liner
    $('#liner-panel-rloc').on('click', function() {
        $(this).addClass('active');
        if ($(this).hasClass('active')) {
            $('#liner-walls-all').removeClass('hide');
            if ($(!this.checked)) {
                $('#liner-walls').removeClass('hide');
            }
        }
    });

    // Disable liner height for all walls if liner full height is selected
    $('#liner-all-ft, #liner-all-in').prop('disabled',false);
    $('#liner-full-height-toggle').on('click', function(){
        if($('#liner-full-height-toggle').is(':checked'))
            $('#liner-all-ft, #liner-all-in').prop('disabled',true);
        else
            $('#liner-all-ft, #liner-all-in').prop('disabled',false);
    });

    // Apply to all walls
    $('#liner-walls-toggle').change(function() {
        // Display liner options for separate walls
        if( $("#liner-walls").css('display') == 'none') {
            $('#liner-walls').css('display', 'table');
        } else {
            $('#liner-walls').css('display', 'none');
        }
        if (!this.checked()) {
            if ($('#liner-full-height-toggle').checked())
                $('#liner-full-height-toggle, #liner-all-ft, #liner-all-in').prop('disabled', true);
            else
                $('#liner-full-height-toggle, #liner-all-ft, #liner-all-in').prop('disabled', false);
        }
    });

    // Disable liner height for specific walls if liner full height is selected
    $('#liner-lew-ft, #liner-lew-in, #liner-rew-ft, #liner-rew-in, #liner-fsw-ft, #liner-fsw-in, #liner-bsw-ft, #liner-bsw-in').prop('disabled',false);
    $('#liner-full-height-lew').on('click', function() {
        if($('#liner-full-height-lew').is(':checked'))
            $('#liner-lew-ft, #liner-lew-in').prop('disabled',true);
        else
            $('#liner-lew-ft, #liner-lew-in').prop('disabled',false);
    });
    $('#liner-full-height-rew').on('click', function() {
        if($('#liner-full-height-rew').is(':checked'))
            $('#liner-rew-ft, #liner-rew-in').prop('disabled',true);
        else
            $('#liner-rew-ft, #liner-rew-in').prop('disabled',false);
    });
    $('#liner-full-height-fsw').on('click', function() {
        if($('#liner-full-height-fsw').is(':checked'))
            $('#liner-fsw-ft, #liner-fsw-in').prop('disabled',true);
        else
            $('#liner-fsw-ft, #liner-fsw-in').prop('disabled',false);
    });
    $('#liner-full-height-bsw').on('click', function() {
        if($('#liner-full-height-bsw').is(':checked'))
            $('#liner-bsw-ft, #liner-bsw-in').prop('disabled',true);
        else
            $('#liner-bsw-ft, #liner-bsw-in').prop('disabled',false);
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
