broccoli-splitter
=================

A broccoli plugin for splitting text into new files.


## Sample usage
Following configuration reads parts of `index.html` from inside `app` directory
and creates two PHP files out if it:

    var splitHtmlToPHP = brocSplitter(
        [
            'app'
        ],
        [
            {
                'input': 'index.html'
                'from': '<!-- split: Header begin -->',
                'to': '<!-- split: Header end -->',
                'output': 'header.php'
            },
            {
                'input': 'index.html'
                'from': '<!-- split: Body begin -->',
                'to': '<!-- split: Body end -->',
                'output': 'body.php'
            }
        ]
    );
    
when `index.html` looks like following:

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- split: Header begin -->

        {{content-for 'head'}}

        <link rel="stylesheet" href="assets/vendor.css">
        <link rel="stylesheet" href="assets/main.css">

        {{content-for 'head-footer'}}

        <!-- split: Header end -->
    </head>
    <body>
        <!-- split: Body begin -->

        {{content-for 'body'}}

        <script src="assets/vendor.js"></script>
        <script src="assets/main.js"></script>

        {{content-for 'body-footer'}}

        <!-- split: Body end -->
    </body>
    </html>
