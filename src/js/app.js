import $ from "jquery";

// AlpineJS stuff
import Alpine from "alpinejs";
import intersect from "@alpinejs/intersect";
import focus from "@alpinejs/focus";

Alpine.plugin(intersect);
Alpine.plugin(focus);

window.Alpine = Alpine;

Alpine.start();

window.$ = $;
