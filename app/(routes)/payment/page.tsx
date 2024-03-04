// 'use client'
// import React from "react";
// import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue} from "@nextui-org/react";
// import {getPayments} from "@@/services/payment";
//
//
// export default function App() {
//     const payments = getPayments()
//     console.log(payments)
//     const [page, setPage] = React.useState(1);
//     const rowsPerPage = 4;
//
//     const pages = Math.ceil(payments.length / rowsPerPage);
//
//     const items = React.useMemo(() => {
//         const start = (page - 1) * rowsPerPage;
//         const end = start + rowsPerPage;
//
//         return payments.slice(start, end);
//     }, [page, payments]);
//
//     return (
//         <Table
//             aria-label="Example table with client side pagination"
//             bottomContent={
//                 <div className="flex w-full justify-center">
//                     <Pagination
//                         isCompact
//                         showControls
//                         showShadow
//                         color="secondary"
//                         page={page}
//                         total={pages}
//                         onChange={(page) => setPage(page)}
//                     />
//                 </div>
//             }
//             classNames={{
//                 wrapper: "min-h-[222px]",
//             }}
//         >
//             <TableHeader>
//                 <TableColumn key="img">Rasmi</TableColumn>
//                 <TableColumn key="name">Nomi</TableColumn>
//                 <TableColumn key="price">Narxi</TableColumn>
//                 <TableColumn key="payment_type">To&apos;lov turi</TableColumn>
//                 <TableColumn key="user">Foydalanuvchi</TableColumn>
//                 <TableColumn key="data">Sana</TableColumn>
//                 <TableColumn key="categories_type">Kategoriya</TableColumn>
//             </TableHeader>
//             <TableBody items={items}>
//                 {(item) => (
//                     <TableRow key={item.name}>
//                         {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
//                     </TableRow>
//                 )}
//             </TableBody>
//         </Table>
//     );
// }

import React from 'react'

const Payment = () =>{
    return(
        <h1>Payment</h1>
    )
}


export default Payment
