'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";

const initialProducts = [
  {
    product: "Product 1",
    date: "24 Apr 2024",
    timespent: "2h 5m",
    orderValue: 120.21,
    commission: 55,
  },
  {
    product: "Product 2",
    date: "23 Apr 2024",
    timespent: "1h 45m",
    orderValue: 110.5,
    commission: 50,
  },
  {
    product: "Product 3",
    date: "22 Apr 2024",
    timespent: "3h 15m",
    orderValue: 130.99,
    commission: 60,
  },
  {
    product: "Product 4",
    date: "21 Apr 2024",
    timespent: "2h 30m",
    orderValue: 100.75,
    commission: 45,
  },
];

export default function ProductTable() {
  const [products, setProducts] = useState(initialProducts);

  const handleSort = (key: keyof typeof initialProducts[0]) => {
    const sortedProducts = [...products].sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });
    setProducts(sortedProducts);
  };

  return (
    <Table className="border rounded-md font-medium text-gray-600 text-sm font-inter">
      <TableHeader>
        <TableRow className="bg-gray-100">
        <TableHead
          className="cursor-pointer hover:text-blue-400 flex items-center gap-2"
          onClick={() => handleSort("product")}
        >
          Product
          <FontAwesomeIcon icon={faChevronDown} className="h-4" />
        </TableHead>

          <TableHead
            className="cursor-pointer hover:text-blue-400  items-center gap-2"
            onClick={() => handleSort("date")}
          >
            Date
            <FontAwesomeIcon icon={faChevronDown} className="h-4 pl-2" />
          </TableHead>
          <TableHead
          >
            Time Spent
          </TableHead>
          <TableHead
            className="cursor-pointer hover:text-blue-400  items-center gap-2"
            onClick={() => handleSort("orderValue")}
          >
            Order Value
            <FontAwesomeIcon icon={faChevronDown} className="h-4 pl-2" />
          </TableHead>
          <TableHead
            className="cursor-pointer hover:text-blue-400 flex items-center gap-2"
            onClick={() => handleSort("commission")}
          >
            Commission
            <FontAwesomeIcon icon={faChevronDown} className="h-4" />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-lg">
        {products.map((product) => (
          <TableRow key={product.product}>
            <TableCell className="flex gap-1 w-[176px] items-center">
              <Image
                src="/prod1.png"
                alt={product.product}
                width={40}
                height={40}
              />
              {product.product}
            </TableCell>
            <TableCell>{product.date}</TableCell>
            <TableCell>{product.timespent}</TableCell>
            <TableCell>${product.orderValue.toFixed(2)}</TableCell>
            <TableCell className="font-bold">${product.commission}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
