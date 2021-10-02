const buttons = document.querySelectorAll(".locationButton");

for(let button of buttons) {
    button.onclick = (event) => {
        window.location.hash = "#contactInformation";
        window.location.hash = "#" + button.dataset.location;
    }
}

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
                    triggerElement: "#trigger1",
                    tweenChanges: true
                })
                .setTween("#contactInformation", 0.5, {marginLeft: "10px", color: "#F2CEA2"}) // trigger a TweenMax.to tween
                .addTo(controller);

scene = new ScrollMagic.Scene({
                triggerElement: "#trigger2",
                tweenChanges: true
            })
            .setTween("#objectiveText", 0.5, {marginLeft: "10px", color: "#F2CEA2"}) // trigger a TweenMax.to tween
            .addTo(controller);

scene = new ScrollMagic.Scene({
                triggerElement: "#trigger3",
                tweenChanges: true
            })
            .setTween("#educationText", 0.5, {marginLeft: "10px", color: "#F2CEA2"}) // trigger a TweenMax.to tween
            .addTo(controller);

scene = new ScrollMagic.Scene({
                triggerElement: "#trigger4",
                tweenChanges: true
            })
            .setTween("#workText", 0.5, {marginLeft: "10px", color: "#F2CEA2"}) // trigger a TweenMax.to tween
            .addTo(controller);

scene = new ScrollMagic.Scene({
                triggerElement: "#trigger5",
                tweenChanges: true
            })
            .setTween("#otherExperienceText", 0.5, {marginLeft: "10px", color: "#F2CEA2"}) // trigger a TweenMax.to tween
            .addTo(controller);

scene = new ScrollMagic.Scene({
                triggerElement: "#trigger6",
                tweenChanges: true
            })
            .setTween("#skillsText", 0.5, {marginLeft: "10px", color: "#F2CEA2"}) // trigger a TweenMax.to tween
            .addTo(controller);

scene = new ScrollMagic.Scene({
                triggerElement: "#trigger7",
                tweenChanges: true
            })
            .setTween("#activitiesText", 0.5, {marginLeft: "10px", color: "#F2CEA2"}) // trigger a TweenMax.to tween
            .addTo(controller);

scene = new ScrollMagic.Scene({
                triggerElement: "#trigger8",
                tweenChanges: true
            })
            .setTween("#awardsText", 0.5, {marginLeft: "10px", color: "#F2CEA2"}) // trigger a TweenMax.to tween
            .addTo(controller);