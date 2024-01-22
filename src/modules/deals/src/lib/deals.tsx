import { Box, Button, Chip, Link, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { dealsData } from './deals-data';

type Address = {
  street: string;
  city: string;
  state: string;
  zipcode: string;
};

type DealRow = {
  dealId: string;
  address: Address;
  type: string;
  propertyValue: number;
  loanAmount: number;
  openDate: string;
  closedDate: string;
  status: string;
};

interface DealsTableProps {
  deals: DealRow[];
}
const DealsTable = (props: DealsTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table
        style={{ width: '100%' }}
        stickyHeader
        size="small"
        aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Address</TableCell>
            <TableCell align="right">Loan Type</TableCell>
            <TableCell align="right">Property Value</TableCell>
            <TableCell align="right">Loan Amount</TableCell>
            <TableCell align="right">Open Date</TableCell>
            <TableCell align="right">Close Date</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.deals.map((row) => (
            <TableRow
              key={row.address.street}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link>
                  <Typography>{row.address.street}</Typography>
                  <Typography>
                    {row.address.city}, {row.address.state},{' '}
                    {row.address.zipcode}
                  </Typography>
                </Link>
              </TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.propertyValue}</TableCell>
              <TableCell align="right">{row.loanAmount}</TableCell>
              <TableCell align="right">{row.openDate}</TableCell>
              <TableCell align="right">{row.closedDate}</TableCell>
              <TableCell align="right">
                <Chip color="success" label={row.status}></Chip>
              </TableCell>
              <TableCell align="right">
                <Button>Do Task</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

/* eslint-disable-next-line */
export interface DealsProps {}

export function Deals(props: DealsProps) {
  const [deals, setDeals] = useState<DealRow[]>([]);

  useEffect(() => {
    // "load mock data from shepherd"
    setDeals(dealsData);
  }, []);

  return (
    <Box
      style={{
        width: '100%',
        backgroundColor: 'white',
        padding: '25px',
        borderRadius: '25px',
      }}
    >
      <Typography style={{ width: '100%' }}>
        You have {deals.length} loans!
      </Typography>
      <DealsTable deals={deals} />
    </Box>
  );
}

export default Deals;
