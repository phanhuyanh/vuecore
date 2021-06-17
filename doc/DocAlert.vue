<template>
  <div class="doc-component doc doc-alert">
    <div class="doc-item doc-header">
      <h2>Alert</h2>
      <p>
        To provide an explanation of a ‘button/text/operation’. It’s often used
        instead of the html ‘title’ attribute.
      </p>
    </div>
    <div class="doc-item">
      <h2 id="title">title</h2>
      <p>You can set directive <code>title</code>.</p>
      <div class="show">
        <div class="show-code-icon">
          <IconCode :show.sync="showTitle"></IconCode>
        </div>
        <div class="demo">
          <vc-alert title="Some text is displayed here"></vc-alert>
          <br />
          <vc-alert
            type="success"
            title="Some text is displayed here"
          ></vc-alert>
          <br />
          <vc-alert
            type="error"
            title="Some text is disaplayed here"
          ></vc-alert>
          <br />
          <vc-alert
            type="warning"
            title="Some text is dispalyed here"
          ></vc-alert>
        </div>
        <pre :class="{ 'pre-show': showTitle }">
          <span class="pl-p"><</span>
          <span class="pl-t">vc-alert</span>
          <span class="pl-k">&nbsp;title</span>
          <span class="pl-o">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">Some text is displayed here</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-alert</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-alert</span>
          <span class="pl-k">&nbsp;type</span>
          <span class="pl-o">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">success</span>
          <span class="pl-p">"</span>
          <span class="pl-k">&nbsp;title</span>
          <span class="pl-o">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">Some text is displayed here</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-alert</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-alert</span>
          <span class="pl-k">&nbsp;type</span>
          <span class="pl-o">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">error</span>
          <span class="pl-p">"</span>
          <span class="pl-k">&nbsp;title</span>
          <span class="pl-o">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">Some text is displayed here</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-alert</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-alert</span>
          <span class="pl-k">&nbsp;type</span>
          <span class="pl-o">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">warning</span>
          <span class="pl-p">"</span>
          <span class="pl-k">&nbsp;title</span>
          <span class="pl-o">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">Some text is displayed here</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-alert</span>
          <span class="pl-p">></span>
        </pre>
      </div>
    </div>
    <div class="doc-item">
      <h2 id="Toggle">Toggle</h2>
      <p>You can set directive <code>active</code>.</p>
      <div class="show">
        <div class="show-code-icon">
          <IconCode :show.sync="showToggle"></IconCode>
        </div>
        <div class="demo">
          <div class="d-flex align-items-center justify-content-center">
            <vc-button @click.native="active = !active">Toggle</vc-button>
          </div>
          <br />
          <vc-alert title="Alert Header" v-model="active">
            <p>
              This is long text explaining about the <b>alert</b> and comes with
              a CTA, so user action can take an action. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Neque cum ipsam quos nesciunt
              optio quas vero dolore minima, incidunt ullam praesentium
              voluptatem asperiores fuga explicabo maxime velit eveniet.
              Reiciendis, optio? Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Officia excepturi eligendi explicabo pariatur
              odit sit facilis eius nulla, rerum cupiditate eveniet, vel eaque
              fugiat vitae delectus quisquam enim beatae! Aspernatur. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
              molestias reprehenderit dicta veritatis voluptates ea voluptatum
              quia aliquid quo fuga cum pariatur, modi corrupti, doloremque
              nulla consequatur, fugit beatae? Distinctio? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Aperiam voluptatum
              perspiciatis, dolorem aut illum suscipit fuga saepe minus
              incidunt, nesciunt omnis assumenda deleniti, laborum esse minima.
              At accusamus labore ex.
            </p>
          </vc-alert>
        </div>
        <pre :class="{ 'pre-show': showToggle }">
          <span class="pl-p"><</span>
          <span class="pl-t">vc-alert</span>
          <span class="pl-k">&nbsp;title</span>
          <span class="pl-o">=</span>
          <span calss="pl-p">"</span>
          <span class="pl-s">Alert Header</span>
          <span class="pl-p">"</span>
          <span class="pl-k">&nbsp;v-model</span>
          <span class="pl-o">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">active</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-tab-1 pl-p"><</span>
          <span class="pl-t">p</span>
          <span class="pl-p">></span>
          <br>
          <span class="text pl-tab-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed corrupti incidunt praesentium pariatur provident, quis consectetur. Minima tempore quod veritatis fugiat dolor aliquam. Nisi illo optio, aliquam unde rerum esse!
          </span>
          <br>
          <span class="pl-tab-1 pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">p</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-alert</span>
          <span class="pl-p">></span>
        </pre>
      </div>
    </div>
    <div class="doc-item">
      <h2 id="show-icon">Show Icon</h2>
      <p>Show/ Hide icon close. You can set directive <code>showIcon</code>.</p>
      <div class="show">
        <div class="show-code-icon">
          <IconCode :show.sync="showClosable"></IconCode>
        </div>
        <div class="demo">
          <vc-alert showIcon title="Some text is displayed here"></vc-alert>
          <br />
          <vc-alert
            showIcon
            type="success"
            title="Some text is displayed here"
          ></vc-alert>
          <br />
          <vc-alert
            showIcon
            type="error"
            title="Some text is displayed here"
          ></vc-alert>
          <br />
          <vc-alert
            showIcon
            type="warning"
            title="Some text is displayed here"
          ></vc-alert>
        </div>
        <pre :class="{ 'pre-show': showClosable }">
          <span class="pl-p"><</span>
          <span class="pl-t">vc-alert</span>
          <span class="pl-k">&nbsp;showIcon</span>
          <span class="pl-k">&nbsp;title</span>
          <span class="pl-o">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">Some text is displayed here</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-alert</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-alert</span>
          <span class="pl-k">&nbsp;showIcon</span>
          <span class="pl-k">&nbsp;type</span>
          <span class="pl-o">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">success</span>
          <span class="pl-p">"</span>
          <span class="pl-k">&nbsp;title</span>
          <span class="pl-o">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">Some text is displayed here</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-alert</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-alert</span>
          <span class="pl-k">&nbsp;showIcon</span>
          <span class="pl-k">&nbsp;type</span>
          <span class="pl-o">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">error</span>
          <span class="pl-p">"</span>
          <span class="pl-k">&nbsp;title</span>
          <span class="pl-o">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">Some text is displayed here</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-alert</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-alert</span>
          <span class="pl-k">&nbsp;showIcon</span>
          <span class="pl-k">&nbsp;type</span>
          <span class="pl-o">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">warning</span>
          <span class="pl-p">"</span>
          <span class="pl-k">&nbsp;title</span>
          <span class="pl-o">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">Some text is displayed here</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-alert</span>
          <span class="pl-p">></span>
        </pre>
      </div>
    </div>
    <div class="doc-item">
      <h2 id="customize">Customize</h2>
      <p>You can customize header. You can pass directive <code>slot</code>.</p>
      <div class="show">
        <div class="show-code-icon">
          <IconCode :show.sync="showCustom"></IconCode>
        </div>
        <div class="demo">
          <vc-alert type="success">
            <template v-slot:title>
              <div class="vc-alert-title">
                <span
                  aria-hidden="true"
                  class="d-flex align-items-center justify-content-center m-r-5"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.9987 0.833984C4.9362 0.833984 0.832031 4.93815 0.832031 10.0007C0.832031 15.0631 4.9362 19.1673 9.9987 19.1673C15.0612 19.1673 19.1654 15.0631 19.1654 10.0007C19.1654 4.93815 15.0612 0.833984 9.9987 0.833984ZM13.972 8.45065C14.0452 8.36702 14.1009 8.2696 14.1359 8.16412C14.1708 8.05865 14.1843 7.94725 14.1756 7.83647C14.1669 7.7257 14.1361 7.61779 14.085 7.51909C14.034 7.42039 13.9637 7.3329 13.8783 7.26177C13.793 7.19063 13.6942 7.13729 13.5879 7.10487C13.4817 7.07245 13.37 7.06162 13.2594 7.07301C13.1489 7.08439 13.0418 7.11777 12.9443 7.17118C12.8469 7.22458 12.7611 7.29694 12.692 7.38398L9.1087 11.6832L7.25453 9.82815C7.09736 9.67635 6.88686 9.59236 6.66836 9.59426C6.44987 9.59615 6.24086 9.68379 6.08635 9.8383C5.93184 9.99281 5.8442 10.2018 5.8423 10.4203C5.8404 10.6388 5.9244 10.8493 6.0762 11.0065L8.5762 13.5065C8.65808 13.5883 8.75611 13.6522 8.86404 13.694C8.97198 13.7359 9.08745 13.7548 9.20309 13.7495C9.31873 13.7443 9.43201 13.715 9.53571 13.6635C9.6394 13.6121 9.73124 13.5396 9.80536 13.4506L13.972 8.45065Z"
                      fill="#05a660"
                    />
                  </svg>
                </span>
                A success message appears to those who did well.
              </div>
            </template>
          </vc-alert>
        </div>
        <pre :class="{ 'pre-show': showCustom }">
          <span class="pl-p"><</span>
          <span class="pl-t">vc-alert</span>
          <span class="pl-k">&nbsp;type</span>
          <span class="pl-0">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">success</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p pl-tab-1"><</span>
          <span class="pl-t">template</span>
          <span class="pl-k">&nbsp;v-slot:title</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p pl-tab-2"><</span>
          <span class="pl-t">div</span>
          <span class="pl-k">&nbsp;class</span>
          <span class="pl-o">=</span>
          <span class="pl-p">"</span>
          <span clas="pl-s">vc-alert-title</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-tab-3 pl-p"><</span>
          <span class="pl-t">span</span>
          <span class="pl-k">&nbsp;aria-hidden</span>
          <span class="pl-o">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">true</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-tab-4 pl-p"><</span>
          <span class="pl-t">svg</span>
          <br>
          <span class="pl-tab-5 pl-k">width</span>
          <span class="pl-o">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">20</span>
          <span class="pl-p">"</span>
          <br>
          <span class="pl-tab-5 pl-k">height</span>
          <span class="pl-o">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">20</span>
          <span class="pl-p">"</span>
          <br>
          <span class="pl-tab-5 pl-k">viewBox</span>
          <span class="pl-o">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">0 0 20 20</span>
          <span class="pl-p">"</span>
          <br>
          <span class="pl-tab-5 pl-k">fill</span>
          <span class="pl-o">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">none</span>
          <span class="pl-p">"</span>
          <br>
          <span class="pl-tab-5 pl-k">xmlns</span>
          <span class="pl-o">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">http://www.w3.org/2000/svg</span>
          <span class="pl-p">"</span>
          <br>
          <span class="pl-p pl-tab-4">></span>
          <br>
          <span class="pl-tab-5 pl-p"><</span>
          <span class="pl-t">path</span>
          <br>
          <span class="pl-k pl-tab-6">fill-rule</span>
          <span class="pl-o">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">evenodd</span>
          <span class="pl-p">"</span>
          <br>
          <span class="pl-k pl-tab-6">clip-rule</span>
          <span class="pl-o">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">evenodd</span>
          <span class="pl-p">"</span>
          <br>
          <span class="pl-k pl-tab-6">d</span>
          <span class="pl-o">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">M9.9987 0.833984C4.9362 ... 0. 13.972 8.45065Z</span>
          <span class="pl-p">"</span>http://builder.localhost:5800/editor/v2/89ee6eb3-9fd2-493a-abcb-534096d1f766
          <br>
          <span class="pl-k pl-tab-6">fill</span>
          <span class="pl-o">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">currentColor</span>
          <span class="pl-p">"</span>
          <br>
          <span class="pl-tab-5 pl-p">/</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-tab-4 pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">svg</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-tab-3 pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">span</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-tab-3">A success appears to those who did well.</span>
          <br>
          <span class="pl-tab-2 pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">div</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-tab-1 pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">template</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-alert</span>
          <span class="pl-p">></span>
        </pre>
      </div>
    </div>
    <div class="doc-item">
      <h2 id="api">API</h2>
      <div class="doc-table">
        <table>
          <tr>
            <th>Property</th>
            <th>Description</th>
            <th>Type</th>
            <th>Default</th>
          </tr>
          <tr>
            <td class="pl-k">type</td>
            <td>
              Type of alert style.&nbsp;
              <span class="pl-v">info/ success/ error/ warning</span>.
            </td>
            <td class="pl-t">string</td>
            <td class="pl-s">info</td>
          </tr>
          <tr>
            <td class="pl-k">title</td>
            <td>Content header alert.</td>
            <td class="pl-t">string | slot</td>
            <td class="pl-s">slot</td>
          </tr>
          <tr>
            <td class="pl-k">showIcon</td>
            <td>Whether to show icon.</td>
            <td class="pl-t">boolean</td>
            <td class="pl-s">true</td>
          </tr>
          <tr>
            <td class="pl-k">v-model</td>
            <td>You can control show/hide of alert.</td>
            <td class="pl-t">boolean</td>
            <td class="pl-s">_</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import IconCode from "./IconCode.vue";

export default {
  components: {
    IconCode
  },
  data: () => {
    return {
      active: true,
      showTitle: false,
      showToggle: false,
      showClosable: false,
      showCustom: false
    };
  }
};
</script>
