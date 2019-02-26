# simple-sonub-app

## Settings

* `domain` in `app.settings.ts` is the domain of the site.
* It gets front page gallery data based on the domain.
  * `[domain]-gallery-1` is the first opst gallery.
  * `[domain]-gallery-2` is the second post of the gallery.
  * It could be upto 10 posts.

## Posts

* Each gallery must be written in simple HTTP Query format

```` text
title[ko] = ...
content[ko] = ...
title[en] = ...
content[en] = ...
````
