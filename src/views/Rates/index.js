import React from 'react';
import {
    CDropdown,
    CDropdownToggle,
    CDropdownMenu,
    CDropdownItem,
    CWidgetDropdown,
    CRow
 
  } from '@coreui/react'
 import CIcon from '@coreui/icons-react'


/**
 * @author
 * @function Rates
 **/
 const Rates = (props) =>{
    return (
        <>
        <CRow>
        <h2>Rate per hour for Visitor Parkers</h2>
        </CRow>
       
        <div className={'row mt-3'}>
          <div className={'col-5'}>
            <CWidgetDropdown
              color="gradient-primary"
              header="Rate per hour"
              text= "$5"
              footerSlot={
                <div
                  className={'text-center'}
                  style={{ height: '100px',
                width:'90px' }}
                >
                
                </div>
              }
            >
              <CDropdown>
                <CDropdownToggle color="transparent">
                  <CIcon name={'cilSettings'} size={'md'}/>
                </CDropdownToggle>
                <CDropdownMenu className="p-0" placement="bottom-end">
                  <CDropdownItem>Add new rate</CDropdownItem>
                  <CDropdownItem>Update rate</CDropdownItem>
                  <CDropdownItem>Delete rate</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CWidgetDropdown>
          </div>
        </div>
        <CRow>
        <h2>Packages Rates for Season Parkers</h2>
        </CRow>
        <div className={'row mt-3'}>
          <div className={'col-5'}>
            <CWidgetDropdown
              color="gradient-primary"
              header="1 Month Package"
              text= "$100"
              footerSlot={
                <div
                  className={'text-center'}
                  style={{ height: '100px',
                width:'90px' }}
                >
                
                </div>
              }
            >
              <CDropdown>
                <CDropdownToggle color="transparent">
                  <CIcon name={'cilSettings'} size={'md'}/>
                </CDropdownToggle>
                <CDropdownMenu className="p-0" placement="bottom-end">
                  <CDropdownItem>Add new rate</CDropdownItem>
                  <CDropdownItem>Update rate</CDropdownItem>
                  <CDropdownItem>Delete rate</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CWidgetDropdown>
          </div>
        </div>
        <div className={'row mt-3'}>
          <div className={'col-5'}>
            <CWidgetDropdown
              color="gradient-primary"
              header="3 Months Package"
              text= "$300"
              footerSlot={
                <div
                  className={'text-center'}
                  style={{ height: '100px',
                width:'90px' }}
                >
                
                </div>
              }
            >
              <CDropdown>
                <CDropdownToggle color="transparent">
                  <CIcon name={'cilSettings'} size={'md'}/>
                </CDropdownToggle>
                <CDropdownMenu className="p-0" placement="bottom-end">
                  <CDropdownItem>Add new rate</CDropdownItem>
                  <CDropdownItem>Update rate</CDropdownItem>
                  <CDropdownItem>Delete rate</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CWidgetDropdown>
          </div>
        </div>
        <div className={'row mt-3'}>
          <div className={'col-5'}>
            <CWidgetDropdown
              color="gradient-primary"
              header="6 Months Package"
              text= "$600"
              footerSlot={
                <div
                  className={'text-center'}
                  style={{ height: '100px',
                width:'90px' }}
                >
                
                </div>
              }
            >
              <CDropdown>
                <CDropdownToggle color="transparent">
                  <CIcon name={'cilSettings'} size={'md'}/>
                </CDropdownToggle>
                <CDropdownMenu className="p-0" placement="bottom-end">
                  <CDropdownItem>Add new rate</CDropdownItem>
                  <CDropdownItem>Update rate</CDropdownItem>
                  <CDropdownItem>Delete rate</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CWidgetDropdown>
          </div>
        </div>
        <div className={'row mt-3'}>
          <div className={'col-5'}>
            <CWidgetDropdown
              color="gradient-primary"
              header="1 Year Package"
              text= "$1200"
              footerSlot={
                <div
                  className={'text-center'}
                  style={{ height: '100px',
                width:'90px' }}
                >
                
                </div>
              }
            >
              <CDropdown>
                <CDropdownToggle color="transparent">
                  <CIcon name={'cilSettings'} size={'md'}/>
                </CDropdownToggle>
                <CDropdownMenu className="p-0" placement="bottom-end">
                  <CDropdownItem>Add new rate</CDropdownItem>
                  <CDropdownItem>Update rate</CDropdownItem>
                  <CDropdownItem>Delete rate</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CWidgetDropdown>
          </div>
        </div>
        </>
      )
   
    
 }

 export default Rates;