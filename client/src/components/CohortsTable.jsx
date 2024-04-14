import PropTypes from "prop-types";
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { useCohortMutations } from "@app/hooks";

const CohortPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  players: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}).isRequired;

const CohortRow = ({ cohort }) => {
  const { deleteCohort } = useCohortMutations();
  const onDelete = () => {
    const variables = { id: cohort.id };
    deleteCohort(variables);
  };

  return (
    <TableRow>
      <TableCell>{cohort.id}</TableCell>
      <TableCell>{cohort.name}</TableCell>
      <TableCell>{cohort.players.join(", ")}</TableCell>
      <TableCell>
        <IconButton onClick={onDelete}>
          <DeleteIcon color="error" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

CohortRow.propTypes = {
  cohort: CohortPropType,
};

export const CohortsTable = ({ cohorts }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Players</TableCell>
            <TableCell>{/* Actions */}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cohorts.map((cohort) => (
            <CohortRow key={cohort.id} cohort={cohort} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

CohortsTable.propTypes = {
  cohorts: PropTypes.arrayOf(CohortPropType).isRequired,
};
