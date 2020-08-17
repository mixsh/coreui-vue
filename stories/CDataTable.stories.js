
import { boolean, select, text, object, withKnobs, number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import CDataTable from '../src/components/table/CDataTable'
import CBadge from '../src/components/badge/CBadge'
import CButton from '../src/components/button/CButton'
import CCollapse from '../src/components/collapse/CCollapse'
import CMedia from '../src/components/media/CMedia'

import CIcon from '@coreui/icons-vue/src/CIcon'

import CCard from '../src/components/card/CCard'
import CCardBody from '../src/components/card/CCardBody'
import CCol from '../src/components/grid/CCol'

storiesOf('CDataTable', module)
  .addDecorator(withKnobs)
  .add('single', () => {

    const items = [
      { username: 'Samppa Nori', registered: '2012/01/01', role: 'Member', status: 'Active'},
      { username: 'Estavan Lykos', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
      { username: 'Chetan Mohamed', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
      { username: 'Derick Maximinus', registered: '2012/03/01', role: 'Member', status: 'Pending'},
      { username: 'Friderik Dávid', registered: '2012/01/21', role: 'Staff', status: 'Active'},
      { username: 'Yiorgos Avraamu', registered: '2012/01/01', role: 'Member', status: 'Active'},
      { username: 'Avram Tarasios', registered: '2012/02/01', role: 'Staff', status: 'Banned', _classes: 'table-success'},
      { username: 'Quintin Ed', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
      { username: 'Enéas Kwadwo', registered: '2012/03/01', role: 'Member', status: 'Pending'},
      { username: 'Agapetus Tadeáš', registered: '2012/01/21', role: 'Staff', status: 'Active'},
      { username: 'Carwyn Fachtna', registered: '2012/01/01', role: 'Member', status: 'Active', _classes: 'table-info'},
      { username: 'Nehemiah Tatius', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
      { username: 'Ebbe Gemariah', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
      { username: 'Eustorgios Amulius', registered: '2012/03/01', role: 'Member', status: 'Pending'},
      { username: 'Leopold Gáspár', registered: '2012/01/21', role: 'Staff', status: 'Active'},
      { username: 'Pompeius René', registered: '2012/01/01', role: 'Member', status: 'Active'},
      { username: 'Paĉjo Jadon', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
      { username: 'Micheal Mercurius', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
      { username: 'Ganesha Dubhghall', registered: '2012/03/01', role: 'Member', status: 'Pending'},
      { username: 'Hiroto Šimun', registered: '2012/01/21', role: 'Staff', status: 'Active'},
      { username: 'Vishnu Serghei', registered: '2012/01/01', role: 'Member', status: 'Active'},
      { username: 'Zbyněk Phoibos', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
      { username: 'Einar Randall', registered: '2012/02/01', role: 'Admin', status: 'Inactive', _classes: 'table-danger'},
      { username: 'Félix Troels', registered: '2012/03/21', role: 'Staff', status: 'Active'},
      { username: 'Aulus Agmundr', registered: '2012/01/01', role: 'Member', status: 'Pending'}
    ]


    return {
      components: { CCol, CCard, CCardBody, CDataTable, CBadge, CButton, CCollapse, CMedia, CIcon },
      data: function(){
        return {
          items: items.map((item, id) => { return {...item, id}}),
          fields: [
            { key: 'username', _style:'min-width:200px' },
            'registered',
            { key: 'role', _style:'min-width:100px;' },
            { key: 'status', _style:'min-width:100px;' },
            { 
              key: 'show_details', 
              label: '', 
              _style: 'width:1%', 
              sorter: false, 
              filter: false
            }
          ]
        }
      },
      methods: {
        getBadge (status) {
          switch (status) {
            case 'Active': return 'success'
            case 'Inactive': return 'secondary'
            case 'Pending': return 'warning'
            case 'Banned': return 'danger'
            default: 'primary'
          }
        },
        toggleDetails (item) {
          this.$set(this.items[item.id], '_toggled', !item._toggled)
          this.collapseDuration = 300
          this.$nextTick(() => { this.collapseDuration = 0})
        }
      },
      props: {
        itemsPerPage: {
          type: Number,
          default: number('ItemsPerPage', 10)
        },
        activePage: {
          type: Number,
          default: number('ActivePage', 1)
        },
        pagination: {
          type: Boolean,
          default: boolean('Pagination', false)
        },
        dark: {
          type: Boolean,
          default: boolean('Dark', false, 'Style')
        },
        striped: {
          type: Boolean,
          default: boolean('Striped', false, 'Style')
        },
        hover: {
          type: Boolean,
          default: boolean('Hover', false, 'Style')
        },
        border: {
          type: Boolean,
          default: boolean('Border', false, 'Style')
        },
        outlined: {
          type: Boolean,
          default: boolean('Outlined', false, 'Style')
        },
        size: {
          type: String,
          default: select('Size', [undefined, 'sm'], undefined, 'Style')
        },
        itemsPerPageSelect: {
          type: Boolean,
          default: boolean('ItemsPerPageSelect', false)
        },
        columnFilter: {
          type: Boolean,
          default: boolean('ColumnFilter', false)
        },
        sorter: {
          type: Boolean,
          default: boolean('Sorter', false)
        },
        tableFilter: {
          type: Boolean,
          default: boolean('TableFilter', false)
        },
        cleaner: {
          type: Boolean,
          default: boolean('Cleaner', false)
        },
        tableFilterValue: {
          type: String,
          default: text('TableFilterValue', '')
        },
        header: {
          type: Boolean,
          default: boolean('Header', false, 'Style')
        },
        footer: {
          type: Boolean,
          default: boolean('Footer', false, 'Style')
        },
        loading: {
          type: Boolean,
          default: boolean('Loading', false)
        },
        clickableRows: {
          type: Boolean,
          default: boolean('ClickableRows', false)
        },
        addTableClasses: {
          type: String,
          default: text('AddTableClasses', '', 'Style')
        },
        responsive: {
          type: Boolean,
          default: boolean('Responsive', false, 'Style')
        }
      },
      template: `
      <CCol lg="12" xs="12"> 
        <CCard> 
          <CCardBody>
            <CDataTable
              :items="items"
              :fields="fields"
              :pagination="pagination"
              :dark="dark"
              :striped="striped"
              :hover="hover"
              :border="border"
              :outlined="outlined"
              :size="size"
              :itemsPerPageSelect="itemsPerPageSelect"
              :columnFilter="columnFilter"
              :sorter="sorter"
              :tableFilter="tableFilter"
              :cleaner="cleaner"
              :tableFilterValue="tableFilterValue"
              :header="header"
              :footer="footer"
              :loading="loading"
              :clickableRows="clickableRows"
              :addTableClasses="addTableClasses"
              :responsive="responsive"
            >
              <template #status="{item}">
                <td>
                  <CBadge :color="getBadge(item.status)">
                    {{item.status}}
                  </CBadge>
                </td>
              </template>
              <template #show_details="{item, index}">
                <td class="py-2">
                  <CButton
                    color="primary"
                    variant="outline"
                    square
                    size="sm"
                    @click="toggleDetails(item, index)"
                  >
                    {{Boolean(item._toggled) ? 'Hide' : 'Show'}}
                  </CButton>
                </td>
              </template>
              <template #details="{item}">
                <CCollapse :show="Boolean(item._toggled)" :duration="collapseDuration">
                  <CCardBody>
                    <CMedia :aside-image-props="{ height: 102 }">
                      <h4>
                        {{item.username}}
                      </h4>
                      <p class="text-muted">User since: {{item.registered}}</p>
                      <CButton size="sm" color="info" class="">
                        User Settings
                      </CButton>
                      <CButton size="sm" color="danger" class="ml-1">
                        Delete
                      </CButton>
                    </CMedia>
                  </CCardBody>
                </CCollapse>
              </template>

            </CDataTable>

          </CCardBody>
        </CCard>
      </CCol>
      `
    }
})