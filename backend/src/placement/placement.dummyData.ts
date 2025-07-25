import { PlacementType } from "./placement.types"

export const dummyPlacements: PlacementType[] = [
  {
    placementId: 1,
    branch: ["CSE", "ECE"],
    eligibilityCritarias: ["CGPA ≥ 7.0", "No backlogs", "Strong DSA"],
    applicationLink: "https://example.com/apply/abc-corp",
    lastDateToApply: "2025-08-15",
    companyDetails: {
      companyName: "ABC Corp",
      logo: "https://logo.clearbit.com/abc-corp.com",
      salary: 10,
      description:
        "A product-based company focused on web and mobile platforms.",
    },
  },
  {
    placementId: 2,
    branch: ["ECE", "MECH"],
    eligibilityCritarias: ["CGPA ≥ 6.5", "Internship preferred"],
    applicationLink: "https://example.com/apply/xyz-tech",
    lastDateToApply: "2025-08-10",
    companyDetails: {
      companyName: "XYZ Tech",
      logo: "https://logo.clearbit.com/xyztech.com",
      salary: 6.5,
    },
  },
  {
    placementId: 3,
    branch: ["MECH", "CIVIL"],
    eligibilityCritarias: ["CGPA ≥ 6.0", "CAD knowledge"],
    applicationLink: "https://example.com/apply/buildit",
    lastDateToApply: "2025-07-10", // past
    companyDetails: {
      companyName: "BuildIt Ltd.",
      logo: "https://logo.clearbit.com/buildit.com",
      salary: 5.2,
      description: "Construction and civil engineering firm.",
    },
  },
  {
    placementId: 4,
    branch: ["CSE"],
    eligibilityCritarias: ["CGPA ≥ 8.0", "System Design Basics"],
    applicationLink: "https://example.com/apply/devpro",
    lastDateToApply: "2025-08-05",
    companyDetails: {
      companyName: "DevPro",
      logo: "https://logo.clearbit.com/devpro.com",
      salary: 12,
    },
  },
  {
    placementId: 5,
    branch: ["CSE", "ECE", "MECH", "CIVIL"],
    eligibilityCritarias: ["No backlogs", "Good communication"],
    applicationLink: "https://example.com/apply/global-corp",
    lastDateToApply: "2025-07-15", // past
    companyDetails: {
      companyName: "Global Corp",
      logo: "https://logo.clearbit.com/globalcorp.com",
      salary: 8.5,
    },
  },
  {
    placementId: 6,
    branch: ["CSE", "ECE"],
    eligibilityCritarias: ["Minimum CGPA 7.5", "GATE qualified"],
    applicationLink: "https://example.com/apply/techwave",
    lastDateToApply: "2025-08-22",
    companyDetails: {
      companyName: "TechWave",
      logo: "https://logo.clearbit.com/techwave.com",
      salary: 9,
    },
  },
  {
    placementId: 7,
    branch: ["CIVIL", "MECH"],
    eligibilityCritarias: ["Final year students", "AutoCAD expertise"],
    applicationLink: "https://example.com/apply/infraworks",
    lastDateToApply: "2025-07-18", // past
    companyDetails: {
      companyName: "InfraWorks",
      logo: "https://logo.clearbit.com/infraworks.com",
      salary: 6.2,
    },
  },
  {
    placementId: 8,
    branch: ["ECE"],
    eligibilityCritarias: ["Circuit design knowledge", "CGPA ≥ 6.5"],
    applicationLink: "https://example.com/apply/circuithub",
    lastDateToApply: "2025-08-12",
    companyDetails: {
      companyName: "CircuitHub",
      logo: "https://logo.clearbit.com/circuithub.com",
      salary: 7.1,
      description: "Leaders in semiconductor and circuit testing.",
    },
  },
  {
    placementId: 9,
    branch: ["MECH"],
    eligibilityCritarias: ["CAM/CAD skills", "No history of backlogs"],
    applicationLink: "https://example.com/apply/mechdyno",
    lastDateToApply: "2025-07-19", // past
    companyDetails: {
      companyName: "MechDyno",
      logo: "https://logo.clearbit.com/mechdyno.com",
      salary: 5.8,
    },
  },
  {
    placementId: 10,
    branch: ["CSE", "ECE"],
    eligibilityCritarias: ["Strong in DBMS", "OOP knowledge"],
    applicationLink: "https://example.com/apply/datadev",
    lastDateToApply: "2025-08-09",
    companyDetails: {
      companyName: "DataDev",
      logo: "https://logo.clearbit.com/datadev.com",
      salary: 9.4,
    },
  },
  {
    placementId: 11,
    branch: ["CIVIL"],
    eligibilityCritarias: ["Knowledge of construction materials", "CGPA ≥ 6.0"],
    applicationLink: "https://example.com/apply/civilcorp",
    lastDateToApply: "2025-08-28",
    companyDetails: {
      companyName: "CivilCorp",
      logo: "https://logo.clearbit.com/civilcorp.com",
      salary: 6.5,
    },
  },
  {
    placementId: 12,
    branch: ["CSE"],
    eligibilityCritarias: ["Frontend skills (React)", "Portfolio required"],
    applicationLink: "https://example.com/apply/uiheroes",
    lastDateToApply: "2025-07-12", // past
    companyDetails: {
      companyName: "UI Heroes",
      logo: "https://logo.clearbit.com/uiheroes.com",
      salary: 7.7,
    },
  },
  {
    placementId: 13,
    branch: ["ECE", "CSE"],
    eligibilityCritarias: ["IoT experience", "CGPA ≥ 7.0"],
    applicationLink: "https://example.com/apply/iotwave",
    lastDateToApply: "2025-08-11",
    companyDetails: {
      companyName: "IoTWave",
      logo: "https://logo.clearbit.com/iotwave.com",
      salary: 8.9,
      description:
        "IoT solutions provider working on smart homes and automation.",
    },
  },
  {
    placementId: 14,
    branch: ["MECH", "CIVIL"],
    eligibilityCritarias: ["On-site availability", "Internship experience"],
    applicationLink: "https://example.com/apply/infra-tech",
    lastDateToApply: "2025-08-17",
    companyDetails: {
      companyName: "InfraTech",
      logo: "https://logo.clearbit.com/infratech.com",
      salary: 7.3,
    },
  },
  {
    placementId: 15,
    branch: ["CSE", "ECE"],
    eligibilityCritarias: ["Machine Learning knowledge", "CGPA ≥ 8.0"],
    applicationLink: "https://example.com/apply/aiminds",
    lastDateToApply: "2025-07-14", // past
    companyDetails: {
      companyName: "AIMinds",
      logo: "https://logo.clearbit.com/aiminds.com",
      salary: 14.2,
      description: "AI-first company working on LLMs and computer vision.",
    },
  },
  {
    placementId: 16,
    branch: ["CSE"],
    eligibilityCritarias: ["Backend development", "Express.js or Django"],
    applicationLink: "https://example.com/apply/servercore",
    lastDateToApply: "2025-08-16",
    companyDetails: {
      companyName: "ServerCore",
      logo: "https://logo.clearbit.com/servercore.com",
      salary: 10.5,
    },
  },
  {
    placementId: 17,
    branch: ["CIVIL"],
    eligibilityCritarias: ["Field work experience", "Minimum CGPA 6.2"],
    applicationLink: "https://example.com/apply/fieldgenix",
    lastDateToApply: "2025-07-20", // past
    companyDetails: {
      companyName: "FieldGenix",
      logo: "https://logo.clearbit.com/fieldgenix.com",
      salary: 6.0,
    },
  },
  {
    placementId: 18,
    branch: ["ECE"],
    eligibilityCritarias: ["Embedded systems knowledge", "CGPA ≥ 7.0"],
    applicationLink: "https://example.com/apply/embedtron",
    lastDateToApply: "2025-08-14",
    companyDetails: {
      companyName: "Embedtron",
      logo: "https://logo.clearbit.com/embedtron.com",
      salary: 9.2,
    },
  },
  {
    placementId: 19,
    branch: ["MECH"],
    eligibilityCritarias: ["Thermodynamics", "Mechanical simulations"],
    applicationLink: "https://example.com/apply/mechforce",
    lastDateToApply: "2025-07-16", // past
    companyDetails: {
      companyName: "MechForce",
      logo: "https://logo.clearbit.com/mechforce.com",
      salary: 6.8,
    },
  },
  {
    placementId: 20,
    branch: ["CSE", "ECE"],
    eligibilityCritarias: ["Cloud Computing", "AWS or Azure certificate"],
    applicationLink: "https://example.com/apply/cloudworks",
    lastDateToApply: "2025-08-30",
    companyDetails: {
      companyName: "CloudWorks",
      logo: "https://logo.clearbit.com/cloudworks.com",
      salary: 11.5,
    },
  },
]

export default dummyPlacements
