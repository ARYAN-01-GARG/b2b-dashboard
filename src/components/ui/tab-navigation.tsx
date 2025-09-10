interface TabProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  tabs: { key: string; label: string }[];
}

export const TabNavigation = ({ activeTab, onTabChange, tabs }: TabProps) => (
  <span className="text-lg">
    {tabs.map((tab, index) => (
      <span key={tab.key}>
        <span
          className={`${
            activeTab === tab.key ? "text-green-500 border-b-2 border-green-500" : ""
          } border-b-1 px-2 cursor-pointer`}
          onClick={() => onTabChange(tab.key)}
        >
          {tab.label}
        </span>
        {index < tabs.length - 1 && " "}
      </span>
    ))}
  </span>
);

export default TabNavigation;
