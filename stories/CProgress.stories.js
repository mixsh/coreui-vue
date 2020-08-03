
import { boolean, select, text, withKnobs, number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import CProgress from '../src/components/progress/CProgress'
import CProgressBar from '../src/components/progress/CProgressBar'

import CCard from '../src/components/card/CCard'
import CCardBody from '../src/components/card/CCardBody'
import CCol from '../src/components/grid/CCol'

storiesOf('CProgress', module)
  .addDecorator(withKnobs)
  .add('single', () => {

    return {
      components: { CCol, CCard, CCardBody, CProgress, CProgressBar },
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
          ], 'primary')
        },
        size:{
          type: String,
          default: select('Size', [
            undefined, 'xs', 'sm'
          ], 'xs')
        },
        striped:{
          type: Boolean,
          default: boolean('Striped', false)
        },
        animated:{
          type: Boolean,
          default: boolean('Animated', false)
        },
        precision:{
          type: Number,
          default: number('Precision', undefined, {})
        },
        showPercentage:{
          type: Boolean,
          default: boolean('ShowPercentage', false)
        },
        showValue:{
          type: Boolean,
          default: boolean('ShowValue', false)
        },
        max:{
          type: Number,
          default: number('Precision', 100, {})
        },
        value:{
          type: Number,
          default: number('Value', 60, {})
        }
      },
      template: `
      <CCol lg="12" xs="12"> 
        <CCard> 
          <CCardBody>
            <CProgress
              :color.sync="color"
              :size.sync="size"
              :striped.sync="striped"
              :animated.sync="animated"
              :precision.sync="precision"
              :showPercentage.sync="showPercentage"
              :showValue.sync="showValue"
              :max.sync="max"
              :value.sync="value"
            />
          </CCardBody>
        </CCard>
      </CCol>
      `
    }
})