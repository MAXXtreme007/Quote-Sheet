$(document).ready(function() {

    /* ==================================================
    Bay Spacing
    ================================================== */

    $(function() {
        $("#bay-spacing-note").click(function () {
            $("#bay-spacing-note-p").fadeOut(function () {
                $("#bay-spacing-note-p").text(($("#bay-spacing-note-p").text() == 'Fold it') ? 'Expand it' : 'Fold it').fadeIn();
            })
        });
    });

    /* ==================================================
    Overhang
    ================================================== */

    $('#overhang-walls-toggle').change(function() {
        $('#overhang-walls').toggle();
        $('#overhang-all-ft').attr('disabled', !this.checked);
        $('#overhang-all-in').attr('disabled', !this.checked);
        $('#soffit-all').prop("disabled", !this.checked);
    });

    $('#overhang-no').on('click', function() {
        $(this).addClass('active');
        if ($(this).hasClass('active')) {
            $('#overhang-all').addClass('hide');
            if ($(!this.checked)) {
                $('#overhang-walls').addClass('hide');
            }
        }
    });
    $('#overhang-yes').on('click', function() {
        $(this).addClass('active');
        if ($(this).hasClass('active')) {
            $('#overhang-all').removeClass('hide');
            if ($(!this.checked)) {
                $('#overhang-walls').removeClass('hide');
            }
        }
    });

    /* ==================================================
    Wainscot
    ================================================== */

    $('#wainscot-walls-toggle').change(function() {
        $('#wainscot-walls').toggle();
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
        $('#liner-walls').toggle();
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
            $('#heated').removeClass('col-md-12');
            $('#heated').addClass('col-md-8');
            $('#insulation-provided').removeClass('hidden');
        }
    });
    $('#insulation-foam').on('click', function() {
        $(this).addClass('active');
        if ($(this).hasClass('active')) {
            $('#insulation-walls').removeClass('hide');
            $('#heated').removeClass('col-md-8');
            $('#heated').addClass('col-md-12');
            $('#insulation-provided').addClass('hidden');
        } else {
            $('#insulation-provided').removeClass('hidden');
        }
    });
});
