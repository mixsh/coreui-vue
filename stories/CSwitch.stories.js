
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import CSwitch from '../src/components/switch/CSwitch'

import CCard from '../src/components/card/CCard'
import CCardBody from '../src/components/card/CCardBody'
import CCol from '../src/components/grid/CCol'

storiesOf('CSwitch', module)
  .addDecorator(withKnobs)
  .add('single', () => {

    return {
      components: { CCol, CCard, CCardBody, CSwitch },
      props: {
        color: {
          type: String,
          default: select('Color', [
            '',
            "primary",
            "secondary",
            "success",
            "warning",
            "danger",
            "info",
            "light",
            "dark",
          ], '')
        },
        variant: {
          type: String,
          default: select(
            'Variant',
            [ undefined, 'outline', 'opposite', '3d'],
            undefined
          )
        },
        size: {
          type: String,
          default: select(
            'Size',
            [ undefined, 'sm', 'lg'],
            undefined
          )
        },
        shape: {
          type: String,
          default: select(
            'Shape',
            [ undefined, 'square','pill'],
            undefined
          )
        },
        checked: {
          type: Boolean,
          default: boolean('Checked', false)
        },
        labelOn: {
          type: String,
          default: text('LabelOn', ''),
        },
        labelOff: {
          type: String,
          default: text('LabelOff', ''),
        },
        type:{
          type: String,
          default: select(
            'Type',
            [  'checkbox', 'radio'],
            'checkbox'
          )
        },
        disabled:{
          type: Boolean,
          default: boolean('Disabled', false)
        }
      },
      template: `
      <CCol lg="12" xs="12"> 
        <CCard> 
          <CCardBody>
            <CSwitch 
              :color.sync="color"
              :variant.sync="variant"
              :size.sync="size"
              :shape.sync="shape"
              :checked.sync="checked"
              :labelOn.sync="labelOn"
              :labelOff.sync="labelOff"
              :type.sync="type"
              :disabled.sync="disabled"
            />
          </CCardBody>
        </CCard>
      </CCol>
      `
    }
})