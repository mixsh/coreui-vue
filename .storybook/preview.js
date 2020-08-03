//import Vue from 'vue';
import { addDecorator } from '@storybook/vue';
import '../node_modules/@coreui/coreui/dist/css/coreui.min.css';
import CRow from '../src/components/grid/CRow'
import CContainer from '../src/components/grid/CContainer'
import CCol from '../src/components/grid/CCol'
import CCard from '../src/components/card/CCard'
//@import '~@coreui/icons/css/all.css';

addDecorator(() => ({
  components: { CCol, CCard, CContainer, CRow },
  template: `
    <CContainer fluid>
      <CRow>
        <CCol lg="12" xs="12">
          <CCard>
              <h1 class="ml-3">CoreUI</h1>
          </CCard>
        </CCol>
        <story/>
      </CRow>
    </CContainer>
  `,
}));
