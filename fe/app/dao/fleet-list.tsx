// mock
import { fleets } from "@/mock/fleets";

// components
import FleetCard from "@/app/dao/fleet-card";

function FleetsList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {fleets.map((fleet) => {
        return <FleetCard key={fleet.info.id} fleet={fleet} />;
      })}
    </div>
  );
}

export default FleetsList;
