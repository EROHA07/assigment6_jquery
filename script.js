$(document).ready(function () {
  console.log("jQuery is ready!");

  
  $("#greeting").text("Hi! I'm Yerassyl"); // ID selector
  $(".headline").css("color", "#316c9e"); // class selector
  $("h2").css("border-bottom", "1px solid #ddd"); // tag selector

  $("#darkBtn").click(function () {
    $("body").addClass("dark");
  });
  $("#lightBtn").click(function () {
    $("body").removeClass("dark");
  });

  
  $("#hideBtn").click(function () {
    $("#status, #facts").hide();
  });
  $("#showBtn").click(function () {
    $("#status, #facts").show();
  });
  $("#toggleBtn").click(function () {
    $("#status, #facts").toggle();
  });

  
  $("#fadeOutBtn").click(function () {
    $("#gallery img").fadeOut();
  });
  $("#fadeInBtn").click(function () {
    $("#gallery img").fadeIn();
  });
  $("#fadeToggleBtn").click(function () {
    $("#gallery img").fadeToggle();
  });

 
  $("#musicTitle").click(function () {
    $("#musicAnswer").slideToggle();
  });
  $("#movieTitle").click(function () {
    $("#movieAnswer").slideUp();
  });
  $("#subjectTitle").click(function () {
    $("#subjectAnswer").slideDown();
  });

  
  $("#addBtn").click(function () {
    var skill = $("#newSkill").val().trim();
    if (skill === "") {
      $("#skillMessage").text("Please enter a skill.");
      return;
    }
    $("#skillList").append($("<li>").text(skill));
    $("#newSkill").val("");
    $("#skillMessage").text("");
  });
  $("#prependBtn").click(function () {
    var skill = $("#newSkill").val().trim();
    if (skill === "") {
      $("#skillMessage").text("Please enter a skill.");
      return;
    }
    $("#skillList").prepend($("<li>").text(skill));
    $("#newSkill").val("");
    $("#skillMessage").text("");
  });
  $("#removeBtn").click(function () {
    $("#skillList li:last").remove();
  });

  
  var github = true;
  $("#changeLinkBtn").click(function () {
    if (github) {
      $("#socialLink").attr("href", "https://www.w3schools.com/jquery/");
      $("#socialLink").text("Open jQuery Tutorial");
      $("#linkInfo").text("Current link: jQuery Tutorial");
    } else {
      $("#socialLink").attr("href", "https://github.com/EROHA07");
      $("#socialLink").text("Open GitHub");
      $("#linkInfo").text("Current link: GitHub");
    }
    github = !github;
  });

  
  $("#nameInput").on("input", function () {
    $("#liveName").text($(this).val() || "-");
  });
  $("#emailInput").on("input", function () {
    $("#liveEmail").text($(this).val() || "-");
  });

  
  var opened = false;
  $("#animateBtn").click(function () {
    $(".fill").each(function () {
      var width = opened ? "0%" : $(this).attr("data-width");
      $(this).stop().animate({ width: width }, 700);
    });
    opened = !opened;
  });
});
