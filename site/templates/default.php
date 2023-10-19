<?php

layout();

foreach ($page->blocks()->toBlocks() as $block) {
    echo $block;
}
