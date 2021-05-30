import React from 'react';
import {

    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow
  } from '@coreui/react'
  

  import seasonparkersdata from '../../users/SeasonParkersData'
  
  const fields = ['name','licensePlateNumber', 'parkingPackage']

/**
 * @author
 * @function SeasonParkers
 **/
 const SeasonParkers = (props) =>{
     return(
        <>
        <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <h2>Season Parkers List</h2>
              
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={seasonparkersdata}
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

 export default SeasonParkers;