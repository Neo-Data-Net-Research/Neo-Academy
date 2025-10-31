import React from 'react'

export const Tabs = () => {
    const tabs = [
      {
        id: 0,
        title: "Week 1",
        content: {
          heading: "Neo Academy – Week 01: The Living Elements (Soil, Water, Air)",
          theme: "From Soil → System → Sovereignty",
          goal: "Observe your local environment, collect 3–5 field samples for ONE element (Soil or Water or Air), upload structured data to Neo Academy, and reflect.",
          tasks: [
            "Choose ONE element for this week: soil, water, or air.",
            "Collect at least 3 samples (3–5 photos per site). Example: soil_burned_1.jpg, soil_natural_1.jpg.",
            "Record observations in reflection.md — what you saw, possible causes, and impacts.",
            "Save files using the provided structure.",
            "Submit via Pull Request (PR) into neo-academy → /assignments/submissions/."
          ]
        }
      },
      {
        id: 1,
        title: "Week 2",
        content: {
          heading: "Neo Academy – Week 02: Energy Systems",
          theme: "Understanding Power Flows",
          goal: "Map energy sources in your community and analyze their sustainability.",
          tasks: [
            "Identify 3-5 energy sources in your local area.",
            "Document each source with photos and descriptions.",
            "Calculate estimated energy output and consumption patterns.",
            "Research renewable alternatives for each source.",
            "Create a presentation summarizing your findings."
          ]
        }
      },
      {
        id: 2,
        title: "Week 3",
        content: {
          heading: "Neo Academy – Week 03: Community Networks",
          theme: "Mapping Social Infrastructure",
          goal: "Document community resources and identify gaps in local support systems.",
          tasks: [
            "Interview 5 community members about local resources.",
            "Create a map of community organizations and services.",
            "Identify underserved areas or populations.",
            "Propose 2-3 solutions for filling gaps.",
            "Share findings with the community for feedback."
          ]
        }
      },
      {
        id: 3,
        title: "Week 4",
        content: {
          heading: "Neo Academy – Week 04: Sustainable Practices",
          theme: "From Knowledge to Action",
          goal: "Implement one sustainable practice and measure its impact over time.",
          tasks: [
            "Choose a sustainable practice to implement (composting, water conservation, etc.).",
            "Set measurable goals and success metrics.",
            "Document your process daily for one week.",
            "Measure and analyze results.",
            "Create a guide for others to follow your practice."
          ]
        }
      }
    ];
  return (
    <div>Tabs</div>
  )
}
