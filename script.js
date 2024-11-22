
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


// rotating an arrow in navbar

// gsap.to("#nav svg", {
//   rotate: 90,
//   duration: 1,
//   backgroundColor: "#111",
//   scrollTrigger: {
//     trigger: "#nav svg",
//     scroller: "#main",
//     start: "top -5%",
//     end: "top -6%",
//     scrub: 1
//   }
// })
// gsap.to("#nav svg", {
//   backgroundColor: "#111",
//   scrollTrigger: {
//     trigger: "#nav svg",
//     scroller: "#main",
//     start: "top -15%",
//     end: "top -400%",
//     scrub: 3
//   }
// })

// scrolling a namediv

// gsap.to("#name-div h1", {
//   transform: "translateX(calc(-100% - 2vw - 4px))",
//   scrollTrigger: {
//     trigger: "#name-div h1",
//     scroller: "#main",
//     // markers:true,
//     scrub: 0.7
//   }
// })


// Run Textillate an
function composeEmail() {
  window.location.href = 'mailto:kuber8821@gmail.com';
}

gsap.from("#line",{
  opacity:0,
  duration:1,
  // onStart:function(){
  //   $('#line').textillate({ in: { effect: 'fadeInUp' } });
  // }
})

var tl1 = gsap.timeline();


// tl1.from("#name",{
 
//   scrollTrigger:{
//     scroller:"#main",
//    trigger:"#page1",
//    start:"top 0%",
//    end:"top 30%",
//    markers:true
//   },
//   opacity:0,
//   duration:1,
//   // delay:1,
//   onStart:function(){
//     $('#name').textillate({ in: { effect: 'fadeInUp' } });
//   }
// },"same1")


tl1.from("#page1_center_h1",{
  opacity:0,
    duration:1,
    // delay:1,
    // onStart:function(){
    //   $('#page1_center_h1').textillate({ in: { effect: 'fadeInUp' } });
    // }
  })
  tl1.from("#page1_center_h2",{
    opacity:0,
      duration:1,
      // delay:1,
      // onStart:function(){
      //   $('#page1_center_h2').textillate({ in: { effect: 'fadeInUp' } });
      // }
    })

document.addEventListener('DOMContentLoaded', function () {
  gsap.from("#nav", { y: -100, opacity: 0, duration: 1, ease: "power2.out" });
});

gsap.from(".about>h3",{
  y:60,
  stagger:0.5,
  delay:2,
  //scrub:true
})


var tl = gsap.timeline();


tl.from("#line1",{
 
  scrollTrigger:{
    scroller:"#main",
   trigger:"#abo",
   start:"top 50%",
   end:"top 30%",
   //markers:true
  },
  opacity:0,
  duration:1,
  // delay:1,
  onStart:function(){
    $('#line1').textillate({ in: { effect: 'fadeInUp' } });
  }
},"same")
tl.from("#skills",{
  scrollTrigger:{
    scroller:"#main",
   trigger:"#abo",
   start:"top 50%",
  },
  opacity:0,
  duration:1,
  onStart:function(){
    $('#skills').textillate({ in: { effect: 'fadeInUp' } });
  }
},"same")
tl.from("#skills2",{
  scrollTrigger:{
    scroller:"#main",
   trigger:"#abo",
   start:"top 50%",
  },
  opacity:0,
  duration:1,
  y:-50,
  onStart:function(){
    $('#skills2').textillate({ in: { effect: 'fadeInUp' } });
  }
},"same")
tl.from("#keepin",{
  scrollTrigger:{
    scroller:"#main",
   trigger:"#hey",
   start:"top 50%",
  },
  opacity:0,
  duration:1,
  onStart:function(){
    $('#keepin').textillate({ in: { effect: 'fadeInUp' } });
  }
},"same")
tl.from("#sayhi",{
  scrollTrigger:{
    scroller:"#main",
   trigger:"#hey",
   start:"top 50%",
  },
  opacity:0,
  duration:1,
  // onStart:function(){
  //   $('#sayhi').textillate({ in: { effect: 'fadeInUp' } });
  // }
},"same")


// tl.from("#line2",{
//   scrollTrigger:{
//     scroller:"#main",
//    trigger:"#projects",
//    start:"top 50%",
//   },
//   opacity:0,
//   duration:1,
//   onStart:function(){
//     $('#sline2').textillate({ in: { effect: 'fadeInUp' } });
//   }
// },"same")



// Helper function to wrap each character in a <span> with class "char"

// page 2
let activeKub = null; // Keeps track of the currently active section
let activeHeader = null; // Keeps track of the currently active header

// Function to handle showing/hiding the corresponding section and highlighting
function toggleSection(targetId) {
  const targetClass = `.kub${targetId.slice(-1)}`; // Derive class name (e.g., .kub1)
  const targetHeader = `#${targetId}`; // Derive header id (e.g., #kb1)

  // Hide all kub sections
  document.querySelectorAll(".kub1, .kub2, .kub3").forEach((kub) => {
    kub.style.display = "none";
  });

  // Remove highlight from all headers
  document.querySelectorAll(".waviy h1").forEach((header) => {
    header.classList.remove("highlighted");
  });

  // If the clicked section is already active, toggle it off
  if (activeKub === targetClass) {
    activeKub = null;
    activeHeader = null;
  } else {
    // Show the clicked section and set it as active
    document.querySelector(targetClass).style.display = "initial";
    activeKub = targetClass;

    // Highlight the corresponding header
    const headerElement = document.querySelector(targetHeader);
    headerElement.classList.add("highlighted");
    activeHeader = headerElement;
  }
}

// Add event listeners to headers
document.querySelectorAll(".waviy h1").forEach((header) => {
  header.addEventListener("click", function () {
    toggleSection(this.id); // Pass the id of the clicked header
  });
});

// Add event listeners to circle icons
document.querySelectorAll("#circl2").forEach((circle, index) => {
  circle.addEventListener("click", function () {
    const targetId = `kb${index + 1}`; // Derive the corresponding header id
    toggleSection(targetId); // Use the same toggle logic
  });
});

// Automatically highlight "Web Development" on load
document.addEventListener("DOMContentLoaded", function () {
  toggleSection("kb1"); // Trigger the toggle for "Web Development" on page load
});



gsap.from(".box h4", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".box h4",
    scroller: "#main",
    // markers:true,
    start: "top 70%"
  },
  stagger: 0.5
})

gsap.from(".dev-box img", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".dev-box img",
    scroller: "#main",
    // markers:true,
    start: "top 80%"
  },
  y: 20,
  stagger: {
    amount: 2
  }

})
gsap.from(".des-box img", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".des-box img",
    scroller: "#main",
    // markers:true,
    start: "top 80%"
  },
  y: 20,
  stagger: {
    amount: 1
  }

})


