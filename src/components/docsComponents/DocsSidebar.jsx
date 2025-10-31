import React, { useState } from "react";
import { CiTimer } from "react-icons/ci";

const tabs = [
  {
    id: 1,
    title: "Data Science",
    subtabs: [
      {
        id: 0,
        title: "Week 1: Living Elements",
        content: {
          heading: "Week 01: The Living Elements (Soil, Water, Air)",
          theme: "From Soil → System → Sovereignty",
          goal: "Observe your local environment, collect 3–5 field samples for ONE element (Soil or Water or Air), upload structured data to Neo Academy, and reflect.",
          tasks: [
            "Choose ONE element for this week: soil, water, or air.",
            "Collect at least 3 samples (3–5 photos per site). Example: soil_burned_1.jpg, soil_natural_1.jpg.",
            "Record observations in reflection.md — what you saw, possible causes, and impacts.",
            "Save files using the provided structure (see folder structure example).",
            "Submit via Pull Request (PR) into neo-academy → /assignments/submissions/.",
            "Complete the checklist before submitting: At least 3 photos included, data.json completed for each sample, reflection.md completed, file & image names follow the naming pattern.",
            "Follow field safety & ethics: Ask permission before collecting on private land, do NOT collect sensitive personal information, avoid dangerous sites.",
            "Use the provided data.json template with student_id, student_name, element, samples array with GPS coordinates, weather, pH, moisture, texture, and notes.",
            "Complete the reflection template describing what you observed, why you think it is so, and how this data could be useful for Neo Logic.",
            "Follow the data processing pipeline: Ingest → Validate & Clean → Label & Verify → Merge & Deduplicate → Preprocess & Augment → Export → Train/Validate → Deploy to Neo Mind robotics."
          ]
        }
      },
    ]
  },
];

const DocsSidebar = () => {
  const [activeMainTab, setActiveMainTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);
  const [expandedTab, setExpandedTab] = useState(0);

  const currentTab = tabs.find(tab => tab.id === activeMainTab);
  const currentContent = currentTab?.subtabs.find(subtab => subtab.id === activeSubTab)?.content;

  const handleMainTabClick = (tabId) => {
    if (expandedTab === tabId) {
      setExpandedTab(null);
    } else {
      setExpandedTab(tabId);
      setActiveMainTab(tabId);
      setActiveSubTab(0);
    }
  };

  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-20 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-stone-100 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => handleMainTabClick(tab.id)}
                  className={`flex items-center justify-between w-full p-2 rounded-lg transition-colors ${
                    activeMainTab === tab.id
                      ? "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white"
                      : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  } group`}
                >
                  <div className="flex items-center">
                    <div className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                      <CiTimer className="w-5 h-auto" />
                    </div>
                    <span className="ms-3">{tab.title}</span>
                  </div>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      expandedTab === tab.id ? "rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                
                {/* Subtabs with animation */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedTab === tab.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="mt-2 space-y-1 ml-4">
                    {tab.subtabs.map((subtab) => (
                      <li key={subtab.id}>
                        <button
                          onClick={() => {
                            setActiveMainTab(tab.id);
                            setActiveSubTab(subtab.id);
                          }}
                          className={`flex items-center w-full p-2 pl-6 text-sm rounded-lg transition-all duration-200 ${
                            activeMainTab === tab.id && activeSubTab === subtab.id
                              ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 font-medium"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                          }`}
                        >
                          <span className="mr-2">→</span>
                          {subtab.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-2 transition-all duration-300">
          <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            {currentContent?.heading}
          </h1>
          <div className="mb-4">
            <p className="mb-2 text-gray-700 dark:text-gray-300">
              <b>Theme:</b> {currentContent?.theme}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <b>Goal:</b> {currentContent?.goal}
            </p>
          </div>
          <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
            Tasks (step-by-step)
          </h2>
          <ol className="list-decimal list-inside space-y-2">
            {currentContent?.tasks.map((task, index) => (
              <li 
                key={index} 
                className="text-gray-700 dark:text-gray-300 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {task}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default DocsSidebar;