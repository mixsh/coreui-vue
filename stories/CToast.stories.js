
import { boolean, select, text, number, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import CToast from '../src/components/toast/CToast'
import CToaster from '../src/components/toast/CToaster'
import CButton from '../src/components/button/CButton'

import CCard from '../src/components/card/CCard'
import CCardBody from '../src/components/card/CCardBody'
import CCol from '../src/components/grid/CCol'

storiesOf('CToast', module)
  .addDecorator(withKnobs)
  .add('single', () => {

    return {
      components: { CCol, CCard, CCardBody, CToast, CToaster, CButton },
      props: {
        color: {
          type: String,
          default: select('Color', [
            "primary",
            "secondary",
            "success",
            "warning",
            "danger",
            "info",
            "light",
            "dark",
          ], 'primary', 'Other')
        },
        autohide: {
          type: Number,
          default: number('Autohide', undefined, {})
        },
        closeButton:{
          type: Boolean,
          default: boolean('CloseButton', true)
        },
        fade:{
          type: Boolean,
          default: boolean('Fade', true)
        },
        position:{
          type: String,
          default: select(
            'Position',
            ['static', 'top-right', 'top-center', 'top-left', 'top-full', 'bottom-right', 'bottom-center', 'bottom-left', 'bottom-full'],
            'top-right'
          )
        },
        show: {  //use just :show="true"
          type: Boolean,
          default: boolean('Show', true)
        },
        header: {
          type: String,
          default: text('Header', undefined)
        }
      },
      data () {
        return {
          fixedToasts: 0
        }
      },
      methods: {
        addFixedToast () {
          this.fixedToasts++
        }
      },
      template: `
      <CCol lg="12" xs="12"> 
        <CCard> 
          <CCardBody>
            <CButton 
              color="primary" 
              @click="addFixedToast"
            >
              click to add fixed toast!
            </CButton>
            <CToaster 
              :autohide="autohide"
              :closeButton="closeButton"
              :fade="fade"
              :position="position"
            >
              <template v-for="toast in fixedToasts">
                <CToast
                  :key="'toast' + toast"
                  :show.sync="show"
                  :header="header"
                >
                  Hello, world! This is a <b>toast</b> number {{toast}}.
                </CToast>
              </template>
            </CToaster>
          </CCardBody>
        </CCard>
      </CCol>
      `
    }
})