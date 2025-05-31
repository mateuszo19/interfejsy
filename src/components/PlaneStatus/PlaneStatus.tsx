import { Badge } from "react-bootstrap";
import { PlaneStatusType } from "../../type/planeStatus.type";

interface PlaneStatusProps {
    status: PlaneStatusType;
}

const PlaneStatus =  ({status}: PlaneStatusProps) => {
    switch (status) {
        case "free":
            return <Badge bg="success">Dostępny</Badge>;
        case "rented":
            return <Badge bg="secondary">Wynajęty</Badge>;
        case "service":
            return <Badge bg="warning">Serwis</Badge>;
        case "damaged":
            return <Badge bg="danger">Uszkodzony</Badge>;
    }
};

export default PlaneStatus;