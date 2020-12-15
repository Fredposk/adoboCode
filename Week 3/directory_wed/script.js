(function (countries) {
    // console.log("sane!", $);
    var searchField = $('input');
    var resultsContainer = $('.results');

    // 1. input eventlistener
    searchField.on('input', function () {
        // console.log("input is happening right NOW!");
        var inputVal = searchField.val().toLowerCase();
        // console.log("input value typed:", inputVal);
        var matchResults = [];
        // loop to find results that match our input value
        for (var i = 0; i < countries.length; i++) {
            // console.log(countries[i].indexOf(inputVal));
            if (countries[i].toLowerCase().indexOf(inputVal) === 0) {
                // console.log("found a match:", countries[i]);
                matchResults.push(countries[i]);
                // limit your results to a maximum of four matching countries
                if (matchResults.length === 4) {
                    break;
                }
            }
        }
        // console.log("matchResults:", matchResults);
        var htmlForCountries = '';
        for (var j = 0; j < matchResults.length; j++) {
            htmlForCountries +=
                "<p class='country'>" + matchResults[j] + '</p>';
        }
        // console.log('html we will be injecting:', htmlForCountries);
        resultsContainer.html(htmlForCountries);

        // when the input field is empty, we can still see countries, need to fix that
        if (inputVal === '') {
            // console.log('im empty');
            resultsContainer.empty();
        }

        // when the user types gibberish or simply ends up typing sth in the input
        // field that does not mathc our countires in the list we should
        // display "no results"
        // console.log(matchResults);
        if (matchResults.length == 0) {
            // console.log('no results');
            resultsContainer.html('No Results');
        }

        // 2. mouseover event
        // remember we don't have the p tags on screen initially, they get added
        // later so we need to do some event delegation

        $('.country').mouseover(function (e) {
            $('.country').removeClass('toggle');
            $(this).addClass('toggle');
        });

        // 3. mousedown event

        $('.country').on('mousedown', function () {
            if ($('.country').hasClass('toggle')) {
                $(searchField).text($(this));
                searchField.focus();
                resultsContainer.empty();
                console.log($(this));
            }
        });

        // 4. keydown
        // figure out the conditionals to recognise the keydown events your care about
        // (up, down, and enter)
        // in jQuery remember that accessing values in array like lists does
        // not work like so: listName[0]

        // 5. focus event
        $(document).ready(function () {
            searchField.focus();
        });
        // 6. blur event
        searchField.blur(function () {
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
