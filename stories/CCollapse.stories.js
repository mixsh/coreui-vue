
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import CCollapse from '../src/components/collapse/CCollapse'
import CCard from '../src/components/card/CCard'
import CCardBody from '../src/components/card/CCardBody'
import CButton from '../src/components/button/CButton'
import CCol from '../src/components/grid/CCol'

storiesOf('CCollapse', module)
  .addDecorator(withKnobs)
  .add('single', () => {

    return {
      components: { CCol, CCard, CCardBody, CCollapse, CButton },
      data: function(){
        return {
          collapse: false,
        }
      },
      props: {

      },
      template: `
      <CCol lg="12" xs="12"> 
        <CCard> 
          <CCardBody>
            <CButton 
              @click="collapse = !collapse" 
              color="primary"
            >
              Toggle Collapse
            </CButton>
            <CCollapse 
              :show="collapse"
              class="mt-3"
            >
              Lorem ipsum dolor cet emit.
            </CCollapse>
          </CCardBody>
        </CCard>
      </CCol>
      `
    }
})