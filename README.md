# simple-sonub-app

## Settings

* `siteIdx` is the site idx. It's important to set.
* It gets front page gallery data based on the `siteIdx`.
  * `gallery-1-[domain]` is the first opst gallery.
  * `gallery-2-[domain]` is the second post of the gallery.
  * `[domain]` is not very important. It is added to make the access code unique.

## Posts

* Each gallery must be written in simple HTTP Query format

@see [Simple Http Query Format](https://docs.google.com/document/d/1nOEJVDilLbF0sNCkkRGcDwdT3rDLZp3h59oQ77BIdp4/edit#heading=h.3pfuj3qawphf)

## Displaying Gallery

* Site admin need to create posts with access code like `gallery-[n]-[domain]`.
  * access code must be unique.
* Follow [Simple Http Query Format](https://docs.google.com/document/d/1nOEJVDilLbF0sNCkkRGcDwdT3rDLZp3h59oQ77BIdp4/edit#heading=h.3pfuj3qawphf) to write text in English, CJK.
* It can be be up to 10 posts.
* Site admin may hide the category from menu.
