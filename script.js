
  $(function() {
      setInterval( function() {
        var color = 75;
        var seconds = new Date().getSeconds();
        var hours = new Date().getHours();
        var mins = new Date().getMinutes();
        var sdegree = seconds * 6;
        var mdegree = mins * 6;
        var hdegree = hours * 30
        var srotate = "rotate(" + sdegree + "deg)";
        var mrotate = "rotate(" + mdegree + "deg)";
        var hrotate = "rotate(" + hdegree + "deg)";
        
        if(color < 255){
          color = seconds * 2 + color;
        } else {
          color = 0;
        }
        
        $("#sec").css({ "transform": srotate });
        $("#min").css({ "transform": mrotate });
        $("#hour").css({ "transform": hrotate });
        $("body").css({ "background-color": "rgb(509,"+color+",50, 1)" });

      }, 1000 );
  });
  