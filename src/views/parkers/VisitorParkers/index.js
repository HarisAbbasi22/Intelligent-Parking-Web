import React from 'react';
import {

    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow
  } from '@coreui/react'
  import { DocsLink } from 'src/reusable'
  
  import usersData from '../../users/UsersData'
  
  const fields = ['name','licensePlateNumber', 'date','parkingDuration', 'parkingFees']
  
/**
 * @author
 * @function VisitorParkers
 **/
 const VisitorParkers = (props) =>{
    return(
        
<>
           <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <h2>Visitor Parkers List</h2>
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={usersData}
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
      

    

 export default VisitorParkers;