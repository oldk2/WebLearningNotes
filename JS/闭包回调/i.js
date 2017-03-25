<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="1.js"></script>
    <style>

    </style>
</head>
<body>
<p id="help">Helpful notes will appear here</p>
<p>E-mail: <input type="text" id="email" name="email"></p>
<p>Name: <input type="text" id="name" name="name"></p>
<p>Age: <input type="text" id="age" name="age"></p>
<script>
    function showHelp(help) {
        document.getElementById('help').innerHTML = help;
    }

    function makeHelpCallback(help) {
        return function() {
            showHelp(help);
        };
    }
function sho(){
        var helpText = [
            {'id': 'email', 'help': 'Your e-mail address'},
            {'id': 'name', 'help': 'Your full name'},
            {'id': 'age', 'help': 'Your age (you must be over 16)'}
        ];
        var a = document.getElementsByTagName('input');
        for(var i=0;i<helpText.length;i++){
            var ii = helpText[i];
            document.getElementById(ii.id).onclick=makeHelpCallback(ii.help);//每一个回调创建一个新的环境。
        }


}
        sho();


</script>
</body>
</html>