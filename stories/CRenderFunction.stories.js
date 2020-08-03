
/*

import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import CRenderFunction from '../src/components/render-function/CRenderFunction'

import CAlert from '../src/components/alert/CAlert'
import CButton from '../src/components/button/CButton'
import CBadge from '../src/components/badge/CBadge'


import CCard from '../src/components/card/CCard'
import CCardBody from '../src/components/card/CCardBody'
import CCol from '../src/components/grid/CCol'



storiesOf('CRenderFunction', module)
  .addDecorator(withKnobs)
  .add('single', () => {

    return {
      components: { CCol, CCard, CCardBody, CRenderFunction, CAlert, CButton, CBadge },
      data () {
        return {
          counter: 0
        }
      },
      props: {
        renderFunction: [
            'CAlert', 
            { props: { color: 'success' } }, 
            [
              [
                'CButton', 
                {
                  props: { color: 'primary' }
                }, 
              ], 
              [
                'CButton', 
                { props: { color: 'warning' }}, 
                [{ slot: 'named-slot' }] 
              ],
            ]
          ]
      },
      //props: {
      //
      //},
      template: `
      <CCol lg="12" xs="12"> 
        <CCard> 
          <CCardBody>
            <CRenderFunction :contentToRender="renderFunction">
              <template #named-slot>
                Element rendered by<CBadge class="ml-2" color="success">NAMED SLOT</CBadge>
              </template>
            </CRenderFunction>
          </CCardBody>
        </CCard>
      </CCol>
      `
    }
})

*/