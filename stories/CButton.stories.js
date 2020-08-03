
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import CButton from '../src/components/button/CButton'
import CCard from '../src/components/card/CCard'
import CCardBody from '../src/components/card/CCardBody'
import CCol from '../src/components/grid/CCol'

storiesOf('CButton', module)
  .addDecorator(withKnobs)
  .add('single', () => {

    return {
      components: { CCol, CCard, CCardBody, CButton },
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
        block: {
          type: Boolean,
          default: boolean(
            'Block'
          )
        },
        shape: {
          type: String,
          default: select('Shape',
          [
            '',
            'square', 
            'pill'
          ],
          '',
          'Other')
        },
        variant: {
          type: String,
          default: select('Variant',
          [
            '',
            'ghost', 
            'outline'
          ],
          '',
          'Other')
        },
        size: {
          type: String,
          default: select('Size',
          [
            '',
            'sm', 
            'lg'
          ],
          '',
          'Other')
        },
        type: {
          type: String,
          default: select('Type',
            [
              '',
              'button'
            ],
            '',
            'Other')
        },
        pressed: {
          type: Boolean,
          default: boolean('Pressed')
        }
      },
      template: `
      <CCol lg="12" xs="12"> 
        <CCard> 
          <CCardBody>
            <CButton 
              :color.sync="color"
              :block.sync="block"
              :shape.sync="shape"
              :variant.sync="variant"
              :size.sync="size"
              :type.sync="type"
              :pressed.sync="pressed"
            >
              Lorem ipsum
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
      `
    }
}).add('show', () => {
    return {
      components: { CCol, CCard, CCardBody, CButton },
      template: `
      <CCol lg="12" xs="12"> 
        <CCard> 
          <CCardBody>
          <div>
          <h4>Sizes:</h4>
          <template v-for="(size, rowKey) in ['sm', '', 'lg']">
            <CRow :key="rowKey + 'sizes'" class="d-flex justify-content-between">
              <template v-for="(color, key) in ['success', 'primary', 'info', 'warning', 'danger']">
                <CButton
                  :key="color + size"
                  :color="color"
                  :size="size"
                  class="m-2"
                >
                  {{color}}
                </CButton>
              </template>
            </CRow>
          </template>
          <h4>Styles:</h4>
          <template v-for="(prop, rowKey) in
            [{ shape: 'square' }, { shape: 'pill' }, { variant: 'ghost' }, { variant: 'outline' }]">
            <CRow :key="rowKey + 'styles'" class="d-flex justify-content-between">
              <template v-for="(color, key) in ['success', 'primary', 'info', 'warning', 'danger']">
                <CButton
                  :key="color"
                  :color="color"
                  v-bind="prop"
                  class="m-2"
                >
                  {{color}}
                </CButton>
              </template>
            </CRow>
          </template>
        </div>
          </CCardBody>
        </CCard>
      </CCol>
      `
    }
})