function ProperCase(el) {
    var pos = getInputSelection(el);
    var s = $(el).val();
    s = s.toLowerCase().replace(/^(.)|\s(.)|'(.)/g,
        function($1) { return $1.toUpperCase(); });
    $(el).val(s);
    setCaretPosition(el,pos.start);
}

function UpperCase(el) {
    var pos = getInputSelection(el);
    var s = $(el).val();
    s = s.toUpperCase();
    $(el).val(s);
    setCaretPosition(el,pos.start);
}

function initialCap(el) {
    var pos = getInputSelection(el);
    var s = $(el).val();
    s = s.substr(0, 1).toUpperCase() + s.substr(1);
    $(el).val(s);
    setCaretPosition(el,pos.start);
}

/* GETS CARET POSITION */
function getInputSelection(el) {
    var start = 0, end = 0, normalizedValue, range,
        textInputRange, len, endRange;

    if (typeof el.selectionStart == 'number' && typeof el.selectionEnd == 'number') {
        start = el.selectionStart;
        end = el.selectionEnd;
    } else {
        range = document.selection.createRange();

        if (range && range.parentElement() == el) {
            len = el.value.length;
            normalizedValue = el.value.replace(/\r\n/g, "\n");

            // Create a working TextRange that lives only in the input
            textInputRange = el.createTextRange();
            textInputRange.moveToBookmark(range.getBookmark());

            // Check if the start and end of the selection are at the very end
            // of the input, since moveStart/moveEnd doesn't return what we want
            // in those cases
            endRange = el.createTextRange();
            endRange.collapse(false);

            if (textInputRange.compareEndPoints("StartToEnd", endRange) > -1) {
                start = end = len;
            } else {
                start = -textInputRange.moveStart("character", -len);
                start += normalizedValue.slice(0, start).split("\n").length - 1;

                if (textInputRange.compareEndPoints("EndToEnd", endRange) > -1) {
                    end = len;
                } else {
                    end = -textInputRange.moveEnd("character", -len);
                    end += normalizedValue.slice(0, end).split("\n").length - 1;
                }
            }
        }
    }

    return {
        start: start,
        end: end
    };
}

/* SETS CARET POSITION */
function setCaretPosition(el, caretPos) {

    el.value = el.value;

    // ^ this is used to not only get "focus", but
    // to make sure we don't have it everything -selected-
    // (it causes an issue in chrome, and having it doesn't hurt any other browser)

    if (el !== null) {

        if (el.createTextRange) {
            var range = el.createTextRange();
            range.move('character', caretPos);
            range.select();
            return true;
        }

        else {
            // (el.selectionStart === 0 added for Firefox bug)
            if (el.selectionStart || el.selectionStart === 0) {
                el.focus();
                el.setSelectionRange(caretPos, caretPos);
                return true;
            }

            else  { // fail city, fortunately this never happens (as far as I've tested) :)
                el.focus();
                return false;
            }
        }
    }
}

$(document).ready(function(){
    $('.initCap', $('#leads-form')).change(function(e) {
        var el = document.getElementById(this.id);
        if (e.keyCode == 27) {
            // if esc character is pressed
            //$('#'+leads-form).val(original_field_values[leads-form]); // I stored the original value of the fields in an array.
            // if you only need to do the initial letter uppercase, you can apply it here directly like this:
            initialCap(el);
        }
        // end if (e.keyCode == 27)
        // if any other character is pressed that will modify the field (letters, numbers, symbols, space, backspace, del.)
        else if (e.keyCode == 8||e.keyCode == 32||e.keyCode > 45 && e.keyCode < 91||e.keyCode > 95 && e.keyCode < 112||e.keyCode > 185 && e.keyCode < 223||e.keyCode == 226) {
            // if you only need to do the initial letter uppercase, you can apply it here directly like this:
            initialCap(el);
        } // end else = if any other character is pressed
    }); // end $(document).keyup(function(e)
});