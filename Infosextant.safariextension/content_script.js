  (function() {
      console.log('Hello');

      var RedirectTo = window.location.href;

      console.log("before if: " + RedirectTo);

      if (RedirectTo.match(/wikipedia.org/g)) {
        RedirectTo = RedirectTo.replace("en.","");
        RedirectTo = RedirectTo.replace("wikipedia.org", "infogalactic.com");
        RedirectTo = RedirectTo.replace("/wiki", "/info");

        console.log("After replace: " + RedirectTo);
        window.location.replace(RedirectTo)

      }
  })();
