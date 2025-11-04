import Specification from "./Specification";

export default function Tabs({ description, title }) {
  return (
    <div className="tabs tabs-lift ">
      <input
        type="radio"
        name="my_tabs_3"
        className="tab max-sm:p-2 after:max-xs:text-xs"
        aria-label="Specification"
        defaultChecked
      />
      <div className="tab-content bg-base-100 border-base-300 p-6">
        <Specification />
      </div>

      <input
        type="radio"
        name="my_tabs_3"
        className="tab max-sm:p-2 after:max-xs:text-xs"
        aria-label="Description"
      />
      <div className="tab-content bg-base-100 border-base-300 p-6">
        <h2 className="text-second font-semibold text-xl mb-2">{title}</h2>
        <p>{description}</p>
      </div>

      <input
        type="radio"
        name="my_tabs_3"
        className="tab max-sm:p-2 after:max-xs:text-xs"
        aria-label="Questions"
      />
      <div className="tab-content bg-base-100 border-base-300 p-6">
        Tab content 3
      </div>
      <input
        type="radio"
        name="my_tabs_3"
        className="tab max-sm:p-2 after:max-xs:text-xs"
        aria-label="Reviews"
      />
      <div className="tab-content bg-base-100 border-base-300 p-6">
        Tab content 4
      </div>
    </div>
  );
}
