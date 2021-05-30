import React from 'react';
import {

    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow
  } from '@coreui/react'


import exitData from '../../users/ExitData';
  
const fields = ['licensePlateNumber', 'date','exitTime']
/**
 * @author
 * @function Exit
 **/
 const Exit = (props) =>{
     return(
        <>
        <CRow>
     <CCol>
       <CCard>
         <CCardHeader>
           <h2>Exit
              Records</h2>
         </CCardHeader>
         <CCardBody>
         <CDataTable
           items={exitData}
           fields={fields}
           dark
           hover
           striped
           bordered
           size="sm"
           itemsPerPage={10}
           pagination
         />
         </CCardBody>
       </CCard>
     </CCol>
   </CRow>
 </>

     )
 }

 export default Exit;