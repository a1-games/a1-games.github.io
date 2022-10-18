$('button.optionsbutton').click(
    function (event) {
        // hiding any other open menus
        $('ul.controls li.options').hide();

        var OptionMenu = $(this).parent('li').siblings('.options');
        if (OptionMenu.is(':visible')) {
            $('ul.controls li.options').hide();
        } else {
            bitOptionMenu.css('display', 'block');
            //because show() sets display to list-item insteads of block
        }

        event.stopPropagation();
    }
);

// So that clicks anywhere outside will close the menu
$('html').click(
    function (event) {
        if (event.target != 'button.options' && $('button.options').is(':visible')) {
            $('ul.controls li.options').hide();
        }
    }
);