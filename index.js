
alert("Welcome USER.\nYour login is: user\nYour password is: 1234");

var name = 'USER'
var user = 'user'
var pass = '1234'
var wall = 0;
var savings = 0;

$('.log-button').click(login);

$('.dp-button').click(deposit);
$('.wi-button').click(withdraw);
$('.sa-button').click(savi);

$('.operations').hide();
$('.no-founds').hide();

function login() {

    var taken_user = $('.name').val();
    var taken_pass = $('.password').val();

    if ((taken_user === user) && (taken_pass === pass)) {
        $('.greeting').text("Hello " + name + '.');
        $('.balance_wallet').text('Your Wallet has: €' + wall + '.');
        $('.balance_savings').text('Your Savings has: €' + savings + '.');
        $('.operations').show();
        return
    }
    else {
        if (taken_user === user) {
            $('.greeting').text("Wrong Password!");
            $('.operations').hide();
            $('.balance_wallet').text('');
            $('.balance_savings').text('');
            return
        }
        else {
            $('.greeting').text("You are not a valid User!");
            $('.operations').hide();
            $('.balance_wallet').text('');
            $('.balance_savings').text('');
        }
    }
}

function deposit() {
    var dep = parseInt($('.deposit').val());
    wall = wall + dep;
    $('.balance_wallet').text('Your Wallet has: €' + wall + '.');
    $('.balance_savings').text('Your Savings has: €' + savings + '.');
    $('.no-founds').hide();
}

function withdraw() {
    var withd = parseInt($('.withdraw').val());
    wall = wall - withd;
    $('.balance_wallet').text('Your Wallet has: €' + wall + '.');
    $('.balance_savings').text('Your Savings has: €' + savings + '.');
    $('.no-founds').hide();
}

function savi() {
    var save = parseInt($('.savings').val());
    if (save <= wall && wall >= 0) {
        savings = savings + save;
        wall = wall - save;
        $('.balance_wallet').text('Your Wallet has: €' + wall + '.');
        $('.balance_savings').text('Your Savings has: €' + savings + '.');
    }
    else {
        $('.no-founds').show();
    }
}



