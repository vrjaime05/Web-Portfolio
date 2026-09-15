/* ==========================================================================
   PROJECT CONTENT
   Add, remove, or edit project objects here. Every page (home, projects,
   case study, gallery) reads from this single array — no need to touch
   the HTML to update your work.

   IMAGES: "image" is the cover photo used on cards and at the top of the
   case-study page. "gallery" is an array of 5 photos used further down the
   case-study page, in this order:
     gallery[0], gallery[1]  -> "Design & CAD development" figures
     gallery[2], gallery[3]  -> "Testing & validation" figures
     gallery[4]              -> "Final result" figure
   Every project currently points at assets/project-placeholder.jpg. To swap
   in a real photo: drop the file into /assets (e.g. assets/formula-sae-1.jpg)
   and change the matching path below — see README.md for the full walkthrough.

   CREDITS: "credits" is a list of people to acknowledge for a project —
   teammates, advisors, anyone who helped. Each entry is
   { name: "...", contribution: "what they helped with" }. Leave it as an
   empty array ([]) to skip the "Acknowledgments" section entirely on that
   project's case-study page — it only appears when there's at least one
   credit.
   ========================================================================== */

const PLACEHOLDER = "assets/project-placeholder.jpg";

const PROJECTS = [
  {
    id: "pedal-system",
    title: "Pedal System (Accelerator, Brake, Clutch)",
    discipline: "Mechanical Design",
    software: ["SolidWorks", "ANSYS", "PrePoMax", "MATLAB"],
    image: "assets/PedalBox/Pedal_system_top.jpg",
    summary: "Complete pedal system design — accelerator, brake, and clutch — for UP Racing's Formula-style competition car, backed by hand calculations and simulation.",
    challenge: "The pedal system needed to survive high pedal-force loads from a driver (2000 N used as benchmark as specified on the rulebook) under race conditions while staying lightweight and packaging within a tight pedal-box envelope.",
    approach: "Researched and justified the design with hand calculations before modeling, then used simulation and small automation programs to check the design and speed up iteration.",
    cad: "Went thought a lot of iterations before landing on the Pedal Box V1. We considered diferent geometries, but due to lack of funds, we went with this final desing",
    sim: "Simulations where made in order to optimize the geometry of the system, reducing space consumption and weight. The material used for the pedal system was Aluminum 6061 T-6. With this in mind, our simulations shows that our pieces will survive the force applied.",
    resultStats: [
      { value: "2,000 N", label: "approved brake pedal" },
      { value: "12,000 N", label: "tested on MC base" },
      { value: "User-friendly", label: "adjustable desing" }
    ],
    credits: [
      { name: "Diego Montiel Lopez", contribution: "Collaborated on the pedal system design, hand calculations, and simulation." }
    ],
    gallery: ["assets/PedalBox/Pedal_System_T78.jpg", "assets/PedalBox/MC_Base.jpg", "assets/PedalBox/Sim_MC_Base.jpg", "assets/PedalBox/Sim_Brake_Pedal.jpg", "assets/PedalBox/Pedal_System.jpg"]
  },
  {
    id: "recumbent",
    title: "Recumbent Tricycle",
    discipline: "Structural Design",
    software: ["SolidWorks", "ANSYS"],
    image: "assets/Recumbent/Rec_Dec_1.png",
    summary: "Design of a recumbent-style tricycle as overall project lead, including fatigue and natural frequency analysis of the frame.",
    challenge: "The frame needed to survive repeated riding loads over its expected lifetime and avoid resonating with typical riding-induced vibration frequencies.",
    approach: "Led the project end to end, from concept layout through detailed design, using fatigue and modal analysis to check the frame before committing to a final structure.",
    cad: "CAT model was created by us using a model guide the profesor had previously given us. We took the liberty of modifiying some parts of it for the final manufacturing.",
    sim: "Simulations where created in order to prove our desing worked before commiting to building the final design.",
    resultStats: [
      { value: "Lead", label: "project role" },
      { value: "Fatigue", label: "+ modal analysis" },
      { value: "3-wheel", label: "recumbent layout" }
    ],
    credits: [
  { name: "Alejandro Esteban Rodríguez Sánchez", contribution: "Professor and project sponsor" },
  { name: "Diego Montiel López", contribution: "Leader of the manufacturing crew" },
  { name: "Marco Alberto Vázquez Preciado", contribution: "Leader of the simulation team" },
  { name: "Juan Pablo Vega Sánchez", contribution: "Finance and project organization responsable" },
  { name: "Carlo Gordillo Arenas", contribution: "Main CAD designer" },
  { name: "Eduardo Hernández Torres", contribution: "Project presenter and part of manufacturing crew" },
  { name: "Diego Bastidas Salazar", contribution: "Part of manufacturing crew" },
  { name: "Diego Brand López", contribution: "Part of manufacturing crew" },
  { name: "Alejandro Reyes Ceja", contribution: "Part of manufacturing crew" },
  { name: "Carlos Isaac Sandoval Azpeitia", contribution: "Part of the simulation team" },
  { name: "Dharma Vera Briseño", contribution: "Part of manufacturing crew" },
  { name: "Diego Alejandro Velasco Zuñiga", contribution: "Part of the simulation team" },
  { name: "José Antonio Chaparro Osuna", contribution: "Part of manufacturing crew" },
  { name: "Jose Manuel Valle Pérez", contribution: "Part of manufacturing crew" },
  { name: "Luis Carlos Uribarren Preciado", contribution: "Part of manufacturing crew" },
  { name: "René Sebastián Rodríguez Pérez", contribution: "Part of manufacturing crew" },
  { name: "Santiago Serrano Verduzco", contribution: "Part of manufacturing crew" },
  { name: "Sergio Dávila Trejo", contribution: "Part of manufacturing crew" }
],
    gallery: ["assets/Recumbent/Rec_Dec_2.png", PLACEHOLDER, PLACEHOLDER, PLACEHOLDER, PLACEHOLDER]
  },
  {
    id: "rc-vehicle-launcher",
    title: "RC Vehicle with Launcher",
    discipline: "Mechatronics",
    software: ["SolidWorks", "C++"],
    image: PLACEHOLDER,
    summary: "An RC vehicle with a fully mechanical, servo-motor-controlled launcher, an integrated camera for remote operation, and tank tracks for off-road versatility.",
    challenge: "Combining a mechanical launching mechanism, a live camera feed, and tracked mobility into one remotely operated vehicle, all controlled reliably from a distance.",
    approach: "Designed the mechanical launcher and track-drive system, then integrated servo control and the camera system for remote operation.",
    cad: "Add detail here on the CAD design of the launcher mechanism, drivetrain, and tank-track running gear, packaged around the electronics and camera mount.",
    sim: "Add detail here on the mechanism checks and field testing used to validate the launcher and tracked drivetrain before final assembly.",
    resultStats: [
      { value: "Servo", label: "controlled launcher" },
      { value: "Tank tracks", label: "drivetrain" },
      { value: "Remote", label: "camera operation" }
    ],
    credits: [],
    gallery: [PLACEHOLDER, PLACEHOLDER, PLACEHOLDER, PLACEHOLDER, PLACEHOLDER]
  }
];
