import React from 'react';
import {

    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow
  } from '@coreui/react'

import entranceData from '../../users/EntranceData';
  
const fields = ['licensePlateNumber', 'date','entranceTime']

/**
 * @author
 * @function Entrance
 **/
 const Entrance = (props) =>{
     return(
        <>
           <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <h2>Entrance Records</h2>
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={entranceData}
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

 export default Entrance;