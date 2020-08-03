
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import CNavbar from '../src/components/navbar/CNavbar'
import CNavbarBrand from '../src/components/navbar/CNavbarBrand'
import CNavbarNav from '../src/components/navbar/CNavbarNav'

import CNavItem from '../src/components/nav/CNavItem'

import CButton from '../src/components/button/CButton'

import CDropdown from '../src/components/dropdown/CDropdown'
import CDropdownItem from '../src/components/dropdown/CDropdownItem'

import CForm from '../src/components/form/CForm'
import CInput from '../src/components/form/CInput'

import CToggler from '../src/components/toggler/CToggler'
import CCollapse from '../src/components/collapse/CCollapse'


import CCard from '../src/components/card/CCard'
import CCardBody from '../src/components/card/CCardBody'
import CCol from '../src/components/grid/CCol'

storiesOf('CNavbar', module)
  .addDecorator(withKnobs)
  .add('single', () => {

    return {
      components: { 
        CCol, 
        CCard, 
        CCardBody, 
        CNavbar, 
        CToggler, 
        CNavbarBrand, 
        CNavbarNav, 
        CCollapse,
        CForm,
        CNavItem,
        CInput,
        CButton,
        CDropdown,
        CDropdownItem
      },
      props: {
        color: {
          type: String,
          default: select('Color', 
            [
              '',
              "primary",
              "secondary",
              "success",
              "warning",
              "danger",
              "info",
              "light",
              "dark",
            ], 
            'primary'
          )
        },
        light:{
          type: Boolean,
          default: boolean('Light', false)
        },
        expandable:{
          type: String,
          default: select(
            'Expandable',
            [false, true, 'sm', 'md', 'lg', 'xl'],
            false
          )
        },
        fixed:{
          type: String,
          default: select(
            'Fixed',
            [false,  'top', 'bottom'],
            false
          )
        },
        sticky:{
          type: Boolean,
          default: boolean('Sticky', true)
        },
      },
      template: `
      <CCol lg="12" xs="12"> 
        <CCard> 
          <CCardBody>
            <CNavbar 
              :color.sync="color"
              :light.sync="light"
              :expandable.sync="expandable"
              :fixed.sync="fixed"
              :sticky.sync="sticky"
            >
              <CToggler in-navbar @click="collapsed = !collapsed"/>
              <CNavbarBrand href="#">NavBar</CNavbarBrand>
              <CCollapse :show="collapsed" navbar>
                <CNavbarNav>
                  <CNavItem href="#">Link</CNavItem>
                  <CNavItem href="#" disabled>Disabled</CNavItem>
                </CNavbarNav>
          
                <!-- Right aligned nav items -->
                <CNavbarNav class="ml-auto">
                  <CForm inline>
                    <CInput
                      class="mr-sm-2"
                      placeholder="Search"
                      size="sm"
                    />
                    <CButton
                      color="secondary"
                      size="sm" 
                      class="my-2 my-sm-0" 
                      type="submit"
                    >
                      Search
                    </CButton>
                  </CForm>
          
                  <CDropdown
                    togglerText="Lang"
                    nav
                    placement="bottom-end"
                  >
                      <CDropdownItem>EN</CDropdownItem>
                      <CDropdownItem>ES</CDropdownItem>
                      <CDropdownItem>RU</CDropdownItem>
                      <CDropdownItem>FA</CDropdownItem>
                  </CDropdown>
          
                  <CDropdown
                    nav
                    togglerText="User"
                    placement="bottom-end"
                  >
                    <CDropdownItem>Profile</CDropdownItem>
                    <CDropdownItem>Signout</CDropdownItem>
                  </CDropdown>
                </CNavbarNav>
              </CCollapse>
            </CNavbar>
          </CCardBody>
        </CCard>
      </CCol>
      `
    }
})