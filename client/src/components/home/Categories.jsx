import React from "react";
import {
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  styled,
} from "@mui/material";
import { categories } from "../constants/data";
import { Link, useSearchParams } from "react-router-dom";

const StyledTable = styled(Table)`
  border: 1px solid rgba(224, 224, 224, 1);
`;

const StyledButton = styled(Button)`
  margin: 20px;
  width: 85%;
  background: #6495ed;
  color: #fff;
`;

const Categories = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <>
      <Link to={`/create?category=${category || ""}`}>
        <StyledButton variant="contained">Create Blog</StyledButton>
      </Link>
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell>
              <Link to="/" style={{ textDecoration: "none" }}>
                All Categories
              </Link>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell>
                <Link
                  to={`/?category=${category.type}`}
                  style={{ textDecoration: "none" }}
                >
                  {category.type}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </>
  );
};

export default Categories;
