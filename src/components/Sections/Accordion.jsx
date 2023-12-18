import Arrow from "../common/Icons/Arrow";

const Accordion = ({ section }) => {
  return (
    <details className={section.color}>
      <summary className="list-none">
        <div className="px-4 py-2 flex flex-col gap-2 h-56 justify-between">
          <div className="flex flex-col border-b border-black text-2xl gap-2 pb-2 w-3/4">
            <span>{section.number}</span>
            <span>{section.name}</span>
          </div>

          <div className="flex self-end items-center gap-4 pr-6 py-2">
            <span className="text-sm">Ver más</span>
            <Arrow />
          </div>
        </div>
      </summary>
      <p>Hola</p>
    </details>
  );
};

export default Accordion;
