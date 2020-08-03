import { boolean, select, text, number, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import CCarousel from '../src/components/carousel/CCarousel'
import CCarouselItem from '../src/components/carousel/CCarouselItem'
import CCard from '../src/components/card/CCard'
import CCardBody from '../src/components/card/CCardBody'
import CCol from '../src/components/grid/CCol'

storiesOf('CCarousel', module)
  .addDecorator(withKnobs)
  .add('single', () => {

    return {
      components: { CCol, CCard, CCardBody, CCarousel, CCarouselItem },
      props: {
        interval: {
          type: Number,
          default: number('Interval', 1500, {})
        },
        animate: {
          type: Boolean,
          default: boolean('Animate', true)
        },
        indicators: {
          type: Boolean,
          default: boolean('Indicators', false)
        },
        arrows: {
          type: Boolean,
          default: boolean('Arrows', false)
        },
        indicatorClasses: {
          type: String,
          default: text('IndicatorClasses', 'carousel-indicators')
        },
        height: {
          type: Number,
          default: number('Height', undefined, {})
        },
        captionHeaderOne: {
          type: String,
          default: text('CaptionHeaderOne', 'One One One')
        },
        captionTextOne: {
          type: String,
          default: text('CaptionTextOne', 'Lorem ipsum dolor cet emit ipsum rolod merol tec timi')
        },
        captionHeaderTwo: {
          type: String,
          default: text('CaptionHeaderTwo', 'Two Two Two')
        },
        captionTextTwo: {
          type: String,
          default: text('CaptionTextTwo', 'Ipsum rolod merol tec timi. Lorem, ipsum dolor cet emit.')
        },
        captionHeaderThree: {
          type: String,
          default: text('CaptionHeaderThree', 'Three Three Three')
        },
        captionTextThree: {
          type: String,
          default: text('CaptionTextThree', 'Tec timi ipsum dolor, cet emit ipsum rolod merol tec timi. Lorem ipsum dolor cet emit.')
        }
      },
      template: `
      <CCol lg="12" xs="12"> 
        <CCard> 
          <CCardBody>
            <CCarousel
              :interval.sync="interval"
              :animate.sync="animate"
              :indicators.sync="indicators"
              :arrows.sync="arrows"
              :indicatorClasses.sync="indicatorClasses"
              :height.sync="height"
            >
              <CCarouselItem
                :captionHeader.sync="captionHeaderOne"
                :captionText.sync="captionTextOne"
                :image="{ placeholderColor: 'grey' }"
              />
              <CCarouselItem
                :captionHeader.sync="captionHeaderTwo"
                :image="{ placeholderColor: 'grey' }"
                :captionText.sync="captionTextTwo"
              />
              <CCarouselItem
                :captionHeader.sync="captionHeaderThree"
                :image="{ placeholderColor: 'grey' }"
                :captionText.sync="captionTextThree"
              />
            </CCarousel>
          </CCardBody>
        </CCard>
      </CCol>
      `
    }
})