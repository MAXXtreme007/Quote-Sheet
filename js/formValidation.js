$(document).ready(function() {
    // Validate names
    var valName = /^[a-zA-Z]+$/
    $('.name')
        .data("oldValue",'')
        .bind('input propertychange', function() {
            var $this = $(this);
            var newValue = $this.val();
            if ( !valName.test(newValue) && $(this).val() )
                return $this.val($this.data('oldValue'));

            return $this.data('oldValue',newValue)
        });
    // Do not allow spaces but allow for backspacing
    $('.name').on({
        keydown: function(e) {
            if (e.which === 32)
                return false;
        },
        change: function() {
            this.value = this.value.replace(/\s/g, "");
        }
    });

    // Validate positive numbers
    var posNumber = /^([1-9][0-9]*(\.[0-9]+)?|0?\.[0-9]*[1-9][0-9]*)$/
    var posPrefix = /^((\d*(\.?\d*)?)|(\.\d*))$/
    $('.posNum')
        .data("oldValue",'')
        .bind('input propertychange', function() {
            var $this = $(this);
            var newValue = $this.val();
            if ( !posPrefix.test(newValue) && $(this).val() )
                return $this.val($this.data('oldValue'));
            if ( posNumber.test(newValue) || !$(this).val() )
                $this.removeClass("error-border");
            else
                $this.addClass("error-border");

            return $this.data('oldValue',newValue)
        });

    // Validate whole numbers
    var wholeNumber = /^[1-9][0-9]*$/
    $('.wholeNum')
        .data("oldValue",'')
        .bind('input propertychange', function() {
            var $this = $(this);
            var newValue = $this.val();
            if ( !wholeNumber.test(newValue) && $(this).val() )
                return $this.val($this.data('oldValue'));
            if ( wholeNumber.test(newValue) || !$(this).val() )
                $this.removeClass("error-border");
            else
                $this.addClass("error-border");

            return $this.data('oldValue',newValue)
        });

    // Validate phone numbers
    var phoneNumber = /^\+[1-9]{1}[0-9]{7,11}$/
    $('.phoneNum')
        .data("oldValue",'')
        .bind('input propertychange', function() {
            var $this = $(this);
            var newValue = $this.val();
            if ( !phoneNumber.test(newValue) && $(this).val() )
                return $this.val($this.data('oldValue'));
            if ( phoneNumber.test(newValue) || !$(this).val() )
                $this.removeClass("error-border");
            else
                $this.addClass("error-border");

            return $this.data('oldValue',newValue)
        });

    // Validate zip codes
    var zipCode = /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/
    var zipDigit = /^[0-9]{0,9}$/
    $('.zip')
        .data("oldValue",'')
        .bind('input propertychange', function() {
            var $this = $(this);
            var newValue = $this.val();
            if ( !zipDigit.test(newValue) )
                return $this.val($this.data('oldValue'));
            if ( zipCode.test(newValue) || !$(this).val() )
                $this.removeClass("error-border");
            else
                $this.addClass("error-border");

            return $this.data('oldValue',newValue)
        });

    // Validate emails
    var email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$//
        $('.email')
            .data("oldValue",'')
            .bind('input propertychange', function() {
                var $this = $(this);
                var newValue = $this.val();
                if ( !email.test(newValue) && $(this).val() )
                    return $this.val($this.data('oldValue'));
                if ( email.test(newValue) || !$(this).val() )
                    $this.removeClass("error-border");
                else
                    $this.addClass("error-border");

                return $this.data('oldValue',newValue)
            });
});

$(function() {
    // put your own error messages and/or message translation logic here
    var errorMessages = {
        "REQUIRED": "This field is required",
        "UNIQUE": "This value already exists",
        "TYPE": "Invalid data type",
        "REGEX": "Invalid data format",
        "number": "Must be an integer number",
        "money": "Must be a number with max two decimals",
        "JSON": "Not a valid JSON",
        "float_number": "Must be a decimal number",
        "email": "Must be a valid email",
        "FILESIZE": "Upload exceeds file size limit per field (max 10 MB)",
        "UPLOADERROR": "Unable to upload file, please try again",
        "GENERIC_ERROR": "A server error occured, please reload page"
    }

    var successMessage = "Thank you for submitting this quote sheet! We will get back with you in the next few business days.";

    // enable javascript datetimepicker unless supported
    // Docs and settings: http://xdsoft.net/jqplugins/datetimepicker/

    $.datetimepicker.setLocale('en');

    // if missing support for datetime, then use jquery.datetimepicker

    if (!Modernizr.inputtypes.datetime) {
        $("input[data-type=date]").datetimepicker({
            timepicker: false,
            format: "Y/m/d"
        }).attr("type", "text");
        $("input[data-type=datetime]").datetimepicker({}).attr("type", "text");
        $("input[data-type=time]").datetimepicker({
            datepicker: false,
            format: "H:i",
            value: "12:00"
        }).attr("type", "text");
    }

    $("#leads-form input[data-type=file], #leads-form input[data-type=image]").on("change", function() {
        $(this).data("uploadedfiles", []);
    });
    var apikey = "{{settings.formapikey}}"; // TODO: INSERT YOUR CORS API KEY HERE OR add formapikey to settings

    if (!apikey) alert("Please insert a CORS API key");

    var ajaxSettings = {
        "async": true,
        "crossDomain": true,
        "url": "https://scheduling-1252.restdb.io/rest/leads",
        "method": "POST",
        "headers": {
            "x-apikey": apikey,
            "content-type": "application/json"
        },
        "processData": false
    }

    var ajaxSettingsAttachments = {
        "async": true,
        "url": "https://scheduling-1252.restdb.io/media",
        "method": "POST",
        "contentType": false,
        "headers": {
            "x-apikey": apikey
        },
        "cache": false,
        "processData": false
    }

    function uploadAttachment(item) {
        var deferred = $.Deferred();
        var datatype = $(item).attr("data-type");
        var element_name = $(item).attr("name");
        var formData = new FormData();
        var files = $(item)[0].files;
        var totalsize = 0;
        var files_to_upload = []
        _.each(files, function(file) {
            // ignore non-images
            if (datatype === "image" && !file.type.match('image.*')) {
                return;
            } else {
                files_to_upload.push(file);
                totalsize += file.size;
            }
        });

        // check max upload file size for development plan
        if (totalsize <= 10000000) {
            _.each(files_to_upload, function(file) {
                formData.append(element_name, file, file.name);
            });
            var asa = _.clone(ajaxSettingsAttachments);
            asa.xhr = function() {
                var xhr = new window.XMLHttpRequest();
                xhr.upload.addEventListener("progress", function(evt) {
                    if (evt.lengthComputable) {
                        var percentComplete = evt.loaded / evt.total;
                        percentComplete = parseInt(percentComplete * 100) + "%";
                        $("#" + element_name + "_progress")
                            .css("width", percentComplete)
                    }
                }, false);
                return xhr;
            }
            asa.data = formData;
            var uploadedbefore = $(item).data("uploaded");
            if (!uploadedbefore) {
                $("#" + element_name + "_progress").parent().removeClass("hidden");
                $("#btn-submit").button("loading");
                $.ajax(asa)
                    .success(function(data) {
                        var result = data.ids || [];
                        var successObj = {};
                        successObj[element_name] = result;
                        $(item).data("uploaded", result);
                        deferred.resolve(successObj);
                    })
                    .fail(function() {
                        deferred.reject({
                            field: element_name,
                            error: errorMessages.UPLOADERROR
                        });
                    });
            } else {
                var obj = {};
                obj[element_name] = uploadedbefore;
                deferred.resolve(obj);
            }
        } else {
            deferred.reject({
                field: element_name,
                error: errorMessages.FILESIZE
            });
        }
        return deferred.promise();
    }

    function postForm() {

        // clear errors
        $("#leads-form .has-error").removeClass("has-error");
        $("#leads-form .help-block").remove();

        $("#btn-submit").button("loading");

        // we need to reformat date, datetime, datetime-local and time to ISO date strings

        $("input[data-type=datetime],input[data-type=datetime-local]").each(function() {
            var theDate = $(this).val();
            if (theDate) {
                var isodate_str = new Date(theDate).toISOString();
                $(this).val(isodate_str);
            }
        });

        $("input[data-type=date]").each(function() {
            var theDate = $(this).val();
            if (theDate) {
                theDate += " GMT";
                var isodate_str = new Date(theDate).toISOString();
                $(this).val(isodate_str);
            }
        });

        $("input[data-type=time]").each(function() {
            var timeval = $(this).val();
            if (timeval) {
                var regex = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/
                if (timeval.match(regex)) {
                    var isodate_str = new Date("1970-01-01T" + $(this).val() + ":00Z").toISOString();
                    $(this).val(isodate_str);
                }
            }
        });


        // get the form data
        var formObj = $("#leads-form").serializeObject();

        // get attachments from inputs
        var attachments = [];

        $("#leads-form input[data-type=file], #leads-form input[data-type=image]").each(function(input) {
            var files = $(this)[0].files;
            if (files && files.length > 0) {
                attachments.push($(this));
            }
        });

        var attachFuncs = [];
        _.each(attachments, function(attachment) {
            attachFuncs.push(uploadAttachment(attachment));
        });

        // upload all attachments and return with ids when done
        $.when.apply(null, attachFuncs)
            .done(function() {
                // get the attachment id's from arguments and store into form obj

                _.each(arguments, function(fieldObj) {
                    formObj = _.assign(formObj, fieldObj);
                });

                // submit the whole form with attachment ids 

                ajaxSettings.data = JSON.stringify(formObj);
                $.ajax(ajaxSettings)
                    .done(function(response) {
                        // replaces form with a thank you message, please replace with your own functionality
                        $("#leads-form").replaceWith("<div class='thank-you'>" + successMessage + "</div>");
                    })
                    .fail(function(response) {
                        $("#btn-submit").button("reset");
                        var error = response.responseJSON;
                        if (error && error.name === "ValidationError") {
                            _.each(error.list, function(fielderr) {
                                var inputSelector = "[name=" + fielderr.field + "]";
                                var errorMessageCode = fielderr.message[1];
                                var errorMessage = errorMessages[errorMessageCode] || "Invalid value";
                                if (errorMessageCode === "TYPE") {
                                    var fieldType = $(inputSelector).data("type");
                                    errorMessage = errorMessages[fieldType] || "Invalid value";
                                }
                                $(inputSelector).after("<div class='help-block'>" + errorMessage + "</div>");
                                $(inputSelector).parents(".form-group").addClass("has-error");
                            });
                        } else {
                            var msg = (ajaxSettings.headers["x-apikey"] && ajaxSettings.headers["x-apikey"].length < 24) ? "Missing API-key" : "Server Error";
                            alert(msg);
                        }
                    });
            })
            .fail(function(response) {
                $("#btn-submit").button("reset");
                if (response.field && response.error) {
                    var inputSelector = "[name=" + response.field + "]";
                    $(inputSelector).after("<div class='help-block'>" + response.error + "</div>");
                    $(inputSelector).parents(".form-group").addClass("has-error");
                } else {
                    var errorMessage = errorMessages.GENERIC_ERROR || "Problem submitting form";
                    $("#fg-errors").addClass("has-error")
                        .append("<div class='help-block'>" + errorMessage + "</div>");
                }
            });
    };

    $("#leads-form").submit(function(event) {
        postForm();
        event.preventDefault();
        return false;
    });
});
