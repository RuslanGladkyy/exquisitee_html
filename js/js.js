<script type="text/javascript">
        all_images = new Array ("img/101.png","img/100.png")
        var ImgNum = 0;
        var ImgLength = all_images.length - 1;
        var delay = 2500;
        var lock = false;
        var run;

        function chgImg(direction) {
         if (document.images) {
          ImgNum = ImgNum + direction;
          if (ImgNum > ImgLength) { ImgNum = 0; }
          if (ImgNum < 0) { ImgNum = ImgLength; }
          document.slide_show.src = all_images[ImgNum];
          if (document.layers) {
           document.layers.slide_show_text.document.write(all_text[ImgNum]);
           document.layers.slide_show_text.document.close();
          }
          else slide_show_text.innerHTML = all_text[ImgNum];
         }
        }

        function auto() {
         if (lock == true) {
          lock = false;
          window.clearInterval(run);
         }
         else if (lock == false) {
          lock = true;
          run = setInterval("chgImg(1)", delay);
         }
        }
</script>