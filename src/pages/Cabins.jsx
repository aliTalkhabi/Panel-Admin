
import Heading from "../ui/Heading";
import Row from "../ui/Row";
// import { getCabins } from "../services/apiCabins";
import CabinTable from "../features/cabins/CabinTable";

import AddCabin from "../features/cabins/AddCabin";
import CabinTableOpration from "../features/cabins/CabinTableOpration";


function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOpration />
      </Row>
      <Row>
        <CabinTable />
        <AddCabin />
      </Row>

    </>
  );
}

export default Cabins;
