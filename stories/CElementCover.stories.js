import { boolean, select, text, withKnobs, number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import CElementCover from '../src/components/element-cover/CElementCover'
import CMedia from '../src/components/media/CMedia'
import CCard from '../src/components/card/CCard'
import CCardBody from '../src/components/card/CCardBody'
import CCol from '../src/components/grid/CCol'

storiesOf('CElementCover', module)
  .addDecorator(withKnobs)
  .add('single', () => {

    return {
      components: { CCol, CCard, CCardBody, CElementCover, CMedia },
      props: {
        opacity: {
          type: Number,
          default: number('Opacity', 0.4, {
            range: true,
            min: 0,
            max: 1,
            step: 0.05,
         })
        },
        center: {
          type: Boolean,
          default: boolean(
            'Center',
            true
          )
        },
      },
      template: `
      <CCol lg="12" xs="12"> 
        <CCard> 
          <CCardBody>
            <CMedia>
              <h5 class="mt-0">Media Title</h5>
              <p class="mb-0">
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </p>
            </CMedia>
            <CElementCover 
              :opacity.sync="opacity"
              :center.sync="center"
            />
          </CCardBody>
        </CCard>
      </CCol>
      `
    }
})