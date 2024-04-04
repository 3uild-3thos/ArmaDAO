"use client";

// react
import { useState } from "react";

// components
import InfoTooltip from "@/components/ui/info-tooltip";
import { Switch } from "@/components/ui/switch";

// lib
import { createFleet } from "@/lib/tooltips/fleet.tooltip";
import { modules } from "@/mock/modules";

// TODO: This is still just for presentations purposes.
const FleetModules = () => {
  // TODO: This will come from both Irys and the contract
  const [activeModules, setActiveModules] = useState(modules);

  const handleModuleToggle = (name: string, checked: boolean) => {
    setActiveModules((prev) =>
      prev.map((module) =>
        module.name === name ? { ...module, isActive: checked } : module
      )
    );
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col mt-8">
        <p className="inline text-sm text-gray-500">
          Innovative Modules
          <InfoTooltip content={createFleet.modules.title} className="mt-2" />
        </p>
        <p className="inline text-xs text-gray-600">
          Proposed by Fleets for Fleets. Custom built by the Armada Core
          Engineers.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-16 gap-y-8">
        {activeModules.map((module) => (
          <div key={module.name} className="grid grid-cols-3 gap-4">
            <div className="inline col-span-2">
              {module.name}
              <InfoTooltip content={module.description} className="mt-1" />
            </div>
            <div className="col-span-1 space-y-2">
              <Switch
                name={module.name}
                checked={module.isActive}
                onCheckedChange={(checked: boolean) =>
                  handleModuleToggle(module.name, checked)
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FleetModules;
