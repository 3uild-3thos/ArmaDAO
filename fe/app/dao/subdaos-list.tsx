// mock
import { daos } from "@/mock/daos";

// components
import SubdaoCard from "@/dao/subdao-card";

function SubDaosList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {daos.map((dao) => {
        return <SubdaoCard key={dao.id} dao={dao} />;
      })}
    </div>
  );
}

export default SubDaosList;
