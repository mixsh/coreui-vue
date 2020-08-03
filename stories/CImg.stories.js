import { boolean, select, text, number, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import CImg from '../src/components/image/CImg'
import CCard from '../src/components/card/CCard'
import CCardBody from '../src/components/card/CCardBody'
import CCol from '../src/components/grid/CCol'

storiesOf('CImg', module)
  .addDecorator(withKnobs)
  .add('single', () => {

    return {
      components: { CCol, CCard, CCardBody, CImg },
      props: {
        src: {
          type: String,
          default: text('src', 'https://picsum.photos/1024/480/?image=54'),
        },
        alt:{
          type: String,
          default: text('src', ''),
        },
        width:{
          type: Number,
          default: number('Width', 900)
        },
        height:{
          type: Number,
          default: number('Height', 450)
        },
        block: {
          type: Boolean,
          default: boolean('Block', false)
        },
        fluid: {
          type: Boolean,
          default: boolean('fluid', false)
        },
        fluidGrow: {
          type: Boolean,
          default: boolean('FluidGrow', false)
        },
        shape:{
          type: String,
          default: select('Shape', 
            [
              false,   
              'rounded',
              'rounded-top',
              'rounded-right',
              'rounded-bottom',
              'rounded-left',
              'rounded-circle'
            ],
            false
          )
        },
        thumbnail:{
          type: Boolean,
          default: boolean('Thumbnail', false)
        },
        align: {
          type: String,
          default: select('Align',
            [
              undefined, 'left', 'center', 'right'
            ],
            undefined
          )
        },
        placeholderColor:{
          type: String,
          default: text('PlaceholderColor', 'transparent')
        }
      },
      template: `
      <CCol lg="12" xs="12"> 
        <CCard> 
          <CCardBody>
            <CImg 
              :src.sync="src"
              :alt.sync="alt"
              :width.sync="width"
              :height.sync="height"
              :block.sync="block"
              :fluid.sync="fluid"
              :fluidGrow.sync="fluidGrow"
              :shape.sync="shape"
              :thumbnail.sync="thumbnail"
              :align.sync="align"
              :placeholderColor.sync="placeholderColor"
            />
          </CCardBody>
        </CCard>
      </CCol>
      `
    }
})