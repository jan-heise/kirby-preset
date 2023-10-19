<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $site->title() ?></title>
    <?= css(url: 'assets/css/app.css') ?>
</head>
<body>
    <?= $slot ?>

    <?= js(url: 'assets/js/app.js') ?>
</body>
</html>