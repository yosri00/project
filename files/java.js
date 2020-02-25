$(document).ready(function () {
    $(function () {
        $('.wpcf7-select').change(function () {
            var selectedsubject = $('.wpcf7-select').val();

            switch (selectedsubject) {
                case ('cod'):
                    $('.zizou').remove();
                    $('.gim').remove();
                    $('.test').append("<p class='zizou'> <img class='gim' src='https://media1.tenor.com/images/2f583dc924b40071f0a45379d3167026/tenor.gif?itemid=12345293'width='200' height='200' <br> <br>Battlefield V is a first-person shooter video game developed by EA DICE and published by Electronic Arts. Battlefield V is the sixteenth installment in the Battlefield series. It was released worldwide for Microsoft Windows, PlayStation 4, and Xbox One on November 20, 2018.<a class='q ruhjFe NJLBac fl' href='https://en.wikipedia.org/wiki/Battlefield_V' data-ved='2ahUKEwiq3YabvernAhUpwcQBHdpOBOIQmhMwKnoECB0QAg' ping='/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://en.wikipedia.org/wiki/Battlefield_V&amp;ved=2ahUKEwiq3YabvernAhUpwcQBHdpOBOIQmhMwKnoECB0QAg'>Wikipedia</a></p>");
                    break;
                case ('bfv'):
                    $('.zizou').remove();
                    $('.gim').remove();
                    $('.test').append("<img class='gim' src='https://media1.tenor.com/images/2f583dc924b40071f0a45379d3167026/tenor.gif?itemid=12345293'width='200' height='200'<br><p class='zizou'>Battlefield V is a first-person shooter video game developed by EA DICE and published by Electronic Arts. Battlefield V is the sixteenth installment in the Battlefield series. It was released worldwide for Microsoft Windows, PlayStation 4, and Xbox One on November 20, 2018.<a class='q ruhjFe NJLBac fl' href='https://en.wikipedia.org/wiki/Battlefield_V' data-ved='2ahUKEwiq3YabvernAhUpwcQBHdpOBOIQmhMwKnoECB0QAg' ping='/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://en.wikipedia.org/wiki/Battlefield_V&amp;ved=2ahUKEwiq3YabvernAhUpwcQBHdpOBOIQmhMwKnoECB0QAg'>Wikipedia</a></p>");
                    break;
                case ('mini'):
                    $('.zizou').remove();
                    $('.gim').remove();
                    $('.test').append("<img class='gim'src='https://i.giphy.com/j5ThXdq3wTKdW.gif 'width='250' height='250'<br><p class='zizou'>Minicraft is a 2D top-down action game designed and programmed by Markus Persson, the creator of Minecraft, for a Ludum Dare, a 48-hour game programming competition. The game was released on December 19, 2011</p>");
                    break;
                case ('resident'):
                    $('.zizou').remove();
                    $('.gim').remove();
                    $('.test').append("<img class='gim' src='https://media.tenor.com/images/7c06dfe065b304345095f0310d215650/tenor.gif'width='250' height='250'<br><p class='zizou'>Resident Evil 7: Biohazard is a survival horror game developed and published by Capcom, released in January 2017 for Windows, PlayStation 4, and Xbox One, and in May 2018 for the Nintendo Switch in Japan</p>");
                    break;
                case ('witcher'):
                    $('.zizou').remove();
                    $('.gim').remove();
                    $('.test').append("<img class='gim' src='https://media2.giphy.com/media/L2Mbpv76wnyuRMTpDM/200.webp?cid=790b76112e2192b3526f8a55c4753c4588f75bb50e791181&rid=200.webp'width='250' height='250'<br><p class='zizou'>The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.</p>");
                    break;
                case ('gtav'):
                    $('.zizou').remove();
                    $('.gim').remove();
                    $('.test').append("<img class='gim' src='https://i.giphy.com/O7573IKM8PsK4.gif 'width='250' height='250'<br><p class='gim'>Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the first main entry in the Grand Theft Auto series since 2008's Grand Theft Auto IV.</p>");
                    break;
                case ('nfs'):
                    $('.zizou').remove();
                    $('.gim').remove();
                    $('.test').append("<img class='gim' src='https://media1.giphy.com/media/l4FGrwqeEZGHNUVxK/200.webp?cid=790b7611cd254d8bb73ece96870b4d7ecd21fac7683e1c6d&rid=200.webp'width='250' height='250'<br><p class='zizou'>Need for Speed Payback is a racing video game developed by Ghost Games and published by Electronic Arts for Microsoft Windows, PlayStation 4 and Xbox One. It is the twenty-third installment in the Need for Speed series.</p>");
                    break;
                case ('bfv'):
                    $('.test').append("<img src='https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'width='100' height='100'<br><p>max this s</p>");
                    break;
                case ('bfv'):
            }
        })
    });
    $(function () {
        $('.wpcf1-select').change(function () {
            var selectedsubject1 = $('.wpcf1-select').val();

            switch (selectedsubject1) {
                case ('macos'):
                    $('.test1').hide()
                    $('.test1').append("<p class='test1'>Your operating system is does not support Gaming!!</p>");
                    break;
            }
        })
    })

    $('.myButton').click(function () {
        $('.test1').show()
    })
    $(function () {
        $('.wpcf1-select').change(function () {
            var selectedsubject1 = $('.wpcf1-select').val();

            switch (selectedsubject1) {
                case ('linux'):
                    $('.test1').hide()
                    $('.test1').append("<p class='test1'>Your operating system is does not support Gaming!!</p>");
                    break;
            }
        })
    })
    $('.myButton').click(function () {
        $('.test1').show()
    })
    $(function () {
        $('.wpcf1-select').change(function () {
            var selectedsubject1 = $('.wpcf1-select').val();

            switch (selectedsubject1) {
                case ('windows'):
                    $('.test0').hide()
                    $('.test0').append("<p class='test0'>Your operation system is pefect for Gaming!</p>");
                    break;
            }
        })
    })
    $('.myButton').click(function () {
        $('.test0').show()
        if ($('.wpcf2-select').val() === 'i7' && $('.wpcf7-select').val() === 'cod') {
            $('.bahbahprored').remove();
            $('.bahbahprogreen').remove();
            $('.test2').append("<p class='bahbahprogreen'>Your Processor is pefect for This game!</p>");
        }
        if ($('.wpcf2-select').val() === 'i5' && $('.wpcf7-select').val() === 'cod') {
            $('.bahbahprored').remove();
            $('.bahbahprogreen').remove();
            $('.test11').append("<p class='bahbahprogreen'>Your Processor is good for This game!</p>");
        }
        if ($('.wpcf2-select').val() === 'i3' && $('.wpcf7-select').val() === 'cod') {
            $('.bahbahprored').remove();
            $('.bahbahprogreen').remove();
            $('.test11').append("<p class='bahbahprogreen'>Your Processor is not bad for this game!</p>");
        }
        if ($('.wpcf2-select').val() === 'Pentium' && $('.wpcf7-select').val() === 'cod') {
            $('.bahbahprored').remove();
            $('.bahbahprogreen').remove();
            $('.test2').append("<p class='bahbahprored'>Your Processor is bad for This game!</p>");
        }
        if ($('.wpcf3-select').val() === '4gb' && $('.wpcf7-select').val() === 'cod') {
            $('.bahbahramgreen').remove();
            $('.bahbahramred').remove();
            $('.test3').append("<p class='bahbahramred'>You have low GB RAM!</p>");
        }
        if ($('.wpcf3-select').val() === '8gb' && $('.wpcf7-select').val() === 'cod') {
            $('.bahbahramgreen').remove();
            $('.bahbahramred').remove();
            $('.test3').append("<p class='bahbahramgreen'>You have good  RAM for this game!</p>");
        }
        if ($('.wpcf3-select').val() === '12gb' && $('.wpcf7-select').val() === 'cod') {
            $('.bahbahramgreen').remove();
            $('.bahbahramred').remove();
            $('.test3').append("<p class='bahbahramgreen'>You have perfect  RAM for this game!</p>");
        }
        if ($('.wpcf4-select').val() === 'amd' && $('.wpcf7-select').val() === 'cod') {
            $('.bahbah2').remove();
            $('.bahbah3').remove();
            $('.test14').append("<p class='bahbah2'>your graphics card  can run this game at Ultra 4k!</p>");
        }
        if ($('.wpcf4-select').val() === 'rtx' && $('.wpcf7-select').val() === 'cod') {
            $('.bahbah2').remove();
            $('.bahbah3').remove();
            $('.test14').append("<p class='bahbah2'>your graphics card  can run this game at Ultra 1080p!</p>");
        }
        if ($('.wpcf4-select').val() === 'gt' && $('.wpcf7-select').val() === 'cod') {
            $('.bahbah3').remove();
            $('.bahbah2').remove();
            $('.test15').append("<p class='bahbah3'>your graphics card  can't run this game!!</p>");
        }
        if ($('.wpcf4-select').val() === '102' && $('.wpcf7-select').val() === 'cod') {
            $('.bahbah3').remove();
            $('.bahbah2').remove();
            $('.test15').append("<p class='bahbah3'>your graphics card  can't run this game!!</p>");
        }


    })
})
