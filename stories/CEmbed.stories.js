
import { boolean, select, text, withKnobs, number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import CEmbed from '../src/components/embed/CEmbed'
import CCard from '../src/components/card/CCard'
import CCardBody from '../src/components/card/CCardBody'
import CCol from '../src/components/grid/CCol'

storiesOf('CEmbed', module)
  .addDecorator(withKnobs)
  .add('single', () => {

    return {
      components: { CCol, CCard, CCardBody, CEmbed },
      props: {
        tag: {
          type: String,
          default: text(
            'Tag',
            'div'
          )
        },
        ratio: {
          type: String,
          default: select(
            'Ratio',
            ['21by9', '16by9', '4by3', '1by1'],
            '16by9',
          )
        },
        type: {
          type: String,
          default: select(
            'Type',
            ['iframe', 'embed', 'video', 'object', 'img'],
            'iframe'
          )
        },
        src: {
          type: String,
          default: text(
            'Src',
            'https://www.youtube.com/embed/kS2rLOF5has'
          )
        },
        allow: {
          type: String,
          default: text(
            'Allow',
            'accelerometer;autoplay; encrypted-media; gyroscope; picture-in-picture'
          )
        },
        frameborder: {
          type: Number,
          default: number(
            'Frameborder',
            0
          )
        }
      },
      template: `
      <CCol lg="12" xs="12"> 
        <CCard> 
          <CCardBody>
            <CEmbed
              :tag.sync="tag"
              :ratio.sync="ratio"
              :type.sync="type"
              :src.sync="src"
              :frameborder.sync="frameborder"
              :allow.sync="allow"
            />
          </CCardBody>
        </CCard>
      </CCol>
      `
    }
})