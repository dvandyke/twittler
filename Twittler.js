$(document).ready(function () {
    $('time.timeago').timeago();
    var $list = $('#tweets');

    var boop = function () {
        var index = streams.home.length - 1;
        var tweety = streams.home[index];
        var $entry = $('<li></li>');
        var myVar = tweety.created_at;
        var myVarCorrected = myVar.toISOString();


        var $tweetHeader = $('<div class="tweetHeader"></div>');
        var $boldUser = $('<span class="tweeter"></span>');
        $boldUser.html('@<span class="open">' + tweety.user + '</span>');
        $('.open').attr('class', tweety.user);


        var $tweetDate = $('<span class="timestamp"></span>');
        $tweetDate.html('<time class="timeago" datetime="what">' + myVarCorrected + '</time>');
        $('time.timeago').attr('datetime', myVarCorrected);
        $('time.timeago').timeago();



        var $messageBody = $('<p class=tweetBody></p>');
        $messageBody.html(tweety.message);


        $tweetHeader.prepend($boldUser);
        $tweetHeader.append($tweetDate);
        $entry.prepend($tweetHeader);
        $entry.append($messageBody);
        $list.prepend($entry);


        var tweetDate = '<abbr class="timeago" title="nada">' + tweety.created_at + '</abbr>';
    };

    var feedPosting = setInterval(boop, 1500);

    $('#tweets').delegate('.tweeter', 'click', function () {
        $('#tweets').empty();
        $('#navvy').empty();
        clearInterval(feedPosting);
        var selectedUser = $(this).find('span').text();
        var selectedUserLength = streams['users'][selectedUser]['length'];
        $('#navigation').find('ul').prepend('<li id="topper"><button type="submit">Click Here to Return to Main Feed</button></li>');

        for (var i = 0; i<selectedUserLength; i++) {
            $entry = $('<li></li>')
            var tweety = streams['users'][selectedUser][i];
            var myVar = tweety.created_at;
            var myVarCorrected = myVar.toISOString();


            var $tweetHeader = $('<div class="tweetHeader"></div>');
            var $boldUser = $('<span class="tweeter"></span>');
            $boldUser.html('@<span class="open">' + tweety.user + '</span>');
            $('.open').attr('class', tweety.user);


            var $tweetDate = $('<span class="timestamp"></span>');
            $tweetDate.html('<time class="timeago" datetime="what">' + myVarCorrected + '</time>');
            $('time.timeago').attr('datetime', myVarCorrected);
            $('time.timeago').timeago();



            var $messageBody = $('<p class=tweetBody></p>');
            $messageBody.html(tweety.message);


            $tweetHeader.prepend($boldUser);
            $tweetHeader.append($tweetDate);
            $entry.prepend($tweetHeader);
            $entry.append($messageBody);
            $list.prepend($entry);

        }

        var foob = function () {
            var $entry = $('<li></li>');
            var index = streams['users'][selectedUser]['length'] - 1;
            var tweety = streams['users'][selectedUser][index];
            var myVar = tweety.created_at;
            var myVarCorrected = myVar.toISOString();


            var $tweetHeader = $('<div class="tweetHeader"></div>');
            var $boldUser = $('<span class="tweeter"></span>');
            $boldUser.html('@<span class="open">' + tweety.user + '</span>');
            $('.open').attr('class', tweety.user);


            var $tweetDate = $('<span class="timestamp"></span>');
            $tweetDate.html('<time class="timeago" datetime="what">' + myVarCorrected + '</time>');
            $('time.timeago').attr('datetime', myVarCorrected);
            $('time.timeago').timeago();



            var $messageBody = $('<p class=tweetBody></p>');
            $messageBody.html(tweety.message);


            $tweetHeader.prepend($boldUser);
            $tweetHeader.append($tweetDate);
            $entry.prepend($tweetHeader);
            $entry.append($messageBody);
            $list.prepend($entry);

        };

        feedPosting = setInterval(foob, 3500);

    });

    $('#navvy').delegate('li', 'click', function () {
        $('#tweets').empty();
        $('#navvy').empty();
        clearInterval(feedPosting);
        feedPosting = setInterval(boop, 1500);
    });






});