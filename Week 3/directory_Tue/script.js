(function () {
    $(document).ready(function () {
        inputField.focus();
    });
    // console.log("sane!", $);
    var inputField = $('input');
    var resultsContainer = $('.results');

    // 1. input eventlistener
    inputField.on('input', function () {
        var userInput = inputField.val();

        $.ajax({
            method: 'GET',
            url: 'https://spicedworld.herokuapp.com/',
            data: {
                q: userInput,
            },
            success: function (response) {
                var currentInput = inputField.val();
                if (currentInput === userInput) {
                    var htmlForCountries = '';
                    for (var j = 0; j < response.length; j++) {
                        htmlForCountries +=
                            "<p class='country'>" + response[j] + '</p>';
                    }
                    // console.log('html we will be injecting:', htmlForCountries);
                    resultsContainer.html(htmlForCountries);

                    if (response.length == 0) {
                        // console.log('no results');
                        resultsContainer.html('No Results');
                    }
                    $('.country').mouseover(function (e) {
                        $('.country').removeClass('toggle');
                        $(this).addClass('toggle');
                    });

                    $('.country').on('mousedown', function () {
                        if ($('.country').hasClass('toggle')) {
                            $(inputField).val($(this).text());
                            inputField.focus();
                            resultsContainer.empty();
                            // console.log($(this));
                        }
                    });
                } else {
                    console.log('response no longer needed');
                }
            },
        });

        // 2. mouseover event

        // 3. mousedown event

        // 4. keydown
        // figure out the conditionals to recognise the keydown events your care about
        // (up, down, and enter)
        // in jQuery remember that accessing values in array like lists does
        // not work like so: listName[0]

        $(document).on('keydown', function (e) {
            var country = $('.country');
            if (e.keyCode === 40) {
                if (!country.hasClass('toggle')) {
                    country.eq(0).addClass('toggle');
                } else if (country.eq(-1).hasClass('toggle')) {
                    return;
                } else {
                    var countrY = $('toggle');
                    $('.country').removeClass('toggle');
                    countrY.next().addClass('toggle');
                }
            }
            if (e.keyCode === 38) {
                if (!country.hasClass('toggle')) {
                    country.eq(-1).addClass('toggle');
                } else if (country.eq(0).hasClass('toggle')) {
                    return;
                } else {
                    countrY = $('toggle');
                    $('.country').removeClass('toggle');
                    countrY.prev().addClass('toggle');
                }
            }

            if (e.keyCode === 13) {
                if ($('.country').hasClass('toggle')) {
                    $(inputField).val($(this).text());
                    inputField.focus();
                    resultsContainer.empty();
                    // console.log($(this));
                }
            }
        });

        // 5. focus event

        // 6. blur event
        inputField.blur(function () {
            resultsContainer.empty();
        });
    });
})([
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei Darussalam',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Congo',
    'Costa Rica',
    "Côte D'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    "Democratic People's Republic of Korea",
    'Democratic Republic of the Congo',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Kuwait',
    'Kyrgyzstan',
    'Lao People’s Democratic Republic',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'North Macedonia',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Republic of Korea',
    'Republic of Moldova',
    'Romania',
    'Russian Federation',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Sweden',
    'Switzerland',
    'Syrian Arab Republic',
    'Tajikistan',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United Republic of Tanzania',
    'United States of America',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Venezuela',
    'Viet Nam',
    'Yemen',
    'Zambia',
    'Zimbabwe',
]);
