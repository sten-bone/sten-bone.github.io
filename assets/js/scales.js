$(document).ready(function () {

    function removeHighlights() {
        $(".white-key").removeClass("highlighted");
        $(".black-key").removeClass("highlighted");
    }

    // Major Scales
    function setUpMajorScales() {
        $("#c-maj").click(function() {
            removeHighlights();
            $("#c-2").addClass("highlighted");
            $("#d-2").addClass("highlighted");
            $("#e-2").addClass("highlighted");
            $("#f-2").addClass("highlighted");
            $("#g-2").addClass("highlighted");
            $("#a-2").addClass("highlighted");
            $("#b-2").addClass("highlighted");
            $("#c-3").addClass("highlighted");
        });

        $("#db-maj").click(function() {
            removeHighlights();
            $("#cs-2").addClass("highlighted");
            $("#ds-2").addClass("highlighted");
            $("#f-2").addClass("highlighted");
            $("#fs-2").addClass("highlighted");
            $("#gs-2").addClass("highlighted");
            $("#as-2").addClass("highlighted");
            $("#c-3").addClass("highlighted");
            $("#cs-3").addClass("highlighted");
        });

        $("#d-maj").click(function() {
            removeHighlights();
            $("#d-2").addClass("highlighted");
            $("#e-2").addClass("highlighted");
            $("#fs-2").addClass("highlighted");
            $("#g-2").addClass("highlighted");
            $("#a-2").addClass("highlighted");
            $("#b-2").addClass("highlighted");
            $("#cs-3").addClass("highlighted");
            $("#d-3").addClass("highlighted");
        });

        $("#eb-maj").click(function() {
            removeHighlights();
            $("#ds-2").addClass("highlighted");
            $("#f-2").addClass("highlighted");
            $("#g-2").addClass("highlighted");
            $("#gs-2").addClass("highlighted");
            $("#as-2").addClass("highlighted");
            $("#c-3").addClass("highlighted");
            $("#d-3").addClass("highlighted");
            $("#ds-3").addClass("highlighted");
        });

        $("#e-maj").click(function() {
            removeHighlights();
            $("#e-2").addClass("highlighted");
            $("#fs-2").addClass("highlighted");
            $("#gs-2").addClass("highlighted");
            $("#a-2").addClass("highlighted");
            $("#b-2").addClass("highlighted");
            $("#cs-3").addClass("highlighted");
            $("#ds-3").addClass("highlighted");
            $("#e-3").addClass("highlighted");
        });

        $("#f-maj").click(function() {
            removeHighlights();
            $("#f-2").addClass("highlighted");
            $("#g-2").addClass("highlighted");
            $("#a-2").addClass("highlighted");
            $("#as-2").addClass("highlighted");
            $("#c-3").addClass("highlighted");
            $("#d-3").addClass("highlighted");
            $("#e-3").addClass("highlighted");
            $("#f-3").addClass("highlighted");
        });

        $("#gb-maj").click(function() {
            removeHighlights();
            $("#fs-2").addClass("highlighted");
            $("#gs-2").addClass("highlighted");
            $("#as-2").addClass("highlighted");
            $("#b-2").addClass("highlighted");
            $("#cs-3").addClass("highlighted");
            $("#ds-3").addClass("highlighted");
            $("#f-3").addClass("highlighted");
            $("#fs-3").addClass("highlighted");
        });

        $("#g-maj").click(function() {
            removeHighlights();
            $("#g-1").addClass("highlighted");
            $("#a-1").addClass("highlighted");
            $("#b-1").addClass("highlighted");
            $("#c-2").addClass("highlighted");
            $("#d-2").addClass("highlighted");
            $("#e-2").addClass("highlighted");
            $("#fs-2").addClass("highlighted");
            $("#g-2").addClass("highlighted");
        });

        $("#ab-maj").click(function() {
            removeHighlights();
            $("#gs-1").addClass("highlighted");
            $("#as-1").addClass("highlighted");
            $("#c-2").addClass("highlighted");
            $("#cs-2").addClass("highlighted");
            $("#ds-2").addClass("highlighted");
            $("#f-2").addClass("highlighted");
            $("#g-2").addClass("highlighted");
            $("#gs-2").addClass("highlighted");
        });

        $("#a-maj").click(function() {
            removeHighlights();
            $("#a-1").addClass("highlighted");
            $("#b-1").addClass("highlighted");
            $("#cs-2").addClass("highlighted");
            $("#d-2").addClass("highlighted");
            $("#e-2").addClass("highlighted");
            $("#fs-2").addClass("highlighted");
            $("#gs-2").addClass("highlighted");
            $("#a-2").addClass("highlighted");
        });

        $("#bb-maj").click(function() {
            removeHighlights();
            $("#as-1").addClass("highlighted");
            $("#c-2").addClass("highlighted");
            $("#d-2").addClass("highlighted");
            $("#ds-2").addClass("highlighted");
            $("#f-2").addClass("highlighted");
            $("#g-2").addClass("highlighted");
            $("#a-2").addClass("highlighted");
            $("#as-2").addClass("highlighted");
        });

        $("#b-maj").click(function() {
            removeHighlights();
            $("#b-1").addClass("highlighted");
            $("#cs-2").addClass("highlighted");
            $("#ds-2").addClass("highlighted");
            $("#e-2").addClass("highlighted");
            $("#fs-2").addClass("highlighted");
            $("#gs-2").addClass("highlighted");
            $("#as-2").addClass("highlighted");
            $("#b-2").addClass("highlighted");
        });
    }

    // Natural Minor Scales
    function setUpNaturalMinorScales() {
        $("#c-min").click(function() {
            removeHighlights();
            $("#c-2").addClass("highlighted");
            $("#d-2").addClass("highlighted");
            $("#ds-2").addClass("highlighted");
            $("#f-2").addClass("highlighted");
            $("#g-2").addClass("highlighted");
            $("#gs-2").addClass("highlighted");
            $("#as-2").addClass("highlighted");
            $("#c-3").addClass("highlighted");
        });

        $("#db-min").click(function() {
            removeHighlights();
            $("#cs-2").addClass("highlighted");
            $("#ds-2").addClass("highlighted");
            $("#e-2").addClass("highlighted");
            $("#fs-2").addClass("highlighted");
            $("#gs-2").addClass("highlighted");
            $("#a-2").addClass("highlighted");
            $("#b-2").addClass("highlighted");
            $("#cs-3").addClass("highlighted");
        });

        $("#d-min").click(function() {
            removeHighlights();
            $("#d-2").addClass("highlighted");
            $("#e-2").addClass("highlighted");
            $("#f-2").addClass("highlighted");
            $("#g-2").addClass("highlighted");
            $("#a-2").addClass("highlighted");
            $("#as-2").addClass("highlighted");
            $("#c-3").addClass("highlighted");
            $("#d-3").addClass("highlighted");
        });

        $("#eb-min").click(function() {
            removeHighlights();
            $("#ds-2").addClass("highlighted");
            $("#f-2").addClass("highlighted");
            $("#fs-2").addClass("highlighted");
            $("#gs-2").addClass("highlighted");
            $("#as-2").addClass("highlighted");
            $("#b-2").addClass("highlighted");
            $("#cs-3").addClass("highlighted");
            $("#ds-3").addClass("highlighted");
        });

        $("#e-min").click(function() {
            removeHighlights();
            $("#e-2").addClass("highlighted");
            $("#fs-2").addClass("highlighted");
            $("#g-2").addClass("highlighted");
            $("#a-2").addClass("highlighted");
            $("#b-2").addClass("highlighted");
            $("#c-3").addClass("highlighted");
            $("#d-3").addClass("highlighted");
            $("#e-3").addClass("highlighted");
        });

        $("#f-min").click(function() {
            removeHighlights();
            $("#f-2").addClass("highlighted");
            $("#g-2").addClass("highlighted");
            $("#gs-2").addClass("highlighted");
            $("#as-2").addClass("highlighted");
            $("#c-3").addClass("highlighted");
            $("#cs-3").addClass("highlighted");
            $("#ds-3").addClass("highlighted");
            $("#f-3").addClass("highlighted");
        });

        $("#gb-min").click(function() {
            removeHighlights();
            $("#fs-2").addClass("highlighted");
            $("#gs-2").addClass("highlighted");
            $("#a-2").addClass("highlighted");
            $("#b-2").addClass("highlighted");
            $("#cs-3").addClass("highlighted");
            $("#d-3").addClass("highlighted");
            $("#e-3").addClass("highlighted");
            $("#fs-3").addClass("highlighted");
        });

        $("#g-min").click(function() {
            removeHighlights();
            $("#g-1").addClass("highlighted");
            $("#a-1").addClass("highlighted");
            $("#as-1").addClass("highlighted");
            $("#c-2").addClass("highlighted");
            $("#d-2").addClass("highlighted");
            $("#ds-2").addClass("highlighted");
            $("#f-2").addClass("highlighted");
            $("#g-2").addClass("highlighted");
        });

        $("#ab-min").click(function() {
            removeHighlights();
            $("#gs-1").addClass("highlighted");
            $("#as-1").addClass("highlighted");
            $("#b-1").addClass("highlighted");
            $("#cs-2").addClass("highlighted");
            $("#ds-2").addClass("highlighted");
            $("#e-2").addClass("highlighted");
            $("#fs-2").addClass("highlighted");
            $("#gs-2").addClass("highlighted");
        });

        $("#a-min").click(function() {
            removeHighlights();
            $("#a-1").addClass("highlighted");
            $("#b-1").addClass("highlighted");
            $("#c-2").addClass("highlighted");
            $("#d-2").addClass("highlighted");
            $("#e-2").addClass("highlighted");
            $("#f-2").addClass("highlighted");
            $("#g-2").addClass("highlighted");
            $("#a-2").addClass("highlighted");
        });

        $("#bb-min").click(function() {
            removeHighlights();
            $("#as-1").addClass("highlighted");
            $("#c-2").addClass("highlighted");
            $("#cs-2").addClass("highlighted");
            $("#ds-2").addClass("highlighted");
            $("#f-2").addClass("highlighted");
            $("#fs-2").addClass("highlighted");
            $("#gs-2").addClass("highlighted");
            $("#as-2").addClass("highlighted");
        });

        $("#b-min").click(function() {
            removeHighlights();
            $("#b-1").addClass("highlighted");
            $("#cs-2").addClass("highlighted");
            $("#d-2").addClass("highlighted");
            $("#e-2").addClass("highlighted");
            $("#fs-2").addClass("highlighted");
            $("#g-2").addClass("highlighted");
            $("#a-2").addClass("highlighted");
            $("#b-2").addClass("highlighted");
        });
    }

    // Harmonic Minor Scales
    function setUpHarmonicMinorScales() {
        $("#c-h-min").click(function() {
            removeHighlights();
            $("#c-2").addClass("highlighted");
            $("#d-2").addClass("highlighted");
            $("#ds-2").addClass("highlighted");
            $("#f-2").addClass("highlighted");
            $("#g-2").addClass("highlighted");
            $("#gs-2").addClass("highlighted");
            $("#b-2").addClass("highlighted");
            $("#c-3").addClass("highlighted");
        });

        $("#db-h-min").click(function() {
            removeHighlights();
            $("#cs-2").addClass("highlighted");
            $("#ds-2").addClass("highlighted");
            $("#e-2").addClass("highlighted");
            $("#fs-2").addClass("highlighted");
            $("#gs-2").addClass("highlighted");
            $("#a-2").addClass("highlighted");
            $("#c-3").addClass("highlighted");
            $("#cs-3").addClass("highlighted");
        });

        $("#d-h-min").click(function() {
            removeHighlights();
            $("#d-2").addClass("highlighted");
            $("#e-2").addClass("highlighted");
            $("#f-2").addClass("highlighted");
            $("#g-2").addClass("highlighted");
            $("#a-2").addClass("highlighted");
            $("#as-2").addClass("highlighted");
            $("#cs-3").addClass("highlighted");
            $("#d-3").addClass("highlighted");
        });

        $("#eb-h-min").click(function() {
            removeHighlights();
            $("#ds-2").addClass("highlighted");
            $("#f-2").addClass("highlighted");
            $("#fs-2").addClass("highlighted");
            $("#gs-2").addClass("highlighted");
            $("#as-2").addClass("highlighted");
            $("#b-2").addClass("highlighted");
            $("#d-3").addClass("highlighted");
            $("#ds-3").addClass("highlighted");
        });

        $("#e-h-min").click(function() {
            removeHighlights();
            $("#e-2").addClass("highlighted");
            $("#fs-2").addClass("highlighted");
            $("#g-2").addClass("highlighted");
            $("#a-2").addClass("highlighted");
            $("#b-2").addClass("highlighted");
            $("#c-3").addClass("highlighted");
            $("#ds-3").addClass("highlighted");
            $("#e-3").addClass("highlighted");
        });

        $("#f-h-min").click(function() {
            removeHighlights();
            $("#f-2").addClass("highlighted");
            $("#g-2").addClass("highlighted");
            $("#gs-2").addClass("highlighted");
            $("#as-2").addClass("highlighted");
            $("#c-3").addClass("highlighted");
            $("#cs-3").addClass("highlighted");
            $("#e-3").addClass("highlighted");
            $("#f-3").addClass("highlighted");
        });

        $("#gb-h-min").click(function() {
            removeHighlights();
            $("#fs-2").addClass("highlighted");
            $("#gs-2").addClass("highlighted");
            $("#a-2").addClass("highlighted");
            $("#b-2").addClass("highlighted");
            $("#cs-3").addClass("highlighted");
            $("#d-3").addClass("highlighted");
            $("#f-3").addClass("highlighted");
            $("#fs-3").addClass("highlighted");
        });

        $("#g-h-min").click(function() {
            removeHighlights();
            $("#g-1").addClass("highlighted");
            $("#a-1").addClass("highlighted");
            $("#as-1").addClass("highlighted");
            $("#c-2").addClass("highlighted");
            $("#d-2").addClass("highlighted");
            $("#ds-2").addClass("highlighted");
            $("#fs-2").addClass("highlighted");
            $("#g-2").addClass("highlighted");
        });

        $("#ab-h-min").click(function() {
            removeHighlights();
            $("#gs-1").addClass("highlighted");
            $("#as-1").addClass("highlighted");
            $("#b-1").addClass("highlighted");
            $("#cs-2").addClass("highlighted");
            $("#ds-2").addClass("highlighted");
            $("#e-2").addClass("highlighted");
            $("#g-2").addClass("highlighted");
            $("#gs-2").addClass("highlighted");
        });

        $("#a-h-min").click(function() {
            removeHighlights();
            $("#a-1").addClass("highlighted");
            $("#b-1").addClass("highlighted");
            $("#c-2").addClass("highlighted");
            $("#d-2").addClass("highlighted");
            $("#e-2").addClass("highlighted");
            $("#f-2").addClass("highlighted");
            $("#gs-2").addClass("highlighted");
            $("#a-2").addClass("highlighted");
        });

        $("#bb-h-min").click(function() {
            removeHighlights();
            $("#as-1").addClass("highlighted");
            $("#c-2").addClass("highlighted");
            $("#cs-2").addClass("highlighted");
            $("#ds-2").addClass("highlighted");
            $("#f-2").addClass("highlighted");
            $("#fs-2").addClass("highlighted");
            $("#a-2").addClass("highlighted");
            $("#as-2").addClass("highlighted");
        });

        $("#b-h-min").click(function() {
            removeHighlights();
            $("#b-1").addClass("highlighted");
            $("#cs-2").addClass("highlighted");
            $("#d-2").addClass("highlighted");
            $("#e-2").addClass("highlighted");
            $("#fs-2").addClass("highlighted");
            $("#g-2").addClass("highlighted");
            $("#as-2").addClass("highlighted");
            $("#b-2").addClass("highlighted");
        });
    }

    // Major Pentatonic Scales
    function setUpMajorPentatonicScales() {
        $("#c-maj-p").click(function() {
            removeHighlights();
            $("#c-2").addClass("highlighted");
            $("#d-2").addClass("highlighted");
            $("#e-2").addClass("highlighted");
            $("#g-2").addClass("highlighted");
            $("#a-2").addClass("highlighted");
            $("#c-3").addClass("highlighted");
        });

        $("#db-maj-p").click(function() {
            removeHighlights();
            $("#cs-2").addClass("highlighted");
            $("#ds-2").addClass("highlighted");
            $("#f-2").addClass("highlighted");
            $("#gs-2").addClass("highlighted");
            $("#as-2").addClass("highlighted");
            $("#cs-3").addClass("highlighted");
        });

        $("#d-maj-p").click(function() {
            removeHighlights();
            $("#d-2").addClass("highlighted");
            $("#e-2").addClass("highlighted");
            $("#fs-2").addClass("highlighted");
            $("#a-2").addClass("highlighted");
            $("#b-2").addClass("highlighted");
            $("#d-3").addClass("highlighted");
        });

        $("#eb-maj-p").click(function() {
            removeHighlights();
            $("#ds-2").addClass("highlighted");
            $("#f-2").addClass("highlighted");
            $("#fs-2").addClass("highlighted");
            $("#as-2").addClass("highlighted");
            $("#c-3").addClass("highlighted");
            $("#ds-3").addClass("highlighted");
        });

        $("#e-maj-p").click(function() {
            removeHighlights();
            $("#e-2").addClass("highlighted");
            $("#fs-2").addClass("highlighted");
            $("#gs-2").addClass("highlighted");
            $("#b-2").addClass("highlighted");
            $("#cs-3").addClass("highlighted");
            $("#e-3").addClass("highlighted");
        });

        $("#f-maj-p").click(function() {
            removeHighlights();
            $("#f-2").addClass("highlighted");
            $("#g-2").addClass("highlighted");
            $("#a-2").addClass("highlighted");
            $("#c-3").addClass("highlighted");
            $("#d-3").addClass("highlighted");
            $("#f-3").addClass("highlighted");
        });

        $("#gb-maj-p").click(function() {
            removeHighlights();
            $("#fs-2").addClass("highlighted");
            $("#gs-2").addClass("highlighted");
            $("#as-2").addClass("highlighted");
            $("#cs-3").addClass("highlighted");
            $("#ds-3").addClass("highlighted");
            $("#fs-3").addClass("highlighted");
        });

        $("#g-maj-p").click(function() {
            removeHighlights();
            $("#g-1").addClass("highlighted");
            $("#a-1").addClass("highlighted");
            $("#b-1").addClass("highlighted");
            $("#d-2").addClass("highlighted");
            $("#e-2").addClass("highlighted");
            $("#g-2").addClass("highlighted");
        });

        $("#ab-maj-p").click(function() {
            removeHighlights();
            $("#gs-1").addClass("highlighted");
            $("#as-1").addClass("highlighted");
            $("#c-2").addClass("highlighted");
            $("#ds-2").addClass("highlighted");
            $("#f-2").addClass("highlighted");
            $("#gs-2").addClass("highlighted");
        });

        $("#a-maj-p").click(function() {
            removeHighlights();
            $("#a-1").addClass("highlighted");
            $("#b-1").addClass("highlighted");
            $("#cs-2").addClass("highlighted");
            $("#e-2").addClass("highlighted");
            $("#fs-2").addClass("highlighted");
            $("#a-2").addClass("highlighted");
        });

        $("#bb-maj-p").click(function() {
            removeHighlights();
            $("#as-1").addClass("highlighted");
            $("#c-2").addClass("highlighted");
            $("#d-2").addClass("highlighted");
            $("#f-2").addClass("highlighted");
            $("#g-2").addClass("highlighted");
            $("#as-2").addClass("highlighted");
        });

        $("#b-maj-p").click(function() {
            removeHighlights();
            $("#b-1").addClass("highlighted");
            $("#cs-2").addClass("highlighted");
            $("#ds-2").addClass("highlighted");
            $("#fs-2").addClass("highlighted");
            $("#gs-2").addClass("highlighted");
            $("#b-2").addClass("highlighted");
        });
    }

    // Minor Pentatonic Scales
    function setUpMinorPentatonicScales() {
        $("#c-min-p").click(function() {
            removeHighlights();
            $("#c-2").addClass("highlighted");
            $("#ds-2").addClass("highlighted");
            $("#f-2").addClass("highlighted");
            $("#g-2").addClass("highlighted");
            $("#as-2").addClass("highlighted");
            $("#c-3").addClass("highlighted");
        });

        $("#db-min-p").click(function() {
            removeHighlights();
            $("#cs-2").addClass("highlighted");
            $("#e-2").addClass("highlighted");
            $("#fs-2").addClass("highlighted");
            $("#gs-2").addClass("highlighted");
            $("#b-2").addClass("highlighted");
            $("#cs-3").addClass("highlighted");
        });

        $("#d-min-p").click(function() {
            removeHighlights();
            $("#d-2").addClass("highlighted");
            $("#f-2").addClass("highlighted");
            $("#g-2").addClass("highlighted");
            $("#a-2").addClass("highlighted");
            $("#c-3").addClass("highlighted");
            $("#d-3").addClass("highlighted");
        });

        $("#eb-min-p").click(function() {
            removeHighlights();
            $("#ds-2").addClass("highlighted");
            $("#fs-2").addClass("highlighted");
            $("#gs-2").addClass("highlighted");
            $("#as-2").addClass("highlighted");
            $("#cs-3").addClass("highlighted");
            $("#ds-3").addClass("highlighted");
        });

        $("#e-min-p").click(function() {
            removeHighlights();
            $("#e-2").addClass("highlighted");
            $("#g-2").addClass("highlighted");
            $("#a-2").addClass("highlighted");
            $("#b-2").addClass("highlighted");
            $("#d-3").addClass("highlighted");
            $("#e-3").addClass("highlighted");
        });

        $("#f-min-p").click(function() {
            removeHighlights();
            $("#f-2").addClass("highlighted");
            $("#gs-2").addClass("highlighted");
            $("#as-2").addClass("highlighted");
            $("#c-3").addClass("highlighted");
            $("#ds-3").addClass("highlighted");
            $("#f-3").addClass("highlighted");
        });

        $("#gb-min-p").click(function() {
            removeHighlights();
            $("#fs-2").addClass("highlighted");
            $("#a-2").addClass("highlighted");
            $("#b-2").addClass("highlighted");
            $("#cs-3").addClass("highlighted");
            $("#e-3").addClass("highlighted");
            $("#fs-3").addClass("highlighted");
        });

        $("#g-min-p").click(function() {
            removeHighlights();
            $("#g-1").addClass("highlighted");
            $("#as-1").addClass("highlighted");
            $("#c-2").addClass("highlighted");
            $("#d-2").addClass("highlighted");
            $("#f-2").addClass("highlighted");
            $("#g-2").addClass("highlighted");
        });

        $("#ab-min-p").click(function() {
            removeHighlights();
            $("#gs-1").addClass("highlighted");
            $("#b-1").addClass("highlighted");
            $("#cs-2").addClass("highlighted");
            $("#ds-2").addClass("highlighted");
            $("#fs-2").addClass("highlighted");
            $("#gs-2").addClass("highlighted");
        });

        $("#a-min-p").click(function() {
            removeHighlights();
            $("#a-1").addClass("highlighted");
            $("#c-2").addClass("highlighted");
            $("#d-2").addClass("highlighted");
            $("#e-2").addClass("highlighted");
            $("#g-2").addClass("highlighted");
            $("#a-2").addClass("highlighted");
        });

        $("#bb-min-p").click(function() {
            removeHighlights();
            $("#as-1").addClass("highlighted");
            $("#cs-2").addClass("highlighted");
            $("#ds-2").addClass("highlighted");
            $("#f-2").addClass("highlighted");
            $("#gs-2").addClass("highlighted");
            $("#as-2").addClass("highlighted");
        });

        $("#b-min-p").click(function() {
            removeHighlights();
            $("#b-1").addClass("highlighted");
            $("#d-2").addClass("highlighted");
            $("#e-2").addClass("highlighted");
            $("#fs-2").addClass("highlighted");
            $("#a-2").addClass("highlighted");
            $("#b-2").addClass("highlighted");
        });
    }

    // Set up all scales
    setUpMajorScales();
    setUpNaturalMinorScales();
    setUpHarmonicMinorScales();
    setUpMajorPentatonicScales();
    setUpMinorPentatonicScales();

    // function to choose a scale at random
    function chooseRandomScale() {
        removeHighlights();
        var len = $(".scale").length;
        var rand = Math.floor(Math.random() * len);
        var scale = $(".scale").eq(rand);
        $("#random_scale").text(scale.text());
        $("#show_scale").text("Show Me")
        $("#show_scale").click(function() {
            scale.click();
        });
    }

    $("#clear").click(removeHighlights);
    $("#randombtn").click(chooseRandomScale);
});