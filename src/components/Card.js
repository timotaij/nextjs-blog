import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { TableContainer, Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "rgb(4, 30, 66)",
    fontWeight: "bold",
    color: "white",
    padding: 8,
    margin: "0 5",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: 8,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  "&:last-child td, &:last-child th": {
    border: 1,
  },
}));

const letterColorCodes = {
  "A+": "#6F263D",
  A: "#6F263D",
  "A-": "#6F263D",
  "B+": "#DAE0E6",
  B: "#976373",
  "B-": "#976373",
  "C+": "#B18D98",
  C: "#B6929D",
  "C-": "#B18D98",
  "D+": "#D3BDC4",
  D: "#CCB6BD",
  "D-": "#CCB6BD",
  F: "#F5F5F5",
};
const checkColor = (value) => {
  return value === undefined ||
    value === null ||
    value === "" ||
    value.length > 4
    ? ""
    : letterColorCodes[value] !== undefined
    ? letterColorCodes[value]
    : "#4CAF50";
};

const Card = ({ data }) => {
  return (
    <Paper elevation={1}>
      <div className="rounded-t bg-[#6F263D] text-white flex py-1 items-center w-full">
        <div className="flex mx-1">
          <Button size="small" sx={{ color: "white", borderRadius: 8 }}>
            <Tooltip title="Screenshot stats" placement="top">
              <CameraAltIcon />
            </Tooltip>
          </Button>
        </div>
        <div className="mx-1 flex grow justify-center">
          <div className="font-bold">{data.title}</div>
        </div>
      </div>
      <TableContainer sx={{ overflowX: "hidden" }}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">STATISTIC</StyledTableCell>
              <StyledTableCell align="center">VALUE</StyledTableCell>
              <StyledTableCell align="center">PERCENTILE</StyledTableCell>
              <StyledTableCell align="center">
                {data.vsaverage ? "VS AVERAGE" : "GRADE"}
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {rows.map((row) => (
                <StyledTableRow key={row.stat + row.value + row.percentile}>
                  <StyledTableCell component="th" scope="row">
                    {row.stat}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.value}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.percentile}%
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{
                      backgroundColor: "rgb(76, 175, 80)",
                    }}
                  >
                    {row.vsaverage}%
                  </StyledTableCell>
                </StyledTableRow>
              ))} */}
            {data.stats.map((row) => (
              <StyledTableRow key={row[0]}>
                <StyledTableCell component="th" scope="row">
                  {row[0]}
                </StyledTableCell>
                <StyledTableCell align="center">{row[1]}</StyledTableCell>
                <StyledTableCell align="center">{row[2]}</StyledTableCell>
                <StyledTableCell
                  align="center"
                  sx={{
                    backgroundColor: checkColor(row[3]),
                  }}
                >
                  {row[3]}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Card;
