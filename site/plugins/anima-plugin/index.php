<?php

Kirby::plugin('anima/plugin', [
    'blueprints' => [
        'blocks/plugin' => __DIR__ . '/blueprints/blocks/plugin.yml',
    ],
    'snippets' => [
        'blocks/plugin' => __DIR__ . '/snippets/blocks/plugin.php'
    ],
]);
