$(document).ready(function() {
/* ==================================================
Overhang
================================================== */

    $('#overhang-walls-toggle').change(function() {
        $('#overhang-walls').toggle();
        $('#overhang-all-ft').attr('disabled', !this.checked);
        $('#overhang-all-in').attr('disabled', !this.checked);
    });

    $('#overhang-no').on('click', function() {
        $(this).addClass('active');
        if ($(this).hasClass('active')) {
            $('#overhang-all').addClass('hide');
        }
    });
    $('#overhang-yes').on('click', function() {
        $(this).addClass('active');
        if ($(this).hasClass('active')) {
            $('#overhang-all').removeClass('hide');
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
        }
    });
    $('#wainscot-yes').on('click', function() {
        $(this).addClass('active');
        if ($(this).hasClass('active')) {
            $('#wainscot-all').removeClass('hide');
        }
    });

/* ==================================================
   Liner
================================================== */

    $('#liner-walls-toggle').change(function() {
        $('#liner-walls').toggle();
        $('#liner-all-ft').attr('disabled', !this.checked);
        $('#liner-all-in').attr('disabled', !this.checked);
    });

    $('#liner-panel-no').on('click', function() {
        $(this).addClass('active');
        if ($(this).hasClass('active')) {
            $('#liner-walls-all').addClass('hide');
        }
    });
    $('#liner-panel-mloc').on('click', function() {
        $(this).addClass('active');
        if ($(this).hasClass('active')) {
            $('#liner-walls-all').removeClass('hide');
        }
    });
    $('#liner-panel-ploc').on('click', function() {
        $(this).addClass('active');
        if ($(this).hasClass('active')) {
            $('#liner-walls-all').removeClass('hide');
        }
    });
    $('#liner-panel-rloc').on('click', function() {
        $(this).addClass('active');
        if ($(this).hasClass('active')) {
            $('#liner-walls-all').removeClass('hide');
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
